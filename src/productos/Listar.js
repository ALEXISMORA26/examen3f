/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { useNavigate } from "react-router-dom";

export default function Listar() {
  // let navegacion = useNavigate();
  const [productos, setProductos] = useState([]);

  // axios.interceptors.request.use(function (config) {
  //   const token = localStorage.getItem("token");
  //   config.headers.Authorization = `Bearer ${token}`;
  //   return config;
  // });

  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = async () => {
    const urlBase = "http://localhost:3001/api/v1/products";
    // const {data} = await axios.get(urlBase);
    const { data: resultado } = await axios.get(urlBase);
    console.log("Resultado de Productos");
    // console.log(data);
    setProductos(resultado);
    // navegacion('/');
  };

  const agregarCarrito = async (product,image,name,price) => {
    // const urlBase = "http://localhost:3001/api/v1/products";
    // await axios.delete(`${urlBase}/${id}`);
    let productosEnCarrito;
    // let pedidoo;

    let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

    if (productosEnCarritoLS) {
      productosEnCarrito = JSON.parse(productosEnCarritoLS);
      // actualizarNumerito();
    } else {
      productosEnCarrito = [];
    }
    const productoAgregado = {
      quantity: 1,
      product,
      
      image,
      name,
      price
    };

    let productosEnCarritoo;
    // let pedidoo;

    let productosEnCarritoLSo = localStorage.getItem("pedido");

    if (productosEnCarritoLSo) {
      productosEnCarritoo = JSON.parse(productosEnCarritoLSo);
      // actualizarNumerito();
    } else {
      productosEnCarritoo = [];
    }

    const pedido = {
      quantity: 1,
      product
    };
    //   if(productosEnCarrito.some(producto => producto.id === idBoton)) {
    //     const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    //     productosEnCarrito[index].cantidad++;
    // } else {
    // productoAgregado.cantidad = 1;
    // productosEnCarrito.push(productosEnCarrito);
    // }
    productosEnCarrito.push(productoAgregado);
    productosEnCarritoo.push(pedido);
    //  id = productosEnCarrito
    localStorage.setItem(
      "pedido",
      JSON.stringify(productosEnCarritoo)
    );

    localStorage.setItem(
      "productos-en-carrito",
      JSON.stringify(productosEnCarrito)
    );

    // localStorage.setItem()
    alert("Producto agreago al correctamente");
    cargarProductos();
    // navegacion('/carrito');
  };

  const styles = {
    imagen: {
      width: "100px",
    },
  };

  return (
    <div className="container">
      <div className="container text-center" style={{ margin: "30px" }}>
        <h3>Productos</h3>
      </div>
      <table className=" table table-striped table-hover align-middle">
        <thead className="table-dark">
          <tr>
            {/* <th scope="col">ID</th> */}
            <th scope="col">image</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Rating</th>
            <th scope="col">Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {productos.map((Productos, indice) => (
            <tr key={indice}>
              {/* <td>{Productos.image}</td> */}
              <td>
                <img
                  className="img-thumbnail"
                  style={styles.imagen}
                  src={Productos.image}
                ></img>
              </td>
              <td>{Productos.name}</td>
              <td>{Productos.description}</td>
              <td>
                <NumericFormat value={Productos.rating} displayType="text" />
              </td>
              <td>
                <NumericFormat
                  value={Productos.price}
                  displayType="text"
                  thousandSeparator=","
                  prefix="$"
                  decimalScale={2}
                  fixedDecimalScale
                />
              </td>
              <td className="text-center">
                <div>
                  {/* <Link to={`/Productos/editar/${Productos.id}`} className="btn btn-warning btn-sm me-3" >Editar</Link> */}
                  <button
                    onClick={() => agregarCarrito(Productos.id,Productos.image,Productos.name,Productos.price)}
                    className="btn btn-primary btn-sm"
                  >
                    Agregar
                  </button>
                </div>
              </td>
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
}
