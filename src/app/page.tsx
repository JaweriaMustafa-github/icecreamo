import Banner from "@/components/Banner";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Offer from "@/components/Offer";
import ProductLList from "@/components/Productlist";
import Progressor from "@/components/Progressor";
import Reservation from "@/components/Reservation";


export default function Home() {
  return (
    <div className="bg-pink-700">
    <Navbar/>
    <Banner/>
    <Carousel/>
    <ProductLList/>
    <Menu />
    <Progressor/>
    <Offer/>
    <Reservation/>
    <Footer/>
    </div>
  );
}
