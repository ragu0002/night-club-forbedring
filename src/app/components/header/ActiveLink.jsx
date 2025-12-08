"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ActiveLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={
        isActive
          ? "gradient-underline-sm   text-(--color-accent)"
          : "hover:text-(--color-accent) transition-all transition-discrete"
      }>
      {children}
    </Link>
  );
}
