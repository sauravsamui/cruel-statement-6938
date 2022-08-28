import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeAllCartApi } from "../../../../Store/Cart/cart.actions";
import style from "./credit.module.css";

const Credit = () => {
  const [cn, setcn] = useState("");
  const [mm, setmm] = useState("");
  const [yy, setyy] = useState("");
  const [cv, setcv] = useState("");
  const [hn, sethn] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  let handleOrder = () => {
    let UserStoredDataFraazo =
      JSON.parse(localStorage.getItem("UserStoredDataFraazo")) || {};
    let loggedInAlready = Object.keys(UserStoredDataFraazo).length;
    let user = 123456789123;
    if (loggedInAlready) {
      user = UserStoredDataFraazo.newSavedNo._id;
    }
    dispatch(removeAllCartApi(user));
  };
  

  return (
    <div className={style.creditmain}>
      <p>Card Number</p>
      <input
        type="number"
        placeholder="Card Number"
        className={style.cninp}
        onChange={(e) => setcn(e.target.value)}
        disabled={cn.length == 16}
      />

      <div className={style.expcvv}>
        <div>
          <p>Expiry (MM/YY)</p>
          <div className={style.exp}>
            <input
              type="number"
              placeholder="MM"
              onChange={(e) => setmm(e.target.value)}
              disabled={mm.length == 2}
            />
            <input
              type="number"
              placeholder="YY"
              onChange={(e) => setyy(e.target.value)}
              disabled={yy.length == 2}
            />
          </div>
        </div>
        <div>
          <p>CVV</p>
          <input
            type="number"
            placeholder="***"
            onChange={(e) => setcv(e.target.value)}
            disabled={cv.length == 3}
          />
        </div>
      </div>
      <div>
        <p>Card Name</p>
        <input
          type="name"
          placeholder="Card holder name"
          onChange={(e) => sethn(e.target.value)}
        />
      </div>
      <div className={style.modaldiv}>
        <Button onClick={onOpen}>PAY NOW</Button>

        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{cn.length<16||mm.length<2||yy.length<2||cv.length<3||hn.length<3?"Invalid Credential":"Order Placed"}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <img
                src={cn.length<16||mm.length<2||yy.length<2||cv.length<3||hn.length<3?"https://media3.giphy.com/media/8L0Pky6C83SzkzU55a/200w.gif?cid=82a1493bwxnqeobptsxczuzd1cymd0kzijdx31hl56g5lind&rid=200w.gif&ct=g":"https://c.tenor.com/kGFp0e2m_RsAAAAM/success.gif"}
                className={style.modalimg}
              />
            </ModalBody>

            <ModalFooter>
              <Link to={cn.length<16||mm.length<2||yy.length<2||cv.length<3||hn.length<3?"":"/"}>
                <Button
                  colorScheme="blue"
                  mr={3}
                  onClick={() => {
                    onClose();
                    {cn.length<16||mm.length<2||yy.length<2||cv.length<3||hn.length<3?setcv(""):handleOrder()}
                    ;
                  }}
                >
                  Close
                </Button>
              </Link>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default Credit;