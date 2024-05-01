/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function EditarProductos() {

    const urlBase = "http://localhost:3001/api/v1/products";

    let navegacion = useNavigate();

    axios.interceptors.request.use(function(config){
        const token = localStorage.getItem("token");
        config.headers.Authorization = `Bearer ${token}`
        return config;
      });

    const {id} = useParams(); 
    
    const [producto, setProductos] = useState({
        image:"",
        name:"",
        description:"",
        rating:"",
        price:""
    })

    const {image, name, description,rating,price} = producto

    //se utiliza para procesar alg cuando mse carga ese componente
    useEffect(() =>{
        cargarProductos();
    }, [])

    const cargarProductos = async () => {
        const {data: resultado} = await axios.get(`${urlBase}/${id}`)
        
        setProductos(resultado);
    }

    const onInputChange = (e) => {
        // spreed  operador ...
        setProductos({...producto,[e.target.name]:e.target.value })
    }

    const onSubmint = async (e) => {
        // para evitar que los parametros se pongan en el url
        e.preventDefault()

        await axios.put(`${urlBase}/${id}`,producto);
        alert('Producto actualizado correctamente')
        navegacion('/productos');

    }

  return (
    <div className='container'>
        <div className='container text-center' style={{margin: "30px"}}>
            <h3>Editar Producto</h3>
        </div>
        <form  onSubmit={(e) => onSubmint(e)} >
            <div className="mb-3">
                <label htmlFor="image" className="form-label">Image</label>
                <input type="" className="form-control" id="image" name='image' required={true} 
                onChange={(e)=>onInputChange(e)} value={image}/>
                
            </div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="name" name='name' 
                onChange={(e)=>onInputChange(e)} value={name}/>
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">description</label>
                <input type="text" step="any" className="form-control" id="description" name='description' 
                onChange={(e)=>onInputChange(e)} value={description}/>
            </div>

            <div className="mb-3">
                <label htmlFor="rating" className="form-label">rating</label>
                <input type="number" step="any" className="form-control" id="rating" name='rating' 
                onChange={(e)=>onInputChange(e)} value={rating}/>
            </div>

            <div className="mb-3">
                <label htmlFor="price" className="form-label">price</label>
                <input type="number" step="any" className="form-control" id="price" name='price' 
                onChange={(e)=>onInputChange(e)} value={price}/>
            </div>
            <div className='text-center'>
            <button type="submit" className="btn btn-warning btn-sm me-3">Guardar</button>
            <a href='/productos' className='btn btn-danger btn-sm' >Regresar</a>
            </div>
        </form>
    </div>
  )
}
