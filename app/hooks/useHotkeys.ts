import { useEffect } from "react";

type HotkeyHandler = (event: KeyboardEvent) => void;

export function useHotkey(
  key: string,
  ctrlKey: boolean,
  handler: HotkeyHandler
) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key.toLowerCase() === key.toLowerCase() &&
        event.ctrlKey === ctrlKey
      ) {
        event.preventDefault();
        handler(event);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [key, ctrlKey, handler]);
}
