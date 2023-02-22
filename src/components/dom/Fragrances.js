/** @format */

import Scroll from "@/templates/Scroll";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import Lenis from "@studio-freight/lenis";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";
import SmoothScroll from "./ScrollContainer";
// import { ScrollerMotion, useScrollerMotion, ScrollerMotionRef } from 'scroller-motion'

const OnePerfume = ({ children }) => {
  const [hover, setHover] = useState(false);
  const textHover = (event) => {
    setHover(true);
  };
  return (
    <Box
      as={motion.div}
      // whileHover={textHover}
      background="linear-gradient(to right, black 50%, white 50%)"
      backgroundSize="200% 100%"
      backgroundPosition="right"
      _hover={{
        backgroundPosition: "left",
        color: "white",
      }}
      transition="all 0.5s cubic-bezier(0.22, 1, 0.36, 1)"
      display="flex"
      w="100%"
      py={{ lg: "1rem", xl: "1rem" }}
      alignItems="center"
      justifyContent="center"
      gap="3rem"
      h={{ lg: "6rem", xl: "auto" }}
      borderBottom="1px solid gray "
    >
      <Text
        transition="all 0.2s ease-out"
        alignSelf="center"
        fontFamily="novara"
        h={{ lg: "6rem", xl: "6rem" }}
        fontSize={{ lg: "2.5rem", xl: "4rem" }}
        noOfLines="1"
        textOverflow="ellipsis"
        paddingLeft={{ lg: "0", xl: "0" }}
      >
        {children}
      </Text>
      <Box
        w={{ lg: "35px", xl: "60px" }}
        h={{ lg: "35px", xl: "60px" }}
        display="flex"
        justifyContent="center"
        bg="#D9D9D9"
        alignItems="center"
        borderRadius="50%"
      >
        <Image w="80%" src="/images/ArrowIcon.png" />
      </Box>
    </Box>
  );
};

