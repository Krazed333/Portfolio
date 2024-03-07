//next image
import Image from "next/image";

//next link
import Link from "next/link";

//icons
import { HiArrowRight } from "react-icons/hi2";

const AvatarBdr = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href={"/work"}
        className="relative w-[700px] h-[700px] flex justify-center items-center ml-[-75px] mt-[-80px]"
      >
        <Image
          src={"/avatarborder.png"}
          width={141}
          height={148}
          alt=""
          className="animate-spin-slow w-full h-full"
        />
      </Link>
    </div>
  );
};

export default AvatarBdr;
