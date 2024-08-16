import { groq } from "next-sanity";

export const ALBUMREVIEWS_QUERY = groq`*[_type == "albumReview" && defined(slug.current)] | order(_id desc) {
  _id, title, slug, mainImage, artist->{name}
}`;

export const ALBUMREVIEW_QUERY = groq`*[_type == "albumReview" && slug.current == $slug][0]{
  title, body, mainImage
}`;

export const ARTISTS_QUERY = groq`*[_type == "artist"] {_id, name, slug, image}`;

export const ARTIST_QUERY = groq`*[_type == "artist" && slug.current == $slug][0] {name, bio, image}`;