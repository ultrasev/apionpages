import { siteConfig } from "@/config/site";
import {
  TwitterContact,
  EmailContact,
  YoutubeContact,
} from "@/components/Contacts";
import LegalLinks from "@/components/LegalLinks";

export interface FooterProps {
  lang: string;
}

export default function Footer({ lang }: FooterProps) {
  const startYear = 2023;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-t-foreground/10 p-4 md:p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-wrap items-center justify-center md:justify-start text-sm md:text-base mb-2 md:mb-0 w-full md:w-auto">
          <p className="mr-2 mb-0">
            © {startYear}-{currentYear} {siteConfig.name}.
          </p>
          <div className="flex">
            <TwitterContact />
            <EmailContact />
            <YoutubeContact />
          </div>
        </div>
        <LegalLinks />
      </div>
    </footer>
  );
}
