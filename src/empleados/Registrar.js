import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Registrar() {

    let navegacion = useNavigate();

    localStorage.setItem('token','');
    
    const vaciarCarrito = async () => {
      // const urlBase = "http://localhost:3001/api/v1/products";
      let productosEnCarrito = localStorage.getItem("productos-en-carrito");
      productosEnCarrito = JSON.parse(productosEnCarrito);
      
      productosEnCarrito.length = 0;
      localStorage.setItem(
        "productos-en-carrito",
        JSON.stringify(productosEnCarrito)
      );
      
      //
      
      let productosEnCarritoo = localStorage.getItem("pedido");
      productosEnCarritoo = JSON.parse(productosEnCarritoo);
      
      productosEnCarritoo.length = 0;
      localStorage.setItem("pedido", JSON.stringify(productosEnCarritoo));
      
      // await axios.delete(`${urlBase}/${id}`);
      //    localStorage.clear();
      // alert("Carrito eliminado correctamente");
      // cargarProductos();
      // navegacion("/");
    };
    vaciarCarrito();

    const [usuario, setUsuario] = useState({
        name:"",
        email:"",
        password:"",
        phone:""

    })
    const {name, email, password, phone} = usuario

    const onInputChange = (e) => {
        // spreed  operador ...
        setUsuario({...usuario,[e.target.name]:e.target.value })
    }


    const onSubmint = async (e) => {
        // para evitar que los parametros se pongan en el url
        e.preventDefault()

        const urlBase = "http://localhost:3001/api/v1/users/register";
        const {data} = await axios.post(urlBase,usuario);
        // localStorage.setItem("token",data.token);
        console.log("console " + data)

        // fetch(urlBase)
        // .then(response => response.json())
        // .then(data => localStorage.setItem("token",data.token))
        // .catch(error => console.log(error));
        alert(data)
        if(data === 'usuario registrado correctamente'){
            navegacion('/acceder');
        }

    }


  return (
    <div className="container">

<h1 className="container text-center" style={{ margin: "30px" }}>Registrarse</h1>
     
        <form onSubmit={(e) => onSubmint(e)}>

        <div class="mb-3">
            <label htmlFor="name" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              required={true}
              onChange={(e)=>onInputChange(e)} value={name}
            />
            {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
          </div>

          <div class="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              required={true}
              aria-describedby="emailHelp"
              placeholder="ejemplo@mail.com"
              onChange={(e)=>onInputChange(e)} value={email}
            />
            {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
          </div>
          <div class="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
              name="password"
              required={true}
              onChange={(e)=>onInputChange(e)} value={password}
            />
          </div>

          <div class="mb-3">
            <label htmlFor="phone" className="form-label">
              Numero telefonico
            </label>
            <input
              type="number"
              className="form-control"
              id="phone"
              name="phone"
              required={true}
              onChange={(e)=>onInputChange(e)} value={phone}
            />
            {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
          </div>

          {/* <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div> */}
          <button type="submit" class="btn btn-primary btn-sm me-3">
            Enviar
          </button>
          <a href='/' className='btn btn-danger btn-sm' >Regresar</a>
        </form>
    </div>
  )
}
