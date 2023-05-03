import { Nunito } from "next/font/google";
import "./globals.css";

import Navbar from "@/app/common/components/navbar/Navbar";
import LoginModal from "@/app/common/components/modals/LoginModal";
import RegisterModal from "@/app/common/components/modals/RegisterModal";
import RentModal from "@/app/common/components/modals/RentModal";

import Banner from "./common/components/layout/Banner";
import getCurrentUser from "./common/actions/getCurrentUser";
import ClientOnly from "./common/components/ClientOnly";

export const metadata = {
  title: "GlobeTrot",
  description: "One stop travel destination",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <LoginModal />
          <RegisterModal />
          <RentModal />

          {/* @ts-expect-error Server Component */}
          <Navbar currentUser={currentUser} />
          {/* <Banner /> */}
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
