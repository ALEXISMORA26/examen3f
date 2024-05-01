import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';

export default function ListarOrdenes() {

  const [empleados, setEmpleados] = useState([]);

  axios.interceptors.request.use(function(config){
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`
    return config;
  });
  
  

  


  useEffect(() => {
    cargarEmpleados();
  }, []);

  const cargarEmpleados = async () => {
    const urlBase = "http://localhost:3001/api/v1/orders";
    const {data} = await axios.get(urlBase);
    const {data: resultado} = await axios.get(urlBase);
    console.log("Resultado de empleados");
    console.log(data);
    setEmpleados(resultado);
  };

  const eliminarEmpleado = async  (id) => {
    const urlBase = "http://localhost:3001/api/v1/orders";
    await axios.delete(`${urlBase}/${id}`);
    alert('Usuario eliminado correctamente')
    cargarEmpleados();
  }

  return (
    <div className="container">
      <div className="container text-center" style={{ margin: "30px" }}>
        <h3>Empleados</h3>
      </div>
      <table className="table table-striped table-hover align-middle">
        <thead className="table-dark">
          <tr>
            <th scope="col">ID Orden </th>
            <th scope="col">ID Productos</th>
            <th scope="col">Direccion</th>
            <th scope="col">Número Telefonico</th>
            {/* <th></th> */}
          </tr>
        </thead>
        <tbody>
          {empleados.map((empleado, indice) => (
            <tr key={indice}>
              <th scope="row">{empleado.id}</th>
              <td>{JSON.stringify(empleado.orderItems)}</td>
              <td>{empleado.shippingAddress1} {empleado.shippingAddress2} {empleado.city} {empleado.zip} {empleado.country}</td>
              <td>
                <NumericFormat
                  value={empleado.phone}
                  displayType="text"
                  
                />
              </td>
              {/* <td className="text-center">
                  <div>
                    <Link to={`/editar/${empleado.id}`} className="btn btn-warning btn-sm me-3" >Editar</Link>
                    <button onClick={() => eliminarEmpleado(empleado.id)} className="btn btn-danger btn-sm">Eliminar</button>

                  </div>
              </td> */}
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </table>
    </div>
  )
}
