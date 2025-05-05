import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col mx-auto text-center mt-20">
      <p className='text-5xl font-bold text-shadow-lg/10 mb-10'>7 solution test</p>
      <Link
        href='/todo-list'
        className=
        'mx-auto py-3 px-7 text-xl shadow-md rounded-md hover:bg-blue-600 hover:text-white transition-colors '
      >
        Todo List
      </Link>
    </div>
  );
}
