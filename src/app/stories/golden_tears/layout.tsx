import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Five Nights at Freddy's: Golden Tears - C.J.'s Creations",
  icons: {
    icon: "/cjscreations/golden_tears_favicon.ico", 
  },
};

export default function GoldenTearsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}