const Fragrances = () => {
  // const [scrollTop, setScrollTop] = useState(null);

  // const scrollTopMemo = useMemo(() => scrollTop, [scrollTop]);

  const scrollDemo = useRef(null);

  const content = useRef(null);
  const horizontalScroll = useRef(null);

  const { scrollY, scrollYProgress } = useScroll({
    container: scrollDemo,
  });
  const scrollProg = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // useMotionValueEvent(scrollYProgress, 'change', (latest) => {
  //   console.log(latest)
  //   content.current.style.y = scrollProg
  //   console.log(content)
  // })

  // const scrollTop = useRef(0)
  //   const scrollerMotion = useRef()
  const scrollTop = useMotionValue(0);
  const topScroll = useSpring(scrollTop.get());

  //   useEffect(() => {
  //     const unsubscribe = scrollerMotion.current.scrollY.onChange((v) => scrollY.set(v))

  //     return () => unsubscribe()
  //   }, [scrollY])

  const easeInOutQuad = (x) => {
    return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
  };
  function lerp(v0, v1, t) {
    return v0 * (1 - t) + v1 * t;
  }
  useEffect(() => {
    const updateScrollPos = (e) => {
      // console.log(e)

      // console.log(e.target.scrollTop / (scrollDemo.current.scrollHeight - scrollDemo.current.clientHeight))
      // scrollTop.current = e.target.scrollTop
      scrollDemo.current.scrollTop = lerp(
        scrollDemo.current.scrollTop,
        e.target.scrollTop,
        easeInOutQuad(0.17)
      );
      scrollTop.set(scrollDemo.current.scrollTop);
      // console.log(topScroll)

      // console.log(scrollDemo.current.clientHeight);
    };

    scrollDemo.current.addEventListener("scroll", updateScrollPos);

    return () => {
      scrollDemo.current.removeEventListener("scroll", updateScrollPos);
    };
  }, []);

  useEffect(() => {
    console.log(scrollDemo);
  }, [scrollDemo]);

  useAnimationFrame((time, delta) => {
    scrollDemo.current.scrollTop = scrollTop.get();
    // console.log(scrollTop.get())

    const verticalScrollProgress =
      scrollTop.get() /
      (scrollDemo.current.scrollHeight - scrollDemo.current.clientHeight);

    // scrollProgressIndicator.current.clientWidth = lerp(
    //   scrollProgressIndicator.current.clientWidth,
    //   verticalScrollProgress * (horizontalScroll.current.scrollWidth - horizontalScroll.current.clientWidth) * 100,
    //   easeInOutQuad(0.17),
    // )

    horizontalScroll.current.scrollLeft = lerp(
      horizontalScroll.current.scrollLeft,
      verticalScrollProgress *
        (horizontalScroll.current.scrollWidth -
          horizontalScroll.current.clientWidth),
      easeInOutQuad(0.17)
    );
  });

  // useEffect(() => {
  //   console.log(horizontalScroll.current.clientWidth)
  // }, [horizontalScroll])

  // useEffect(() => {
  //   const lenis = new Lenis({
  //     wrapper: scrollDemo,
  //     content: content,
  //     duration: 1.2,
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  //     direction: 'vertical', // vertical, horizontal
  //     gestureDirection: 'vertical', // vertical, horizontal, both
  //     smooth: true,
  //     mouseMultiplier: 1,
  //     smoothTouch: false,
  //     touchMultiplier: 2,
  //     infinite: false,
  //   })

  //   //get scroll value
  //   lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
  //     console.log({ scroll, limit, velocity, direction, progress })
  //   })

  //   function raf(time) {
  //     lenis.raf(time)
  //     requestAnimationFrame(raf)
  //   }

  //   requestAnimationFrame(raf)
  // }, [])

  return (
    <Box
      sx={{
        // position: 'absolute',
        // top: '200vh',
        bg: "white",
        zIndex: "100",
        width: "100%",
        minHeight: { lg: "fit-content", xl: "100vh" },
        display: { lg: "grid", base: "none" },
        gridAutoFlow: "rows",
        gridTemplateRows: { lg: "152px 500px", xl: "152px 732px" },
      }}
    >
      {/* section heading */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          borderTop: "1px solid black",
          borderBottom: "1px solid black",
          gap: "2rem",
        }}
      >
        <Image src="/images/perfumeHeading.png" />
        <Heading fontFamily="novara" fontSize="4rem" fontWeight="400">
          the fragrance difference
        </Heading>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          // height: { lg: '70%', xl: 'auto' },
        }}
      >
        <Box
          position="relative"
          top="0"
          height="100%"
          overflow="auto"
          overscrollBehaviorY="none"
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
          id="scrollDemo"
          ref={scrollDemo}
        >
          <Box
            // sx={{
            //   position: 'absolute',
            //   top: 0,
            //   left: 0,
            //   width: '100%',
            // }}
            // style={{ y: scrollProg }}
            ref={content}
          >
            <OnePerfume>Engage L&apos;amante Aqua</OnePerfume>
            <OnePerfume>Engage L&apos;amante Aqua</OnePerfume>
            <OnePerfume>Engage L&apos;amante Aqua</OnePerfume>
            <OnePerfume>Engage L&apos;amante Aqua</OnePerfume>
            <OnePerfume>Engage L&apos;amante Aqua</OnePerfume>
            <OnePerfume>Engage L&apos;amante Aqua</OnePerfume>
            <OnePerfume>Engage L&apos;amante Aqua</OnePerfume>
            <OnePerfume>Engage L&apos;amante Aqua</OnePerfume>
          </Box>
        </Box>

        <Box
          position="relative"
          display="block"
          justifyContent="flex-start"
          alignItems="center"
          w="100%"
          height="100%"
          borderBottom="1px solid black"
          borderLeft="1px solid black"
          overflow="auto"
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
          ref={horizontalScroll}
        >
          <Box
            sx={{
              // position: 'absolute',
              // left: 0,
              // top: 0,
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "10",
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              borderRadius="full"
              w="20vw"
              src="/images/unsplash1.png"
              alt="1img"
            />
            <Image
              borderRadius="full"
              w="20vw"
              src="/images/unsplash1.png"
              alt="2img"
            />
            <Image
              borderRadius="full"
              w="20vw"
              src="/images/unsplash1.png"
              alt="3img"
            />
            <Image
              borderRadius="full"
              w="20vw"
              src="/images/unsplash1.png"
              alt="4img"
            />
            <Image
              borderRadius="full"
              w="20vw"
              src="/images/unsplash1.png"
              alt="5img"
            />
            <Image
              borderRadius="full"
              w="20vw"
              src="/images/unsplash1.png"
              alt="6img"
            />
            <Image
              borderRadius="full"
              w="20vw"
              src="/images/unsplash1.png"
              alt="7img"
            />
            <Image
              borderRadius="full"
              w="20vw"
              src="/images/unsplash1.png"
              alt="8img"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Fragrances;
