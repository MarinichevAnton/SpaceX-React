import React from "react";

export interface ImageFCProps {
  className?: string;
  src: string;
  alt: string;
}
const ImageFC: React.FC<ImageFCProps> = ({ className, src, alt }) => {
  return <img className={className} src={src} alt={alt} />;
};

export default ImageFC;
