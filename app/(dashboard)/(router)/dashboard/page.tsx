import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";


export default function DashboardPage() {
  return (
    <div>
      Dashboard(protected)
      <UserButton afterSignOutUrl="/"/>
    </div>
    )
}
