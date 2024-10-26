import Link, { LinkProps } from "next/link";
import React, { PropsWithChildren } from "react";

interface CustomLinkProps extends LinkProps {
  className?: string;
}

const CustomLink: React.FC<PropsWithChildren<CustomLinkProps>> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <Link
      {...props}
      className={`
        text-indigo-600 hover:text-indigo-500
        dark:text-indigo-400 dark:hover:text-indigo-300
        dark:text-blue-100 dark:hover:text-blue-200
        transition-colors duration-200
        ${className}
      `}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
