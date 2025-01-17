import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "./ui/Sheet";
import MenuIcon from "../assets/images/menuIcon.png";
import logo1 from "../assets/images/logo1.png";
import UserImage from "../assets/images/UserImage.png";
import ArrowDown from "../assets/images/ArrowDown.png";
import NavItems from "./NavItems";

const Header = () => {
  const [sheetOpen, setSheetOpen] = useState(false);
  return (
    <>
      {/* Mobile */}
      <nav className="md:hidden flex justify-between px-5 py-3 border-b-2">
        <div className="flex justify-center items-center gap-2 text-white text-lg font-bold">
          <img src={logo1} alt="img" className="h-[32px]" />
          
        </div>
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger className="align-middle">
            <img
              src={MenuIcon}
              alt="menu"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </SheetTrigger>
          <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
            <Link
              href="/"
              className="w-fit"
              onClick={() => setSheetOpen(false)}
            >
              <Link className="flex justify-center items-center gap-2 text-white text-lg font-bold">
                <img src={logo1} alt="img" className="w-[32px] h-[32px]" />
                
              </Link>
            </Link>
            <hr className="border border-gray-50" />
            <NavItems setOpen={setSheetOpen} />
          </SheetContent>
        </Sheet>
      </nav>
      {/* Desktop */}
      <nav className="bg-[#FFFFFF] p-4 px-20 hidden md:block border-b-2">
        <div className="container mx-auto flex  gap-5 items-center justify-between ">
          <div className="flex gap-10 text-lg">
            <Link className="flex justify-center items-center gap-2 text-white text-lg font-bold">
              <img src={logo1} alt="img" className=" h-[32px] w-fit" />
              
            </Link>
            <div className="flex gap-[15px] items-center">
              <Link className="mx-2.5">Home</Link>
              <Link className="mx-2.5 flex  justify-center items-center gap-2">
                <span>Products</span>
                <div>
                  <img src={ArrowDown} alt="" className="h-[5px] w-2.5" />
                </div>
              </Link>
              <Link className="mx-2.5 flex  justify-center items-center gap-2">
                <span>Resources</span>
                <div>
                  <img src={ArrowDown} alt="" className="h-[5px] w-2.5" />
                </div>
              </Link>
              <Link className="mx-2.5">Pricing</Link>
            </div>
          </div>
          <Link>
            <img
              src={UserImage}
              alt="USER"
              className="h-[40px] w-[40px] rounded-full"
            />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
