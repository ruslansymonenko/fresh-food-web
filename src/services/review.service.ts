import { IReview, IReviewDto } from '@/types/review.interface';
import { axiosClassic, axiosWithAuth } from '@/api/interceptors';
import { IServiceResponse } from '@/types/service.intrfecace';

interface IReviewService {
  sendStatus<T>(status: boolean, message: string, data: T): IServiceResponse<T>;
  getAll(): Promise<IServiceResponse<IReview[] | null>>;
  getById(categoryId: string): Promise<IServiceResponse<IReview | null>>;
  create(productId: string, dto: IReviewDto): Promise<IServiceResponse<IReview | null>>;
  update(reviewId: string, dto: IReviewDto): Promise<IServiceResponse<IReview | null>>;
  delete(reviewId: string): Promise<IServiceResponse<null>>;
}

export enum ReviewRoutes {
  CREATE = '/review/create',
  UPDATE = '/review/update',
  DELETE = '/review/delete',
  GET_ALL = '/review/get-all',
  GET_BY_ID = '/review/by-id',
}

export class ReviewService implements IReviewService {
  sendStatus<T>(status: boolean, message: string, data: T): IServiceResponse<T> {
    return {
      status: status,
      message: message,
      data: data,
    };
  }

  public async getAll(): Promise<IServiceResponse<IReview[] | null>> {
    try {
      const { data } = await axiosClassic.get<IReview[]>(ReviewRoutes.GET_ALL);

      if (data) {
        return this.sendStatus<IReview[]>(true, 'Reviews received', data);
      } else {
        return this.sendStatus<null>(true, 'Reviews not received', null);
      }
    } catch (error) {
      console.log(error);
      return this.sendStatus<null>(true, 'Reviews not received', null);
    }
  }

  public async getById(productId: string): Promise<IServiceResponse<IReview | null>> {
    try {
      const { data } = await axiosClassic.get<IReview>(`${ReviewRoutes.GET_BY_ID}/${productId}`);

      if (data) {
        return this.sendStatus<IReview>(true, 'Reviews received', data);
      } else {
        return this.sendStatus<null>(true, 'Reviews received', null);
      }
    } catch (error) {
      console.log(error);
      return this.sendStatus<null>(true, 'Reviews not received', null);
    }
  }

  public async create(
    productId: string,
    dto: IReviewDto,
  ): Promise<IServiceResponse<IReview | null>> {
    try {
      const { data } = await axiosWithAuth.post<IReview>(
        `${ReviewRoutes.CREATE}/${productId}`,
        dto,
      );

      if (data) {
        return this.sendStatus<IReview>(true, 'Review created', data);
      } else {
        return this.sendStatus<null>(true, 'Review not created', null);
      }
    } catch (error) {
      console.log(error);
      return this.sendStatus<null>(true, 'Reviews not received', null);
    }
  }

  public async update(
    reviewId: string,
    dto: IReviewDto,
  ): Promise<IServiceResponse<IReview | null>> {
    try {
      const { data } = await axiosWithAuth.put<IReview>(`${ReviewRoutes.UPDATE}/${reviewId}`, dto);

      if (data) {
        return this.sendStatus<IReview>(true, 'Reviews received', data);
      } else {
        return this.sendStatus<null>(true, 'Reviews received', null);
      }
    } catch (error) {
      console.log(error);
      return this.sendStatus<null>(true, 'Reviews not received', null);
    }
  }

  public async delete(reviewId: string): Promise<IServiceResponse<null>> {
    try {
      const { data } = await axiosWithAuth.delete<IReview>(`${ReviewRoutes.DELETE}/${reviewId}`);

      if (data) {
        return this.sendStatus<null>(true, 'Review deleted', null);
      } else {
        return this.sendStatus<null>(true, 'Review not deleted', null);
      }
    } catch (error) {
      console.log(error);
      return this.sendStatus<null>(true, 'Reviews not deleted', null);
    }
  }
}

export default new ReviewService();
