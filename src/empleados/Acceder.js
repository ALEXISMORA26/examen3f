import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Acceder() {

    

    let navegacion = useNavigate();

    const [usuario, setUsuario] = useState({
        email:"",
        password:""
    })

    const {email,password} = usuario

    const onInputChange = (e) => {
        // spreed  operador ...
        setUsuario({...usuario,[e.target.name]:e.target.value })
    }


    const onSubmint = async (e) => {
        // para evitar que los parametros se pongan en el url
        e.preventDefault()
        const urlBase = "http://localhost:3001/api/v1/users/login";
        const {data} = await axios.post(urlBase,usuario);
        localStorage.setItem("token",data.token);
        // console.log("console " + data.token)
        alert(data)
        if(data === 'Credenciales errodeas!'){
            navegacion('/acceder');
        }else{
          alert('registrado correctamente')
          navegacion('/');
        }

        // fetch(urlBase)
        // .then(response => response.json())
        // .then(data => localStorage.setItem("token",data.token))
        // .catch(error => console.log(error));

    }



  return (
    <div className="container">

      <h1 className="container text-center" style={{ margin: "30px" }}>Acceder</h1>
     
        <form onSubmit={(e) => onSubmint(e)}>
          <div class="mb-3">
            <label htmlFor="email" className="form-label">
              email
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
          {/* <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div> */}
          <button type="submit" class="btn btn-primary btn-sm me-3">
            Submit
          </button>
          <a href='/' className='btn btn-danger btn-sm' >Regresar</a>
        </form>
    </div>
  );
}
