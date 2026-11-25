export const formatDate = (date: string) => {
  if (!date) return 'n.d.';
  const [year, month, day] = date.split('-');
  return `${day}/${month}/${year}`;
};
