import { groq } from "next-sanity";

export const ALBUMREVIEWS_QUERY = groq`*[_type == "albumReview" && defined(slug.current)] | order(_id desc) {
  _id, title, slug, mainImage, artist->{name}
}`;

export const ALBUMREVIEW_QUERY = groq`*[_type == "albumReview" && slug.current == $slug][0]{
  title, body, mainImage, artist->{name, slug}, genre->{name, slug}
}`;

export const ARTISTS_QUERY = groq`*[_type == "artist"] {_id, name, slug, image}`;

export const ARTIST_QUERY = groq`*[_type == "artist" && slug.current == $slug][0] {name, slug, bio, image, origin, genre[]->{name, slug}, albums[]->{_id, title, mainImage, slug}}`;

export const FEATURED_ALBUMREVIEWS_QUERY = groq`*[_type == "albumReview" && defined(slug.current) && featured] | order(_id desc) {
  _id, title, slug, mainImage, artist->{name}
}`;

export const FEATURED_ARTISTS_QUERY = groq`*[_type == "artist" && featured] {_id, name, slug, image}`;

// Get Jazz Records

