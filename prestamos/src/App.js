import React, { Fragment, useState} from 'react';
import Header from './componentes/Header'
import Formulario from './componentes/Formulario'

function App() {
   // Definir un state
   const [cantidad, guardar_cantidad] = useState(0);
   const [plazo, guardar_plazo] = useState("");
   const [total,guardar_total] = useState(0);

  return (
    <Fragment>
        <Header
          titulo = "Cotizador de Prestamos"
          descripccion = "Utiliza el formulario y obten una cotizacion"
        />
        <div className = "container">
          <Formulario
            cantidad = {cantidad}
            guardar_cantidad = {guardar_cantidad}
            plazo = {plazo}
            guardar_plazo = {guardar_plazo}
            total = {total}
            guardar_total = {guardar_total}
          />
        <p>Total a pagar: ${total}</p>
        </div>
    </Fragment>
  );
}

export default App;
