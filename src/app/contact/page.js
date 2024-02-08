"use client";

import { ReCaptchaProvider } from "next-recaptcha-v3";
import ContactForm from "@/components/ContactForm";

function page() {

  return (
    <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
      <ContactForm />
    </ReCaptchaProvider>
  );
}

export default page;
