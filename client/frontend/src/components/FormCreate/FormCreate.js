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

  const [input, setInput] = useState({});

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    createPetFetch(dispatch, input);

    setInput({
      name: "",
      age: "",
      description: "",
      status: "",
      type: "",
    });
  }

  return (
    <Div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="contAll">
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInputDisabled"
              onChange={(e) => handleChange(e)}
              value={input.name}
              name="name"
              autoComplete="off"
            />
            <label for="floatingInputDisabled">Nombre</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="Number"
              class="form-control"
              id="floatingInputDisabled"
              onChange={(e) => handleChange(e)}
              value={input.age}
              name="age"
            />
            <label for="floatingInputDisabled">Edad</label>
          </div>
          <div class="form-floating mb-3">
            <textarea
              class="form-control"
              id="floatingTextareaDisabled"
              onChange={(e) => handleChange(e)}
              value={input.description}
              name="description"
            ></textarea>
            <label for="floatingTextareaDisabled">Descripción</label>
          </div>
          <div class="form-floating">
            <select
              class="cont-formStatus form-select"
              id="floatingSelectDisabled"
              aria-label="Floating label disabled select example"
              onChange={(e) => handleChange(e)}
              value={input.status}
              name="status"
            >
              <option value="" hidden></option>
              <option value="Adoptado">Adoptado</option>
              <option value="En adopción">En adopción</option>
            </select>
            <label for="floatingSelectDisabled">Estado</label>
          </div>
          <div class="form-floating">
            <select
              class="cont-formClass form-select"
              id="floatingSelectDisabled"
              aria-label="Floating label disabled select example"
              onChange={(e) => handleChange(e)}
              value={input.type}
              name="type"
            >
              <option value="" hidden></option>
              <option value="Cat">Gato</option>
              <option value="Dog">Perro</option>
            </select>
            <label for="floatingSelectDisabled">Clase de mascota 🐾</label>
          </div>
          <label className="contUpload">
            <UploadImages setInput={setInput} input={input}/>
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
            {/* <button className="buttonSubmit" type="submit">
              Agregar
            </button> */}
          </div>
        </div>
      </form>
    </Div>
  );
};

export default FormCreate;
