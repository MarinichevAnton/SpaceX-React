import React from "react";

export interface ParagraphFCProps {
  className: string;
  text: string;
}

const ParagraphFC: React.FC<ParagraphFCProps> = ({ className, text }) => {
  return <p className={className}>{text}</p>;
};

export default ParagraphFC;
