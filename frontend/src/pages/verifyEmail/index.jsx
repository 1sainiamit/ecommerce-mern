import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Mailbox, Terminal } from "lucide-react";

const VerifyEmailSent = () => {
  return (
    <div>
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <Alert variant="default | destructive">
            <Mailbox />
            <AlertDescription className="scroll-m-20 text-center text-2xl font-extrabold tracking-tight text-balance">
              A verification email has been sent to you.
            </AlertDescription>
            <AlertTitle className="scroll-m-20 text-center text-lg font-extrabold tracking-tight text-balance">
              Check Your Email!
            </AlertTitle>
          </Alert>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailSent;
