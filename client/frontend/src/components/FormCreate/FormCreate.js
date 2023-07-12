import React from "react";
import { Div } from "./Styled";
import UploadImages from "../UploadImages/UploadImages.js";
const FormCreate = () => {
  return (
    <Div>
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="floatingInputDisabled" />
        <label for="floatingInputDisabled">Nombre</label>
      </div>
      <div class="form-floating mb-3">
        <input type="Number" class="form-control" id="floatingInputDisabled" />
        <label for="floatingInputDisabled">Edad</label>
      </div>
      <div class="form-floating mb-3">
        <textarea class="form-control" id="floatingTextareaDisabled"></textarea>
        <label for="floatingTextareaDisabled">Información</label>
      </div>
      <div class="form-floating">
        <select
          class="cont-formStatus form-select"
          id="floatingSelectDisabled"
          aria-label="Floating label disabled select example"
        >
          <option value="" hidden></option>
          <option value="1">Adoptado</option>
          <option value="2">En adopción</option>
        </select>
        <label for="floatingSelectDisabled">Estado</label>
      </div>
      <div class="form-floating">
        <select
          class="cont-formClass form-select"
          id="floatingSelectDisabled"
          aria-label="Floating label disabled select example"
        >
          <option value="" hidden></option>
          <option value="1">Gato</option>
          <option value="2">Perro</option>
        </select>
        <label for="floatingSelectDisabled">Clase de mascota 🐾</label>
      </div>
      <label className="contUpload">
        <UploadImages />
      </label>
      <div className="contButtons">
        <button className="buttonBack" type="submit">
          Volver
        </button>
        <button className="buttonSubmit" type="submit">
          Agregar
        </button>
      </div>
    </Div>
  );
};

export default FormCreate;
