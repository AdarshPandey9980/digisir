import Image from "next/image";
import Hero from "@/app/components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import FeaturesSection from "./components/Features";
import ContactUs from "./components/ContactUs";
export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <FeaturesSection/>
    <ContactUs/>
    </>
  );
}
