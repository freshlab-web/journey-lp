export const useAppData = () => {
  const el = document.getElementById('root');
  const link = el?.getAttribute('data-link') || null;
  return { link};
};
