import React, { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { Link, useNavigate } from "react-router-dom";

export default function Carrito() {
  let navegacion = useNavigate();

  const [productos, setProductos] = useState([]);

  const cargarProductos = async () => {
    // const urlBase = "http://localhost:3001/api/v1/products";
    // const {data} = await axios.get(urlBase);
    // const {data: resultado} = await axios.get(urlBase);
    // console.log("Resultado de Productos");
    const productosEnCarrito = localStorage.getItem("productos-en-carrito");
    // productosEnCarrito = JSON.parse(productosEnCarrito);
    // console.log(data);
    setProductos(JSON.parse(productosEnCarrito));
  };
  useEffect(() => {
    cargarProductos();
  }, []);

  const styles = {
    imagen: {
      width: "100px",
    },
  };

  const eliminarProductos = async (id) => {
    // const urlBase = "http://localhost:3001/api/v1/products";

    // await axios.delete(`${urlBase}/${id}`);
    let productosEnCarrito = localStorage.getItem("productos-en-carrito");
    productosEnCarrito = JSON.parse(productosEnCarrito);
    const index = productosEnCarrito.findIndex(
      (producto) => producto.id === id
    );

    productosEnCarrito.splice(index, 1);
    // cargarProductosCarrito();
    localStorage.setItem(
      "productos-en-carrito",
      JSON.stringify(productosEnCarrito)
    );

    let productosEnCarritoo = localStorage.getItem("pedido");
    productosEnCarritoo = JSON.parse(productosEnCarritoo);
    const indexo = productosEnCarritoo.findIndex(
      (producto) => producto.id === id
    );

    productosEnCarritoo.splice(indexo, 1);
    // cargarProductosCarrito();
    localStorage.setItem(
      "pedido",
      JSON.stringify(productosEnCarritoo)
    );


    //
    

    alert("Producto eliminado correctamente");
    cargarProductos();
  };





  const vaciarCarrito = async (id) => {
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
    alert("Carrito eliminado correctamente");
    // cargarProductos();
    navegacion("/");
  };

  return (
    <div className="container">
      <div className="container text-center" style={{ margin: "30px" }}>
        <h3>Carrito</h3>
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end" style={{margin: "20px"}}>
        <Link to="/hacerOrden" className=" btn btn-primary  ">
          Hacer Pedido
        </Link>
        <button
          onClick={() => vaciarCarrito()}
          type="button"
          className=" btn btn-danger "
        >
          {" "}
          Vaciar CArrito
        </button>
        {/* <button onClick={() => eliminarProductos(Productos.id)} className="btn btn-danger btn-sm">Eliminar</button> */}
      </div>
      <table className=" table table-striped table-hover align-middle">
        <thead className="table-dark">
          <tr>
            {/* <th scope="col">ID</th> */}
            <th scope="col">image</th>
            <th scope="col">Nombre</th>
            {/* <th scope="col">Descripcion</th>
            <th scope="col">Rating</th> */}
            <th scope="col">Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {productos.map((Productos, indice) => (
            <tr key={indice}>
              <td>
                <img
                  style={styles.imagen}
                  className="img-thumbnail"
                  src={Productos.image}
                ></img>
              </td>
              <td>{Productos.name}</td>
              {/* <td>{Productos.description}</td>
              <td>
                <NumericFormat
                  value={Productos.rating}
                  displayType="text"
                  
                />
              </td> */}
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
                    onClick={() => eliminarProductos(Productos.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Eliminar
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
