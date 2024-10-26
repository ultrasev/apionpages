import Image from "next/image";
export const runtime = 'edge';

const logos = [
  "twitter",
  "facebook",
  "instagram",
  "linkedin",
  "youtube",
  "github",
  "tiktok",
  "pinterest",
];

export default function SVGPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">SVG Logos</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {logos.map((logo) => (
          <div key={logo} className="flex flex-col items-center">
            <Image
              src={`/api/svg?logo=${logo}`}
              alt={`${logo} logo`}
              width={120}
              height={120}
              className="mb-2"
            />
            <span className="text-sm capitalize">{logo}</span>
            <code className="text-xs mt-1 bg-gray-100 dark:bg-gray-800 p-1 rounded">
              ?logo={logo}
            </code>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">API Usage</h2>
        <p className="mb-2">Base URL for all logos:</p>
        <code className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
          /api/svg?logo=
        </code>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          Append the logo name to the base URL to fetch a specific SVG logo.
        </p>
      </div>
    </div>
  );
}
