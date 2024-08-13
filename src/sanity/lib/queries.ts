import { groq } from "next-sanity";

export const ALBUMREVIEWS_QUERY = groq`*[_type == "albumReview" && defined(slug.current)][0...12]{
  _id, title, slug
}`;

export const ALBUMREVIEW_QUERY = groq`*[_type == "albumReview" && slug.current == $slug][0]{
  title, body, mainImage
}`;