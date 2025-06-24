import * as React from "react";

export function Avatar({ children, className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`} {...props}>
      {children}
    </div>
  );
}

export function AvatarImage({ src, alt, className = "", ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img src={src} alt={alt} className={`object-cover w-full h-full ${className}`} {...props} />
  );
}

export function AvatarFallback({ children, className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`flex items-center justify-center w-full h-full bg-gray-200 text-gray-500 ${className}`} {...props}>
      {children}
    </div>
  );
} 