import { toast } from "react-toastify";

export const saveToLocalStorage = (bookList) => {
    const savedData = JSON.parse(localStorage.getItem("books")) || [];
    const existedData = savedData.find((item) => item.bookId == bookList.bookId);
    if(!existedData){
        savedData.push(bookList);
        localStorage.setItem("books", JSON.stringify(savedData));
        toast.success( "Book has been added to your collection!");
    } else {
        toast.warning('This book is already in your list!')
    }
};

export const getFromLocalStorage = () =>{
    const bookList =  JSON.parse(localStorage.getItem("books"));
    // console.log("local", bookList)
    return bookList ? bookList : [];
};