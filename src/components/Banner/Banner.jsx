import { Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className=" my-10 lg:grid lg:grid-cols-2 justify-between items-center lg:w-[1170px] mx-auto bg-[#1313130D] rounded-3xl shadow-lg lg:h-[654px]">
      <div className=" px-20">
        <Typography variant="h2" className=" text-5xl font-bold">Books to freshen up  your bookshelf</Typography>
        <div className=" py-5">
        <Link className=" py-10" to={"/booklists-details"}>
        <Button className=" bg-[#23BE0A]">View The List</Button>
        </Link>
        </div>
      </div>
      <img className=" lg:px-20 lg:h-[600px] rounded-2xl" src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D" alt="" />
    </div>
  );
};

export default Banner;
