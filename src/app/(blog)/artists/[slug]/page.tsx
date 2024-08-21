import { QueryParams } from "next-sanity";
import { notFound } from "next/navigation";

import { ARTIST_QUERY, ARTISTS_QUERY } from "@/sanity/lib/queries";
import { client, sanityFetch } from "@/sanity/lib/client";
import { ARTIST_QUERYResult, ARTISTS_QUERYResult } from "../../../../../sanity.types";

import { Artist } from "@/components/Artist"
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
    const artists = await client.fetch<ARTISTS_QUERYResult>(
        ARTISTS_QUERY,
        {},
        { perspective: "published"}
    );

    return artists.map((artist) => ({
        slug: artist?.slug?.current,
    }));
}

export default async function Page({ params}: { params: QueryParams}) {
    const artist = await sanityFetch<ARTIST_QUERYResult>({
        query: ARTIST_QUERY,
        params,
    });
    if (!artist) {
        return notFound();
    }

    return <>
        <Header />
        <Artist artist={artist} />;
        <Footer companyName="Milestones" />
    </>
}