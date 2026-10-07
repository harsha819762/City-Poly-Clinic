import { Button as ButtonPrimitive } from "@base-ui/react/button"

import { buttonVariants, type ButtonVariantProps } from "./button-variants"

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & ButtonVariantProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={(state) =>
        buttonVariants({ variant, size, className: typeof className === "function" ? className(state) : className })
      }
      {...props}
    />
  )
}

export { Button, buttonVariants }
