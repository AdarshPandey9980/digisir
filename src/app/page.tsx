import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar";
import About from "@/components/About"
import FeaturesSection from "@/components/Features";
import ContactUs from "@/components/ContactUs";
import FAQSection from "@/components/Faq";
import Footer from "@/components/Footer";
import PricingSection from "@/components/Pricing";
export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <FeaturesSection/>
    <PricingSection/>
    <ContactUs/>
    <FAQSection/>
    <Footer/>
    </>
  );
}
