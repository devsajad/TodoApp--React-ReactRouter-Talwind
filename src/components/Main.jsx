import React from "react";

export const Main = ({ children }) => {
  return (
    <main className="w-full flex flex-col md:flex-row-reverse gap-10 md:items-start justify-between">
      {children}
    </main>
  );
};
