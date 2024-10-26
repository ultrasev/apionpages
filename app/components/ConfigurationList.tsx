"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ConfigurationItem from "./ConfigurationItem";

interface ConfigurationListProps {
  initialConfigs: Record<string, string>;
  userId: string;
}

export default function ConfigurationList({
  initialConfigs,
  userId,
}: ConfigurationListProps) {
  const [configs, setConfigs] = useState(initialConfigs);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(config: string, content: string) {
    setIsLoading(true);
    try {
      const response = await fetch("/api/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          key: `FGFW:${config}`,
          content,
        }),
      });
      if (!response.ok) throw new Error("Failed to update data");
      setConfigs({ ...configs, [config]: content });
      router.refresh();
    } catch (err) {
      setError("Failed to save content");
    } finally {
      setIsLoading(false);
    }
  }

  if (error) return <div>Error: {error}</div>;

  return (
    <>
      {Object.entries(configs).map(([config, content]) => (
        <ConfigurationItem
          key={config}
          config={config}
          content={content}
          onSubmit={(newContent) => handleSubmit(config, newContent)}
          isLoading={isLoading}
          userId={userId}
        />
      ))}
    </>
  );
}
