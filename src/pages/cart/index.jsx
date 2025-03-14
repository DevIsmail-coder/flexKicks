import React from 'react'

const Cart = () => {
  return (
      <div className='cartBody'>

          <div className='cartHead'>
              <p className='cartsP'>
                  Sale Up To 50% Biggest Discounts. Hurry! Limited Period Offer
              </p>
              <a href="/shop" className='cartNow'>Shop Now</a>
          </div>

          <div className='cartMiddle'>
              <h2 className='middleName1'>Cart</h2>
              <div className='middlepMan'>
                  <p>Home</p>
                  <span>|</span>
                  <p>Cart</p>
              </div>
          </div>


          <div className='cartOrderpage'>

              <div className='cartorderBox'>
                  <div className='descBox1'>
                      <p className='descBoxp1'>Product</p>

                      <div className='descBox2'>
                          <p className='descBoxp2'>Price</p>
                          <p className='descBoxp2'>Quantity</p>
                      </div>

                      <p className='descBoxp3'>Total</p>
                  </div>



                  <div className='propertyDiv'>

                      <div className='propertyDivA'>
                          <span>|</span>
                          <p className='propertyDiv1'>Minimalistic shop for multipurpose use</p>

                          <p className='propertyDiv2'> $360.00 </p>

                      </div>

                      <div className='propertyDivB'>
                          <div>
                              <input className='propertyDivB1' type="text" />
                          </div>

                          <div className='propertyDivBtn'>
                              <button> +</button>
                              <button>-</button>
                          </div>

                      </div>

                      <div className='totalDiv'>
                          <p>$720.00</p>
                      </div>
                  </div>

                  <div className='propertyDiv'>

                      <div className='propertyDivA'>
                          <span>|</span>
                          <p className='propertyDiv1'>Minimalistic shop for multipurpose use</p>

                          <p className='propertyDiv2'> $360.00 </p>

                      </div>

                      <div className='propertyDivB'>
                          <div>
                              <input className='propertyDivB1' type="text" />
                          </div>

                          <div className='propertyDivBtn'>
                              <button> +</button>
                              <button>-</button>
                          </div>

                      </div>

                      <div className='totalDiv'>
                          <p>$720.00</p>
                      </div>
                  </div>


                  <div className='btnDivision'>
                      <button className='btnDivision1'>Update Cart</button>
                      <button className='btnDivision1'>Close Coupon</button>
                  </div>




                  <div className='subtotal'>
                      <p className='subtotal1'>Subtotal</p>
                      <p className='subtotal1'>$2160.00</p>

                  </div>

                 

                  <div className='shipping'>
                      <p className='shipping1'>Shipping</p>
                     


                      <div className='shippingDiv2'>
                      <p className='shipping2'>Flat Rate: $2160.00 <input type="checkbox" /></p>
                      <p className='shipping2'>Free Shipping <input type="checkbox"/></p>
                      <p className='shipping2'>Flat Rate: $10.00 <input type="checkbox"/></p>
                      <p className='shipping2'>Local Delivery: $2.00 <input type="checkbox"/></p>
                        <p>Calculate Shipping  <IoMdArrowDropdown />
                        </p>
                      </div>
                  </div>







              </div>





          </div>



      </div>


  );

}

export default Cart
