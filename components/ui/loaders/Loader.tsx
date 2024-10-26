// components/ui/loaders/Loader.tsx
import React from "react";
import { LoaderType } from "./LoaderTypes";
import spinnerStyles from "./styles/spinner.module.css";
// 导入其他 loader 样式...

interface LoaderProps {
  type: LoaderType;
  className?: string;
}

const loaderStyles = {
  [LoaderType.SPINNER]: spinnerStyles.spinner,
  // 添加其他 loader 类型...
};

const Loader: React.FC<LoaderProps> = ({ type, className }) => {
  const loaderClass = loaderStyles[type];
  return <div className={`${loaderClass} ${className || ""}`}></div>;
};

export default Loader;
