import useAppSelector from "../hooks/useAppSelector";
const Header = () => {
  const animal = useAppSelector((state) => state.animals.currentAnimal);
  return (
    <header style={{backgroundColor: "purple", color:"white", textAlign:"center", padding: "25px", alignItems:"center", fontSize: "25px", direction: "rtl"}}>
      החיה שנבחרה: {animal && <h4 style={{display:"inline"}}>{animal}</h4>}
    </header>
  );
};

export default Header;
