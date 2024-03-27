import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
 
 
function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <NavLink to={"/"} className="flex items-center gap-2 py-2 pr-4 font-semibold text-lg ">Home</NavLink>
      </Typography>

      <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <NavLink to={'/booklists-details'} className="flex items-center gap-2 py-2 pr-4 font-semibold text-lg ">Listed Books</NavLink>
      </Typography>

      <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <NavLink to={'/pages-to-read'} className="flex items-center gap-2 py-2 pr-4 font-semibold text-lg ">Pages to Read</NavLink>
      </Typography>
    </List>
  );
}
 
export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);

 
  return (
    <Navbar className="mx-auto max-w-screen-2xl px-4 py-2 shadow-none">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className=" font-bold text-xl mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          Book Vibe
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <Button variant="text" size="sm" color="blue-gray" className=" text-white bg-[#23BE0A]" >
            Sing In
          </Button>
          <Button variant="text" size="sm" color="blue-gray" className=" text-white bg-[#59C6D2]" >
            Sing Up
          </Button>

        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
             Sign In
          </Button>
          <Button variant="gradient" size="sm" fullWidth>
            Sign Up
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}