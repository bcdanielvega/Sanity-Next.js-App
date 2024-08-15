import { AlbumReviews } from "@/components/AlbumReviews";
import { sanityFetch } from "@/sanity/lib/client";
import { ALBUMREVIEWS_QUERY } from "@/sanity/lib/queries";
import { ALBUMREVIEWS_QUERYResult } from "../../../sanity.types";

export default async function Page() {
  const albumReviews = await sanityFetch<ALBUMREVIEWS_QUERYResult>({
    query: ALBUMREVIEWS_QUERY,
  });

  return <>
  <div className={`container mx-auto prose prose-lg p-4 flex items-center justify-center quicksand bg-mintcream`}>
    <h1 className="text-center uppercase">
      Albums That I Think You Should Listen To
    </h1>
  </div>
    <AlbumReviews albumReviews={albumReviews} />;
  </>
}