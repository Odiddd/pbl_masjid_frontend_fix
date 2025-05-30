// import Header from "@/components/Header";
import HeroSection from "@/components/user/tentangkami/HeroSection";
import DonationSection from "@/components/user/tentangkami/DonationSection";
import Footer from "@/components/user/tentangkami/Footer";
// import Navbar from "@/components/tentangkami/Navbar";
import JadwalAdzan from "@/components/user/tentangkami/JadwalAdzan";
import QRInfaqSection from "@/components/user/tentangkami/QRInfaqSection";
import EventSection from "@/components/user/tentangkami/EventSection";

export default function Home() {
  return (
    <div>
      {/* <Header /> */}
      <HeroSection />
      <DonationSection/>
      <QRInfaqSection/>
      <EventSection />
      <JadwalAdzan/>
      <Footer />
      {/* <Navbar /> */}
    </div>
  );
}
