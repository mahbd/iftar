import { Card, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Props {
  image: string;
  name: string;
  description: string;
  link: string;
}

export default function TeamMemberCard({
  image,
  name,
  description,
  link,
}: Props) {
  return (
    <a href={link} target={"_blank"} rel={"noopener noreferrer"}>
      <Card className="shadow-md border rounded-2xl">
        <div className="flex items-center justify-center">
          <Avatar className="w-20 h-20">
            <AvatarImage src={image} alt="Team Member" />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="text-center">
          <CardTitle className="text-lg font-semibold">{name}</CardTitle>
          <p className="text-sm text-gray-900 mt-2">{description}</p>
        </div>
      </Card>
    </a>
  );
}
