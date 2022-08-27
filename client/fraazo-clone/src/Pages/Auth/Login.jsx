import {
  Button,
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
  RadioGroup,
  Radio,
  FormLabel,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signupApi } from "../../Store/auth/auth.action";
import loginSuccess from "../../assets/loginSuccess.png";
const GetOTP = styled.div`
  background-color: #43c6ac;
  color: white;
  width: 40%;
  padding: 10px 0px;
  border-radius: 50px;
  margin:auto;
`;
const FootBox = styled.div`
  margin-bottom: 40px;
  margin-top: 20px;
  text-align:center;
  cursor:pointer
`;
const InputBar = styled.input`
  width: 100%;
  outline: none;
  border-bottom: 1px solid #43c6ac;
  padding: 8px 0px;
`;
const InputBarOTP = styled.input`
  width: 100%;
  outline: none;
  border-bottom: 1px solid #43c6ac;
`;

const Login = () => {

  var UserStoredDataFraazo = JSON.parse(localStorage.getItem('UserStoredDataFraazo')) || {};
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const toast = useToast();

  const initialRef = useRef(null)
  var OTP = useRef('123456');
  const [otps, setOTP] = useState('123456');
  const [mNumber, setmNumber] = useState('7996682118');
  const [value, setvalue] = useState(true);
  const [valid, setValid] = useState(true);
  const f_name = useRef(null);
  const conpassword = useRef(null);
  const password = useRef(null);
  const l_name = useRef(null);
  const email = useRef(null);
  const [isAuth, setisAuth] = useState(false)
  const [title, setTitle] = useState();

  var MobileN = ''
  const dispatch = useDispatch();

  const handleOTP = async () => {
    let x = Number(initialRef.current.value);
    var obj = { mobile: x }
    await axios.post('https://serene-hollows-15248.herokuapp.com/auth', obj).then((e) => {
      localStorage.setItem('UserStoredDataFraazo', JSON.stringify(e.data))
      OTP = e.data.otp;
      MobileN = e.data.newSavedNo.mobile;
      setmNumber(e.data.newSavedNo.mobile)
      setOTP(e.data.otp);
      alert(`Your OTP is ${e.data.otp}`)
      if (e.data.message == 'OTP Verified Successfully !!') {
        setvalue(false);
        setisAuth(true)
      } else {
        setvalue(false);
        setValid(true)
      }
    });
  };

  const submitOTP = () => {
    console.log("current:", OTP.current.value, otps);

    if (OTP.current.value == otps) {
      let flag = localStorage.getItem("flag") || false;
      if (flag) {
        OTP.current.value = "";
        setValid(false);
      } else {
        OTP.current.value = "";
        setValid(false);
      }
    } else {
      // console.log("wrong otp");
      toast({
        title: `Invalid OTP !!`,
        description: "",
        status: "warning",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
      // toast.closeAll();
    }
  };

  const handleData = async(e) => {
    e.preventDefault();
    var dataObj = {
      firstname: f_name.current.value,
      lastname: l_name.current.value,
      email: email.current.value,
      password: password.current.value,
      confirmPassword: conpassword.current.value,
      mobile: mNumber,
      token: ''
    }
    var PostNewUserData = await axios.post('https://serene-hollows-15248.herokuapp.com/signup',dataObj);
    let tempObj = {newSavedNo:PostNewUserData.data.result, message:PostNewUserData.data.message}
    localStorage.setItem('UserStoredDataFraazo', JSON.stringify(tempObj))
    alert(PostNewUserData.data.message)
    setisAuth(true);

};
const handleChange = () => {}

useEffect(() => {
  if (isAuth) {
    console.log("inside");
    setTimeout(() => {
      onClose();
      navigate("/");
    }, 2000);
  }
  onOpen();
}, []);

return (
  <Box>
    <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      {value ? (
        <ModalContent borderRadius="20px">
          <ModalHeader> </ModalHeader>
          <ModalCloseButton />
          <ModalHeader p="0px 24px">Welcome to Fraazo!</ModalHeader>
          <ModalBody pt="0">Sign In to track your Order and More.</ModalBody>
          <ModalBody pb={6}>
            <FormControl>
              {/* <FormLabel>First name</FormLabel> */}
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
      ) : valid ? (
        <ModalContent borderRadius="20px">
          <ModalHeader> </ModalHeader>
          <ModalCloseButton />
          <ModalHeader>Welcome to Fraazo!</ModalHeader>
          <ModalBody color="#43c6ac">Your OTP is : {otps}</ModalBody>
          <ModalBody>Sign In to track your Order and More.</ModalBody>
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Enter 6-Digit OTP</FormLabel>
              <InputBarOTP ref={OTP} />
            </FormControl>

            <Text opacity="0.7" fontSize="13px">
              OTP has been sent to {mNumber}
            </Text>
            <Text opacity="0.7" fontSize="13px">
              Haven't received your OTP yet?
            </Text>
          </ModalBody>

          <FootBox>
            <GetOTP colorScheme="blue" mr={3} onClick={submitOTP}>
              Continue
            </GetOTP>
          </FootBox>
        </ModalContent>
      ) : isAuth ? (
        <ModalContent borderRadius="20px" textAlign="center">
          <ModalCloseButton onClick={() => navigate("/")} />
          <ModalHeader>Welcome to Fraazo!</ModalHeader>
          <ModalBody
            p="20px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <img src={loginSuccess} width="40%" alt="" />
          </ModalBody>
          <ModalBody>Mobile No Verified </ModalBody>
        </ModalContent>
      ) : (
        <ModalContent borderRadius="20px" style={{ width: '100%', padding: '20px' }}>
          <form onSubmit={handleData} style={{ width: '100%' }}>
            <ModalCloseButton />
            <ModalHeader>Hello New Customer</ModalHeader>
            <ModalBody>Register now for Unbelievable Discounts.</ModalBody>
            <ModalBody pb={6}>
              <FormControl style={{ display: "grid", gap: '20px' }}>
                <div style={{ display: "flex", gap: '20px', justifyContent: "space-between" }}>
                  <input
                    ref={f_name}
                    placeholder="First Name"
                    style={{
                      fontSize: '12px',
                      outline: "none",
                      borderBottom: "1px solid #43c6ac",
                    }}
                    // name = 'fname'
                    // onChange={handleChange}
                    required
                  />
                  <input
                    ref={l_name}
                    placeholder="Last Name"
                    style={{
                      fontSize: '12px',
                      outline: "none",
                      borderBottom: "1px solid #43c6ac",
                    }}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div style={{ display: "flex", gap: '20px', justifyContent: "space-between" }}>
                  <InputBar
                    ref={email}
                    style={{ fontSize: '12px' }}
                    placeholder="Email Id"
                    type="email"
                    // onChange={handleChange}
                    required
                  />
                  <InputBar
                    value={mNumber}
                    onChange={handleChange}
                    style={{ fontSize: '12px' }}
                    placeholder="Mobile Number"
                    required
                  />
                </div>
                <div style={{ display: "flex", gap: '20px', justifyContent: "space-between" }}>
                  <InputBar
                    ref={password}
                    style={{ fontSize: '12px' }}
                    placeholder="Password"
                    type="password"
                    onChange={handleChange}
                    required
                  />
                  <InputBar
                    ref={conpassword}
                    style={{ fontSize: '12px' }}
                    placeholder="Confirm Password"
                    type="password"
                    onChange={handleChange}
                    required
                  />
                </div>
                <RadioGroup
                  onChange={handleChange}
                  display="flex"
                  mt="20px"
                  required
                >
                  <Box mr={2}>Title :</Box>
                  <Radio mr={2} value="Mr." name="title">
                    Mr.
                  </Radio>
                  <Radio mr={2} value="Mrs." name="title">
                    Mrs.
                  </Radio>
                  <Radio mr={2} value="Miss" name="title">
                    Miss
                  </Radio>
                </RadioGroup>
              </FormControl>
            </ModalBody>
            <FootBox>
              <Button
                ml="160px"
                bgColor="#43c6ac"
                color="white"
                borderRadius="10px"
                p="0px 40px"
                margin='auto'
                onClick={handleData}
              >
                Submit
              </Button>
            </FootBox>
          </form>
        </ModalContent>
      )}
    </Modal>
  </Box>
);
};

export default Login;