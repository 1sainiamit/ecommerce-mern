import { LoginForm } from "@/components/LoginForm";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "mask-[linear-gradient(to_bottom_right,white,transparent,transparent)]"
          )}
        />
        <LoginForm />
      </div>
    </div>
  );
}
