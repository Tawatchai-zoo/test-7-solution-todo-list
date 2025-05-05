'use client'

import TodoList from '@/components/TodoList';
import useTodoList from './hooks/useTodoList';
import { TodoItemType } from '@/constants/todo.constant';

export default function TodoSortingApp() {
  const { mainList,
    fruitList,
    vegetableList,
    handleMainListClick,
    handleRemoveList } = useTodoList()

  return (
    <div className="flex flex-col p-6 max-w-4xl mx-auto">
      <div className="text-2xl font-bold mb-6 flex justify-between">
        <h1 >Todo List App</h1>
        <a href='https://github.com/Tawatchai-zoo/test-7-solution-todo-list' target="_blank" className="hover:text-blue-500">Repository</a>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <TodoList list={mainList} handleOnClick={handleMainListClick} className='px-0 py-0' overrideStyle={true} />

        <TodoList list={fruitList} handleOnClick={handleRemoveList} header={TodoItemType.FRUIT} />

        <TodoList list={vegetableList} handleOnClick={handleRemoveList} header={TodoItemType.VEGETABLE} />
      </div>
    </div>
  );
}