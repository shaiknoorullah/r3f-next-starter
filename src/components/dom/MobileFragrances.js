import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import Slider from "react-slick";
import MagicSliderDots from "react-magic-slider-dots";
import ReactDOM from "react-dom";
import ReactSwipe from "react-swipe";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-magic-slider-dots/dist/magic-dots.css";
import SimpleImageSlider from "react-simple-image-slider";
// import Link from "next/link";

const MobileFragrances = (props) => {
  const [dotIndex, setDotIndex] = useState(0);

  const ref = useRef(0);
  console.log(ref.current);
  const settings = {
    dots: true,
    color: "white",
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => {
      return <MagicSliderDots dots={dots} numDotsToShow={5} dotWidth={30} />;
    },
  };

  const perfumes = [
    {
      id: 0,
      productName: "Chanel No",
      src: "/images/one.jpg",
      productDiscription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus risus, porta vitae est vitae, finibus vulputate turpis. Nam lectus urna, dictum id nisi quis, convallis feugiat urna. Nam bibendum felis dui, vitae imperdiet magna .",
      price: "$200",
      color: "white",
    },
    {
      id: 1,
      productName: "Le Labo Santal ",
      src: "/images/two.jpg",
      productDiscription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus risus, porta vitae est vitae, finibus vulputate turpis. Nam lectus urna, dictum id nisi quis, convallis feugiat urna. Nam bibendum felis dui, vitae imperdiet magna .",
      price: "$500",
      color: "white",
    },
    {
      id: 2,
      productName: "Thierry Mugler Angel.",
      src: "/images/image5.png",
      productDiscription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus risus, porta vitae est vitae, finibus vulputate turpis. Nam lectus urna, dictum id nisi quis, convallis feugiat urna. Nam bibendum felis dui, vitae imperdiet magna .",
      price: "$50000",
      color: "black",
    },
    {
      id: 3,
      productName: "Engage L'amante Aqua",
      src: "/images/one.jpg",
      productDiscription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus risus, porta vitae est vitae, finibus vulputate turpis. Nam lectus urna, dictum id nisi quis, convallis feugiat urna. Nam bibendum felis dui, vitae imperdiet magna .",
      price: "$10000",
      color: "black",
    },
    {
      id: 4,
      productName: "Zed",
      src: "/images/image5.png",
      productDiscription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus risus, porta vitae est vitae, finibus vulputate turpis. Nam lectus urna, dictum id nisi quis, convallis feugiat urna. Nam bibendum felis dui, vitae imperdiet magna .",
      price: "$3000000",
      color: "black",
    },
  ];

  let reactSwipeEl;
  const dotArr = [0, 1, 2, 3, 4];

  return (
    <Box
      display={{ base: "block", md: "none" }}
      bg=" #122333"
      py={"12.5vw"}
      px={"5vw"}
      pb={"27vw"}
      w={"100%"}
    >
      <Heading
        color="white"
        fontFamily="novara"
        fontWeight="400"
        textAlign="center"
        fontSize={"6.3vw"}
        letterSpacing={"1px"}
      >
        the fragrance difference{" "}
      </Heading>

      <Image mt={"1vw"} w="15.5vw" mx={"auto"} src="/images/perfume1.png" />

      <Slider {...settings}>
        {perfumes.map((item, index) => {
          // console.log(item.id);
          return (
            <Link
              exit={{ opacity: 0 }}
              key={item.id}
              href={`/product/${item.id}`}
              passHref
            >
              <Center
                as={motion.div}
                key={index}
                ref={ref}
                marginTop="19vw"
                display="flex"
                flexDir="column"
                alignItems="center"
                justifyContent={"center"}
                mx={"auto"}
                w="85vw"
                color="white"
              >
                <Heading
                  as={motion.p}
                  position="absolute"
                  mixBlendMode=" exclusion"
                  fontFamily="novara"
                  fontSize="13vw"
                  w="85vw"
                  textAlign="center"
                  textShadow="2px 5px solid black"
                  fontWeight="400"
                >
                  {item.productName}
                </Heading>
                <Image
                  margin="auto"
                  display="inline"
                  borderRadius="full"
                  w="78.5vw"
                  justifySelf={"center"}
                  alignSelf={"center"}
                  src={item.src}
                />
              </Center>
            </Link>
          );
        })}
      </Slider>
    </Box>
  );
};
export default MobileFragrances;
