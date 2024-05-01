/* eslint-disable jsx-a11y/anchor-is-valid */
// import axios from "axios";
import React, { useEffect } from "react";
// import { NumericFormat } from "react-number-format";
// import { Link } from "react-router-dom";

export default function Navegacion() {

  let numerito ;
  let productosEnCarrito;
  let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

  const actualizarNumerito = async () => {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.quantity, 0);
    numerito = nuevoNumerito;
    // actualizarNumerito();
}
// function actualizarNumerito() {
//   let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.quantity, 0);
//   numerito = nuevoNumerito;
// }

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}
// actualizarNumerito();
  
  // const [productos, setProductos] = useState([]);

  // // axios.interceptors.request.use(function(config){
  // //   const token = localStorage.getItem("token");
  // //   config.headers.Authorization = `Bearer ${token}`
  // //   return config;
  // // });

  useEffect(() => {
    // actualizarNumerito();
  });

  

  // const cargarProductos = async () => {
  //   const urlBase = "http://localhost:3001/api/v1/products";
  //   const {data} = await axios.get(urlBase);
  //   const {data: resultado} = await axios.get(urlBase);
  //   console.log("Resultado de Productos");
  //   console.log(data);
  //   setProductos(resultado);
  // };
  return (
    <div className="container">
      <nav className="navbar navbar-dark bg-dark ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Tiendita
          </a>
          {/* <li> */}
            <a className="navbar-brand" href="/carrito">
              <i class="bi bi-cart-fill"></i> Carrito{" "}
              <span id="numerito" class="numerito">
                {numerito}
              </span>
            </a>
          {/* </li> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Menú
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                {/* <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/acceder">Acceder</a>
          </li> */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href=""
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sesión
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="/acceder">
                        Acceder
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/registrar">
                        Registrarse
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/admin">
                        Admin
                      </a>
                    </li>

                    {/* <li><a className="dropdown-item" href="#">Another action</a></li>
             
              <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href=""
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Productos
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="/productos">
                        Listar Productos
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/ordenes">
                        Ordenes
                      </a>
                    </li>
                    {/* <li><a className="dropdown-item" href="/admin">Admin</a></li> */}

                    {/* <li><a className="dropdown-item" href="#">Another action</a></li>
             
              <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
