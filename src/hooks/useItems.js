import { useMemo } from "react";

export const useSortedItems = (items, sort) => {
  //Кеширование результата выполнения, пока массив зависимостей не изменится
  const sortedItems = useMemo(() => {
    if (sort) {
      return [...items].sort((a, b) => (a[sort] > b[sort] ? 1 : -1));
    }
    return items;
  }, [sort, items]);

  return sortedItems;
};

export const useItems = (items, sort, query) => {
  const sortedItems = useSortedItems(items, sort);
  const sortedAndSearchedItems = useMemo(() => {
    return sortedItems.filter((item) =>
      item.title.toLowerCase().includes(query)
    );
  }, [query, sortedItems]);

  return sortedAndSearchedItems;
};
