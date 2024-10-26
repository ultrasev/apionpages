"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchBox from "./Box";

const SearchIcon: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // 检测 Ctrl+S 组合键
      if (event.ctrlKey && event.key === "s") {
        event.preventDefault(); // 阻止默认的保存行为
        setIsOpen(true);
      }
      // 检测 Escape 键关闭搜索框
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="relative" style={{ zIndex: 10 }}>
      <button onClick={toggleSearch} className="rounded-full">
        <FontAwesomeIcon icon={faSearch} className="text-foreground text-xl" />
      </button>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 rounded-lg z-20"
            onClick={toggleSearch}
          ></div>
          <div
            className="fixed top-1/2 left-1/2 z-30"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <SearchBox onSearchClose={toggleSearch} />
          </div>
        </>
      )}
    </div>
  );
};

export default SearchIcon;
