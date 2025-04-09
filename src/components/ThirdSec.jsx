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
      <div className="relative w-full aspect-auto">
        <Image
          alt="Couple image"
          src={Couple}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          quality={80}
        />
      </div>

      <div className="relative w-full aspect-auto">
        <Image
          alt="Frame image"
          src={Frame5}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          quality={80}
        />
      </div>

      <div className="relative w-full aspect-auto">
        <Image
          alt="Couple image 2"
          src={Couple2}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          quality={80}
        />
      </div>

      <div className="bg-[#374234] pt-5 flex flex-col gap-5 justify-center w-full">
        <div className="relative w-full aspect-auto">
          <Image
            alt="Address image"
            src={Address}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            quality={80}
          />
        </div>

        <a
          className="bg-white rounded-xs text-xl py-3 mx-5 text-center"
          href="https://maps.app.goo.gl/RXhdR6Zf92jqX4Fp9"
          target="_blank"
        >
          مسیریابی
        </a>

        <div className="relative w-full aspect-auto">
          <Image
            alt="Flowers image"
            src={Flowers}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            quality={80}
          />
        </div>
      </div>

      <div className="relative w-full aspect-auto">
        <Image
          alt="Couple image 3"
          src={Couple3}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          quality={80}
        />
      </div>
    </div>
  );
};

export default ThirdSec;
