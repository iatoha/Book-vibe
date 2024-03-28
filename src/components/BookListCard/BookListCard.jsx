/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-key */
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { IoLocationOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { MdFindInPage } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";


// eslint-disable-next-line react/prop-types
const BookListCard = ({ booklist }) => {
  const {
    bookName,
    author,
    image,
    tags1,
    tags2,
    yearOfPublishing,
    publisher,
    totalPages,
    category,
    rating,
  } = booklist || {};
  return (
    <Card className="md:w-[1260px] lg:h-96 my-10 mx-auto  flex-row ">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={image}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          {bookName}
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {author}
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          <div className="md:flex">
            <div><span className=" text-base font-bold">Tags :</span>
            <Button className=" text-[#23BE0A]" variant="text">#{tags1}</Button>
            <Button className=" text-[#23BE0A]" variant="text">#{tags2}</Button>
            </div>
            <Typography className=" md:flex md:px-10 md:gap-3">
              <IoLocationOutline className=" my-1"></IoLocationOutline>Year of
              Publishing: {yearOfPublishing}
            </Typography>
          </div>
        </Typography>
        <Typography>
          <div className=" lg:flex gap-3">
            <div className="lg:flex gap-2">
              <GoPerson className="my-1 text-lg font-semibold"></GoPerson> : {publisher}
            </div>
            <div className="flex gap-2">
              <MdFindInPage className="my-1 ml-5"></MdFindInPage> Page{" "}
              {totalPages}
            </div>
          </div>
        </Typography>
        <br />
        <Typography>
          <div className="md:flex gap-4 sm:my-6">
            <Button className="rounded-full bg-[#328EFF26] text-[#328EFF]">
              Category : {category}
            </Button>
            <Button className="rounded-full flex gap-1  bg-[#FFAC3326] text-[#FFAC33]">
              Rating : {rating}
              <FaRegStar className=""></FaRegStar>
            </Button>
            <Button className="rounded-full  bg-[#23BE0A] text-white">
              View Details
            </Button>
          </div>
        </Typography>
      </CardBody>
    </Card>
  );
};

export default BookListCard;
