import React from "react";

const Hero = () => {
  return (
    <div className="relative h-[846px] hero-sec flex">
      <div className="flex flex-col absolute top-20 w-full px-6 gap-5">
        <p className="text-xl flex w-full justify-start">
          اشتیاقی که به دیدار تو دارد دل من
        </p>
        <p className="text-xl flex w-full justify-end">
          دل من داند و من دانم و دل داند و من
        </p>
        <p className="text-xl flex w-full justify-start">
          خاک من گل شود و گل شکفد از گل من
        </p>
        <p className="text-xl flex w-full justify-end">
          تا ابد مهر تو بیرون نرود از دل من
        </p>
      </div>
    </div>
  );
};

export default Hero;
