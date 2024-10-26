// components/source.tsx
// components/source.tsx
import React from "react"

export const Source = () => {
  return (
    <footer className="p-4">
      <p className="text-center">
        Code based on the{" "}
        <a
          href="https://github.com/yossTheDev/removerized"
          className="text-blue-400 hover:text-blue-300"
        >
          removerized
        </a>{" "}
        project.
      </p>
      <p className="text-center">
        Utilizing the{" "}
        <a
          href="https://github.com/imgly/background-removal-js"
          className="text-blue-400 hover:text-blue-300"
        >
          background-removal-js
        </a>{" "}
        library for core functionality.
      </p>
      <p className="text-center">
        AI Model: ISNet from the{" "}
        <a
          href="https://github.com/xuebinqin/DIS"
          className="text-blue-400 hover:text-blue-300"
        >
          DIS
        </a>{" "}
        repository.
      </p>
    </footer>
  )
}
