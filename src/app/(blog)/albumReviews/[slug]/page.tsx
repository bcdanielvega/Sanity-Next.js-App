import { QueryParams } from "next-sanity";
import { notFound } from "next/navigation";

import { ALBUMREVIEW_QUERY, ALBUMREVIEWS_QUERY } from "@/sanity/lib/queries";
import { client, sanityFetch } from "@/sanity/lib/client";
import {
  ALBUMREVIEW_QUERYResult,
  ALBUMREVIEWS_QUERYResult,
} from "../../../../../sanity.types";
import { Review } from "@/components/Review";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  const albumReviews = await client.fetch<ALBUMREVIEWS_QUERYResult>(
    ALBUMREVIEWS_QUERY,
    {},
    { perspective: "published" }
  );

  return albumReviews.map((albumReview) => ({
    slug: albumReview?.slug?.current,
  }));
}

export default async function Page({ params }: { params: QueryParams }) {
  const albumReview = await sanityFetch<ALBUMREVIEW_QUERYResult>({
    query: ALBUMREVIEW_QUERY,
    params,
  });
  if (!albumReview) {
    return notFound();
  }
  return <>
  <Header />
  <Review review={albumReview} />;
  <Footer companyName="Milestones" />

  </>
}