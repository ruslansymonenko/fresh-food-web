import { useQuery } from 'react-query';
import { UserService } from '@/services/user.service';

export const useProfile = () => {
  const userService = new UserService();

  const { data } = useQuery(['get profile'], () => {
    return userService.getProfile();
  });
};
