import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

type ReactSpanProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

export type IconProps = ReactSpanProps & {
  name: string;
  disabled?: boolean;
};

export const Icon: FC<IconProps> = ({
  name,
  disabled = false,
  className: _className,
  ...props
}) => {
  const className = ["material-icons", _className].join(" ");
  return (
    <span {...props} className={className}>
      {name}
    </span>
  );
};
