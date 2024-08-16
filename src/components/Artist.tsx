import Image from "next/image";
import { PortableText } from "@portabletext/react";

import { urlFor } from "@/sanity/lib/image";
import { ARTIST_QUERYResult } from "../../sanity.types";
import Link from "next/link";

export function Artist({ artist }: { artist: ARTIST_QUERYResult }) {
  const { name, image, bio } = artist || {};

  return (
    <main className="container mx-auto prose prose-lg p-4">
      {name ? <h1>{name}</h1> : null}
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
      <hr />
      <Link href="/">&larr; Return home</Link>
    </main>
  );
}