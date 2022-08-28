import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import logo from "../assets/downloadAppBg.svg";
import androidStore from "../assets/AndroidStore.png";
import appleStore from "../assets/appleStore.png";
import googlePlay from "../assets/googlePlay.png";
import mobileApp from "../assets/homepage/mobileApp.png";
import { useState } from "react";
import styled from "styled-components";

const DownloadAppStyling = styled.div`
display:grid;
grid-template-columns:1fr 1fr;
height:fit-content;
.MobileAppDownloadImage{
    height:80vh;
    width:70%;
}
.Part2ofDownload{
  margin-top:100px;
  text-align:left;
  
}
@media all and (max-width:1050px) {
  grid-template-columns:1fr;
  .Part2ofDownload{
    margin-top:0px;
    margin:auto;
    flex-direction:columns;
    align-content:center;
    padding:0px 0px 0px 100px;
  }
}
@media (max-width: 600px) {
  grid-template-columns:1fr;
  .MobileAppDownloadImage{
    margin-bottom:500px;
    height:80vh;
    width:90%;
    margin-left:-40px;
  }
  .Part2ofDownload{
    margin-top:500px;
    padding:50px;
    margin-left:-1px;

  }
}
@media all and (max-width: 400px) {
  grid-template-columns:repeat(1fr);
  width:90%;
  .MobileAppDownloadImage{
    margin-bottom:500px;
    height:150vh;
    width:65%;
    margin-right:100px;
  }
  .Part2ofDownload{
    margin-top:500px;
    font-size:14px;
    padding:50px;
    margin-left:-1px;

  }
  .available{
  
    height:80px;
    width:75%;
    font-size:14px;
    
  }
  .availableOn{
    font-size:16px;
    width:120px;
  }
  .googleplay{
    width:130px;
  }
}
`

const DownloadApp = () => {
  const [mobileNum, setMobileNum] = useState("");

  return (
    <Box>
      <DownloadAppStyling>
        <Box w={"100%"} position={"relative"}>
          <Image src={logo} alt="" />
          <Box
            position={"absolute"}
            top={0}
            left={0}
            right={0}
            bottom={0}
          >
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              verticalAlign="middle"
              mt={"140px"}
            >
              <Image
                className="MobileAppDownloadImage"
                verticalAlign={"middle"}
                // src="https://fraazo.com/static/app-screen-95bf468762091341a8e4bb213eeda2f8.png"
                src={mobileApp}
              />
            </Flex>
          </Box>
        </Box>
        <Box
          w={"100%"}
          p={"10%"}
          margin={"auto"}
          className='Part2ofDownload'
        >
          <Container
            fontSize={"35px"}
            lineHeight={"48px"}
            fontWeight={600}
            p={"0 0 18px 0"}
          >
            Download The App
          </Container>
          <Container
            fontSize={"18px"}
            lineHeight={"25px"}
            fontWeight={400}
            p={"0 140px 40px 0"}
            margin={"0"}
          >
            Enter your phone number to receive a text with a link to download
            the app
          </Container>
          <Flex
            h={"51px"}
            w={"266px"}
            rounded="95px"
            border={"1px solid #e5e5e5"}
            p={"5px"}
            // gap={5}
            fontWeight={600}
          >
            <Flex
              bg={"black"}
              rounded="95px"
              p={"0 20px"}
              gap={2}
              alignItems={"center"}
              cursor={"pointer"}
            >
              <Flex ml={2}>
                <Image height={"20px"} src={androidStore} />
              </Flex>
              <Box color={"white"}>Android</Box>
            </Flex>
            <Flex p={5} gap={2} alignItems={"center"} cursor={"pointer"}>
              <Box fontSize={"24px"}>
                <i className="fa-brands fa-apple"></i>
              </Box>
              <Box>IPhone</Box>
            </Flex>
          </Flex>
          <Box p={"20px 140px 20px 0"}>
            <Flex
              h={"71px"}
              border={
                mobileNum.length < 10
                  ? "1px solid #e5e5e5"
                  : "1px solid #5dc6ad;"
              }
              rounded={"5px"}
              alignItems={"center"}
            >
              <Flex alignItems={"center"}>
                <Flex>
                  <Text pl={"20px"} fontSize={"18px"} lineHeight={"22px"}>
                    + 91
                  </Text>
                </Flex>
                <Flex bg={"#e5e5e5"} h={"36px"} w={"2px"} ml={"15px"}></Flex>
              </Flex>

              <Flex pl={"15px"}>
                <Input
                  variant="unstyled"
                  maxLength="10"
                  type={"text"}
                  placeholder="Enter Your Mobile number"
                  w={"221px"}
                  fontSize={"18px"}
                  lineHeight={"22px"}
                  _placeholder={{ color: "#c9c9c9" }}
                  onChange={(e) => setMobileNum(e.target.value)}
                />
              </Flex>
            </Flex>
          </Box>
          <Flex
            pr={"140px"}
            h={"71px"}
            // border="1px solid #e5e5e5"
            rounded={"5px"}
            alignItems={"center"}
          >
            <Button
              disabled={mobileNum.length < 10}
              colorScheme="teal"
              h={"100%"}
              w={"100%"}
              bgGradient="linear(91.88deg,#5dc6ad 12.32%,#4cdfbc)"
              _hover={{ bgGradient: "linear(91.88deg,#5dc6ad 12.32%,#4cdfbc)" }}
            >
              <Box fontSize={"20px"} fontWeight={500}>
                SUBMIT
              </Box>
            </Button>
          </Flex>
          <Flex className ={"available"} p={"54px 0 20px 0"} alignItems={"center"} gap={3}>
            <Box className ={"availableOn"} fontSize={"18px"} opacity={"0.6"}>
              Available on
            </Box>
            <Box>
              <a href="https://play.google.com/store/apps/details?id=com.fraazo.app" target="_blank" >
                <Image className ={"googleplay"} src={googlePlay}></Image>
              </a>
            </Box>
            <Box>
              <a href="https://apps.apple.com/us/app/fraazo/id1243998420" target="_blank" >
                <Image className ={"googleplay"} src={appleStore}></Image>
              </a>
            </Box>
          </Flex>
        </Box>
      </DownloadAppStyling>
    </Box>
  );
};

export default DownloadApp;
