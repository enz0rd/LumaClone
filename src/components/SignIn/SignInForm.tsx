'use client'

import { useState } from "react";
import { Mail, SmartphoneIcon } from "lucide-react";
import OtpLogin from "./OtpLogin";

  
export function SignInForm() {
    
      const [method, setMethod] = useState<"email" | "phone">("email");

    return (
        <OtpLogin method={method} setMethod={setMethod} />
    )
}