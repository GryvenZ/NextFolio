"use client";

import { Flex, RadioCards, Text } from "@radix-ui/themes";
import React from "react";

interface Props {
  activeCategory: string;
  itemValueMap: { value: string; text: string }[];
  columnCount: { initial: string; sm: string };
  changeCategory: (category: string) => void;
}

const RadioCardSwitch = ({
  activeCategory,
  itemValueMap,
  columnCount: { initial, sm },
  changeCategory,
}: Props) => {
  return (
    <Flex className="-mt-5 mb-10 max-w-full">
      <RadioCards.Root
        value={activeCategory}
        onValueChange={(value) => changeCategory(value)}
        columns={{ initial, sm }}
      >
        {itemValueMap.map((item) => (
          <RadioCards.Item
            key={item.value}
            value={item.value}
            className="hover:cursor-pointer"
          >
            <Text weight="bold">{item.text}</Text>
          </RadioCards.Item>
        ))}
      </RadioCards.Root>
    </Flex>
  );
};

export default RadioCardSwitch;
