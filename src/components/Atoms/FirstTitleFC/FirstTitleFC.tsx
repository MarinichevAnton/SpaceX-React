import React from "react";

export interface FirstTitleFCProps {
  className: string;
  text: string;
}

const FirstTitleFC: React.FC<FirstTitleFCProps> = ({ className, text }) => {
  return <h1 className={className}>{text}</h1>;
};

export default FirstTitleFC;
