import { useContext } from "react";
import { PostContext } from "../context/PostContext";
import { PostContextType } from "../context/types";

function AvisoEliminar() {
  const { deletePost, idBorrar, setModal } = useContext(
    PostContext
  ) as PostContextType;

  return (
    <div className="aviso">
      <h3>¿Está seguro de que desea eliminar el post seleccionado? ⚠️</h3>
      <div className="botonesAviso">
        <button
          onClick={() => {
            deletePost(idBorrar);
            setModal(false);
          }}
          className="botonesAviso__avisoEliminar"
        >
          Eliminar
        </button>
        <button onClick={() => setModal(false)} className="botonesAviso__avisoCancelar">
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default AvisoEliminar;
