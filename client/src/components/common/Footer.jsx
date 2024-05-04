import React from "react";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <div className="flex flex-col  p-12 bg-slate-500/[0.2] mt-12">
      <div className="flex flex-wrap justify-between">
        <div className="grid gap-3">
          <HashLink>
            <p className="font-semibold">Privacy Policy</p>
          </HashLink>
          <HashLink>
            <p className="font-semibold">terms & Conditions</p>
          </HashLink>
          <HashLink>
            <p className="font-semibold">Pricing and Refund</p>
          </HashLink>
        </div>
        <div className="grid gap-2">
          <HashLink>
            <p className="font-semibold">Earn Rewards</p>
          </HashLink>
          <HashLink>
            <p className="font-semibold">Hire From Us</p>
          </HashLink>
        </div>
        <div className="grid gap-2">
          <HashLink>
            <p className="font-semibold">Community</p>
          </HashLink>
          <HashLink>
            <p className="font-semibold">Our Students</p>
          </HashLink>
        </div>
        <div className="grid gap-1">
          <HashLink>
            <p className="text-3xl font-bold">Contact Us</p>
          </HashLink>
          <HashLink>
            <p className="font-semibold">+91 8234562312</p>
          </HashLink>
          <HashLink>
            <p className="font-semibold">info@prince.com</p>
          </HashLink>
          <HashLink>
            <p>Anand Nagar,Bhopal</p>
          </HashLink>
          <HashLink>
            <p>Madhya Pradesh, India</p>
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
