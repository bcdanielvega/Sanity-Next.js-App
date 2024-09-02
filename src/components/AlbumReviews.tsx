"use client";

import { ALBUMREVIEWS_QUERYResult, AlbumReview } from "../../sanity.types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import React, { useState, useEffect } from "react";

export function AlbumReviews({
  albumReviews,
  showSearch,
  limit,
  amount,
}: {
  albumReviews: ALBUMREVIEWS_QUERYResult;
  showSearch: boolean;
  limit?: boolean;
  amount?: number;
}) {
  // Randomize the order for the albums
  albumReviews = albumReviews.sort((a, b) => 0.5 - Math.random());
  if(limit && amount !== null) {
    albumReviews.splice(amount? amount : 0);
  }

  // How would I add state to this?

  const [query, setQuery] = useState<string>("");
  const [albums] = useState(albumReviews);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const filteredItems = albums.filter((album) =>
    album.title ? album.title.toLowerCase().includes(query.toLowerCase()) : null
  );

  return (
    <>
      <div className="flex flex-col">
        {showSearch ? (
          <div className="flex justify-center p-8 font-agrandir">
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder="Search..."
              className="border border-2 p-2 rounded w-2/5 font-agrandir"
            />
          </div>
        ) : null}
        <ul className="container mx-auto grid grid-cols-4 divide-blue-100">
          {filteredItems.map((albumReview) => (
            <li key={albumReview._id}>
              <a
                className="block p-4 hover:bg-darkgreen hover:text-mintcream flex flex-col items-center rounded-lg"
                href={`/albumReviews/${albumReview?.slug?.current}`}
              >
                {albumReview.mainImage?.asset?._ref ? (
                  <Image
                    className="rounded-lg"
                    src={urlFor(albumReview?.mainImage?.asset?._ref)
                      .width(300)
                      .height(300)
                      .url()}
                    width={300}
                    height={300}
                    alt={albumReview.title || ""}
                  />
                ) : null}
                <div className="font-agrandir text-center pt-3">
                  {albumReview?.title}
                </div>
                <div className="font-agrandir text-center">
                  {albumReview?.artist?.name}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
