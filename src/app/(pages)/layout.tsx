"use client";

import appwriteService from "@/appwrite/config";
import Blog from "@/components/Blog";
import Header from "@/components/Header";
import { AuthProvider } from "@/context/authContext";
import React, { useEffect, useState } from "react";

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [authStatus, setAuthStatus] = useState(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    appwriteService
      .isLoggedIn()
      .then(setAuthStatus)
      .finally(() => setLoader(false));
  }, []);

  return (
    <AuthProvider value={{ authStatus, setAuthStatus }}>
      {!loader && (
        <>
          <div className="text-primary">
            <div className="fixed -z-[1] left-1/3 w-12 top-2/3 blur-2xl">
              <Blog blur />
            </div>
            <div className="fixed -z-[1] left-2/3 w-12 top-2/3 blur-2xl">
              <Blog blur />
            </div>
            <div className="fixed -z-[1] left-1/4 w-40 top-1/4 blur-2xl opacity-50">
              <Blog blur />
            </div>
            <Header />
            <main className="px-2 py-4">{children}</main>
          </div>
        </>
      )}
    </AuthProvider>
  );
}
