export const convertPrice = (price: number) => {
  return price.toLocaleString('ua', {
    style: 'currency',
    currency: 'UAH',
  });
};
