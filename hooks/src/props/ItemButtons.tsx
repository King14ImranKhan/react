import React from "react";
import ButtonTrigger from "./ButtonTrigger";

type Item = {
  name: string;
  description: string;
};

type ItemButtonsProps = {
  items: Item[];
  onSelect: (item: Item) => void;
};

function ItemButtons({ items, onSelect }: ItemButtonsProps) {
  return (
    <div>
      {items.map((item, index) => (
        <ButtonTrigger
          key={index}
          label={item.name}
          onClick={() => onSelect(item)}
        />
      ))}
    </div>
  );
}

export default ItemButtons;
