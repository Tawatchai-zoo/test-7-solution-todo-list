import React from 'react'
import TodoButton from '../TodoButton'

interface TodoListProps {
  handleOnClick: (e: React.MouseEvent) => void
  list: Record<'name', string>[]
  header?: string
  className?: string
  overrideStyle?: boolean
}

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
const TodoList: React.FC<TodoListProps> = ({ handleOnClick = () => null, list = [], header = '', className = '', overrideStyle }) => {
  const containerClassName = overrideStyle ? [] : ["bg-grey p-4 rounded-lg border-1"]
  if (className) containerClassName.push(className)
  return (
    <div className={containerClassName.join(' ')}>
      {header && <h2 className="text-xl font-semibold mb-4">{header}</h2>}
      <div className="flex flex-col gap-2" onClick={handleOnClick}>
        {list.map((item) => <TodoButton key={item.name} id={item.name}>{item.name}</TodoButton>)}
      </div>
    </div>
  )
}

export default TodoList