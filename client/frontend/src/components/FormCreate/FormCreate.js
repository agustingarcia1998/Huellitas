import React, { useEffect, useState } from "react";
import { Div } from "./Styled";
import UploadImages from "../UploadImages/UploadImages.js";
import { useNavigate } from "react-router-dom";
import { createPetFetch } from "../../redux/actions/createPet.action";
import { useDispatch, useSelector } from "react-redux";

const FormCreate = () => {
  let navigate = useNavigate();

  const dispatch = useDispatch();
  const petCreated = useSelector((state) => state.pets);

  const [input, setInput] = useState({
    name: "",
    age: "",
    description: "",
    size: "",
    thumbnail: "",
    status: ""
  })

  function validate(input){
    let error = {}

    if(!input.name) {
        error.name = 'Es necesario agregar un nombre'
    } 

    if(!input.age) {
        error.age = 'Es necesario agregar una edad'
    } 

    if(!input.description) {
        error.description = 'Es necesario agregar una descripción'
    } 

    if(!input.size) {
        error.size = 'Es necesario agregar un tamaño'
    }

    if(!input.status) {
        error.status = 'Es necesario agregar un estado'
    }
    
     

    return error
}

  function handleChange(e){
      setInput({
        ...input,
        [e.target.name] :  e.target.value,
      });
  }

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
