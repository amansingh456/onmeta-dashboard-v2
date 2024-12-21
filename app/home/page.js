"use client";
import EChartComponent from "../_components/graph";
import { BsFillFilterCircleFill } from "react-icons/bs";
import PercentageGraph from "../_components/graph2";
import { useState, useEffect } from "react";
import { RxSwitch } from "react-icons/rx";

export default function MainPage() {
  const [theme, setTheme] = useState(true);
  const tokenData = [
    { id: 1, icon: "⚡", token: "ETH", chain: "Ethereum" },
    { id: 2, icon: "🌕", token: "BTC", chain: "Bitcoin" },
    { id: 3, icon: "🔷", token: "MATIC", chain: "Polygon" },
    { id: 4, icon: "🌿", token: "SOL", chain: "Solana" },
    { id: 5, icon: "🌀", token: "ADA", chain: "Cardano" },
    { id: 6, icon: "🌟", token: "DOT", chain: "Polkadot" },
    { id: 7, icon: "🔒", token: "USDT", chain: "Tether" },
    { id: 8, icon: "🧿", token: "UNI", chain: "Uniswap" },
    { id: 9, icon: "⚡", token: "XRP", chain: "Ripple" },
    { id: 10, icon: "📡", token: "LINK", chain: "Chainlink" },
  ];

  const news = [
    {
      title: "Bitcoin Surges to All-Time High",
      link: "#",
      date: "Dec 21, 2024",
    },
    {
      title: "Ethereum's Latest Update Explained",
      link: "#",
      date: "Dec 20, 2024",
    },
    {
      title: "Top 5 Cryptos to Watch in 2025",
      link: "#",
      date: "Dec 19, 2024",
    },
    {
      title: "Regulations Impacting the Crypto World",
      link: "#",
      date: "Dec 18, 2024",
    },
    {
      title: "NFT Market Trends for 2024",
      link: "#",
      date: "Dec 17, 2024",
    },
  ];

  const changeTheme = () => {
    // const body = document.querySelector("body");
    // body.classList.toggle("dark");
    setTheme((prev) => !prev);
  };

  useEffect(() => {}, [theme]);

  return (
    <div className="flex flex-col gap-2">
      <div className="h-[10%] flex flex-row  items-center">
        <div>
          <h1 className="text-2xl font-bold font-tagline mb-1">
            Welcome Back , Aman !
          </h1>
          <p>Take a look, what's happening here...</p>
        </div>
        <div
          onClick={() => changeTheme()}
          className={`flex justify-center items-center w-[40px] h-[40px] z- ${
            theme ? "bg-text-mainLight" : "bg-text-dark "
          }  rounded-full ml-auto mr-4 cursor-pointer`}
        >
          <RxSwitch
            className={`-z-0 w-6 h-6 ${
              !theme ? "text-text-mainLight" : "text-text-dark"
            }`}
          />
        </div>
      </div>
      <div className="h-[90%] flex flex-col gap-6 mt-4">
        <div className="flex flex-row justify-normal gap-6 h-[45%]">
          <div className="bg-text-mainLight w-[70%] h-[250px] rounded-sm">
            <EChartComponent />
          </div>
          <div className="w-[30%] flex flex-col gap-6 h-[250px]">
            <div className="bg-[#E3F1EA] h-48 rounded-sm bg-[linear-gradient(360deg,_#d1e7d7_6px,_transparent_1px)]  ">
              <div className="flex justify-between p-2 ml-2 mt-2">
                <p className="font-semibold">OnRamp Volume</p>
                <BsFillFilterCircleFill className="text-change-semidark w-6 h-6 cursor-pointer transition-all duration-200 hover:scale-110 mt-2 mr-2" />
              </div>
              <div className="flex justify-between ml-4">
                <p className="font-bold text-2xl">72794289</p>
              </div>
            </div>
            <div className="bg-[#F6E2E4] h-48 rounded-sm bg-[linear-gradient(360deg,_#f2c9cc_6px,_transparent_1px)] ">
              <div className="flex justify-between p-2 ml-2 mt-2">
                <p className="font-semibold">OffRamp Volume</p>
                <BsFillFilterCircleFill className="text-[#AA1616] w-6 h-6 cursor-pointer transition-all duration-200 hover:scale-110 mt-2 mr-2" />
              </div>
              <div className="flex justify-between ml-4">
                <p className="font-bold text-2xl">3482794</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-row gap-6 h-[45%]">
          <div className="w-[33%] h-[250px] rounded-sm bg-text-mainLight ">
            <p className="font-semibold p-2 mt-2 ml-2">
              Transaction Status Breakdown %
            </p>
            <PercentageGraph />
          </div>

          <div className="bg-text-mainLight  w-[33%] h-[250px] rounded-sm ">
            <p className="font-semibold p-2 mt-2 ml-2">Top Tokens 🔥</p>
            <div className="overflow-y-auto h-[200px]">
              <table className="table-auto w-full text-left">
                <thead>
                  <tr className=" text-text-semidark font-thin text-sm  border-t-2 border-b-2 ">
                    <th className="px-4 py-2">#</th>
                    <th className="px-4 py-2">Icon</th>
                    <th className="px-4 py-2">Token</th>
                    <th className="px-4 py-2">Chain</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-text-mainDark">
                  {tokenData.map((row, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2 font-medium">{row.id}</td>
                      <td className="px-4 py-2">{row.icon}</td>
                      <td className="px-4 py-2 font-medium">{row.token}</td>
                      <td className="px-4 py-2">{row.chain}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-text-mainLight w-[33%] h-[250px] rounded-sm">
            <p className="font-semibold p-2 mt-2 ml-2">Tranding In Market </p>
            <ul className="overflow-y-auto h-[200px] ml-2 p-2">
              {news.map((item, index) => (
                <li
                  key={index}
                  className="mb-3 border-b border-gray-300 pb-2 last:border-none"
                >
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    {item.title}
                  </a>
                  <p className="text-sm text-gray-500 mt-1">{item.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
