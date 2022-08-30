import React, {useState } from "react";
import styled from "styled-components";

import {
  Box,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";


import { useRef } from "react";
import { useSelector } from "react-redux";
import Item from "./item";

const SearchBar = styled.div`
  position: relative;
  border: 1px solid;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 24px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  outline: 0;
  font-size: 13px;
  line-height: 18px;
  padding: 14px;
  color: #333333;
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  width: 50vw;
  & input {
    display: block;
    background-color: #f9f9f9;
    border: none;
    width: 100%;
  }
  & input:focus {
    outline: none;
  }
  & svg {
    position: absolute;
    right: 22px;
    cursor: pointer;
  }
  @media all and (max-width:1000px) {
    width: 40vw;
  }
  @media all and (max-width:850px) {
    width: 30vw;
  }
  @media all and (max-width:710px) {
    width: 20vw;
  }
  
`;
const SearchIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="#4fbb90"
    strokeWidth={3}
    height={"16px"}
    width={"16px"}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);
const SearchBox = () => {
  const [query, setQuery] = useState("");

  const [searchData, setSearchData] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {data,loading} = useSelector((state)=>state.product);

  const handleOnChangeOpen = (e) => {
    const { value } = e.target;
    setQuery(value);
    // console.log("query", value);

    if (value.length >= 3) {
      onOpen();
     fetchResult(value);
    } else {
      setSearchData([]);
    }
  };
  const id = useRef(null);
  const debounce = (e, fetchResult, delay) => {
     console.log("value", e.target.value);

    const { value } = e.target;
    setQuery(value);
     console.log("query", value);

    if (value.length < 3) {
      onClose();
      // setQuery("");
    } else if (value.length >= 3) {
      if (id.current) {
        clearTimeout(id.current);
      }
      id.current = setTimeout(function () {
        fetchResult(value);
      }, delay);
    }
  };
   const fetchResult = (query) => {
   console.log(data);
    let condition = new RegExp(query);
    let result = data.filter(function (el) {
      return condition.test(el.name);
    });
    setSearchData(result)
   };
 

  return (
    <div>
      <SearchBar>
        <Input
          flex={1}
          pl={"5px"}
          type="search"
          variant="unstyled"
          value={query}
          fontSize={'12px'}
          letterSpacing={'1.1px'}
          fontWeight={'100'}
          placeholder="Find fresh vegetables, fruits and dairy..."
          //   onClick={() => onOpen()}
          onChange={handleOnChangeOpen}
        />
        {query?.length == 0 && SearchIcon}
      </SearchBar>
      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        {query.length >= 2 && <ModalOverlay opacity={"0.5"} />}
        <ModalContent mt={5} rounded={"24px 24px 5px 5px"} bg={"#f9f9f9"}>
          <Input
            type={"search"}
            variant="flushed"
            h={"50px"}
            p={"0 20px"}
            value={query}
            onChange={(e) => debounce(e, fetchResult, 600)}
          />

          <ModalBody
            p={"0"}
            maxH={"400px"}
            overflowX={"hidden"}
            overflowY={"auto"}
          >
           
            {searchData?.length == 0 ? (
              <Box fontSize={"14px"} textAlign={"center"} p={"10px 0"}>
                No Results Found
              </Box>
            ) : (
              <Box>
                {searchData?.map((item) => (
                  <Item
                    key={item._id}
                    e={item}
                    onClose={onClose}
                    setQuery={setQuery}
                    loading={loading}
                  />
                ))}
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default SearchBox;
