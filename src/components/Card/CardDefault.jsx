/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
// import { Rating } from "@material-tailwind/react";
import { FaRegStar } from "react-icons/fa";

const CardDefault = ({ item }) => {
  //   console.log(item);
  const { bookId, bookName, author, image, tags1, tags2, rating } = item || {};

  return (
    <Link to={`/booklist-details/${bookId}`}>
      <Card className="mt-6 overflow-hidden cursor-pointer">
        <CardHeader color="blue-gray" className=" rounded-none ">
          <img src={image} alt="card-image" />
        </CardHeader>
        <CardBody>
          <div>
            <Button variant="text">{tags1}</Button>
            <Button variant="text">{tags2}</Button>
          </div>
          <br />
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {bookName}
          </Typography>
          <Typography>{author}</Typography>
        </CardBody>
        <hr />
        <br />
        <CardFooter className="pt-0">
          <div className=" flex justify-between items-center mb-4">
            <h3 className=" text-xl font-semibold">Fiction</h3>
            <div className="">
              <small className=" text-xl font-semibold flex gap-1">
                {rating}
                <FaRegStar className=""></FaRegStar>
              </small>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CardDefault;
