import React from 'react'
import "./header.css"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { IoMdTv } from "react-icons/io";
import { MdOutlineTabletMac } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import { PiShoppingCartFill } from "react-icons/pi";
import { FaTimes } from "react-icons/fa";

const Header = () => {
    return (
        <div className='Headerbody'>
            <header className='Headerbodyxx' >
                <div className='Headerbodyxx1'>
                    <span className='Headerbodyxx1i'>colorlib<p>.</p></span>  
                    <span className='Headerbodyxx1ii'><p>+</p>  FlexKicks</span>
                </div>
                <div className='Headerbodyxx2'>
                   <span  className='iconsxx'> <IoMdTv /></span>
                    <span  className='iconsxx'><MdOutlineTabletMac /></span>
                    <span  className='iconsxx'><IoIosPhonePortrait  /></span>
                   <span className='icons1xx'> <PiShoppingCartFill /></span>
                    <span className='iconsxx' ><FaTimes /> </span>
                </div>
            </header>
            <header className='Headerbody1'>
                <article className='Headerbody1container1'>
                    <p>About Us</p>
                    <p> Privacy</p>
                    <p>FAQ</p>
                    <p>Careers</p>
                </article>
                <article className='Headerbody1container2'>
                    <p>My Wishlist</p>
                    <p> Track Your Order</p>
                    <span className='Headerbody1container2span'>
                        <FaFacebook />
                        <FaInstagram />
                        <AiOutlineTwitter />
                        <RiLinkedinFill />
                        <FaYoutube />
                    </span>
                </article>
            </header>
            <header className='Headerbody2'>

            </header>
        </div>
    )
}

export default Header
