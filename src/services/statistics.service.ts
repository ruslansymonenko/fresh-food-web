import { IStatistics } from '@/types/statistics.interface';
import { axiosWithAuth } from '@/utils/api/interceptors';
import { IServiceResponse } from '@/types/service.intrfecace';

interface IStatisticsService {
  sendStatus<T>(status: boolean, message: string, data: T): IServiceResponse<T>;
  getMain(): Promise<IServiceResponse<IStatistics | null>>;
}

export enum StatisticsRoutes {
  GET_PROFILE = '/statistics/main',
}

export class StatisticsService implements IStatisticsService {
  sendStatus<T>(status: boolean, message: string, data: T): IServiceResponse<T> {
    return {
      status: status,
      message: message,
      data: data,
    };
  }

  public async getMain(): Promise<IServiceResponse<IStatistics | null>> {
    try {
      const { data } = await axiosWithAuth.get<IStatistics>(StatisticsRoutes.GET_PROFILE);

      if (data) {
        return this.sendStatus<IStatistics>(true, 'Statistics received', data);
      } else {
        return this.sendStatus<null>(true, 'Statistics not received', null);
      }
    } catch (error) {
      console.log(error);
      return this.sendStatus<null>(true, 'Statistics not received', null);
    }
  }
}

export default new StatisticsService();
