import { BadgeCategory } from "@/app/components";
import { Flex, Heading, Text } from "@radix-ui/themes";
import Image, { StaticImageData } from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

interface Props {
  imageurl: StaticImageData;
  category: string;
  title: string;
  description: string;
  link: string;
  date: string;
  isVisible?: boolean;
}

const BlogCard = ({
  imageurl,
  category,
  title,
  description,
  link,
  date,
  isVisible = true,
}: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      className={`${isVisible ? "block" : "hidden"}`}
    >
      <Flex
        align="center"
        justify="center"
        gap="6"
        className="top-light-shadow group min-h-96 max-w-[24rem] cursor-pointer flex-col rounded-2xl bg-neutral-900 p-4 transition-colors duration-300 ease-out hover:bg-neutral-800 lg:max-w-full lg:flex-row lg:p-8"
      >
        <Flex
          justify="center"
          align="center"
          className="w-fit overflow-hidden rounded-xl lg:w-5/12"
        >
          <Image
            src={imageurl}
            alt="profile"
            className="w-full rounded-xl transition-transform duration-300 ease-out group-hover:scale-125 sm:max-h-[30rem]"
          />
        </Flex>
        <Flex direction="column" gap="4" className="w-fit lg:w-7/12">
          <Flex align="center" gap="5">
            <BadgeCategory color="#9b00ff" text={category} />
            <Text className="font-semibold">{date}</Text>
          </Flex>
          <Heading
            weight="medium"
            size={{
              initial: "7",
              md: "8",
            }}
          >
            {title}
          </Heading>
          <Text className="text-gray-accent text-lg">{description}</Text>
          <Text className="mt-4">
            Read More{" "}
            <IoIosArrowRoundForward
              className="inline transition-all duration-300 group-hover:ml-2"
              size="25"
            />
          </Text>
        </Flex>
      </Flex>
    </a>
  );
};

export default BlogCard;
