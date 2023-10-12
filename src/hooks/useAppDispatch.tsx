import { useDispatch } from "react-redux";
import {AppDispatch} from "../app/animalStore"

const useAppDispatch: () => AppDispatch = useDispatch

export default useAppDispatch