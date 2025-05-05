import React from 'react'

interface TodoProps {
  id: string
  children: React.ReactNode
}

const TodoButton: React.FC<TodoProps> = ({ id, children }) => {
  return (
    <button
      data-id={id}
      className="p-2 rounded-md font-medium shadow-md bg-white cursor-pointer hover:bg-gray-100 hover:shadow-xs"
    >
      {children}
    </button>
  )
}

export default TodoButton