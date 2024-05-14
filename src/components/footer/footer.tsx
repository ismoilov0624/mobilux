import React from "react";
import { Logo } from "../../../public/icons/logo";
import appstore from "../../../public/img/appstore.png";

const Footer = () => {
  return (
    <div className="container flex justify-between p-9">
      <ul className="flex flex-col gap-2">
        <li>
          <Logo />
        </li>
        <li className="text-[20px] font-[500]">Mobilux © 2022</li>
        <li className="text-[20px] font-[500]">
          Barcha huquqlar kafolatlangan
        </li>
        <ul className="flex items-center gap-2">
          <li>
            <img src={appstore.src} alt="" />
          </li>
          <li>
            <img src={appstore.src} alt="" />
          </li>
        </ul>
      </ul>
      <ul className="flex flex-col gap-2">
        <li className="text-[20px] font-[500]">Foydali havolalar</li>
        <li>Bosh sahifa</li>
        <li>Yordam kerakmi</li>
        <li>Foydalanish shartari</li>
        <li>Maxfiylik siyosati</li>
      </ul>
      <ul className="flex flex-col gap-2">
        <li className="text-[20px] font-[500]">Biz haqimizda</li>
        <li>
          Manzil: #214, G-dong, Lotte castle, 347 Jongno, Jongno-gu, Seoul,
          03113, Crescent Trade ltd
        </li>
        <li>Korxona nomi: Mobilux trade</li>
        <li>Korxona rahbari: HASANBOY TURSUNOV</li>
        <li>Registratsiya raqami: 433-62-00377</li>
        <li>Telefon raqam: +998 90 123 45 67</li>
      </ul>
    </div>
  );
};

export default Footer;
