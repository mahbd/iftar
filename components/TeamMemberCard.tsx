import { Card, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TeamMemberCard() {
  return (
    <Card className="shadow-md border rounded-2xl">
      <div className="flex items-center justify-center">
        <Avatar className="w-20 h-20">
          <AvatarImage
            src="https://via.placeholder.com/150"
            alt="Team Member"
          />
          <AvatarFallback>TM</AvatarFallback>
        </Avatar>
      </div>
      <div className="text-center">
        <CardTitle className="text-lg font-semibold">John Doe</CardTitle>
        <p className="text-sm text-gray-900 mt-2">
          Passionate software developer with expertise in full-stack
          development.
        </p>
      </div>
    </Card>
  );
}
