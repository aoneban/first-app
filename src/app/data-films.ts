export interface DataFilms {
  pagesCount?: number;
  films: Film[];
}

export interface Film {
  filmId?: string; //it's mistake
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
