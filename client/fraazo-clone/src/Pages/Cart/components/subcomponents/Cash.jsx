import React from "react";
import style from "./cash.module.css";
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
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeAllCartApi } from "../../../../Store/Cart/cart.actions";

// We can have a common modal and it should be customised as per different components
// remove constants from here
const Cash = () => {
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
    <div>
      <div className={style.cashflx}>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAAES0lEQVR4Xu2ay2sTQRzHv5NNNmnSJtH6AAVBRJDWBwhWTEDBm6kgKMWj9eTFo49/wFNvXkRP6knxptJ68eKhRQu+EMXXzVsfmvd7szIxMZtkszOb3Wy2ZfbQS2bm95vPfn+PmS6BeOoEiODwj4AA0VCCACFAtCcFoQihCKEI3UIpQkOEhggNRmjMzEjx2VwZgGdTdJsEvxYTC3t491LPEfH5hMo7YaONU6HOLU2/uMnym8SfJ+bgwXXWwI38++L0ArMokM2shubLU4Ha0vSCZPQyHQFRKZWRS2e6/CCEILJtqyNiY6lCF0T69x/UlNp/ByWvhLEtUdMOJ1fXuecMGkpfIPQ2EN0+zr0pMwA6Fw2GRyH7/dy2eAeaBlEqFFHI5rrWD0XG4JNlpl0rELSLmwHPdAqAaRB00X4VoTfv8m4f088v2RrepJSucXbCcAyEHoRP8SATgnbAocV823ifX0YoPGZqjV6D9fxTsuq2r1eX64msZ9VQqgpyqTRC0TAkybDyIJ/JolwsdflgFQRd0C5VGIXs59k3xJbyaWTk1v5W4ju3oxvo0xUFyykFz1aqPd+8HTAMc5eKO5ZB0P6A9gm8z9sTQcia00xnOOitM3AQRqHBuzEj0mZC4/yHIn7kWr2L1r7k9WJsS4TXJd1xrGpmWRG9DHgJ8D5mLVnaWU6HBoJuwowiLrwv4nteXxF2JM2BgqiWK8im0qYk2wmHJ0e4HkQxl0cxX+gJgqWIw4t58F6EWE2YA1WEUqkik0z1BeLkcgF/KrwYrPcTAwXRqx1vkvkYC8LTcSXyYq2KG9/4y21zLVcrggWC/v4uFoRPAyOvAMdft7fSPElmw4Ogm3x5bAQ75RYNGhFHl/hhyH4ZQYtnjoGHRilfQCHH3tSjIwEcHG2/IHeqYvAo13JDxWOkKf3bB/w4Pd5+3uCBYTUseHy0BUS1UkE2yddPXNrlw7W9rTsKFgg2BBXJ1d911sRDEBnXvwMdeGg03zbLkDYhxqIS7k3+O5UagaDnC3rOMHp4L5FY/tmiiH5gsCqFR5IQ3mp8Ydxrc3oqchQETyyyANDfvbIPo5Ewc6irQVDvabdJu85+HnZOaK1aqylIrye7zLhCEVqvWHLUjh0ZDcE/EjDNjiZpmqxZHSjLF1tzhNEucqkMKuX21joQGkEgaO7OwjSpxgTXgOh3A3bM4ynvJLZwZh9RyU87DLp1DZYa6j0I/ROfTzwGcNGtG7HiFw+E/yCahk7MJ856VPWU1nCpWLpmxZGhzFVV0H9d1mq9r/46/WJ+QDH54Dj/7clQdm2PUQGiwVGAECDaQ0ooglcRE/en7hJCrtiTkty7ClMR1PXNXjlUqE+4QBx4ODUuqWTNve/Tmmf17yPMLDHxYOoVATlpZo6bx7Z9MeNmR530zZQinHTMaVsCBG/5dPrNDMueUIRQhMkWe1hSddquCA0RGiI0dKNOhEYDy1/Nc9WulhceAwAAAABJRU5ErkJggg=="
          alt="img"
        />
        <p>Please keep exact change to help us serve you better</p>
      </div>
      <Button onClick={onOpen}>PAY NOW</Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Order Placed</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <img
              src="https://c.tenor.com/kGFp0e2m_RsAAAAM/success.gif"
              className={style.modalimg}
            />
          </ModalBody>

          <ModalFooter>
            <Link to={"/"}>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={() => {
                  onClose();
                  handleOrder();
                }}
              >
                Close
              </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Cash;
