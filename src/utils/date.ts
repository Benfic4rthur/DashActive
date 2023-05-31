export const pegaAnos = (listData: any[]) => {
  let uniqueYears: number[] = [];
  listData.forEach(item => {
    const date = new Date(item.date);
    const year = date.getFullYear();
    if (!uniqueYears.includes(year)) {
      uniqueYears.push(year);
    }
  });
  return uniqueYears.map(year => {
    return { value: String(year), label: String(year) };
  });
};

export const pegaMeses = (listaMeses: any[]) => {
  return listaMeses.map((mes, index) => {
    return {
      value: String(index + 1),
      label: mes,
    };
  });
};