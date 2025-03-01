"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { setSpammer } from "@/lib/user.actions";
import { useRouter } from "next/navigation";
import Spinner from "@/components/Spinner";

interface Props {
  id: string;
}

const SpammerActions = ({ id }: Props) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  return (
    <div className={"flex flex-wrap gap-2"}>
      <Button
        disabled={loading}
        variant={"destructive"}
        onClick={async () => {
          setLoading(true);
          router.refresh();
          await setSpammer(id, true);
          setLoading(false);
        }}
      >
        Mark as spammer {loading && <Spinner />}
      </Button>
      <Button
        disabled={loading}
        variant={"success"}
        onClick={async () => {
          setLoading(true);
          await setSpammer(id, false);
          router.refresh();
          setLoading(false);
        }}
      >
        Remove spammer {loading && <Spinner />}
      </Button>
    </div>
  );
};

export default SpammerActions;
