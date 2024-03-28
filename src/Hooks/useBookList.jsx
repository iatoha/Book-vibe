import { useEffect, useState } from "react";

const useBookList = () => {

    const [bookList, setBookList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchData  = async () => {
            setLoading(true);
            const res = await fetch("/data.json")
            const data = await res.json()
            setBookList(data);
            setLoading(false);
        };
        fetchData();
    }, [])

    return { bookList, loading };
};

export default useBookList;