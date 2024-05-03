import { ComponentProps } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonStyle = cva(
  [
    "transaction-all",
    "flex",
    "items-center",
    "justify-center",
    "duration-150",
    "ease-in",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-gradient-to-r from-[#fd4552] to-[#ff818a] text-white rounded-[10px] gap-2",
          "hover:from-[#30335F] duration-300",
        ],
        fill: [
          "rounded-[10px] bg-primary text-white flex items-center justify-center",
        ],
        outline: [
          "border-[1px] border-secondary text-secondary rounded-[10px]",
          "hover:bg-secondary hover:text-white",
        ],
        ghost: [
          "text-primary bg-secondary-light rounded-[10px] hover:text-secondary",
        ],
        round: [
          "bg-secondary-light rounded-full fill-secondary hover:fill-primary",
        ],
        float: [
          "bg-white rounded-full shadow-md fill-white hover:fill-secondary bg-secondary hover:bg-white",
        ],
      },
      size: {
        default: ["min-w-[160px]", "h-[40px]", "text-[14px]"],
        medium: ["min-w-[100px] h-[36px] text-[14px]"],
        square: ["h-[36px] w-[36px]"],
        small: ["py-[4px]", "px-4"],
        round: ["h-[30px] w-[30px]"],
        float: ["h-[36px] w-[36px] p-2"],
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
