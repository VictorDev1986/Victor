"use client"

import Link from "next/link";
import { itemsNavbar } from "@/data";
import { usePathname } from "next/navigation";
import { MotionTransition } from "./transition-component";

const Navbar = () => {
    const router = usePathname()

    return (
        <MotionTransition position="right" className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10 ">
            <nav>
                <div className="flex items-center justify-center gap-2 px-4 mb-0  py-1 m rounded-full bg-black/50 background-blur-sm">
                    {itemsNavbar.map((item) => (
                        <div
                            key={item.id}
                            className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-green-500 ${router === item.link && 'bg-green-500'}`}
                            data-tooltip-target="tooltip-default">
                            <Link href={item.link}>{item.icon} </Link>
                        </div>
                    ))}
                </div>
            </nav>
        </MotionTransition>
    );
};

export default Navbar
        