import Category from "@/components/Category";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import MusicBox from "@/components/MusicBox";
import Product from "@/components/Product";
import Sales from "@/components/Sales";
import SecFooter from "@/components/SecFooter";
import SecProduct from "@/components/SecProduct";


export default function Home() {
  return (
    <main>
      <Hero/>
      <Sales />
      <Category />
      <Product />
      <MusicBox />
      <SecProduct/>
      <Featured />
      <SecFooter />
    </main>
  );
}
