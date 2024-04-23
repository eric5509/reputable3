import { BsFacebook, BsX, BsYoutube } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import Logo from "@/assets/images/logo.png";
import { CgInstagram } from "react-icons/cg";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const footerLinks = [
    {
      name: "Company",
      links: ["Home", "About us", "Services", "Careers", "Contact"],
    },
    {
      name: "Core",
      links: ["Design", "Marketing", "Strategy", "Technology"],
    },
    {
      name: "Services",
      links: [
        "SaaS Marketing",
        "Digital Marketing",
        "Crypto Marketing",
        "UI/UX Design",
        "Pitch Deck",
      ],
    },
  ];
  const socials = [
    <BsFacebook />,
    <CgInstagram />,
    <BsX />,
    <BsYoutube />,
    <FaLinkedinIn />,
  ];
  return (
    <div className="pt-20 pb-10 bg-amber-50">
      <div className="parentContainer padding">
        <div className="grid lg:grid-cols-1 xl:grid-cols-[1fr_4fr] gap-5 lg:gap-10 xl:gap-16">
          <div className="flex items-center flex-col text-center lg:items-start lg:text-start">
            <Link href={"/"} className="flex items-center gap-3">
              <Image
                alt=""
                src={Logo}
                height={0}
                width={0}
                className="h-9 w-9 lg:h-12 lg:w-12 object-cover"
              />
              <p className="text-xl font-bold">Reputable</p>
            </Link>
            <p className="font-semibold text-13 mt-5 mb-2">
              We connect ambition with results.
            </p>
            <p>
              We bridge the gap between you and your ideal audience. We build
              robust marketing & technology systems and processes that
              consistently deliver high-impact results to accelerate your
              business growth.
            </p>
            <div className="flex gap-4 text-base my-7">
              {socials.map((data, key) => (
                <div
                  className={`h-7 w-7 center border-2 cursor-pointer duration-300 hover:scale-110 rounded-full
                ${key === 0 && "border-blue-500"}
                ${key === 1 && "border-pink-500"}
                ${key === 2 && "border-black"}
                ${key === 3 && "border-[red]"}
                ${key === 4 && "border-blue-600"}
                `}
                >
                  <p
                    className={`
                    ${key === 0 && "text-blue-500"}
                    ${key === 1 && "text-pink-500"}
                    ${key === 2 && "text-black text-2xl stroke-1"}
                    ${key === 3 && "text-[red]"}
                    ${key === 4 && "text-blue-600"}
                    `}
                  >
                    {data}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 sm:gap-5">
            {footerLinks.map((data, key) => (
              <div className="">
                <p className="font-bold mb-5 text-sm uppercase">{data.name}</p>
                <div className="flex flex-col gap-3">
                  {data.links.map((data2: string, key) => (
                    <p className="text-sm w-fit cursor-pointer duration-300 hover:text-blue-600 hover:underline">
                      {data2}
                    </p>
                  ))}
                </div>
              </div>
            ))}
            <div className="">
              <p className="font-bold mb-5 text-sm uppercase">REACH US</p>
              <div className="flex flex-col text-sm gap-3">
                <p className="">Text and call us at</p>
                <p className="cursor-pointer w-fit duration-300 hover:text-blue-600">
                  +1 310 299 2779
                </p>
                <p className="cursor-pointer w-fit duration-300 hover:text-blue-600">
                  +91 93268 44428
                </p>
                <div className="mt-3">
                  <p>Email</p>
                  <p className="text-15 font-semibold mt-1 cursor-pointer">
                    hi@reputable.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex flex-col items-center lg:flex-row lg:justify-between gap-5">
            <p className="text-xs sm:text-13">
              © 2024 Reputable Ventures Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex gap-10">
              {["Terms of Service", "Privacy Policy", "Cookie Policy"].map(
                (data, key) => (
                  <p className="text-11 sm:text-13 cursor-pointer duration-300 hover:underline hover:text-blue-500">
                    {data}
                  </p>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
