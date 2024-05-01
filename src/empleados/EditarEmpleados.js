/* eslint-disable react-hooks/exhaustive-deps */

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditarEmpleados() {

    const urlBase = "http://localhost:3001/api/v1/users";

    let navegacion = useNavigate();

    axios.interceptors.request.use(function(config){
        const token = localStorage.getItem("token");
        config.headers.Authorization = `Bearer ${token}`
        return config;
      });

    const {id} = useParams(); 
    
    const [empleado, setEmpleado] = useState({
        name:"",
        email:"",
        phone:""
    })

    const {name, phone} = empleado

    //se utiliza para procesar alg cuando mse carga ese componente
    useEffect(() =>{
        cargarEmpleado();
    }, [])

    const cargarEmpleado = async () => {
        const {data: resultado} = await axios.get(`${urlBase}/${id}`)
        
        setEmpleado(resultado);
    }

    const onInputChange = (e) => {
        // spreed  operador ...
        setEmpleado({...empleado,[e.target.name]:e.target.value })
    }

    const onSubmint = async (e) => {
        // para evitar que los parametros se pongan en el url
        e.preventDefault()

        await axios.put(`${urlBase}/${id}`,empleado);
        alert('Usuario actualizado correctamente')
        navegacion('/admin');

    }

  return (
    <div className='container'>
        <div className='container text-center' style={{margin: "30px"}}>
            <h3>Editar Empleado</h3>
        </div>
        <form  onSubmit={(e) => onSubmint(e)} >
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="name" name='name' required={true} 
                onChange={(e)=>onInputChange(e)} value={name}/>
                
            </div>
            {/* <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="text" className="form-control" id="email" name='email' 
                onChange={(e)=>onInputChange(e)} value={email}/>
            </div> */}
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Número</label>
                <input type="number" step="any" className="form-control" id="phone" name='phone' 
                onChange={(e)=>onInputChange(e)} value={phone}/>
            </div>
            <div className='text-center'>
            <button type="submit" className="btn btn-warning btn-sm me-3">Guardar</button>
            <a href='/admin' className='btn btn-danger btn-sm' >Regresar</a>
            </div>
        </form>
    </div>
  )
}
