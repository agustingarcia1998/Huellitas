import React from "react";
import { Div } from "./Styled";
import UploadImages from "../UploadImages/UploadImages.js";
const FormCreate = () => {
  return (
    <Div>
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="floatingInputDisabled"
          placeholder="name@example.com"
        />
        <label for="floatingInputDisabled">Nombre</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="Number"
          class="form-control"
          id="floatingInputDisabled"
          placeholder="name@example.com"
        />
        <label for="floatingInputDisabled">Edad</label>
      </div>
      <div class="form-floating mb-3">
        <textarea
          class="form-control"
          placeholder="Leave a comment here"
          id="floatingTextareaDisabled"
        ></textarea>
        <label for="floatingTextareaDisabled">Información</label>
      </div>
      <div class="form-floating">
        <select
          class="cont-formInfo form-select"
          id="floatingSelectDisabled"
          aria-label="Floating label disabled select example"
        >
          <option value="1">Adoptado</option>
          <option value="2">En adopción</option>
        </select>
        <label for="floatingSelectDisabled">Estado</label>
      </div>
      <div class="form-floating">
        <select
          class="form-select"
          id="floatingSelectDisabled"
          aria-label="Floating label disabled select example"
        >
          <option value="1">Gato</option>
          <option value="2">Perro</option>
        </select>
        <label for="floatingSelectDisabled">Clase de mascota 🐾</label>
      </div>
      <label>Imagen Mascota:<UploadImages/></label>
    </Div>
  );
};

export default FormCreate;
