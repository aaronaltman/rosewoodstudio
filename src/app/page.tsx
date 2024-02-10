import Carousel from "@/components/global-ui/carousel";
import ContactForm from "@/components/global-ui/contact-form";
import Footer from "@/components/global-ui/footer";
import SecondHeader from "@/components/global-ui/second-header";
import HomeHero from "@/components/home-ui/home-hero";

export default function Home() {
  return (
    <>
      <SecondHeader />
      <main className="">
        <HomeHero />
        <Carousel />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
