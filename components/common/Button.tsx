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
        default: [
          "bg-gradient-to-r from-[#fd4552] to-[#ff818a] text-white rounded-[10px] flex items-center justify-center gap-2",
          "hover:from-[#30335F] duration-300 ease-in",
        ],
        outline: [
          "border-[1px] border-secondary text-secondary rounded-[10px]",
          "hover:bg-secondary hover:text-white duration-150 ease-in",
        ],
        ghost: ["hover:bg-[rgba(0,0,0,0.1)]"],
        activeGhost: ["bg-[rgab(0,0,0,0.15)]"],
        blueGhost: ["text-blue-400"],
      },
      size: {
        default: ["min-w-[160px]", "h-[40px]", "text-[16px]"],
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
