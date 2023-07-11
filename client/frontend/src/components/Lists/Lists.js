import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { catsFetch } from "../../redux/actions/cats.actions";
import { dogsFetch } from "../../redux/actions/dogs.actions";
import Card from "../Card/Card";

const Lists = () => {
  const dispatch = useDispatch();
  const cats = useSelector((state) => state.cats);

  useEffect(() => {
    catsFetch(dispatch);
  }, []);

  const dogs = useSelector((state) => state.dogs);

  useEffect(() => {
    dogsFetch(dispatch);
  }, []);
  

  const pets = cats.currentCat.concat(dogs.currentDog);
  pets.sort(() => Math.random()-0.5)
  return (
    <div>
      {pets?.map((pet) => (
        <div key={pet.id}>
          <Card
            name={pet.name}
            age={pet.age}
            description={pet.description}
            size={pet.size}
            status={pet.status}
            img={pet.thumbnail}

          />
        </div>
      ))}
    </div>
  );
};

export default Lists;
