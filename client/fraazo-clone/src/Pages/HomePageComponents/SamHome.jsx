


import Fruits from "./Fruits"
import BestDeals from "./BestDeals"
import Vegetables from './Vegetables';
import CenterImages from "./CenterImages"
import {
  Box,
  Flex,
  Image,

} from "@chakra-ui/react";
import sideOne from "../../HomePageAssets/sideOne.png"
import sideTwo from "../../HomePageAssets/sideTwo.png";
import sideThree from "../../HomePageAssets/sideThree.png";
import ImageSlider from "./ImageSlider";
const sliderImg = [
  { img: "https://imageprod.fraazo.com/fraazo-prod/web_ban/4923.png", id: 3763 },
  { img: "https://imageprod.fraazo.com/fraazo-prod/web_ban/4820.png", id: 3765 },
  { img: "https://imageprod.fraazo.com/fraazo-prod/web_ban/4986.png", id: 3766 },
  { img: "https://imageprod.fraazo.com/fraazo-prod/web_ban/4985.png", id: 3767 },
  { img: "https://imageprod.fraazo.com/fraazo-prod/web_ban/2562.png", id: 3768 },
]

function SamHome() {
  return (
        <div>

    <Box mt = "120px">
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
       
        <BestDeals />
        <CenterImages />
        <Fruits />
        <Vegetables />
     
        </div>
  );
}

export default SamHome;
