"use client";

import Link from 'next/link'
import Image from 'next/image'
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation"
import { routeConfig } from "@/config/route-config";


const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-full h-16 mr-4">
            <Image
              fill
              alt="logo"
              src="/oxeai-logo-full-white.svg"
            />
          </div>
        </Link>
        <div className="space-y-1">
          {routeConfig.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
              pathname === route.href ? "text-white bg-white/10" : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h5 w-5 mr-3", route.color )}/>
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar