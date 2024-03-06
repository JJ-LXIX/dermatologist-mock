import React from "react";

type Props = {};

export default function TopNav({}: Props) {
  return (
    <div className="h-[10vh]  w-full border-b-2 border-white bg-sky-100 flex">
      {/* Mobile/Tablet */}
      <div className="h-full w-full xl:hidden"></div>
      <div className="h-full w-full xl:hidden"></div>

      {/* Laptop+ */}
      <div className="h-full min-w-[20vw]  hidden xl:block"></div>
      <div className="h-full flex-grow border-x-2 border-white hidden xl:block"></div>
      <div className="h-full min-w-[20vw]  hidden xl:block"></div>
    </div>
  );
}
