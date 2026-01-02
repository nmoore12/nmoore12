export function Button({
  children,
  variant = "default",
  size = "md",
  asChild,
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl font-medium transition";

  const variants = {
    default: "bg-white text-black hover:bg-neutral-200",
    outline:
      "border border-neutral-700 text-neutral-100 hover:bg-neutral-800",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2",
  };

  const Comp = asChild ? "a" : "button";

  return (
    <Comp
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
}
