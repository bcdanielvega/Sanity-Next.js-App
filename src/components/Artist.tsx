import Image from "next/image";
import { PortableText } from "@portabletext/react";

import { urlFor } from "@/sanity/lib/image";
import { ARTIST_QUERYResult } from "../../sanity.types";
import Link from "next/link";
import { AlbumReviews } from "./AlbumReviews";

import styles from "./Artist.module.css";

export function Artist({ artist }: { artist: ARTIST_QUERYResult }) {
  const { name, image, bio, origin, genre, albums } = artist || {};

  return (
    <main className="container mx-auto prose prose-lg p-4 font-agrandir mt-8 text-xl">
      <div className="mb-4">
        {name ? <h1 className="mb-4">{name}</h1> : null}
        {origin ? <h2 className="my-0">{origin}</h2> : null}
        {genre ? (
          <ul className={`list-none flex pl-0 ${styles.genreList} mb-0`}>
            {genre.map((genre) => (
              <li>{genre.name}</li>
            ))}
          </ul>
        ) : null}
      </div>
      {image?.asset?._ref ? (
        <Image
          className="float-left m-0 w-1/3 mr-4 rounded-lg"
          src={urlFor(image?.asset?._ref).width(300).height(300).url()}
          width={300}
          height={300}
          alt={name || ""}
        />
      ) : null}
      {bio ? <PortableText value={bio} /> : null}

      <div>
        {albums ? (
          <ul className="container mx-auto grid grid-cols-4 divide-blue-100 pl-0">
            {albums.map((album) => (
              <li key={album._id} className="pl-0 my-0">
                <a
                  className="block p-4 hover:bg-darkgreen hover:text-mintcream flex flex-col items-center rounded-lg"
                  href={`/albumReviews/${album?.slug?.current}`}
                >
                  {album.mainImage?.asset?._ref ? (
                    <Image
                      className="rounded-lg"
                      src={urlFor(album?.mainImage?.asset?._ref)
                        .width(300)
                        .height(300)
                        .url()}
                      width={300}
                      height={300}
                      alt={album.title || ""}
                    />
                  ) : null}
                  <div className="font-agrandir text-center pt-3">
                    {album?.title}
                  </div>
                  <div className="font-agrandir text-center">
                    {album?.artist?.name}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <hr />
      <div className="flex justify-between text-xl">
        <Link className={`font-agrandir ${styles.returnLinks}`} href="/">
          &larr; Return home
        </Link>
        <Link className={`font-agrandir ${styles.returnLinks}`} href="/artists">
          Return to Artists &rarr;
        </Link>
      </div>
    </main>
  );
}
