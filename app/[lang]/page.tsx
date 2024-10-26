import { Locale } from "@/lib/i18n-config";
import { hermes } from "@/lib/i18n-config";
import Image from "next/image";
import Link from "next/link";

export const runtime = "edge";

export default async function Home({ params }: { params: { lang: Locale } }) {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">
          {hermes(params.lang, {
            en: "Hello Template",
            zh: "你好，小板子",
          })}
        </h1>
        <div className="mt-4">
          <Image
            className="rounded-xl shadow-lg"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5bf98764-20b0-444c-a3cc-ad6985aeba5c/dg5xro8-da5c8250-c94e-4053-81b9-93e0016a25d2.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzViZjk4NzY0LTIwYjAtNDQ0Yy1hM2NjLWFkNjk4NWFlYmE1Y1wvZGc1eHJvOC1kYTVjODI1MC1jOTRlLTQwNTMtODFiOS05M2UwMDE2YTI1ZDIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6shlKQMC4xuI_C4IfzQLKH06nowMMaD6mkyoECul-Bw"
            alt={hermes(params.lang, {
              en: "Animated GIF",
              zh: "动画 GIF",
            })}
            width={420}
            height={240}
          />
        </div>

        <Link className="mt-4" href={`/${params.lang}/svg`}>
          {hermes(params.lang, {
            en: "More SVGs",
            zh: "更多 SVG 图标",
          })}
        </Link>
      </div>
    </div>
  );
}
