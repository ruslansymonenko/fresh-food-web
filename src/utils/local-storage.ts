export const getLocalStorage = (name: string) => {
  if (typeof localStorage[name] === 'undefined') {
    const ls = localStorage.getItem(name);
    return ls ? JSON.parse(ls) : null;
  }

  return null;
};
