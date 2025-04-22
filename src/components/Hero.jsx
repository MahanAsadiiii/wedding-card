import { Heropic } from "@/utilities";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative h-[606px] flex">
      <Image
        alt="hero pic"
        src={Heropic}
        priority
        quality={100}
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="flex flex-col absolute top-10 w-full px-4 gap-5 z-10">
        <p className="text-lg flex w-full justify-start text-shadow-lg">
          اشتیاقی که به دیدار تو دارد دل من
        </p>
        <p className="text-lg flex w-full justify-end text-shadow-lg">
          دل من داند و من دانم و دل داند و من
        </p>
        <p className="text-lg flex w-full justify-start text-shadow-lg">
          خاک من گل شود و گل شکفد از گل من
        </p>
        <p className="text-lg flex w-full justify-end text-shadow-lg">
          تا ابد مهر تو بیرون نرود از دل من
        </p>
      </div>
    </div>
  );
};

export default Hero;
