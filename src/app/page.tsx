import Carousel from "@/components/global-ui/carousel";
import Footer from "@/components/global-ui/footer";
import Header from "@/components/global-ui/header";
import SecondHeader from "@/components/global-ui/second-header";
import VerticalCarousel from "@/components/global-ui/vertical-carousel";
import HomeHero from "@/components/home-ui/home-hero";
import HomeServices from "@/components/home-ui/home-services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <SecondHeader />
      <main className="">
        <HomeHero />
        <Carousel />
      </main>
      <Footer />
    </>
  );
}
