import React from 'react'
import { TfiShoppingCart } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import Header from '../header/header'
import "./women.css"

const Women = () => {

  const Menproducts = [
    
    
    {
        id: 1,
        img: "/src/assets/public/latest1.jpg",
        title: "Cahsmere Sweater + Bag",
        price: "$200",
        previous_price: "$300"
    },
    {
        id: 2,
        img: "/src/assets/public/latest6.jpg",
        title: "Cahsmere Sweater + Bag",
        price: "$200",
        previous_price: "$300"
    },
    {
        id: 3,
        img: "src/assets/public/items2.jpg",
        title: "Cahsmere Sweater + Bag",
        price: "$200",
        previous_price: "$300"
    },
    {
        id: 4,
        img: "/src/assets/public/latest8.jpg",
        title: "Cahsmere Sweater + Bag",
        price: "$200",
        previous_price: "$300"
    },
    {
        id: 5,
        img: "/src/assets/public/latest4.jpg",
        title: "Cahsmere Sweater + Bag",
        price: "$98.00",
        oldPrice: "$120.00",
    },
    {
        id: 6,
        img: "/src/assets/public/latest1.jpg",
        title: "Cahsmere Sweater + Bag",
        price: "$200",
        previous_price: "$300"
    },
    {
        id: 7,
        img: "/src/assets/public/latest2.jpg",
        title: "Cahsmere Sweater + Bag",
        price: "$200",
        previous_price: "$300"
    },
    {
        id: 8,
        img: "/src/assets/public/latest3.jpg",
        title: "Cahsmere Sweater + Bag",
        price: "$200",
        previous_price: "$300"
    },
    {
        id: 9,
        img: "src/assets/public/latest5.jpg",
        title: "Cahsmere Sweater + Bag",
        price: "$200",
        previous_price: "$300"
    }
];

return (
  <div className='MenpageBody'>
  <Header />
  <article className='MenpageHeader'>
      <h2>Category</h2>
      <span>
          <p>Home</p>
          <p>Category</p>
      </span>
  </article>
  <main className='MenpageMain'>
      <article className='Menpagemaindiv1'>fnkfnkf</article>
      <article className='Menpagemaindiv2'>
          <div className="Menpagemaindiv2container">
              {
                  Menproducts.map((i) => (
                      <div className="Menpagemaindiv2containerii" key={i.id}>
                          <div className="Menimgholder">
                              <img src={i.img} alt="" />

                              <div className="menaction">
                                  <div className="menactioni">
                                      <div className="menactionixx">
                                          <TfiShoppingCart className='menicons'/>
                                      </div>
                                      <div className="menactionixx">
                                          <IoMdHeartEmpty />
                                      </div>
                                      <div className="menactionixx">
                                          <BiSearch />
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <h4>{i.title}</h4>
                          <div className="amount">
                              <p>{i.price}</p>
                              <p>{i.previous_price}</p>
                          </div>
                      </div>
                  ))
              }
          </div>
      </article>
  </main>
</div>
)
}


export default Women
