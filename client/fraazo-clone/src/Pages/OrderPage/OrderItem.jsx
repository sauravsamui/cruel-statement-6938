
import styles from "./cart.module.css";

const OrderItem = ({ item }) => {
    return (
      <>
        
         
          <div key={item._id} id={styles.leftDivTwo} className="col">
          
          <img id={styles.imgPrd} class="img-fluid img-thumbnail" src={item.src} alt="cart" />
        
          <div className={styles.itemDiv}>
         
            <div className={styles.itemDetails}>
              <p  class="h6">{`₹${item.price}`}</p>
              <p  class="h6">{item.name}</p>
              <div  class="h6">
                  Qty:
                  <span
                   
                  >{ ` ${item.quantity}`}
                  </span>
              </div>
            </div>
          </div>
          </div>
      </>
    );
  };
  
  export default OrderItem;