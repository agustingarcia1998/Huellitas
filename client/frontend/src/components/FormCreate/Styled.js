import styled from "styled-components";
import image from "../../file/fondohuellitasmarron.jpg";
export const Div = styled.div`
  background-image: url(${image});

  .contAll {
    background-size: contain;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 50%;
    margin: auto;
  }

  .cont-formStatus {
    margin-bottom: 15px;
    cursor: pointer;
  }

  .cont-formClass {
    cursor: pointer;
  }

  .contUpload {
    margin-bottom: 5px;
  }

  .buttonSubmit {
    font-size: 20px;
    border: 1px solid orange;
    border-radius: 15px;
    margin-top: 15px;
    padding: 5px;
    width: 45%;
    background-color: white;
  }

  .buttonSubmit:hover {
    background-color: black;
    color: white;
    border: 1px solid #4f3700;
    transition: background-color 1s;
    transition: color 1s;
    transition: border 1s;
  }

  .buttonBack {
    font-size: 20px;
    border: 1px solid orange;
    border-radius: 15px;
    margin-top: 15px;
    padding: 5px;
    width: 45%;
    background-color: white;
  }

  .buttonBack:hover {
    background-color: black;
    color: white;
    border: 1px solid #4f3700;
    transition: background-color 1s;
    transition: color 1s;
    transition: border 1s;
  }

  .contButtons {
    display: flex;
    justify-content: space-between;
  }
`;
