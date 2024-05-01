import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListadoEmpleados from "./empleados/ListadoEmpleados";
import Navegacion from "./plantilla/Navegacion";
// import AgregarEmpleado from "./empleados/AgregarEmpleado";
import EditarEmpleados from "./empleados/EditarEmpleados";
import Acceder from "./empleados/Acceder";
// import Registar from "./empleados/registar";
import Registrar from "./empleados/Registrar";
import ListarProductos from "./productos/ListarProductos";
import ListarOrdenes from "./ordenes/ListarOrdenes";
import EditarProductos from "./productos/EditarProductos";
import Listar from "./productos/Listar";
import Carrito from "./ordenes/Carrito";
import HacerOrden from "./ordenes/HacerOrden";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Navegacion/>
      <Routes>
        {/* <Route exact path="/admin" element={<ListadoEmpleados/>}/>
        <Route exact path="/agregar" element={<AgregarEmpleado/>}/>
        <Route exact path="/editar/:id" element={<EditarEmpleados/>}/> */}
        <Route exact path="/" element={<Listar/>}/>
        <Route exact path="/acceder" element={<Acceder/>}/>
        <Route exact path="/registrar" element={<Registrar/>}/>
        <Route exact path="/admin" element={<ListadoEmpleados/>}/>
        <Route exact path="/editar/:id" element={<EditarEmpleados/>}/>
        <Route exact path="/Productos" element={<ListarProductos/>}/>
        <Route exact path="/Productos/editar/:id" element={<EditarProductos/>}/>
        <Route exact path="/ordenes" element={<ListarOrdenes/>}/>
        <Route exact path="/carrito" element={<Carrito/>}/>
        <Route exact path="/hacerOrden" element={<HacerOrden/>}/>



      </Routes>
      </BrowserRouter>
        <div>

      <div class="text-center">
    <h1 className="card-footer text-body-secondary fs-3">ALEXIS RICARDO MORA AGUILAR</h1>
    <h1 className="card-footer text-body-secondary fs-3">JESUS ELIAS MARTINEZ JIMENEZ</h1>
    <h1 className="card-footer text-body-secondary fs-3">RICARDO YAÑES MORALES</h1>
  </div>
      
        </div>
    </div>
  );
}

export default App;
