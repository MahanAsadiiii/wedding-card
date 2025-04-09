import { Frame3 } from "@/utilities";
import Image from "next/image";
import React from "react";

const DateSec = () => {
  return (
    <div className="relative w-full aspect-auto">
      <Image
        alt="Date information"
        src={Frame3}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        quality={100}
      />
    </div>
  );
};

export default DateSec;
