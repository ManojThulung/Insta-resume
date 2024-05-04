import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/assets/img";
import { PageNotFoundImg } from "@/assets/icon";
import Button from "@/components/common/Button";

import "./globals.css";
import "./ckeditor.css";

export const metadata: Metadata = {
  title: "Page Not Found",
};

const NotFound = () => {
  return (
    <div className="h-[100vh] w-full flex items-center flex-col justify-center text-primary">
      {/* <div className="w-full "> */}
      <Link href="/" className="absolute top-5 left-5">
        <Image src={Logo} alt="Logo" className="h-14 w-auto" priority />
      </Link>
      {/* </div> */}
      <div className="w-full">
        <div className="max-w-[960px] mx-auto flex flex-col sm:flex-row items-center justify-center gap-5 py-10 px-4 bg-white rounded-[10px]">
          <div className="">
            <PageNotFoundImg />
          </div>
          <div className=" text-center sm:text-right">
            <h1 className="text-[80px] md:text-[100px] font-bold">
              4<span className="text-secondary">0</span>4
            </h1>
            <h1 className="text-3xl font-semibold">
              Not <span className="text-secondary">Found</span>
            </h1>
            <p className="text-base pb-4">
              Page you’re looking for is not found
            </p>
            <div className="flex justify-center sm:justify-end">
              <Link href="/">
                <Button
                  variant="fill"
                  className="bg-secondary hover:bg-secondary-dark"
                >
                  Go Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
