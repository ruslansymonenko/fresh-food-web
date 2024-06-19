import { useTypedSelector } from '@/hooks/useTypedSelector';

export const useCheckAuth = () => useTypedSelector((state) => state.user);
