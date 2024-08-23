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
import Image from "next/image";

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
      <div className={`container mx-auto mt-10 mb-10 p-f flex items-center justify-center bg-mintcream flex-col mb-0 font-agrandir`}>
        <h1 className="text-center uppercase mb-5">Music for my son</h1>
        <div>
          <div className="text-justify container text-xl">
            MILESTONES is a collection of albums, artists, and genres that I
            want to share with my son <span className="font-semibold uppercase">Miles</span>.
            Music is a lifelong passion of mine, and these are albums and
            artists that have shaped my life in some form or fashion.
          </div>

          {/* <div className="p-5">
            <Image
              className="rounded-lg"
              src={"/mohawk-daniel-drums.jpg"}
              width={500}
              height={300}
              alt="Daniel playing drums"
            />
          </div> */}
        </div>
      </div>
      <div className="container mx-auto grid font-normal text-2xl mb-4 font-agrandir justify-center">
        <h3 className="uppercase ">These are Daniel's top records</h3>
      </div>
      <AlbumReviews albumReviews={featuredAlbums} />;
      <div className="container mx-auto prose prose-lg p-4 flex items-center justify-center --font-agrandir bg-mintcream">
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
