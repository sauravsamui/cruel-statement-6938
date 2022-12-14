import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HomeLogo from "../assets/homeLogo.svg";
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import SearchBox from "./SearchBox";
import { Cart } from "../Pages/Cart/cart";
import { getCartItemApi } from "../Store/Cart/cart.actions";

const InnerDivFlex = styled.div`
  color: #333333;
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  cursor: pointer;
  &:hover svg {
    fill: #343940;
  }
`;

const cartIcon = (
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="shopping-cart"
    className="svg-inline--fa fa-shopping-cart fa-w-18 fa-1x "
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
  >
    <path
      fill="currentColor"
      d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
    ></path>
  </svg>
);

const creditIcon = (
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="wallet"
    className="svg-inline--fa fa-wallet fa-w-16 fa-1x "
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      fill="currentColor"
      d="M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
    ></path>
  </svg>
);
const userIcon = (
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="user"
    className="svg-inline--fa fa-user fa-w-14 fa-1x "
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
  >
    <path
      fill="currentColor"
      d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
    ></path>
  </svg>
);
const locationSvg = (
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="map-marker-alt"
    className="svg-inline--fa fa-map-marker-alt fa-w-12 fa-1x "
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 384 512"
  >
    <path
      fill="currentColor"
      d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
    ></path>
  </svg>
);
const MainNavContainer = styled.div`
  .navLogoMain{
    width:150px;
  }
  .locatPart{
    cursor:pointer;
  }
  .mainContainerForNav{
    padding:0px 35px 0px 35px;
  }
  .navPart3{
    gap:40px;
  }
  @media all and (max-width:1200px) {
    .navPart3{
      gap:20px;
    }
    .mainContainerForNav{
      padding:0px 25px 0px 25px;
    }
  }
  @media all and (max-width:1150px) {
    .navPart3{
      gap:10px;
    }
    .mainContainerForNav{
      padding:0px 15px 0px 15px;
    }
  }
  @media all and (max-width:620px) {
    .navLogoMain{
      width:100px;
      margin-right:-20px;
    }
    .navPart3{
      gap:5px;
    }
    .mainContainerForNav{
      padding:0px 10px 0px 10px;
    }
    .last3size{
      fontSize:10px;
    }
    .locatPart{
      cursor:pointer;
      display:none;
    }
  }
`
const Navbar = ({keys}) => {
  const navigate = useNavigate();
  const { onOpen} = useDisclosure();
  const { isAuth: loggedIn} = useSelector((state) => state.auth);
  const [cartflag, setcartflag] = useState(false)
  const {cartData} = useSelector((state)=>state.cart);
  const dispatch = useDispatch()

  var UserStoredDataFraazo = JSON.parse(localStorage.getItem('UserStoredDataFraazo')) || {};
  var toggleLogin = Object.keys(UserStoredDataFraazo).length;
  var userName = "Login";
  if(toggleLogin!==0){
    userName=UserStoredDataFraazo.newSavedNo.firstname
  }

  useEffect(() => {
    if(loggedIn){
      let UserStoredDataFraazo = JSON.parse(localStorage.getItem('UserStoredDataFraazo')) || {}
      let loggedInAlready = Object.keys(UserStoredDataFraazo).length;
      let user = 123456789123;
      if(loggedInAlready){
          user = UserStoredDataFraazo.newSavedNo._id
      }
        dispatch(getCartItemApi(user));
    }

  
    return () => {
      
    }
  }, [loggedIn])

  const handleLoginAccount = () => {
   let loginStatus = "true";
    if (loginStatus == "true") {
      navigate("/profile/order");
    } else {
      navigate("/login");
    }
  };

  return (
    <MainNavContainer>
    {cartflag?<Cart cartflag={cartflag} setcartflag={setcartflag}/>:""}
    <Box
        boxShadow={"base"}
        zIndex={"sticky"}
        bg={"white"}
        w={"100vw"}
        position={"fixed"}
        top={0}
        left={0}
        right={0}
      >
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          height={"88px"}
          width={'100vw'}
          m={"auto"}
          className='mainContainerForNav'
        >
          <Flex gap={10}>
            <InnerDivFlex>
              <Link to="/">
                <Image src={HomeLogo} alt="logo" className="navLogoMain"/>
              </Link>
            </InnerDivFlex>
            <Flex
              className='locatPart'
              alignItems={"center"}
              gap={2}
              color={"#999"}
              _hover={{ color: "black" }}
              onClick={keys}
            >
              <Box w={"12px"} h={"12px"} mt="-5px">
                {" "}
                {locationSvg}
              </Box>
              <Text fontSize={"13px"} fontWeight={500}>
                Powai
              </Text>
            </Flex>
          </Flex>

          <SearchBox />

          <Flex justifyContent={"space-between"} className='navPart3' pr={'20px'}>
            <Button
              position={"relative"}
              variant="unstyled"
              onClick={() => onOpen()}
            >
              <Flex
                alignItems={"center"}
                gap={2}
                color={"#999"}
                _hover={{ color: "black" }}
                onClick={()=>setcartflag(!cartflag)}
              >
              <Box w={"15px"} > {cartIcon}</Box>

              <Text fontSize={"13px"} >Cart</Text>
            </Flex>
            <Flex
              minW={4}
              h={4}
              justifyContent={"center"}
              alignItems={"center"}
              rounded={"100px"}
              bg={"green.500"}
              position="absolute"
              top={0.5}
              left={1.5}
              fontSize={"10px"}
              color={"white"}
            >
              {cartData.length}
            </Flex>
          </Button>
          <Button
            variant="unstyled"
            disabled={!loggedIn}
            onClick={() => {
              navigate("/myaccount/mycredits");
            }}
          >
            <Flex
              alignItems={"center"}
              gap={2}
              color={"#999"}
              _hover={{ color: "black" }}
            >
              <Box w={"15px"}> {creditIcon}</Box>

              <Text className="last3size" fontSize={"13px"}>Credits</Text>
            </Flex>
          </Button>
          <Button variant="unstyled" onClick={() => handleLoginAccount()}>
            <Flex
              alignItems={"center"}
              gap={2}
              color={"#999"}
              _hover={{ color: "black" }}
            >
              <Box w={"14px"}> {userIcon}</Box>

              <Text fontSize={"13px"}>
                {loggedIn ? userName : "Login"}
                {/* {userName} */}
              </Text>
            </Flex>
          </Button>
          {/* <CartComponent isOpen={isOpen} onOpen={onOpen} onClose={onClose} /> */}
        </Flex>
      </Flex>
    </Box>
    </MainNavContainer>
  );
};

export default Navbar;
