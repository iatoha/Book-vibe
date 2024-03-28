import { useParams } from "react-router-dom";
import useBookList from "../../Hooks/useBookList";
import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { saveToLocalStorage } from "../../Utils/localStorage";
import CustomSpinner from "../../Components/CustomSpinner/CustomSpinner";


const BookListDetails = () => {
  const [singleData, setSingleData] = useState({});
  const bookId = useParams();
  const bookIdInt = parseInt(bookId.id);
  const { bookList, loading } = useBookList();

  const handleBooklist = () => {
    saveToLocalStorage(singleData);
  };
  // console.log(bookId);
  // console.log(typeof bookId,setSingleData);

  useEffect(() => {
    if (bookList) {
      const singleData = bookList.find((item) => item.bookId === bookIdInt);
      // console.log(singleData);
      setSingleData(singleData);
    }
  }, [bookList, bookId]);

  const {
    bookName,
    author,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
    image,
    tags1,
    tags2,
  } = singleData || {};

  if (loading) {
    return <CustomSpinner></CustomSpinner>;
  }

  return (
    <Card className="md:w-[1260px] my-10 mx-auto  flex-row ">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 "
      >
        <img
          src={image}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography
          variant="h4"
          color="blue-gray"
          className="mb-2 font-bold text-5xl"
        >
          {bookName}
        </Typography>
        <Typography
          variant="h6"
          color="gray"
          className="mb-4 uppercase my-4 text-xl font-medium"
        >
          {author}
        </Typography>
        <Typography color="gray" className="mb-8 font-normal text-base ">
          {" "}
          <span className="  text-[#131313] text-base font-semibold">
            Review :{" "}
          </span>
          {review}
        </Typography>
        <div>
          <span className=" text-base font-bold">Tags :</span>
          <Button className=" text-[#23BE0A]" variant="text">
            #{tags1}
          </Button>
          <Button className=" text-[#23BE0A]" variant="text">
            #{tags2}
          </Button>
        </div>
        <hr />
        <Typography variant="h6" color="gray" className="mb-4 uppercase my-4">
          {" "}
          Number of Pages :{" "}
          <span className=" text-[#131313] text-base font-semibold">
            {" "}
            {totalPages}
          </span>
        </Typography>
        <Typography variant="h6" color="gray" className="mb-4 uppercase my-4">
          Publisher :{" "}
          <span className=" text-[#131313] text-base font-semibold">
            {" "}
            {publisher}
          </span>
        </Typography>
        <Typography variant="h6" color="gray" className="mb-4 uppercase my-4">
          Year of Publishing :{" "}
          <span className=" text-[#131313] text-base font-semibold">
            {yearOfPublishing}
          </span>
        </Typography>
        <Typography variant="h6" color="gray" className="mb-4 uppercase my-4">
          Rating :{" "}
          <span className=" text-[#131313] text-base font-semibold">
            {rating}
            {/* <FaRegStar></FaRegStar> */}
          </span>
        </Typography>
        <div>
          <Button onClick={handleBooklist} variant="text">
            Read
          </Button>
          <Button onClick={handleBooklist} variant="text">
            Wishlist
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default BookListDetails;
