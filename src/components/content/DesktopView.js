import React, { Fragment, useState } from "react";
import topImg from "../../assets/website-top.jpg";
import Footer from "./Footer";
import Modal from "./Modal";
import {gsap} from "gsap"
import { keyboardImplementationWrapper } from "@testing-library/user-event/dist/keyboard";


const DesktopView = ({ item, ms }) => {
  

  const [open, setOpen] = useState(false);

  const [index, setIndex] = useState(0);

  const imageArray=["assets/logo192.png","assets/logo192.png"];

  const openModal = (e) => {

    
    console.log(ms);
    
    setOpen(true);
   
    setIndex(e.currentTarget.dataset.index);


    //let getElementY = document.querySelector("#modal")
    //getElementY.scrollIntoView(true)


    const timer = setTimeout( () => {

    console.log("im a loop");

    let getElementYPos = document.querySelector("#modal").getBoundingClientRect().top;

    console.log(getElementYPos);

    gsap.to("#modal", {
 
      duration:.5,
      top:  ms + 250,
      ease:"elastic.out",
      onComplete: () =>{

        clearInterval(timer);

        gsap.to("#modal",{

        duration:.3,
        rotation:5,
        transformOrigin:"center"

        })
      }


    })


    }, 10)


  }; // END openModal

  const closeModal = () => {

    setOpen(false);
  };

  return (
    <Fragment>
      <div className="topImgContainer">
        <img src={topImg} alt = "pop" />
      </div>

      <div className="mainHeadlineContainer" id="mainHeadlineContainer">

        {item.map((mData, index) => (
        
          <div key={index} className="subHeadlineContainer">
            <div
              id="headlines"
              style={{ color: mData.color }}
              className={"head" + index}
             
            >
              {"#" + mData.headline}
              <span
              id="readMore"
              data-index={index}
              onClick={openModal}
              >
                ++
              </span>
            </div>

            <div className="description">{mData.description}</div>
          </div>
        ))}
      </div>

      <Footer phone = "123456"  name="LARS GREGERSEN" />
 
     <Modal
      moreTxt={item[index].more}
      isOpen={open}
      onClose={closeModal}
      myArray={imageArray}
     />


    </Fragment>
  );
};

export default DesktopView;
