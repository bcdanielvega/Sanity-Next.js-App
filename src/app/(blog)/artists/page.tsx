
import { Artists } from "@/components/Artists";
import { sanityFetch } from "@/sanity/lib/client";


import { ARTISTS_QUERY } from "@/sanity/lib/queries";
import { ARTISTS_QUERYResult } from "../../../../sanity.types";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default async function Page() {
  const artists = await sanityFetch<ARTISTS_QUERYResult>({
    query: ARTISTS_QUERY,
  })

  return <>
  <Header />
  <div className="container mx-auto mt-10 prose prose-xl p-f flex items-center justify-center quicksand bg-mintcream">
    <h1 className="text-center uppercase">ARTISTS</h1>
  </div>
    <div className="container mx-auto prose prose-lg p-4 flex items-center justify-center quicksand bg-mintcream">
      <h2 className="text-center uppercase"> Artists that I think you should listen to</h2>
    </div>
    <Artists artists={artists} />;
    <Footer companyName="Milestones" />

  </>
}