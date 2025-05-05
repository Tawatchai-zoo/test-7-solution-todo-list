import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col mx-auto mt-20 gap-5 text-center">
      <p className='text-5xl font-bold text-shadow-lg/10 mb-5 mx-auto'>7 solution test</p>
      <Link
        href='/todo-list'
        className=
        'mx-auto py-3 px-7 text-xl shadow-md rounded-md hover:bg-blue-600 hover:text-white transition-colors min-w-80'
      >
        Todo List
      </Link>
      <Link
        href='/users-departments'
        className=
        'mx-auto py-3 px-7 text-xl shadow-md rounded-md hover:bg-blue-600 hover:text-white transition-colors min-w-80'
      >
        Users Departments (gRPC)
      </Link>
    </div>
  );
}
