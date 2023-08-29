"use client";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { usePathname} from "next/navigation";
import { cn } from "@/lib/utils";
import { CodeIcon, ImageIcon, LayoutDashboard, MessageCircleIcon, MusicIcon, Settings, VideoIcon } from "lucide-react";

const monstserrat = Montserrat({weight:"600", subsets:["latin"]});
const routes = [
    {
        label:"Dashboard",
        icon:LayoutDashboard,
        href:"/dashboard",
        color:"text-sky-500"
    },
    {
        label:"Conversation",
        icon:MessageCircleIcon,
        href:"/",
        color:"text-sky-500"
    },
    {
        label:"Image Generation",
        icon:ImageIcon,
        href:"/",
        color:"text-sky-500"
    },
    {
        label:"Video Generation",
        icon:VideoIcon,
        href:"/",
        color:"text-sky-500"
    },
    {
        label:"Music Generation",
        icon:MusicIcon,
        href:"/",
        color:"text-sky-500"
    },
    {
        label:"Code Generation",
        icon:CodeIcon,
        href:"/",
        color:"text-sky-500"
    },
    {
        label:"Settings",
        icon:Settings,
        href:"/",
        color:"text-sky-500"
    },

]

const Sidebar = () => {
    const pathname = usePathname();
    return (  

        <div className="bg-[#111827] text-white space-y-4 py-4 flex flex-col h-full">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className="relative w-8 h-8 mr-4">
                        <Image fill alt = "Logo" src="/logo.png"/>                        
                    </div>
                    <h1 className={cn ("text-2xl font-bold", monstserrat.className)} >
                        Robo Crafter
                    </h1>                    
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link href={route.href} key={route.href}
                        className={cn("text-sm group flex p-3 w-full justify-start font-medium curson-pointer hover:bg-white/10 rounded-lg transition",
                        pathname === route.href ? "text-white bg-white/10" : "text-zinc-400"
                        )}>
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)}/>
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default Sidebar;
// 55:28