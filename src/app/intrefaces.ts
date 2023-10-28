export interface DataFilm {
  pagesCount: number;
  kinopoiskId: number;
  nameRu: string;
  nameEn: string;
  year: string;
  filmLength: string;
  countries: { country: string }[];
  genres: { genre: string }[];
  rating: number;
  ratingVoteCount: number;
  posterUrl: string;
  posterUrlPreview: string;
  ratingChange: number | null;
  isRatingUp: boolean | null;
  isAfisha: number;
  nameOriginal: string;
  description: string;
}

export interface DataFilms {
  pagesCount?: number;
  films: Film[];
}

export interface Film {
  filmId: string; //it's mistake
  nameRu: string;
  nameEn: string;
  year: string;
  filmLength: string;
  countries: { country: string }[];
  genres: { genre: string }[];
  rating: number;
  ratingVoteCount: number;
  posterUrl: string;
  posterUrlPreview: string;
  ratingChange: number | null;
  isRatingUp: boolean | null;
  isAfisha: number;
}

export interface FilmSearch {
  keyword: string;
  pagesCount: number;
  films: Film[];
}

export interface Review {
  items?: ReviewList;
  kinopoiskId?: number;
  type?: "POSITIVE" | "NEGATIVE" | "NEUTRAL"; // Тип должен быть "POSITIVE", "NEGATIVE" или "NEUTRAL"
  date?: string; // Дата в формате строки
  positiveRating?: number;
  negativeRating?: number;
  author?: string;
  title?: string;
  description?: string;
}

export interface ReviewList {
  total?: number;
  totalPages?: number;
  totalPositiveReviews?: number;
  totalNegativeReviews?: number;
  totalNeutralReviews?: number;
  items?: Review[];

}
