import ProductDetail from "@/components/single-product/deatail";
import DetailCards from "@/components/single-product/detailcards";


export default async function SProduct({ params }:{params:Promise<{id:string}>} ) {

  return (
    <>
      <ProductDetail
       params={params}
      />
      <DetailCards />
    </>
  );
}