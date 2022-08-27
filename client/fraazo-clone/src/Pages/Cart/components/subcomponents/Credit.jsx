import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import style from "./credit.module.css"

const Credit = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div className={style.creditmain}>
        
        <p>Card Number</p>
        <input type="number" placeholder='Card Number' className={style.cninp} />
        
        <div className={style.expcvv}>
            <div>
                <p>Expiry (MM/YY)</p>
                <div className={style.exp}>
                    <input type="number" placeholder='MM'/>
                    <input type="number" placeholder='YY'/>
                </div>
                
            </div>
            <div>
                <p>CVV</p>
                <input type="number" placeholder='***'/>
            </div>
        </div>
        <div>
            <p>Card Name</p>
            <input type="name" placeholder='Card holder name'/>
        </div>
        <div className={style.modaldiv}>
           
            <Button onClick={onOpen} >PAY NOW</Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Order Placed</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <img src="https://c.tenor.com/kGFp0e2m_RsAAAAM/success.gif" className={style.modalimg}/>
             
           
            
          </ModalBody>

          <ModalFooter>
            <Link to={"/"}><Button colorScheme='blue' mr={3} onClick={onClose}>Close
             
            </Button></Link>
           
          </ModalFooter>
        </ModalContent>
      </Modal>
        </div>
       
  

 
    
  

        

    </div>
  )
}

export default Credit