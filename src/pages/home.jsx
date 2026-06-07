import Header from "../components/header.jsx";
import HeadLine from "./home/HeadLine.jsx";
import InfoCard from "./home/InfoCard.jsx";
import HomeImage from "./home/HomeImage.jsx";
import BenefitCards from "./home/BenefitCards.jsx";
import OngCards from "./home/OngCards.jsx";
import DifferenceCards from "./home/DifferenceCards";
import Footer from "../components/footer.jsx";
import DashBoard from "./home/DashBoard.jsx";
import FeedBack from "./home/FeedBacks.jsx";

function Home() {
  return (
    <div>
      <Header />
      <HeadLine />
      <InfoCard />
      <HomeImage />
      <BenefitCards />
      <DashBoard />
      <OngCards />
      <DifferenceCards />
      <FeedBack />
      <Footer />
    </div>
  );
}

export default Home;
