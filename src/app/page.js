import DateSec from "@/components/DateSec";
import Hero from "@/components/Hero";
import ThirdSec from "@/components/ThirdSec";

export default function Home() {
  return (
    <section className="flex flex-col">
      <Hero />
      <DateSec />
      <ThirdSec />
    </section>
  );
}
