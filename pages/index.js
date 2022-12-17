import React, { useState, useEffect, useRef } from "react"
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"
const page_id = [
    "home",
    "pricing",
    "about_us",
    "contact"
]

export default function Home() {
    const [nowPage, setNowPage] = useState(0);

    useEffect(() => {
        // update now page
        const hash = location.hash.substr(1)
        console.log(hash.length)
        if (hash in page_id) {
            for (let i = 0; i < page_id.length; ++i) {
                if (id === hash) {
                    setNowPage(cnt)
                    break;
                }
            }
        } else {
            location.hash = "#"
        }
    }, [])

    // const handleScroll = async event => {
    //     const st = window.scrollY || document.documentElement.scrollTop;
    //     const stl = window.scrollX || document.documentElement.scrollLeft;
    // console.log(nowPage.current)
    // if (st > lastScrollRef.current) {
    //     // downscroll 
    //     location.hash = `#${page_id[++nowPage.current]}`
    //     console.log("down")
    // } else {
    //     // upscroll
    //     location.hash = `#${page_id[--nowPage.current]}`
    //     console.log("up")
    // }
    // lastScrollRef.current = st <= 0 ? 0 : st;
    //     window.scrollTo(st,stl)

    // }

    const pageChange = (Direction) => {
        console.log(Direction)
        switch (Direction) {
            case "Up":
                if (nowPage === 0) return
                document.getElementById(page_id[nowPage - 1]).scrollIntoView({ behavior: "smooth" });
                setNowPage(nowPage - 1)
                break;
            case "Down":
                if (nowPage === page_id.length - 1) return
                document.getElementById(page_id[nowPage + 1]).scrollIntoView({ behavior: "smooth" });
                setNowPage(nowPage + 1)
                break;
            default:
                document.getElementById(page_id[Direction]).scrollIntoView({ behavior: "smooth" })
                setNowPage(Direction);
        }
    }

    return (
        <div>
            <Menu pageChange={pageChange} />
            <div className="fixed right-5 h-screen flex flex-col justify-center space-y-2 z-50">
                <ArrowUpIcon className={`h-10 aspect-square bg-white px-2 py-2 rounded-full outline outline-1 bg-opacity-60 ${nowPage === 0 ? "cursor-not-allowed opacity-30" : "cursor-pointer hover:bg-opacity-100 hover:shadow-lg"}`}
                    onClick={() => { pageChange("Up") }} />
                <ArrowDownIcon className={`h-10 aspect-square bg-white px-2 py-2 rounded-full outline outline-1 bg-opacity-60 ${nowPage === page_id.length - 1 ? "cursor-not-allowed opacity-30" : "hover:bg-opacity-100 cursor-pointer hover:shadow-lg"}`}
                    onClick={() => { pageChange("Down") }} />
            </div>
            <div className="flex flex-col" >
                <div className="h-screen w-screen bg-green-100 flex flex-col justify-center pt-10" id={page_id[0]}>
                    <div className="flex flex-col space-y-5">
                        <div className="text-4xl font-bold text-center ">
                            反擊紅包袋
                        </div>
                        <div className="relative w-3/5 aspect-video self-center">
                            <iframe src="https://www.youtube.com/embed/Odh9ddPUkEY"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                className="w-full h-full"
                                allowfullscreen />
                        </div>
                    </div>
                </div>
                <div className="h-screen w-screen bg-blue-100 flex flex-col pt-10 relative" id={page_id[1]}>
                    <div className="w-4/5 self-center flex flex-col px-5 py-5 space-y-10">
                        <div className="text-3xl underline">About US</div>
                        <div className="self-end">
                            bla bla bla bla
                        </div>
                    </div>
                    <div className="absolute bottom-5 left-5 w-20 h-10">
                        <Image src="/nycu.png" alt="picture of nycu" layout="fill" />
                    </div>
                </div>
                <div className="h-screen w-screen bg-blue-100 flex flex-col pt-10 relative" id={page_id[2]}>
                    <div className="md:w-4/5 w-full pr-14 self-center flex flex-col px-5 py-5 space-y-10">
                        <div className="text-3xl underline">Pricing</div>
                        <div className="self-end text-xl">
                            <div className="text-right">購買反擊紅包袋</div>
                            <div>您這一生最正確的選擇</div>
                        </div>
                        <div className="grid grid-cols-3 gap-5 self-center">
                            <Envelope title="試試水溫" context={["一", "二"]} />
                            <Envelope title="精華包" context={["一", "二"]} />
                            <Envelope title="嗆爆他" context={["一", "二"]} />
                        </div>
                    </div>
                </div>
                <div className="h-screen w-screen bg-blue-100 flex flex-col pt-10" id={page_id[3]}>
                    <div className="md:w-4/5 w-full pr-12 self-center flex flex-col px-5 py-5 space-y-3 h-full ">
                        <div className="text-3xl underline">Contact US</div>
                        <div className="self-end text-lg flex flex-col">
                            {/* <Link href="https://google.com">
                                <div className="relative h-10 w-44">
                                    <Image src="/instagram.svg" alt="instagram image" layout="fill" />
                                </div>
                            </Link> */}
                        </div>

                        <iframe src="/instagram_preview.html"
                            title="instagram preview"
                            className="w-full h-72 self-center" />

                    </div>
                </div>
            </div>
        </div>
    )
}

function Envelope({ title, context }) {
    return (
        <div className="md:w-44 w-30">
            <div className="flex flex-row justify-between px-1 relative">
                <div className="z-50 h-8 text-center w-full pt-1">{title}</div>
                <div className="bg-amber-100 h-8 w-[60%] -skew-x-12 absolute left-1" />
                <div className="bg-amber-100 h-8 skew-x-12 absolute w-[60%] right-1" />
            </div>
            <div className="bg-red-500 py-5 px-5 text-white h-44 justify-between flex flex-col">
                <div>
                    {context.map(text => (
                        <div key={text}>{text}</div>
                    ))}
                </div>
                <div className="self-center bg-gradient-to-l to-orange-500 from-amber-100 bg-400 rounded-lg px-2 py-0.5 cursor-pointer hover:shadow-lg hover:background-animate md:text-base text-sm">立即搶購</div>
            </div>
        </div>
    )
}

function Menu({ pageChange }) {
    return (
        <div className="fixed top-0 w-screen bg-gradient-to-bl to-indigo-200 from-slate-100 bg-opacity-50 justify-end flex flex-row px-5 py-2 text-xl z-50 cursor-default space-x-1 bg-400">
            <div className="cursor-pointer hover:shadow-md rounded-md px-2"
                onClick={() => {
                    pageChange(0)
                }}>Home</div>
            <div className="cursor-pointer hover:shadow-md rounded-md px-2"
                onClick={() => {
                    pageChange(1)
                }}>About US</div>
            <div className="cursor-pointer hover:shadow-md rounded-md px-2"
                onClick={() => {
                    pageChange(2)
                }}>Pricing</div>
            <div className="cursor-pointer hover:shadow-md rounded-md px-2"
                onClick={() => {
                    pageChange(3)
                }}>Contact</div>
        </div>
    )
}