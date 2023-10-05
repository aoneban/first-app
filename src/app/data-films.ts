export interface DataFilms {
  pagesCount?: number;
  films: Film[];
}

interface Film {
  filmId?: number;
  nameRu?: string;
  nameEn?: string;
  year?: string;
  filmLength?: string;
  countries?: { country: string }[];
  genres?: { genre: string }[];
  rating?: number;
  ratingVoteCount?: number;
  posterUrl?: string;
  posterUrlPreview?: string;
  ratingChange?: number | null;
  isRatingUp?: boolean | null;
  isAfisha?: number;
}
