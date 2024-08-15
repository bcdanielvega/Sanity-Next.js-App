import { groq } from "next-sanity";

export const ALBUMREVIEWS_QUERY = groq`*[_type == "albumReview" && defined(slug.current)] | order(_id desc) {
  _id, title, slug, mainImage, artist->{name}
}`;

export const ALBUMREVIEW_QUERY = groq`*[_type == "albumReview" && slug.current == $slug][0]{
  title, body, mainImage
}`;