import Image from "next/image";
import { PortableText } from "@portabletext/react";

import { urlFor } from "@/sanity/lib/image";
import { ALBUMREVIEW_QUERYResult } from "../../sanity.types";
import Link from "next/link";

export function Review({ review }: { review: ALBUMREVIEW_QUERYResult }) {
  const { title, mainImage, body, artist, genre } = review || {};

  return (
    <main className="container mx-auto prose prose-xl p-4 mt-6">
      {title ? <h1 className="font-agrandir mb-2">{title}</h1> : null}
      {artist ? <h2 className="font-agrandir mt-1"> {artist.name}</h2> : null}
      {mainImage?.asset?._ref ? (
        <Image
          className="float-left m-0 w-1/3 mr-4 rounded-lg"
          src={urlFor(mainImage?.asset?._ref).width(300).height(300).url()}
          width={300}
          height={300}
          alt={title || ""}
        />
      ) : null}
      <div className="font-agrandir">
        {body ? <PortableText value={body}/> : null}
      </div>
      <hr />
      <Link href="/" className='font-agrandir'>&larr; Return home</Link>
    </main>
  );
}