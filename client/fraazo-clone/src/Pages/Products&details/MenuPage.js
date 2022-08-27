import React, { useState } from "react";
import styles from "./Menu.module.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import ProductItem from "./ProductItem";
import {useDispatch, useSelector} from "react-redux"
import { showProducts } from "../../Store/Products/products.action";
const MenuPage = () => {
  const [type, setType] = useState("exoticfruits");

  const dispatch = useDispatch();
  const {data,loading,error} = useSelector((state)=>state.product);

let getData =()=>{
  dispatch(showProducts());
}

  useEffect(() => {
    getData();
  }, [setType]);

  // FRUITS
  let exoticfruits = data.filter((el) => {
    // return el.category === "fruits" && el.subcategory === "exotic";
    return el.category === "ExoticFruits";
  });

  let freshfruits = data.filter((el) => {
    return el.category === "FreshFruits";
  });

  let fruitscombos = data.filter((el) => {
    return el.category === "ComboFruits";
  });


  //Vegetables
  let dailyveggies = data.filter((el) => {
    return el.category === "DailyVeges";
  });
  let herbsLeafes = data.filter((el) => {
    return el.category === "HerbsVeges";
  });
  let exoticVegetables = data.filter((el) => {
    return el.category === "ExoticVeges";
  });
  let cutpeeledsprouts = data.filter((el) => {
    return el.category === "CutsVeges";
  });
  let vegetableCombo = data.filter((el) => {
    return el.category === "ComboVeges";
  });
  if(loading){
    return (
        <div id={styles.loading} className='container'>
     <div className="spinner-grow text-primary" role="status">
   <span className="sr-only">Loading...</span>
 </div>
 <div className="spinner-grow text-secondary" role="status">
   <span className="sr-only">Loading...</span>
 </div>
 <div className="spinner-grow text-success" role="status">
   <span className="sr-only">Loading...</span>
 </div>
 <div className="spinner-grow text-danger" role="status">
   <span className="sr-only">Loading...</span>
 </div>
 <div className="spinner-grow text-warning" role="status">
   <span className="sr-only">Loading...</span>
 </div>
 <div className="spinner-grow text-info" role="status">
   <span className="sr-only">Loading...</span>
 </div>
 <div className="spinner-grow text-light" role="status">
   <span className="sr-only">Loading...</span>
 </div>
 <div className="spinner-grow text-dark" role="status">
   <span className="sr-only">Loading...</span>
 </div>
 </div>
    )
  }
  else if(error){
    return (
  <div className='container'>
 
   <h2  className="h2">Something went wrong.....</h2>
    </div>
    )}
  return (
    <div className={styles.menu_page_container}>
      <div className={styles.menu_page_left_container}>
        <Accordion allowToggle>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Fruits
                    </Box>
                    {isExpanded ? (
                      <MinusIcon style={{ color: "#4fbb90" }} fontSize="12px" />
                    ) : (
                      <AddIcon style={{ color: "#4fbb90" }} fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  onClick={() => setType("exoticfruits")}
                  className={styles.left_accordianPanel}
                  pb={4}
                >
                  Exotic Fruits
                </AccordionPanel>
                <AccordionPanel
                  onClick={() => setType("freshfruits")}
                  className={styles.left_accordianPanel}
                  pb={4}
                >
                  Fresh Fruits
                </AccordionPanel>
                <AccordionPanel
                  onClick={() => setType("fruitscombos")}
                  className={styles.left_accordianPanel}
                  pb={4}
                >
                  Fruits Combos
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Vegetables
                    </Box>
                    {isExpanded ? (
                      <MinusIcon style={{ color: "#4fbb90" }} fontSize="12px" />
                    ) : (
                      <AddIcon style={{ color: "#4fbb90" }} fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  onClick={() => setType("veggies")}
                  className={styles.left_accordianPanel}
                  pb={4}
                >
                  Daily Veggies
                </AccordionPanel>
                <AccordionPanel
                  onClick={() => setType("herbs")}
                  className={styles.left_accordianPanel}
                  pb={4}
                >
                  Herbs & Leafies
                </AccordionPanel>
                <AccordionPanel
                  onClick={() => setType("exoticVegetables")}
                  className={styles.left_accordianPanel}
                  pb={4}
                >
                  Exotic Vegetables
                </AccordionPanel>
                <AccordionPanel
                  onClick={() => setType("cutSprouts")}
                  className={styles.left_accordianPanel}
                  pb={4}
                >
                  Cuts, Peeled & Sprouts
                </AccordionPanel>
                <AccordionPanel
                  onClick={() => setType("vegetableCombo")}
                  className={styles.left_accordianPanel}
                  pb={4}
                >
                  Vegetable Combos
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </div>
      <div className={styles.menu_page_right_container}>
        {type === "exoticfruits" ? (
          <div>
            <h2 style={{ paddingBottom: "20px" }}>Exotic Fruits</h2>
            <div className={styles.product_page_container}>
              {exoticfruits.map((el) => (
                <ProductItem key={el._id} {...el} />
                //console.log(el.category)
              ))}
            </div>
          </div>
        ) : type === "freshfruits" ? (
          <div>
            <h2 style={{ paddingBottom: "20px" }}>Fresh Fruits</h2>
            <div className={styles.product_page_container}>
              {freshfruits.map((el) => (
                <ProductItem key={el._id} {...el} />
                //console.log(el.category)
              ))}
            </div>
          </div>
        ) : type === "fruitscombos" ? (
          <div>
            <h2 style={{ paddingBottom: "20px" }}>Fruit Combos</h2>
            <div className={styles.product_page_container}>
              {fruitscombos.map((el) => (
                <ProductItem key={el._id} {...el} />
                //console.log(el.category)
              ))}
            </div>
          </div>
        ) : type === "veggies" ? (
          <div>
            <h2 style={{ paddingBottom: "20px" }}>Daily Veggies</h2>
            <div className={styles.product_page_container}>
              {dailyveggies.map((el) => (
                 <ProductItem key={el._id} {...el} />
                //console.log(el.category)
              ))}
            </div>
          </div>
        ) : type === "herbs" ? (
          <div>
            <h2 style={{ paddingBottom: "20px" }}>Herbs & Leafies</h2>
            <div className={styles.product_page_container}>
              {herbsLeafes.map((el) => (
                 <ProductItem key={el._id} {...el} />
                //console.log(el.category)
              ))}
            </div>
          </div>
        ) : type === "exoticVegetables" ? (
          <div>
            <h2 style={{ paddingBottom: "20px" }}>Exotic Vegetables</h2>
            <div className={styles.product_page_container}>
              {exoticVegetables.map((el) => (
                 <ProductItem key={el._id} {...el} />
                //console.log(el.category)
              ))}
            </div>
          </div>
        ) : type === "cutSprouts" ? (
          <div>
            <h2 style={{ paddingBottom: "20px" }}>Cuts, Peeled & Sprouts</h2>
            <div className={styles.product_page_container}>
              {cutpeeledsprouts.map((el) => (
                 <ProductItem key={el._id} {...el} />
                //console.log(el.category)
              ))}
            </div>
          </div>
        ) : type === "vegetableCombo" ? (
          <div>
            <h2 style={{ paddingBottom: "20px" }}>Vegetable Combos</h2>
            <div className={styles.product_page_container}>
              {vegetableCombo.map((el) => (
                 <ProductItem key={el._id} {...el} />
                //console.log(el.category)
              ))}
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;
