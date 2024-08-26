import { AlbumReviews } from "@/components/AlbumReviews";
import { Artists } from "@/components/Artists";
import { sanityFetch } from "@/sanity/lib/client";
import { ALBUMREVIEWS_QUERY } from "@/sanity/lib/queries";
import { ALBUMREVIEWS_QUERYResult } from "../../../sanity.types";
import { ARTISTS_QUERY } from "@/sanity/lib/queries";
import { ARTISTS_QUERYResult } from "../../../sanity.types";

import { FEATURED_ALBUMREVIEWS_QUERY } from "@/sanity/lib/queries";
import { FEATURED_ALBUMREVIEWS_QUERYResult } from "../../../sanity.types";

import { FEATURED_ARTISTS_QUERY } from "@/sanity/lib/queries";
import { FEATURED_ARTISTS_QUERYResult } from "../../../sanity.types";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

import Link from "next/link";

export default async function Page() {
  const featuredAlbums = await sanityFetch<FEATURED_ALBUMREVIEWS_QUERYResult>({
    query: FEATURED_ALBUMREVIEWS_QUERY,
  });

  const totalAlbums = await sanityFetch<ALBUMREVIEWS_QUERYResult>({
    query: ALBUMREVIEWS_QUERY,
  });

  const featuredartists = await sanityFetch<FEATURED_ARTISTS_QUERYResult>({
    query: FEATURED_ARTISTS_QUERY,
  });

  return (
    <>
      <Header />
      <div
        className={`container mx-auto mt-10 mb-10 p-f flex items-center justify-center bg-mintcream flex-col mb-0 font-agrandir`}
      >
        <Image
          src={"/MUSIC.png"}
          width={500}
          height={300}
          alt="homepage banner image"
        />
        <h1 className="text-center uppercase mb-5">A Curated collection</h1>
        <div>
          <div className="text-justify container text-xl">
            MILESTONES is a collection of albums, artists, and genres that I
            want to share with my son Miles. Music is a lifelong passion of
            mine, and these are albums and artists that have shaped my life in
            some form or fashion. They have helped me navigate some of the
            toughest times as a teenager, and they have provided the soundtrack
            to my greatest memories. I feel that music is a toolbox for
            emotions, and a well stocked record collection will cover all your
            bases.
          </div>
          <div className="text-justify container text-xl mt-4">
            As he grows up, we'll check off which albums he's listened to. We
            might even get his reviews of the albums to see how his taste in
            music changes as the years go by.
          </div>
          <div className="text-justify container text-xl mt-4">
            Click though{" "}
            <Link
              href="/albumReviews"
              className="font-bold uppercase underline underline-offset-2 decoration-mintcream transition-all duration-1000 hover:decoration-darkgreen"
            >
              Albums
            </Link>{" "}
            and{" "}
            <Link
              href="/artists"
              className="font-bold uppercase underline underline-offset-2 decoration-mintcream transition-all duration-1000 hover:decoration-darkgreen"
            >
              Artists
            </Link>{" "}
            to see the full collection, or start here with some Daniel's
            favorites.
          </div>
        </div>
      </div>
      <div className="container text-justify text-2xl font-agrandir mx-auto flex justify-center mb-8 mt-8 p-16 w-fit border-solid border-darkgreen rounded-2xl border-2">
        <div className="text-xl flex flex-col justify-center">
          <p>I'm always adding new records to the collection.</p>
          <p>Currently, this is where we are at.</p>
        </div>
        <div className="mx-5 flex flex-col items-center">
          <h3 className="text-9xl leading-hang-lose ">{totalAlbums.length}</h3>
          <p>albums</p>
        </div>
      </div>
      <div className="container mx-auto grid font-normal text-2xl mb-4 font-agrandir justify-center mt-20">
        <h3 className="uppercase ">These are Daniel's top records</h3>
      </div>
      <AlbumReviews albumReviews={featuredAlbums} />;
      <div className="container mx-auto prose prose-lg p-4 flex items-center justify-center --font-agrandir bg-mintcream">
        <h2 className="text-center uppercase font-agrandir">
          These are Daniel's favorite artists{" "}
        </h2>
      </div>
      <Artists artists={featuredartists} />;
      <Footer companyName="Milestones" />
    </>
  );
}
