import { Locale, hermes } from "@/lib/i18n-config";
import React from "react";
export const runtime = "edge";

export default function FAQ({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return <div>FAQ</div>;
}
