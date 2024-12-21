import Image from "next/image";
import GreenEffect from "../greenEffect";
import allAssests from "../../assets/images";

const TopSection = () => {
  return (
    <>
      <GreenEffect percent={"10%"} />
      <Image
        src={allAssests.onMetaLogo}
        alt="logo"
        width="240"
        height="240"
        // className="rounded-full"
      />
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
            alt="dummy_avatar"
            width="80"
            height="80"
            className="rounded-full"
          />
        </div>
        <div className="text-sm mt-2">Aman Singh</div>
      </div>
    </>
  );
};

export default TopSection;
