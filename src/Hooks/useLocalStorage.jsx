import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../Utils/localStorage";

const useLocalStorage = () => {
    const [localBook, setLockBook] = useState([]);
//    console.log(localBook); 
    useEffect(()=>{
        setLockBook(getFromLocalStorage())
    }, []);
    return { localBook };
};

export default useLocalStorage;