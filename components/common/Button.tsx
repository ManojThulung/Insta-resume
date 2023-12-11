import { ComponentProps } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonStyle = cva(
  [
    "transaction-all",
    "flex",
    "items-center",
    "justify-center",
    "duration-200",
    "ease-in",
  ],
  {
    variants: {
      variant: {
        default: ["bg-yellow-500", "text-white", "hover:bg-yellow-600"],
        ghost: ["hover:bg-[rgba(0,0,0,0.1)]"],
        activeGhost: ["bg-[rgab(0,0,0,0.15)]"],
        blueGhost: ["text-blue-400"],
      },
      size: {
        default: ["rounded-sm", "w-[150px]", "h-[40px]"],
        small: ["rounded-[100px]", "py-1", "px-4"],
        pLess: ["text-sm"],
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonProps = VariantProps<typeof buttonStyle> & ComponentProps<"button">;

const Button = ({ variant, size, className, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      {...props}
      className={twMerge(buttonStyle({ variant, size }), className)}
    />
  );
};

export default Button;
