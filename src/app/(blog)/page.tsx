import { AlbumReviews } from "@/components/AlbumReviews";
import { Artists } from "@/components/Artists";
import { sanityFetch } from "@/sanity/lib/client";
import { ALBUMREVIEWS_QUERY } from "@/sanity/lib/queries";
import { ALBUMREVIEWS_QUERYResult } from "../../../sanity.types";
import { ARTISTS_QUERY } from "@/sanity/lib/queries";
import { ARTISTS_QUERYResult } from "../../../sanity.types";
import Header from "@/components/Header";


export default async function Page() {
  const albumReviews = await sanityFetch<ALBUMREVIEWS_QUERYResult>({
    query: ALBUMREVIEWS_QUERY,
  });

  const artists = await sanityFetch<ARTISTS_QUERYResult>({
    query: ARTISTS_QUERY,
  })

  return <>
  <Header />
  <div className="container mx-auto mt-10 prose prose-xl p-f flex items-center justify-center quicksand bg-mintcream flex-col mb-0">
    <h1 className="text-center uppercase mb-5">Music for my son</h1>
    <div className="text-center">MILESTONES is a collection of albums and artists that I want to show my son Miles. These are albums that have shaped my life in some form or fashion.</div>
  </div>
  <div className={`container mx-auto prose prose-lg p-4 flex items-center justify-center quicksand bg-mintcream`}>
    <h2 className="text-center uppercase">
      Albums That I Think You Should Listen To
    </h2>
  </div>
    <AlbumReviews albumReviews={albumReviews} />;

    <div className="container mx-auto prose prose-lg p-4 flex items-center justify-center quicksand bg-mintcream">
      <h2 className="text-center uppercase"> Artists that I think you should listen to</h2>
    </div>
    <Artists artists={artists} />;
  </>
}