import {
  Address,
  Couple,
  Couple2,
  Couple3,
  Flowers,
  Frame5,
} from "@/utilities";
import Image from "next/image";
import React from "react";

const ThirdSec = () => {
  return (
    <div className="bg-[#9E7468] py-4 flex flex-col gap-4">
      <Image alt="" src={Couple} quality={100} />
      <Image alt="" src={Frame5} quality={100} />
      <Image alt="" src={Couple2} quality={100} />
      <div className="bg-[#374234] pt-5 flex flex-col gap-5 justify-center w-full ">
        <Image alt="" src={Address} quality={100} className="w-full" />
        <a
          className=" bg-white rounded-xs text-xl py-3 mx-5 text-center"
          href="https://maps.app.goo.gl/RXhdR6Zf92jqX4Fp9"
          target="_blank"
        >
          مسیریابی
        </a>
        <Image alt="" src={Flowers} quality={100} className="" />
      </div>
      <Image alt="" src={Couple3} quality={100} className="" />
    </div>
  );
};

export default ThirdSec;
