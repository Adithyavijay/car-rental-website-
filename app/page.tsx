import Image from "next/image";
import styles from "./page.module.css";
import Booking from "@/components/Booking/Booking";
import Banner from "@/components/Banner/Banner";
import Cards from "@/components/cards/Cards";
import SubscriptionSection from "@/components/Subscription/Subscription";
import Rent from "@/components/RentBox/Rent";
import Location from "@/components/Location/Location";
import Accordion from "@/components/Accordion/Accordion";
import Footer from "@/components/Footer/ParentFooter";

export default function Home() {
    return (
        <div>
            <Booking />
            <Banner />
            <Cards />
            <SubscriptionSection />
            <Rent />
            <Location/>
            <Accordion/>
            <Footer/>
        </div>
    );
}
 