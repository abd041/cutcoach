import type { Metadata } from "next";
import { HomePage } from "@/components/entrance/HomePage";
import { homePageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = homePageMetadata;

export default function Home() {
  return <HomePage />;
}
