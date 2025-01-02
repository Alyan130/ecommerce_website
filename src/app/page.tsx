import CategoryCards from "@/components/categories";
import { FeaturedSection } from "@/components/feature";
import FeaturedProdoucts from "@/components/featuredProducts";
import HeroSection from "@/components/Hero";
import Products from "@/components/productSection";
import Section3 from "@/components/section2";


export default function Home() {
  return (
    <>
   <HeroSection/> 
   <FeaturedSection/>
   <FeaturedProdoucts/>
   <CategoryCards/>
   <Section3/>
   <Products/>
   </>
  );
}
