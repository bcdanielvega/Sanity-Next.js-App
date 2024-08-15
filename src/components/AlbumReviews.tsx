import { ALBUMREVIEWS_QUERYResult } from "../../sanity.types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";


export function AlbumReviews({albumReviews}: {albumReviews: ALBUMREVIEWS_QUERYResult}) {
        
    return (
        <ul className="container mx-auto grid grid-cols-4 divide-blue-100">
            {albumReviews.map((albumReview) => (

                <li key={albumReview._id}>
                    <a
                        className="block p-4 hover:bg-linen flex flex-col items-center rounded-lg"
                        href={`/albumReviews/${albumReview?.slug?.current}`}
                    >
                        {albumReview.mainImage?.asset?._ref ? (
                            <Image 
                            className="rounded-lg"
                            src={urlFor(albumReview?.mainImage?.asset?._ref).width(300).height(300).url()}
                            width={300}
                            height={300}
                            alt={albumReview.title || ""}
                        />
                        ) : null }
                        <div className="quicksand text-center pt-3">{albumReview?.title}</div>
                    </a>
                </li>
            ))}
        </ul>
    )
}