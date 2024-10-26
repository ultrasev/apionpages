"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

type Props = {
  onSearchClose: () => void;
};

const SearchBox: React.FC<Props> = ({ onSearchClose }) => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 6);
    setQuery(value);

    if (value.length !== 6) {
      setError("请输入6位数字基金代码");
    } else {
      setError("");
    }
  };

  const handleSearch = () => {
    if (query.length === 6) {
      router.push(`/fund/${query}`);
      onSearchClose();
    } else {
      setError("请输入6位数字基金代码");
    }
  };

  return (
    <div className="flex flex-col items-center rounded-lg shadow-md bg-yellow-500 p-4">
      <div className="flex items-center">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          placeholder="000001"
          className="px-4 py-2 rounded-l-lg focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
          disabled={query.length !== 6}
        >
          Search
        </button>
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default SearchBox;
