import React from "react";
import Button from "./Button";

const Modal = () => {
  return (
    <div className="flex flex-col p-2 items-center">
      <div>
        <h3>Tem certeza que deseja cancelar ?</h3>
      </div>
      <div className="flex gap-3">
        <Button variant="primary">Voltar</Button>
        <Button variant="danger">Confirmar</Button>
      </div>
    </div>
  );
};

export default Modal;
