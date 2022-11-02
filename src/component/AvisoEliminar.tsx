function AvisoEliminar() {
  return (
    <div className="aviso">
      <h3>¿Está seguro de que desea eliminar el post seleccionado? ⚠️</h3>
      <div className="botonesAviso">
        <button className="avisoEliminar">Eliminar</button>
        <button className="avisoCancelar">Cancelar</button>
      </div>
    </div>
  );
}

export default AvisoEliminar;
