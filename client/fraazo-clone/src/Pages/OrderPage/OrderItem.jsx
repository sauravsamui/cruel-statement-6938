
import styles from "./cart.module.css";

const OrderItem = ({ item }) => {

    return (
      <>
        
         
          <div key={item._id} id={styles.leftDivTwo} className="col">
          
          <img id={styles.imgPrd} className="img-fluid img-thumbnail" src={item.payload.src} alt="cart" />
        
          <div className={styles.itemDiv}>
         
            <div className={styles.itemDetails}>
              <p  className="h6">{`₹${item.payload.price}`}</p>
              <p  className="h6">{item.payload.name}</p>
              <div  className="h6">
                  Qty:
                  <span
                   
                  >{ ` ${item.payload.quantity}`}
                  </span>
              </div>
            </div>
          </div>
          </div>
      </>
    );
  };
  
  export default OrderItem;