import Contactus from "@/components/Contactus";
import DateSec from "@/components/DateSec";
import Hero from "@/components/Hero";
import ThirdSec from "@/components/ThirdSec";

export default function Home() {
  return (
    <section className="flex flex-col max-w-[420px]">
      <Hero />
      <DateSec />
      <ThirdSec />
      <Contactus />
    </section>
  );
}
