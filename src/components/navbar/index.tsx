"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const navItems = [
  { name: "Home", href: "/" },
  { name: "Todo List", href: "/todo-list" },
  { name: "Users Departments", href: "/users-departments" },
];

interface NavbarProps {
  className?: string
}

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const pathname = usePathname();
  const containerClass = ["bg-gray-100 border-b border-gray-300 px-4 py-3"]
  if (className) containerClass.push(className)

  return (
    <nav className={containerClass.join(' ')}>
      <ul className="flex gap-6 text-sm font-medium">
        {navItems.map(({ name, href }) => (
          <li key={href}>
            <Link
              href={href}
              className={
                `hover:text-blue-600 transition-colors ${pathname === href ? "text-blue-600 underline" : "text-gray-800"}`
              }
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar