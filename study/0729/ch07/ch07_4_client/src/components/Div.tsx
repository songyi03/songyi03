import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { WidthHeight } from "./WidthHeight";
import { MinMaxWidthHeight } from "./MinMaxWidthHeight";
import { LeftRightTopBottom } from "./LeftRightTopBottom";

export type ReactDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type DivProps = ReactDivProps &
  WidthHeight & { src?: string } & LeftRightTopBottom &
  MinMaxWidthHeight;

export const Div: FC<DivProps> = ({
  width,
  height,
  left,
  right,
  top,
  bottom,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  style: _style,
  src,
  ...props
}) => {
  const style = {
    ..._style,
    width,
    height,
    left,
    right,
    top,
    bottom,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    backgroundImage: src && `url(${src})`,
  };

  return <div {...props} style={style} />;
};
