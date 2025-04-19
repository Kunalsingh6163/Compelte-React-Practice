"use client";
import React, { useState } from "react";
import { FaRegComment } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";
import { MdOutlineSaveAlt } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { BsThreeDots } from "react-icons/bs";
import Image from "next/image";
import KarnImage from "../../../public/karnimg.png";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function InstaCard() {
  const [heart, setHeart] = useState(false);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <RxAvatar className="text-2xl font-bold text-gray-950" />
            <p className="font-bold text-gray-950">karn_singh97</p>
            <div className="text-sm text-gray-500 mr-10">.3h</div>
          </div>
          <BsThreeDots className="text-xl font-bold text-gray-950" />
        </div>

        {/* Image */}
        <div className="w-full mb-3">
          <Image
            src={KarnImage}
            alt="Post Image"
            className="w-full h-auto rounded"
          />
        </div>

        {/* Action Icons */}
        <div className="flex justify-between items-center mb-2">
          <div className="flex gap-4">
            <div onClick={()=> setHeart(!heart)}>
            {heart ? <FaHeart className="text-2xl cursor-pointer text-red-700" /> : <FaRegHeart className="text-2xl cursor-pointer text-gray-900" /> }
            </div>
            <FaRegComment className="text-2xl cursor-pointer text-gray-950 rotate-270" />
            <PiTelegramLogo className="text-2xl cursor-pointer text-gray-950" />
          </div>
          <MdOutlineSaveAlt className="text-2xl cursor-pointer text-gray-950" />
        </div>

        {/* Likes */}
        <div className="mb-2 flex items-center gap-2 text-gray-950">
          <RxAvatar className="text-xl" />
          <p className="font-medium text-[14px]">786 likes</p>
        </div>

        {/* Content */}
        <div className="mb-2 text-sm">
          <p className="font-medium text-gray-950">
            <span className="font-medium text-gray-950">karn_singh97</span> सोने
            के दाम ने आज यानी 16 अप्रैल को नया ऑल टाइम हाई बनाया। IBJA के अनुसार
            10 ग्राम 24 कैरेट सोने का दाम ₹628 बढ़कर ...
            <Link href="#" className="text-[12px] text-gray-600">
              more
            </Link>
          </p>
          <p className="text-blue-500 cursor-pointer">See translation</p>
        </div>

        {/* Comments Section */}
        <div className="text-sm text-gray-900">
          <p className="cursor-pointer text-gray-400 font-light">View all 5 comments</p>
          <p className="text-gray-400 font-light">Add a comment...</p>
          <p>🙂😊😂</p>
        </div>
      </div>
    </div>
  );
}

export default InstaCard;
