import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { clientDetails, logo } from "../../constants";

const Footer = () => {
  return (
    // bg-[#2b0a05]
    <div className=" bg-primary/10 py-[3rem] text-black">
      <div className="px-5 sm:px-10 flex flex-col gap-3 sm:flex-row items-center justify-between">
        <div className="flex flex-col gap-3 items-start">
          <img
            fetchPriority="high"
            src={logo}
            alt="logo"
            width="150"
            height="100"
            className="h-[4.5rem] object-contain"
          />
          <div className="space-y-2 flex flex-col mt-5">
            <Link to={`mailto:${clientDetails.email}`} className="">
              {clientDetails.email}
            </Link>
            <Link to={`tel:${clientDetails.phone}`} className="">
              {clientDetails.phone}
            </Link>
            <p className="">{clientDetails.address}</p>
          </div>
        </div>
        <div className="">
          <div className="flex mt-3 gap-5 justify-start">
            <Link to={clientDetails.linkedin}>
              <FaLinkedinIn className="text-2xl" />
            </Link>
            <Link to={clientDetails.instagram}>
              <AiFillInstagram className="text-2xl" />
            </Link>
            <Link to={clientDetails.facebook}>
              <GrFacebookOption className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
