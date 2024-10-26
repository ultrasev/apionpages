"use client";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useLanguage } from "./LanguageContext";

const LegalLinks = () => {
  const { currentLanguage, setLanguage } = useLanguage();
  const lang = currentLanguage;
  return (
    <div className="flex space-x-4">
      <Link href={`/${lang}/privacy`} className="hover:underline">
        Privacy Policy
      </Link>
      <Link href={`/${lang}/tos`} className="hover:underline">
        Terms of Service
      </Link>
      <Link href={`/${lang}/refund`} className="hover:underline">
        Refund Policy
      </Link>
      <Link href={`/${lang}/faq`} className="hover:underline">
        FAQ
      </Link>
    </div>
  );
};

export default LegalLinks;
