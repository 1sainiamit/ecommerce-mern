import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import axios from "axios";
import { Mailbox } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const VerifyEmailPage = () => {
  const { token } = useParams();
  const [status, setStatus] = useState("Verifying...");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const verifyEmail = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/user/verify",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.data.success) {
        setStatus("Email Verified Successfully.");
        setErrorMessage("");
        setTimeout(() => {
          navigate("/login");
        }, 4000);
      }
    } catch (error) {
      console.log(error);
      if (error.response.data.message) {
        setErrorMessage(error.response.data.message);
        setStatus("Email Verification Failed. Please Try Again");
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
        setStatus("Email Verification Failed");
      }
    }
  };

  useEffect(() => {
    verifyEmail();
  }, [token]);

  return (
    <div>
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <Alert variant="default | destructive">
            <Mailbox />
            <AlertDescription className="scroll-m-20 text-center text-2xl font-extrabold tracking-tight text-balance">
              {status}
            </AlertDescription>
            <AlertTitle className="scroll-m-20 text-center text-lg font-extrabold tracking-tight text-balance">
              {errorMessage}
            </AlertTitle>
          </Alert>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
