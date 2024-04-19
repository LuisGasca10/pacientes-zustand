import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

export const Error = ({ children }: Props) => {
  return (
    <p className="text-center bg-red-600 text-white p-3 rounded-md font-bold uppercase text-sm">
      {children}
    </p>
  );
};
