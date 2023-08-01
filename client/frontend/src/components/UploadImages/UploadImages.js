import React, { useEffect, useRef, useState } from "react";
import { Div } from "./Styled";

const UploadImages = ({input, setInput}) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  // const [image, setImage] = useState("");

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dg4x7rlf6",
        uploadPreset: "m7yy7xi8",
      },
      function (error, result) {
        if (!error && result && result.event === "success") {
          console.log(result.info.secure_url);
          setInput({
            ...input,
            thumbnail: result.info.secure_url
          })
        }
      }
    );
  }, []);

  return (
    <Div>
      <button className="button" onClick={() => widgetRef.current.open()}>
      Adjuntar Imagen Mascota y agregar
      </button>
    </Div>
  );
};

export default UploadImages;
