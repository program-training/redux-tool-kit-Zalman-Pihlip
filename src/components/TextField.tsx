import useAppDispatch from "../hooks/useAppDispatch";
import { setAnimal } from "../app/animalSlice";

const TextField = () => {
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const animal = e.target.value;
    dispatch(setAnimal(animal));
  };
  return (
    <>
      <input
        type="text"
        onChange={handleChange}
        style={{ alignSelf: "center", margin: "10px", direction:"rtl" }}
        placeholder="שם אחר"
      />
    </>
  );
};

export default TextField;
