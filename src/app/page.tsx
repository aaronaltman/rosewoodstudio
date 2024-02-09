import Carousel from "@/components/global-ui/carousel";
import Header from "@/components/global-ui/header";
import HomeHero from "@/components/home-ui/home-hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <HomeHero />
        <Carousel />
      </main>
    </>
  );
}
