import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
const ErrorPage = () => {
    return (
        <div className=" mx-auto lg:flex justify-center items-center h-screen">
            <div>
            <h1 className=" text-7xl font-medium text-center ">Error 404...</h1>
            <p className="mt-5 text-3xl text-center">You have been come in wrong page</p>
            <br />
            <p className=" lg:w-[800px] text-center">pls press the home button to go back</p>
            <div className=" text-center flex justify-center py-8">
            <Link>
            <Button color="white">Home</Button></Link>
            </div>
            </div>
        </div>
    );
};

export default ErrorPage;