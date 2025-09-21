import React from "react";
import Navbar from "./components/Navbar.js";
import Formulario from "./components/Formulario.js";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1 className="text-center mb-4">Formulario con Validación</h1>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <Formulario />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
