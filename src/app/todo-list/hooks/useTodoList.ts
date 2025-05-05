import { EXPIRE_TIME, initialTodoList, TodoItemType } from "@/constants/todo.constant";
import { SelectedTodoType } from "@/types/todo.type";
import React, { useEffect, useMemo, useState } from "react";

const useTodoList = () => {
  const [selectedIds, setSelectedIds] = useState<SelectedTodoType>({});

  const mainList = useMemo(() => {
    return initialTodoList.filter((item) => !selectedIds[item.name]);
  }, [selectedIds]);

  const fruitList = useMemo(() => {
    return initialTodoList.filter(
      (item) => item.type === TodoItemType.FRUIT && selectedIds[item.name]
    );
  }, [selectedIds]);

  const vegetableList = useMemo(() => {
    return initialTodoList.filter(
      (item) => item.type === TodoItemType.VEGETABLE && selectedIds[item.name]
    );
  }, [selectedIds]);

  // Handle click on main list items
  const handleMainListClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;

    const button = target.closest("button");
    if (!button) return;

    const itemId = button.dataset.id;
    if (!itemId) return;

    setSelectedIds((prev) => ({
      ...prev,
      [itemId]: Date.now() + EXPIRE_TIME,
    }));
  };

  const handleRemoveList = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;

    const button = target.closest("button");
    if (!button) return;

    const itemId = button.dataset.id;
    if (!itemId) return;

    setSelectedIds((prev) => {
      const newSelected = { ...prev };
      delete newSelected[itemId];
      return newSelected;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const unixTimeNow = Date.now();
      setSelectedIds((prev) => {
        const newSelected: SelectedTodoType = {};
        let hasChange = false;
        for (const id of Object.keys(prev)) {
          if (prev[id] > unixTimeNow) newSelected[id] = prev[id];
          else hasChange = true;
        }
        return hasChange ? newSelected : prev;
      });
    }, 500); // check every 0.5 sec

    return () => clearInterval(interval);
  }, []);

  return {
    mainList,
    fruitList,
    vegetableList,
    handleMainListClick,
    handleRemoveList,
  };
};

export default useTodoList;
