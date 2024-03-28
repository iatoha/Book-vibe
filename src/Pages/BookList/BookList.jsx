import { Button } from "@material-tailwind/react";
import BookListCard from "../../Components/BookListCard/BookListCard";
import useLocalStorage from "../../Hooks/useLocalStorage";
import { useState } from "react";
import CustomSpinner from "../../Components/CustomSpinner/CustomSpinner";

const BookList = () => {
  const { localBook } = useLocalStorage();
  const [showAll, setShowAll] = useState(false);
  //   console.log(localBook);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  if (localBook.length == 0) {
    return <CustomSpinner></CustomSpinner>
  }
  
  return (
    <>
      <div>
        {localBook.slice(0, showAll ? localBook.length : 4).map((booklist) => (
          <BookListCard
            key={booklist.bookId}
            booklist={booklist}
          ></BookListCard>
        ))};
      </div>
      {localBook.length > 4 ? (
        <div className=" text-center mx-auto my-5">
          <Button onClick={handleShowAll} color="green">
            {!showAll ? "Show all" : "Show less"}
          </Button>
        </div>
      ) : null}
    </>
  );
};

export default BookList;
