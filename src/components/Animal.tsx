import { FC } from "react";
import useAppSelector from "../hooks/useAppSelector";
import useAppDispatch from "../hooks/useAppDispatch";
import { setAnimal } from "../app/animalSlice";

type AnimalProps = { animals: string[]; color: string };

const Animal: FC<AnimalProps> = ({ animals, color }) => {
  const currentAnimal = useAppSelector((state) => state.animals.currentAnimal);
  const dispatch = useAppDispatch();
  const handleClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const animal = e.currentTarget.innerText;
    e.currentTarget.style.backgroundColor = "blue";
    dispatch(setAnimal(animal));
    
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        color: "white",
        backgroundColor: "gray",
        padding: "5px",
        width: "300px"
      }}
    >
      {animals.map((animal, i) => (
        <span
          key={i}
          onClick={handleClick}
          style={{
            margin : "5px",
            textAlign: "center",
            padding: "25px",
            backgroundColor: animal === currentAnimal ? "blue" : color,
          }}
        >
          {animal}
        </span>
      ))}
    </div>
  );
};

export default Animal;
