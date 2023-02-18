import { Box, Heading, Image, Link, Text } from "@chakra-ui/react";
import { motion, easeInOut } from "framer-motion";
import React from "react";

export default function ThankYou() {
  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      bgColor={"#000000"}
      overflow={"hidden"}
    >
      <Image
        src="group 69.svg"
        w={{ base: "120px", md: "210px", lg: "250px" }}
        paddingTop={"100px"}
        paddingLeft={{ md: "100px", base: "30px" }}
      />
      <Box
        maxW={{ lg: "700px", md: "650px", sm: "400px" }}
        display={"flex"}
        flexDir={"column"}
        gap={{ lg: "70px", md: "60px", base: "50px" }}
        alignItems={"center"}
        margin={"auto"}
        marginTop={{ lg: "200px", md: "170px", base: "150px" }}
        padding={"20px"}
      >
        <Heading
          fontFamily={"novara"}
          fontWeight={{ md: "400", base: "bold" }}
          fontSize={{ lg: "65px", md: "55px", sm: "30px", base: "23px" }}
          lineHeight={"20px"}
          letterSpacing={"0.1em"}
          color={"#D9D9D9"}
        >
          Thank you!
        </Heading>
        <Text
          fontFamily={"gilroy"}
          color={"#D9D9D9"}
          textAlign={"center"}
          fontSize={{ lg: "24px", md: "20px", sn: "18px", base: "15px" }}
          lineHeight={{ md: "60px", base: "34px" }}
          letterSpacing={"0.04em"}
          fontWeight={"300"}
        >
          Your email has been sent. we’ll get back to you shortly, in the
          meantime, check out{" "}
          <Link href="/products" borderBottom={"1px slid white"}>
            our fragnances
          </Link>{" "}
          or read more about <Link href="/ourstory">our story.</Link>
        </Text>
        <Image
          src={"Frame 189.png"}
          // width={{base:""}}

          padding={{ lg: "100px", base: "70px" }}
        ></Image>
      </Box>
    </Box>
  );
}
