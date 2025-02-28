"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

const Sensitive = ({ text }: { text: string }) => {
  return (
    <Collapsible>
      <CollapsibleTrigger>
        <Button size={"sm"}>Collapsed</Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <pre className="p-2">{text}</pre>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default Sensitive;
