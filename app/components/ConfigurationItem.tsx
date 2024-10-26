"use client";

import { useState } from "react";

interface ConfigurationItemProps {
  config: string;
  content: string;
  onSubmit: (content: string) => Promise<void>;
  isLoading: boolean;
  userId: string;
}

export default function ConfigurationItem({
  config,
  content,
  onSubmit,
  isLoading,
  userId,
}: ConfigurationItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);
  const [copyMessage, setCopyMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(editedContent);
    setIsEditing(false);
  };

  const copySubscriptionLink = () => {
    const subscriptionLink = `${process.env.NEXT_PUBLIC_API_URL}/sub/${config}?token=${userId}`;
    navigator.clipboard.writeText(subscriptionLink);
    setCopyMessage("Link copied!");
    setTimeout(() => setCopyMessage(""), 3000); // Clear message after 3 seconds
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2 capitalize dark:text-gray-200">
        {config}
      </h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full h-96 p-2 border rounded-xl font-mono text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <div className="mt-2">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 mr-2"
              disabled={isLoading}
            >
              Save
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <>
          <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded-xl whitespace-pre-wrap break-all h-96 overflow-y-auto font-mono text-sm text-gray-900 dark:text-gray-100">
            {content}
          </pre>
          <div className="mt-2 flex space-x-2">
            <button
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
              onClick={copySubscriptionLink}
            >
              Copy Subscription Link
            </button>
            {copyMessage && (
              <span className="text-green-500 dark:text-green-400 self-center ml-2">
                {copyMessage}
              </span>
            )}
          </div>
        </>
      )}
    </div>
  );
}
