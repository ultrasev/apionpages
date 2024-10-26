import * as React from "react";
import Link from "next/link";
import { NavItem } from "@/types/nav";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { siteConfig } from "@/config/site";

export interface MainNavProps {
  items?: NavItem[];
  lang: string;
}

const getRef = (item: NavItem) => {
  const lang = localStorage.getItem("locale") || "en";
  return item.multiLang ? `/${lang}${item.href}` : item.href || "/";
};

const localText = (lang: string): { [key: string]: string } => {
  switch (lang) {
    case "zh":
      return {
        homepage: "首页",
      };
    default:
      return {
        homepage: "Home",
      };
  }
};

export function MainNav({ items, lang }: MainNavProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  let dropdownTimer: NodeJS.Timeout;

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimer);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimer = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200); // 延迟关闭下拉菜单，单位为毫秒
  };

  return (
    <div className="relative flex gap-6 md:gap-10">
      <div
        className="flex items-center space-x-2"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link href="/" className="flex items-center space-x-2">
          <span className="inline-block font-bold text-xl font-serif">
            <Image
              src="/icons/favicon.ico"
              alt="favicon"
              width={32}
              height={32}
              className="inline-block rounded-full"
            />{" "}
          </span>
          <span className="ml-2 text-xl font-bold font-serif group transition-colors duration-300">
            {siteConfig.name}
            <span className="ml-1 text-gray-800 dark:text-gray-200 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors duration-300">
              <FontAwesomeIcon icon={faCaretDown} />
            </span>
          </span>
        </Link>

        {isDropdownOpen && items?.length && (
          <nav
            className="absolute top-full left-0 mt-2 w-40 shadow-lg rounded-lg py-2 z-50 bg-gray-100 dark:bg-gray-500"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <ul>
              {items.map((item, index) => (
                <li key={index}>
                  <Link
                    href={getRef(item)}
                    className={cn(
                      "px-4 py-1 block rounded transition-colors duration-300",
                      "font-serif font-bold text-lg",
                      "hover:text-blue-600 dark:hover:text-green-600",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {localText(lang)[item.title]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}
