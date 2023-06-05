import React from 'react';
import {
  AiFillInstagram, AiOutlineTwitter,
  AiOutlineAlibaba, AiFillFacebook, AiFillAmazonSquare,
  AiOutlineWhatsApp,
} from 'react-icons/ai';
import Link from 'next/link';
const Footer = () => {
  return (
    <div className="footer-container">
      <p>
        <Link href="https://www.instagram.com"><AiFillInstagram size={50} /> </Link>
        <Link href="https://www.twitter.com"><AiOutlineTwitter size={50} /></Link>
        <Link href="https://www.alibaba.com"><AiOutlineAlibaba size={50} /> </Link>
        <Link href="https://www.facebook.com"><AiFillFacebook size={50} /> </Link>
        <Link href="https://www.amazon.com"><AiFillAmazonSquare size={50} /> </Link>
        <Link href="https://www.whatsapp.com"> <AiOutlineWhatsApp size={50} /> </Link>
      </p>
    </div>
  )
}

export default Footer