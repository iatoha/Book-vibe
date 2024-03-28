import { Spinner } from "@material-tailwind/react";

const CustomSpinner = () => {
  return (
    <div className="flex justify-center items-center text-center h-screen">
      <Spinner color="green" className="h-16 w-16 text-gray-900/50" />
    </div>
  );
};

export default CustomSpinner;
