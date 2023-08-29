"use client"
import { cn } from "@/lib/utils"
import { ArrowRight, Code2Icon, ImageIcon, MessageCircleIcon, Music2Icon, VideoIcon } from "lucide-react"
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
const tools = [
  {
    label: "Conversation",
    icon:MessageCircleIcon,
    color:"text-sky-500",
    bgColor:"bg-violet-500/10",
    href:"/conversation"
  },
  {
    label: "Music Generation",
    icon:Music2Icon,
    color:"text-sky-500",
    bgColor:"bg-violet-500/10",
    href:"/conversation"
  },
  {
    label: "Image Generation",
    icon:ImageIcon,
    color:"text-sky-500",
    bgColor:"bg-violet-500/10",
    href:"/conversation"
  },
  {
    label: "Video Generation",
    icon:VideoIcon,
    color:"text-sky-500",
    bgColor:"bg-violet-500/10",
    href:"/conversation"
  },
  {
    label: "Code Generation",
    icon:Code2Icon,
    color:"text-sky-500",
    bgColor:"bg-violet-500/10",
    href:"/conversation"
  },
]
const DashboardPage=()=>{
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2  className="text-2xl md:text-4xl font-bold text-center">
          Explore The Power of AI
        </h2>
        <p className="text-center text-muted-foreground font-light text-sm md:text-lg">Chat With Smartest AI - Experience the power of AI</p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) =>(
          <Card key={tool.href}
          className="p-4 border-black/5 flex items-center
          justify-between hover:shadow-md transition cursor-pointer"
          onClick={()=>router.push(tool.href)}
          >
          <div className="flex items-center gap-x-4">
            <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
              <tool.icon className={cn("w-8 h-8", tool.color)}/>
            </div>
            <div>
              {tool.label}
            </div>
          </div>
          <ArrowRight/>
        </Card>
        ))}
      </div>
    </div>
    )
}
export default DashboardPage;