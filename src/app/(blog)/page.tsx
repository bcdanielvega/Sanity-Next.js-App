import { AlbumReviews } from "@/components/AlbumReviews";
import { Artists } from "@/components/Artists";
import { sanityFetch } from "@/sanity/lib/client";
import { ALBUMREVIEWS_QUERY } from "@/sanity/lib/queries";
import { ALBUMREVIEWS_QUERYResult } from "../../../sanity.types";
import { ARTISTS_QUERY } from "@/sanity/lib/queries";
import { ARTISTS_QUERYResult } from "../../../sanity.types";

export default async function Page() {
  const albumReviews = await sanityFetch<ALBUMREVIEWS_QUERYResult>({
    query: ALBUMREVIEWS_QUERY,
  });

  const artists = await sanityFetch<ARTISTS_QUERYResult>({
    query: ARTISTS_QUERY,
  })

  return <>
  <div className="container mx-auto mt-10 prose prose-xl p-f flex items-center justify-center quicksand bg-mintcream">
    <h1 className="text-center uppercase">Music for Miles</h1>
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