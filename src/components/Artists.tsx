import { ARTISTS_QUERYResult } from "../../sanity.types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";


export function Artists({artists}: {artists: ARTISTS_QUERYResult}) {
    // Randomize the order for the albums 
    artists = artists.sort((a, b) => 0.5 - Math.random());   

    // How would I add state to this? 
    
    return (
        <ul className="container mx-auto grid grid-cols-4 divide-blue-100">
            {artists.map((artist) => (

                <li key={artist._id}>
                    <a
                        className="block p-4 hover:bg-cambridgeblue flex flex-col items-center rounded-lg"
                        href={`/artists/${artist?.slug?.current}`}
                    >
                        {artist.image?.asset?._ref ? (
                            <Image 
                            className="rounded-lg"
                            src={urlFor(artist?.image?.asset?._ref).width(300).height(300).url()}
                            width={300}
                            height={300}
                            alt={artist.name || ""}
                        />
                        ) : null }
                        <div className="quicksand text-center pt-3">{artist?.name}</div>
                    </a>
                </li>
            ))}
        </ul>
    )
}