import Header from "./components/header";
import Hero from "@/main/herohome";
import Overview from "@/main/overview";
import Solutions from "@/main/solutions";
import ProductsPage from "@/main/products";
import Footer from "./components/footer"
import CallToAction from "./components/calltoaction";

export default function Home() {
  return (
    <>


        <Header />
        <Hero />
        <Overview />
        <Solutions />
        <ProductsPage />
      <CallToAction />
        <Footer />
    </>
  );
}
