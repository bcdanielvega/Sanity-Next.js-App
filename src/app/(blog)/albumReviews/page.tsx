import { AlbumReviews } from "@/components/AlbumReviews";
import { sanityFetch } from "@/sanity/lib/client";
import { ALBUMREVIEWS_QUERY } from "@/sanity/lib/queries";
import { ALBUMREVIEWS_QUERYResult } from "../../../../sanity.types";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function Page() {
  const albumReviews = await sanityFetch<ALBUMREVIEWS_QUERYResult>({
    query: ALBUMREVIEWS_QUERY,
  });



  return <>
  <Header />
  <div className="container mx-auto mt-10 prose prose-xl p-f flex items-center justify-center arimo bg-mintcream">
    <h1 className="text-center uppercase font-agrandir">ALBUMS</h1>
  </div>
  <div className="container mx-auto prose prose-lg p-4 flex items-center justify-center arimo bg-mintcream">
    <h2 className="text-center uppercase font-agrandir">
      Albums That I Think You Should Listen To
    </h2>
  </div>
    <AlbumReviews albumReviews={albumReviews} showSearch={true}/>;
    <Footer companyName="Milestones" />
  </>
}