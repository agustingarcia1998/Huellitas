import React, { useEffect } from "react";
import { Div } from "./Styled";
import UploadImages from "../UploadImages/UploadImages.js";
import { useNavigate } from "react-router-dom";
import { createPetFetch } from "../../redux/actions/createPet.action";
import { useDispatch, useSelector } from "react-redux";

const FormCreate = () => {
  let navigate = useNavigate();

  // const dispatch = useDispatch();
  // const petCreated = useSelector((state) => state.pets);

  // useEffect(() => {
  //   createPetFetch(dispatch);
  // }, []);

  return (
    <Div>
      <div className="contAll">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingInputDisabled" />
          <label for="floatingInputDisabled">Nombre</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="Number"
            class="form-control"
            id="floatingInputDisabled"
          />
          <label for="floatingInputDisabled">Edad</label>
        </div>
        <div class="form-floating mb-3">
          <textarea
            class="form-control"
            id="floatingTextareaDisabled"
          ></textarea>
          <label for="floatingTextareaDisabled">Descripción</label>
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
          <button
            className="buttonBack"
            type="submit"
            onClick={() => {
              navigate("/home");
            }}
          >
            Volver
          </button>
          <button className="buttonSubmit" type="submit">
            Agregar
          </button>
        </div>
      </div>
    </Div>
  );
};

export default FormCreate;
