import React from 'react';
import {
  AiFillInstagram, AiOutlineTwitter,
  AiOutlineAlibaba, AiFillFacebook, AiFillAmazonSquare,
  AiOutlineWhatsApp, AiOutlineMail
} from 'react-icons/ai';
import Link from 'next/link';
const Footer = () => {
  return (
    <div className="footer-container">
      <p>
        <Link href="https://instagram.com/shop_morningstar?igshid=MzRlODBiNWFlZA=="><AiFillInstagram size={30} color='orange' /> </Link>
        {/* <Link href="https://www.twitter.com"><AiOutlineTwitter size={30} color='#1E90FF' /></Link>
        <Link href="https://www.alibaba.com"><AiOutlineAlibaba size={30} color='#1E90FF' /> </Link> */}
        <Link href="https://www.facebook.com/media/set/?set=a.124032690680528&type=3"><AiFillFacebook size={30} color='orange' /> </Link>
        {/* <Link href="https://www.amazon.com"><AiFillAmazonSquare size={30} color='#1E90FF' /> </Link> */}
        <Link href="https://api.whatsapp.com/send?phone=393515148100&text=Send20%a20%quote"> <AiOutlineWhatsApp size={30} color='orange' /> </Link>
        <Link href="mailto:customercare@gmail.com"><AiOutlineMail size={30} color='orange' /></Link>
      </p>

      <p> All rights reserved 2023 💫</p>

    </div>
  )
}

export default Footer