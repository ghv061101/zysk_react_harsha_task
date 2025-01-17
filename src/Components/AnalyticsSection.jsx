import React from "react";
import Content2 from "../assets/images/content2.png";
import iconV from '../assets/images/IconV.png'
import arrowrright from "../assets/images/arrowrright.png";
import Company1 from "../assets/companyImages/company1.png";
import Company2 from "../assets/companyImages/company2.png";
import Company3 from "../assets/companyImages/company3.png";
import Company4 from "../assets/companyImages/company4.png";
import Company5 from "../assets/companyImages/company4.png";
import Company6 from "../assets/companyImages/company5.png";

const AnalyticsSection = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-24 gap-16 px-4">
      <div className="flex flex-col justify-center items-center gap-[24px]">
        <div className="w-fit flex text-[#E63F3A] font-medium text-sm sm:text-base bg-[#F9F5FF] py-1 px-1 rounded-full gap-1 items-center border border-[#E63F3A]">
          <span className="border rounded-full px-2 bg-white border-[#E63F3A]">
            New features
          </span>
          <h1 className="px-1 flex items-center gap-2">
            Check out the team dashboard{" "}
            <div>
              <img src={arrowrright} alt="" />
            </div>
          </h1>
        </div>
        <div>
          <h1 className="text-5xl md:text-5xl font-semibold text-center">
            Beautiful analytics to grow smarter
          </h1>
        </div>
        <div className="md:w-[560px] text-center text-lg">
          <p>
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-fit relative">
          {/* Demo Button */}
          <button className="px-4 py-2 border border-gray-200 rounded-full flex items-center justify-center">
            
            <span>
              <img src={iconV} alt="Demo icon" className="w-4 h-4" />
            </span>
            <span className="ml-1">
            Demo
            </span>

            
          </button>

          {/* Sign Up Button */}
          <button className="px-4 py-2 border border-gray-100 rounded-full bg-[#E63F3A] text-white">
            Sign up
          </button>
        </div>

      </div>
      <div>
        <div>
          <div className="">
            <img
              src={Content2}
              alt="Analytics"
              className="md:w-[1216px] md:h-[810px] "
            />
          </div>
          <div className="flex flex-col items-center gap-8 py-24 md:-translate-y-64 md:-mb-64 bg-white border-b-2">
            <h1>Join 4,000+ companies already growing</h1>
            <div className="flex flex-wrap justify-center gap-8 px-4">
              <img
                src={Company1}
                alt="Company1"
                className="h-[36px] md:h-[48px]"
              />
              <img
                src={Company2}
                alt="Company1"
                className="h-[36px] md:h-[48px]"
              />
              <img
                src={Company3}
                alt="Company1"
                className="h-[36px] md:h-[48px]"
              />
              <img
                src={Company4}
                alt="Company1"
                className="h-[36px] md:h-[48px]"
              />
              <img
                src={Company5}
                alt="Company1"
                className="h-[36px] md:h-[48px]"
              />
              <img
                src={Company6}
                alt="Company1"
                className="h-[36px] md:h-[48px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSection;
