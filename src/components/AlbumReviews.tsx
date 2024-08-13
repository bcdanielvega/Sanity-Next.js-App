import { ALBUMREVIEWS_QUERYResult } from "../../sanity.types";

export function AlbumReviews({albumReviews}: {albumReviews: ALBUMREVIEWS_QUERYResult}) {
    return (
        <ul className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
            {albumReviews.map((albumReview) => (
                <li key={albumReview._id}>
                    <a
                        className="block p-4 hover:bg-blue-50"
                        href={`/albumReviews/${albumReview?.slug?.current}`}
                    >
                        {albumReview?.title}
                    </a>
                </li>
            ))}
        </ul>
    )
}