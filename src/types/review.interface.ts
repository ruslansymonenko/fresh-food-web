export interface IReview {
  id: string;
  text: string;
  rating: string;
  createdAt: string;
}

export interface IReviewDto {
  title: string;
  rating: number;
}
