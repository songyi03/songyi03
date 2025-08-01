import { FC, useRef } from "react";
import { DivProps } from "./Div";
import { useDrag, useDrop } from "react-dnd";
import { Identifier } from "dnd-core";

export type MoveFunc = (dragIndex: number, hoverIndex: number) => void;

export type ListDraggableProps = DivProps & {
  id: any;
  index: number;
  onMove: MoveFunc;
};

interface DragItem {
  index: number;
  id: string;
  type: string;
}

export const ListDraggable: FC<ListDraggableProps> = ({
  id,
  index,
  onMove,
  style,
  className,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [{ handlerId }, drop] = useDrop<
    DragItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: "list",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem) {
      if (!ref.current) return;

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) return;

      onMove(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "list",
    item: () => {
      return { id, index };
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;

  drag(drop(ref));

  return (
    <div
      ref={ref}
      {...props}
      className={[className, "cursor-move"].join(" ")}
      style={{ ...style, opacity }}
      data-handler-id={handlerId}
    />
  );
};
