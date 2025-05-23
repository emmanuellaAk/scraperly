import React, { ReactNode } from "react";
import Logo from "@/components/Logo";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 py-8">
      <Logo />
      {/* {children} */}
      <div className="flex items-center justify-center w-full max-w-md">
        {children}
      </div>
    </div>
  );
}

export default layout;
