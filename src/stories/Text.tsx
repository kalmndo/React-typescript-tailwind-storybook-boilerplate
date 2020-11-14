import React from "react";

export interface TextProps {
  text: string;
}

export const Text = ({ text }: TextProps) => {
  return <p className="text-red-700">{text}</p>;
};
