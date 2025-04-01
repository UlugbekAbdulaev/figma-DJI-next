import Blog from "@/components/BlogEvenst/Blog";
import Discount from "@/components/Discount/Discount";
import Header from "@/components/Header/Header";
import LatesPro from "@/components/LatesPro/LatesPro";
import Main from "@/components/Main/Main";
import Popular from "@/components/Popular/Popular";
import Section from "@/components/Section/Section";
import TopFooter from "@/components/TopFooter/TopFooter";





export default function Home() {
  return (
    <div >
      <Header />
      <Main />
      <Section />
      <LatesPro />
      <Discount />
      <Popular />
      <Blog />
      <TopFooter />
      
    </div>
  );
}
