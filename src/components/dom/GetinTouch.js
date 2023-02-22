import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Link,
  LinkBox,
  Text,
  Wrap,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { React, useRef } from "react";
import emailjs from "@emailjs/browser";
import ThankYou from "./ThankYou";
import { useRouter } from "next/router";

const formControlVariant = {
  hidden: {
    opacity: 0,
    y: "20px",
  },
  visible: {
    opacity: 1,
    y: "0",
    // transition: {
    //   // duration: 1.5,
    //   // delay: 0.5,
    //   type:'tween',
    //   staggerChildren: 0.25,
    // },
    // transition:{ type: "spring", stiffness: 1000000},
  },
};
const childVariant = {
  hidden: {
    opacity: 0,
    x: "-20px",
  },
  visible: {
    opacity: 1,
    x: "0",
    // transition: {
    //   stype:'',
    //   duration:'1.2',
    //   ease: "easeInOut",
    // },
    transition: {
      type: "tween",
      stiffness: 100,
      ease: "easeInOut",
      delay: "0.3",
    },
  },
};

const Inputt = ({ fontColor, type, name }) => {
  return (
    <Input
      // as={motion.input}
      // variants={childVariant}
      // initial={{ borderBottom: " 0 " }}
      // whileInView={{
      //   borderBottom: "2px solid white",
      // }}
      // borderBottom ={` 1px solid ${fontColor}`}
      as={"input"}
      type={type}
      name={name}
      variant="unstyled"
      borderBottom="2px solid "
      borderBottomColor={fontColor}
      borderRadius="2px"
      w={{ md: "22.39vw", base: "100%", "3xl": "430px" }}
      h={{ md: "3.4vw", "3xl": "4.1rem", base: "7vw" }}
      fontSize={{ md: "1.25vw", "3xl": "1.25rem", "3xl": "6.5vw" }}
      marginBottom={{ md: "4.2vw", base: "12.5vw", "3xl": "5rem" }}
    />
  );
};

const Label = ({ children }) => {
  return (
    <FormLabel
      as={motion.div}
      viewport={{ once: true }}
      variants={childVariant}
      initial="hidden"
      whileInView="visible"
      color="#585757"
      fontSize={{ md: "1.4vw", base: "3.75vw", "3xl": "1.65rem" }}
      w={"fit-content"}
      margin="0"
      fontFamily="gilroy"
      lineHeight={"1.5rem"}
      fontWeight="400"
    >
      {children}
    </FormLabel>
  );
};

const GetinTouch = (props) => {
  const router = useRouter();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "getintouch_service",
        "getintouch_form",
        form.current,
        "CnLKDNVSjToyYRW3n"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Success! We'll contact you soon.");
          // <Link href="/ThankYou" />;
        },
        (error) => {
          console.log(error.text);
          alert("Error! Try again.");
        }
      );
  };

  return (
    <Box id="contact" bg={props.activeBg} w="100vw">
      <Box
        maxW={"1920px"}
        color={props.fontColor}
        p={{ md: "7vw", "3xl": "100px" }}
        py={{ base: "2.5rem" }}
        pb={{ base: "5rem" }}
        display="flex"
        flexDir="column"
        fontWeight="300"
        justifyContent="center"
        alignItems="center"
        margin="auto"
      >
        <Box display={{ base: "flex" }} flexDir={"row"} gap={"4.75vw"}>
          <Image
            alignSelf={"center"}
            src={"getleft.png"}
            justifyContent={"flex-start"}
            h={{ base: "15vw" }}
            display={{ md: "none" }}
          />
          <Heading
            fontFamily="novara"
            fontWeight="300"
            letterSpacing="1.6px"
            fontSize={{ md: "3.15vw", base: "6.25vw", "3xl": "4rem" }}
            textAlign="center"
            maxW={{ base: "19ch", md: "full" }}
            // maxW={{ base: "200px", sm: "fit-content" }}
          >
            Get in touch! we’d love to hear from you
          </Heading>
          <Image
            alignSelf={"center"}
            src={"getright.png"}
            justifyContent={"flex-start"}
            h={{ base: "15vw" }}
            display={{ md: "none" }}
          />
        </Box>
        <Text
          fontFamily="gilroy"
          fontSize={{ md: "1.7vw", base: "4.75vw", "3xl": "35px" }}
          w={{ base: "85%", md: "full" }}
          fontWeight="400"
          marginTop={{ md: "1.5vw", base: "10vw", "3xl": "28px" }}
          letterSpacing={{ md: "2px", base: "1px" }}
          textAlign={{ base: "center" }}
        >
          Fill out the quick form and we will be in touch with lightening speed.{" "}
        </Text>
        <Box
          mt={{ md: "4.6vw", "3xl": "5.5rem", base: "14vw" }}
          display="flex"
          w={"full"}
          maxW={{ base: "85%", md: "1575px" }}
          justifyContent="space-between"
        >
          <FormControl
            // as={(motion.div ) "form"}
            // viewport={{ once: true }}
            // variants={formControlVariant}
            // initial="hidden"
            // whileInView="visible"
            as={"form"}
            w={{ base: "full", md: "fit-content" }}
            maxW={{ base: "full", md: "430px" }}
            ref={form}
            onSubmit={sendEmail}
          >
            <Label>Name</Label>
            <Inputt
              type={"text"}
              name={"user_name"}
              fontColor={props.fontColor}
            />
            <Label>Contact number</Label>
            <Inputt type={"number"} name={"user_phone"} />
            <Label>Email address</Label>
            <Inputt type={"email"} name={"user_email"} />
            <Label>Your message</Label>
            <Inputt type={"text"} name={"message"} />
            <Center>
              <Link href={"/ThankYou"}>
                <Input
                  as={"input"}
                  bg=" #D9D9D9"
                  borderRadius="0"
                  fontFamily="novara"
                  cursor={"pointer"}
                  // px={"auto"}
                  w={{ md: "18.75vw", base: "85vw", "3xl": "360px" }}
                  h={{ md: "3.65vw", base: "13.5vw", "3xl": "70px" }}
                  mt={{ base: "4vw", md: "none" }}
                  fontSize={{ md: "1.7vw", base: "6.25vw", "3xl": "2rem" }}
                  letterSpacing="3px"
                  color="#0F0D0E"
                  border={"0px"}
                  fontWeight="500"
                  background="linear-gradient(to right, black 50%, white 50%)"
                  backgroundSize="200% 100%"
                  backgroundPosition="right"
                  _hover={{
                    backgroundPosition: "left",
                    color: "white",
                  }}
                  transition="all 0.5s cubic-bezier(0.22, 1, 0.36, 1)"
                  type={"submit"}
                  value={"Submit"}
                  // onClick={() => {
                  //   router.push("/");
                  // }}
                />
              </Link>
            </Center>
          </FormControl>

          <Image
            as={motion.img}
            initial={{ opacity: 0, x: "300px" }}
            alignSelf={"center"}
            whileInView={{
              opacity: 1,
              x: "0",
              transition: { duration: "0.8" },
            }}
            viewport={{ once: true }}
            display={{ md: "inline-block", base: "none" }}
            maxW={{ md: "38.5vw", "3xl": "745px" }}
            maxH="400px"
            src="/images/perfume6.png"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default GetinTouch;
