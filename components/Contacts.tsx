import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import React, { lazy, Suspense } from "react";

export const GithubContact = () => {
  return (
    <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
      <div
        className={buttonVariants({
          size: "icon",
          variant: "ghost",
        })}
      >
        <Icons.gitHub className="size-5" />
        <span className="sr-only">GitHub</span>
      </div>
    </Link>
  );
};

export const TwitterContact = () => {
  return (
    <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
      <div
        className={buttonVariants({
          size: "icon",
          variant: "ghost",
        })}
      >
        <Icons.X className="size-5 fill-current text-blue-400" />
        <span className="sr-only">X</span>
      </div>
    </Link>
  );
};

export const TelegramContact = () => {
  return (
    <Link href={siteConfig.links.telegram} target="_blank" rel="noreferrer">
      <div
        className={buttonVariants({
          size: "icon",
          variant: "ghost",
        })}
      >
        <Icons.Telegram className="size-5 fill-current text-[#24A1DE]" />
        <span className="sr-only">Telegram</span>
      </div>
    </Link>
  );
};

export const YoutubeContact = () => {
  return (
    <Link href={siteConfig.links.youtube} target="_blank" rel="noreferrer">
      <div
        className={buttonVariants({
          size: "icon",
          variant: "ghost",
        })}
      >
        <Icons.Youtube className="size-5 fill-current text-red-500" />
        <span className="sr-only">YouTube</span>
      </div>
    </Link>
  );
};

export const EmailContact = () => {
  return (
    <Link href={siteConfig.links.email} target="_blank" rel="noreferrer">
      <div
        className={buttonVariants({
          size: "icon",
          variant: "ghost",
        })}
      >
        <Icons.Email className="size-5 fill-current text-green-500" />
        <span className="sr-only">Mail</span>
      </div>
    </Link>
  );
};
