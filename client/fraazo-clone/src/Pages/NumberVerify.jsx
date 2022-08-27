import {
    FormControl,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    Box,
    Text,
    useToast,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import loginSuccess from "../assets/loginSuccess.png";
const GetOTP = styled.div`
    background-color: #43c6ac;
    color: white;
    width: 40%;
    padding: 10px 0px;
    border-radius: 50px;
    margin:auto;
  `;
const FootBox = styled.button`
    margin-bottom: 40px;
    margin-top: 20px;
  `;
const InputBar = styled.input`
    width: 100%;
    outline: none;
    border-bottom: 1px solid #43c6ac;
    padding: 8px 0px;
  `;

const NumberVerify = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();
    const toast = useToast();

    const initialRef = useRef(null);
    const OTP = useRef(null);
    const [value, setvalue] = useState(true);
    const [valid, setValid] = useState(true);
    const [mobile, useMobile] = useState('')
    const f_name = useRef(null);
    const l_name = useRef(null);
    const email = useRef(null);
    const [title, setTitle] = useState();

    const gOTP = 123;
    const isAuth = false;
    const mNumber = '0123456789';

    const dispatch = useDispatch();

    const handleOTP = () => {
        console.log(initialRef.current.value)

        
    };
    const handleData = (e) => {
        e.preventDefault();

        // dispatch(
        //   saveDetails({
        //     firstname: f_name.current.value,
        //     lastname: l_name.current.value,
        //     email: email.current.value,
        //     title: title,
        //     mobile: mNumber,
        //   })
        // );
    };
    const handleChange = () => {
        console.log(initialRef)
    }

    useEffect(() => {
        if (isAuth) {
            setTimeout(() => {
                navigate("/");
            }, 2000);
        }
        onOpen();
    }, []);

    return (
        <Box>
            <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>

                <ModalOverlay >
                        <ModalContent borderRadius="20px" >
                            <ModalHeader> </ModalHeader>
                            <ModalCloseButton />
                            <ModalHeader p="0px 24px">Welcome to Fraazo!</ModalHeader>
                            <ModalBody pt="0">Sign In to track your Order and More.</ModalBody>


                            <ModalBody pb={6}>
                                <FormControl>
                                    <InputBar
                                        ref={initialRef}
                                        maxLength={"10"}
                                        placeholder="Enter Your Mobile Number"
                                    />
                                </FormControl>

                                <Text opacity="0.7" fontSize="13px">
                                    We will send you an OTP on this number
                                </Text>
                            </ModalBody>

                            <FootBox>
                                <GetOTP colorScheme="blue" mr={3} onClick={handleOTP}>
                                    Get OTP
                                </GetOTP>
                            </FootBox>
                        </ModalContent>
                </ModalOverlay>
            </Modal>
        </Box>
    )
}

export default NumberVerify