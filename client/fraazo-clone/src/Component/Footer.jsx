import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import homeLogo from "../assets/FooterHome.svg";
import emailIcon from "../assets/emailIcon.png";
import phoneIcon from "../assets/phoneIcon.png";
import googlePlayFooter from "../assets/googlePlayFooter.png";
import appleStoreFooter from "../assets/appleStoreFooter.png";
import footerbar from "../assets/homepage/footerbar.svg";
import styled from "styled-components";

const FooterMid = styled.div`
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr;
gap:7%;
justify-content:center;
padding:10vh 0vh 2vh 0vh;
height:100%;
margin-top:20px;
.Bottom1{
  margn-top:50px;
}
@media (max-width: 1000px) {
  grid-template-columns:1fr 1fr;
  .Bottom1{
    margn-top:100px;
  }
}
@media (max-width: 500px) {
  grid-template-columns:1fr;
  gap:2%;
  .Bottom1{
    margn-top:100px;
  }
}
`

const MainFooterCssContainer = styled.div`
.Bottom1{
  margin-top:10px;
}
@media (max-width: 1000px) {
  .Bottom1{
    margin-top:70px;
  }
}
@media (max-width: 500px) {
  .Bottom1{
    margin-top:100px;
  }
}
`

const Footer = () => {
  const footerItem = {
    usefulLinks: {
      heading: "Useful Links",
      subHeading: [
        { item: "Privacy Policy" },
        { item: "FAQ" },
        { item: "Terms & Conditions" },
      ],
    },

    cities: {
      heading: "Cities We Serve",
      subHeading: [
        { item: "Mumbai" },
        { item: "Hyderabad" },
        { item: "Bangalore" },
        { item: "Delhi" },
        { item: "Noida" },
        { item: "Gurugram" },
        { item: "Pune" },
      ],
    },
  };
  return (
    <MainFooterCssContainer>
      <Box>
        <Box>
          <Image
            w={"100%"}
            // src="https://fraazo.com/static/footerDesign-26fcca451f726500fd06e7fc02d09cb4.svg"
            src={footerbar}
          />
        </Box>
        <Box
          bg={"#165241"}
          boxSizing={"border-box"}
          p={"0 50px"}
          color="white"
          mt={"-5px"}
          style={{ display: 'grid' }}
        >
          <Container
            maxW="container.xl"
            boxSizing="border-box"
          >
            <Box>
              <FooterMid>
                <Box>
                  <Box >
                    <Link to="/">
                      <Image src={homeLogo} w={"100%"} pb={"31px"} />
                    </Link>
                    <Box textAlign={"left"} opacity="0.7" lineHeight={"28px"}>
                      {"Order online vegetables & fruits directly from the farm. Fraazo is online platform that allows customer to get farm fresh produce directly from farmers."}
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <Box textAlign={"left"} lineHeight={"40px"}>
                    <Box fontSize={"18px"} fontWeight={700}>
                      {footerItem?.usefulLinks?.heading}
                    </Box>
                    {footerItem?.usefulLinks?.subHeading.map((el) => (
                      <Box
                        key={el.item}
                        fontSize={"16px"}
                        fontWeight={400}
                        opacity={"0.7"}
                        cursor={"pointer"}
                        _hover={{ textDecoration: "underline" }}
                      >
                        {el.item}
                      </Box>
                    ))}
                  </Box>
                </Box>
                <Box>
                  <Box textAlign={"left"} lineHeight={"40px"}>
                    <Box fontSize={"18px"} fontWeight={700}>
                      {footerItem?.cities?.heading}
                    </Box>
                    {footerItem?.cities?.subHeading.map((el) => (
                      <Box
                        key={el.item}
                        fontSize={"16px"}
                        fontWeight={400}
                        opacity={"0.7"}
                        cursor={"pointer"}
                        _hover={{ textDecoration: "underline" }}
                      >
                        {el.item}
                      </Box>
                    ))}
                  </Box>
                </Box>
                <Box>
                  <Box textAlign={"left"} lineHeight={"40px"}>
                    <Box fontSize={"18px"} fontWeight={700}>
                      {"Connect with us"}
                    </Box>

                    <Flex
                      fontSize={"16px"}
                      fontWeight={400}
                      opacity={"0.7"}
                      gap={2}
                      alignItems={"center"}
                    >
                      <Box>
                        <Image height={'20px'} width={'20px'} src={emailIcon} />
                      </Box>
                      <Box cursor={"pointer"}>support@fraazo.com</Box>
                    </Flex>
                    <Flex
                      fontSize={"16px"}
                      fontWeight={400}
                      opacity={"0.7"}
                      gap={2}
                      alignItems={"center"}
                    >
                      <Box>
                        <Image height={'20px'} width={'20px'} src={phoneIcon} />
                      </Box>
                      <Box cursor={"pointer"}>+91 9152291522</Box>
                    </Flex>
                    <Box >
                      <Box fontSize={"18px"} fontWeight={700}>
                        {"Download The App"}
                      </Box>
                      <Flex alignContent={"center"} gap={"2"}>
                        <Box pt={2}>
                          <a href="https://play.google.com/store/apps/details?id=com.fraazo.app" target="_blank">
                            <Image width={'100%'} src={googlePlayFooter} />
                          </a>
                        </Box>
                        <Box>
                          <a href="https://apps.apple.com/us/app/fraazo/id1243998420" target="_blank" >
                            <Image width={'100%'} src={appleStoreFooter} />
                          </a>
                        </Box>
                      </Flex>
                    </Box>
                  </Box>
                </Box>
              </FooterMid>
            </Box>
            <Box border={"1px solid #165241"}>
              <Heading
                mb={"20px"}
                textAlign={"left"}
                fontWeight={500}
                fontSize={"40px"}
                className='Bottom1'
              >
                {"Fresh Fruits & Vegetables Grocery Shopping Online"}
              </Heading>
              <Text
                mb={"14px"}
                fontSize={"14px"}
                opacity={"0.7"}
                textAlign="justify"
              >
                {
                  "The quality of fruits & vegetables is synonymous with its freshness, while getting fresh fruits and vegetables is a tedious task at times but with Fraazo you can get it delivered at your doorstep. Fraazo brings a wide range of farm fresh fruits, vegetables and dairy products to you, all in just a click. We currently serve about more than 3lacs+ happy customers in Mumbai, Navi Mumbai, Thane, Kalyan-Dombivli and Virar. Fraazo has made online shopping of fresh produce much easier with its hassle-free home delivery options. You can choose the delivery slot as per your choice and schedule your order accordingly. Or you can simply opt for the option of 90 mins Express Delivery and get your order delivered in not more than 90 mins. The farm fresh fruits and vegetables on Fraazo are available at best prices compared to other vendors & supermarkets. Plus with so many exciting offers, one can save up to 20% on their Monthly grocery budgets. No need to wait in long queues in crowded supermarkets or local mandis for getting the best prices on veggies. Kick the stress out & just Fraazo your dose of freshness with savings at the comfort of your home. Fraazo directly sources fresh fruits and veggies from an extensive network of farmers across Maharashtra, hence bringing you fresh produce straight from farm to table in less than 12 hours. With our Safe & Hygienic packaging and minimal multiple handling, we ensure you get the best quality fresh produce."
                }
              </Text>
              <Text
                mb={"14px"}
                fontSize={"14px"}
                opacity={"0.7"}
                textAlign="justify"
              >
                {
                  "The fruits and vegetables are 100% hand-picked fresh from farm, while some products are hydroponically-grown. The wide range of fruits and veggies on Fraazo include more than 100+ farm fresh vegetables and fruits, starting from regular veggies like dudhi, cauliflower, beetroot, cabbage, etc. to exotic veggies like broccoli, lettuce etc. We also provide the essential vegetable combos like Onion, Potato, Tomato Combo, Salad Combo, Fresh Cut-Veg Combos or Fruit Combos like Banana, Apple Combo, & more. There are a lot of exciting deals on vegetables & fruits, every day of the week, the major highlights being Monday Mandi, Veggie Wednesday, Freelivery Thursday & Fruit Friday.For payments, you can choose from the multiple payment options as Fraazo accepts Debit card, Credit card, UPI options like iMobile, Google Pay, 8+ e-Wallet options like Phonepe, JioPay, MobiKwik, Sodexo, NetBanking and Cash on Delivery (COD). If you ever have an issue with missing items or any quality issue, you can raise your concern with us in 48 hrs & we shall refund/ replace your product with “no-questions-asked-policy”. You can simply connect with our Customer Support team via Chat Support or Call on 9152291522."
                }
              </Text>
            </Box>
            <Divider color={"white"} opacity={"0.2"} />
            <Box p={"25px 0"} opacity={"0.7"} fontSize={"16px"}>
              © Copyrights 2021 - 2022. Fraazo. All Rights Reserved.
            </Box>
          </Container>
        </Box>
      </Box>
    </MainFooterCssContainer>
  );
};

export default Footer;
