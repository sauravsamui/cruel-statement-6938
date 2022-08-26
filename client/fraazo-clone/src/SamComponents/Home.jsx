import {
  Box,
  Container,
  Flex,
  Image,
  Heading,
  Text,
  Stack,
  Divider,

} from "@chakra-ui/react";
import React, { useEffect } from "react";
import sideOne from "../SamAssets/sideOne.png";
import sideTwo from "../SamAssets/sideTwo.png";
import sideThree from "../SamAssets/sideThree.png";
import ImageSlider from "./ImageSlider";
const sliderImg = [
  { img: "https://imageprod.fraazo.com/fraazo-prod/web_ban/4923.png", id: 3763 },
  { img: "https://imageprod.fraazo.com/fraazo-prod/web_ban/4820.png", id: 3765 },
  { img: "https://imageprod.fraazo.com/fraazo-prod/web_ban/4986.png", id: 3766 },
  { img: "https://imageprod.fraazo.com/fraazo-prod/web_ban/4985.png", id: 3767 },
  { img: "https://imageprod.fraazo.com/fraazo-prod/web_ban/2562.png", id: 3768 },
]

const Home = () => {


  return (
    <Box>
      <Box p={"0 60px"}>
        <Flex gap={7}>
          <Box w="65%" color="white">
            <ImageSlider key={sliderImg.id} />
          </Box>
          <Box w="33%">
            <Flex flexDir={"column"} gap={4}>
              <Box>
                <Image w={"100%"} maxH={"111px"} src={sideOne} />
              </Box>
              <Box>
                <Image w={"100%"} maxH={"111px"} src={sideTwo} />
              </Box>
              <Box>
                <Image w={"100%"} maxH={"111px"} src={sideThree} />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default Home