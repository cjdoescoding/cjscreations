import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wrath of the Rising Phoenix: A Pisay Story - C.J.'s Creations",
  icons: {
    icon: "/cjscreations/rising_phoenix_favicon.ico", 
  },
};

export default function RisingPhoenixLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}