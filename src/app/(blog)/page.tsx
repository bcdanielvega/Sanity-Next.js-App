import { AlbumReviews } from "@/components/AlbumReviews";
import { Artists } from "@/components/Artists";
import { sanityFetch } from "@/sanity/lib/client";
import { ALBUMREVIEWS_QUERY } from "@/sanity/lib/queries";
import { ALBUMREVIEWS_QUERYResult } from "../../../sanity.types";
import { ARTISTS_QUERY } from "@/sanity/lib/queries";
import { ARTISTS_QUERYResult } from "../../../sanity.types";

import { FEATURED_ALBUMREVIEWS_QUERY } from "@/sanity/lib/queries";
import { FEATURED_ALBUMREVIEWS_QUERYResult } from "../../../sanity.types";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Link from "next/link";

export default async function Page() {
  const albumReviews = await sanityFetch<ALBUMREVIEWS_QUERYResult>({
    query: ALBUMREVIEWS_QUERY,
  });

  const featuredAlbums = await sanityFetch<FEATURED_ALBUMREVIEWS_QUERYResult>({
    query: FEATURED_ALBUMREVIEWS_QUERY,
  });

  const artists = await sanityFetch<ARTISTS_QUERYResult>({
    query: ARTISTS_QUERY,
  });

  return (
    <>
      <Header />
      <div className="container mx-auto mt-10 prose prose-xl p-f flex items-center justify-center arimo bg-mintcream flex-col mb-0">
        <h1 className="text-center uppercase mb-5">Music for my son</h1>
        <div className="text-justify">
          MILESTONES is a collection of albums, artists, and genres that I want
          to share with my son <span className="font-bold">Miles</span>. Music
          is a lifelong passion of mine, and these are albums and artists that have shaped
          my life in some form or fashion.
        </div>
      </div>
      <div
        className={`container mx-auto prose prose-lg p-4 flex items-center justify-center arimo bg-mintcream`}
      >
        <h2 className="text-center uppercase">
          These are Daniel's Favorite Albums, but there are so many{" "}
          <Link href="/albumReviews" className="font-bold" >more</Link>
        </h2>
      </div>
      <AlbumReviews albumReviews={featuredAlbums} />;
      <div className="container mx-auto prose prose-lg p-4 flex items-center justify-center arimo bg-mintcream">
        <h2 className="text-center uppercase">
          {" "}
          Artists that I think you should listen to
        </h2>
      </div>
      <Artists artists={artists} />;
      <Footer companyName="Milestones" />
    </>
  );
}
