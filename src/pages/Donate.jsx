import HeaderOngs from "../components/headerOngs";
import DonateHero from "../pages/donate/DonateHero";
import DonateList from "./donate/DonateList";
import Footer from "../components/footer";
import HowDonate from "./donate/HowDonate";

function Donate() {
  return (
    <>
      <HeaderOngs />
      <DonateHero />
      <DonateList />
      <HowDonate />
      <Footer />
    </>
  );
}

export default Donate;
