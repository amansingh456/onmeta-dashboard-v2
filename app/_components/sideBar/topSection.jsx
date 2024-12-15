import Image from "next/image";
import GreenEffect from "../greenEffect";

const TopSection = () => {
  return (
    <>
      <GreenEffect percent={"10%"} />
      <div className="text-2xl font-bold">ONMETA</div>
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
