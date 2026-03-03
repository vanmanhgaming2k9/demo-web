'use client';

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import GoldenRatioMobile from "./golden-ratio-mobile";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import GoldenRatioDesktop from "./golden-ratio-desktop";
import Link from "next/link";
export default function LandingHero() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null;
    const img = resolvedTheme === "dark" ? "/vs.png" : "/vs-2.png";
    return (
        <>
            <div className="relative mb-8 w-screen overflow-hidden pb-8">
                <div className="pointer-events-none absolute inset-x-0 bottom-8 top-2 -z-1 [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent)]" />
                <div className="container max-sm:px-2">
                    <div className="h-2 w-full border-x border-edge" />
                    <div className="relative border-x border-edge md:hidden after:absolute after:-bottom-0 after:-left-[100vw] after:-z-1 after:h-px after:w-[200vw] after:bg-edge before:absolute before:-left-[100vw] before:top-0 before:h-px before:w-[200vw] before:bg-edge">
                        <GoldenRatioMobile />
                        <div className="relative grid aspect-[1/1.618] grid-cols-[1.618fr_minmax(0,1fr)] grid-rows-[1.618fr_1fr]">
                            <div className="flex flex-col justify-center overflow-hidden p-4 lg:p-8 col-[1/span_2] row-[1]">
                                <h1 className="mb-4 sm:mb-6 font-medium text-foreground text-[2.5rem] leading-none sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl">
                                    We build your ideas.
                                </h1>
                                <p className="mb-6 sm:mb-8 text-base !leading-normal sm:text-xl md:text-lg lg:text-xl text-muted-foreground sm:text-balance">
                                    Vani Studio (V. Studio)
                                    cung cấp dịch vụ Thiết kế & Phát triển ứng dụng Web, Bot{" "}
                                    <strong className="font-normal text-foreground">
                                        chuyên nghiệp
                                    </strong>{" "}
                                    và{" "}
                                    <strong className="font-normal text-foreground">chất lượng</strong>{" "}
                                    theo ý tưởng của bạn.
                                </p>
                                <div className="grid grid-cols-2 sm:flex items-center gap-4 mb-6 sm:mb-8">
                                    <Link href="/contact">
                                        <Button variant="default" size="lg">
                                            Liên hệ ngay
                                        </Button>
                                    </Link>
                                    <Link href="/about">
                                        <Button variant="outline" size="lg">
                                            Tìm hiểu thêm
                                        </Button>
                                    </Link>
                                </div>
                                <div className="relative -ml-4 lg:ml-0">
                                    <div className="absolute -top-2 right-0 z-1 block h-10 w-20 bg-background [mask-image:linear-gradient(to_left,white,transparent)] lg:hidden" />
                                    <div className="flex items-center gap-4 overflow-x-auto px-4 scrollbar-hide lg:px-0">
                                        <div className="flex select-none items-center space-x-2 text-muted-foreground">
                                            <FaNodeJs className="size-6" />
                                            <span className="whitespace-nowrap text-sm font-medium">
                                                Node.js
                                            </span>
                                        </div>
                                        <div className="flex select-none items-center space-x-2 text-muted-foreground">
                                            <RiNextjsLine className="size-6" />
                                            <span className="whitespace-nowrap text-sm font-medium">
                                                Next.js
                                            </span>
                                        </div>
                                        <div className="flex select-none items-center space-x-2 text-muted-foreground">
                                            <FaReact className="size-6" />
                                            <span className="whitespace-nowrap text-sm font-medium">
                                                React
                                            </span>
                                        </div>
                                        <div className="flex select-none items-center space-x-2 text-muted-foreground">
                                            <RiTailwindCssFill className="size-6" />
                                            <span className="whitespace-nowrap text-sm font-medium">
                                                Tailwind CSS
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-[2] row-[2]" />
                            <div className="col-[1] row-[2] flex flex-col items-center justify-center overflow-hidden p-2 sm:p-4">
                                <img
                                    alt="Vani Studio"
                                    width={1024}
                                    height={1020}
                                    className="h-full w-auto select-none saturate-[1.2]"
                                    style={{ color: "transparent" }}
                                    src={img}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="relative hidden border-x border-edge md:block before:absolute before:-left-[100vw] before:top-0 before:-z-1 before:h-px before:w-[200vw] before:bg-edge after:absolute after:-left-[100vw] after:bottom-0 after:-z-1 after:h-px after:w-[200vw] after:bg-edge">
                        <GoldenRatioDesktop />
                        <div className="relative grid aspect-[1.618/1] grid-cols-[1.618fr_minmax(0,1fr)] grid-rows-[1fr_1.618fr]">
                            <div className="flex flex-col justify-center overflow-hidden p-4 lg:p-8 col-[1] row-[1/span_2]">
                                <h1 className="mb-4 sm:mb-6 font-medium text-foreground text-[2.5rem] leading-none sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl">
                                    We build your ideas.
                                </h1>
                                <p className="mb-6 sm:mb-8 text-base !leading-normal sm:text-xl md:text-lg lg:text-xl text-muted-foreground sm:text-balance">
                                    Vani Studio (V. Studio)
                                    cung cấp dịch vụ Thiết kế & Phát triển ứng dụng Web, Bot{" "}
                                    <strong className="font-normal text-foreground">
                                        chuyên nghiệp
                                    </strong>{" "}
                                    và{" "}
                                    <strong className="font-normal text-foreground">chất lượng</strong>{" "}
                                    theo ý tưởng của bạn.
                                </p>
                                <div className="grid grid-cols-2 sm:flex items-center gap-4 mb-6 sm:mb-8">
                                    <Link href="/contact">
                                        <Button variant="default" size="lg">
                                            Liên hệ ngay
                                        </Button>
                                    </Link>
                                    <Link href="/about">
                                        <Button variant="outline" size="lg">
                                            Tìm hiểu thêm
                                        </Button>
                                    </Link>
                                </div>
                                <div className="relative -ml-4 lg:ml-0">
                                    <div className="absolute -top-2 right-0 z-1 block h-10 w-20 bg-background [mask-image:linear-gradient(to_left,white,transparent)] lg:hidden" />
                                    <div className="flex items-center gap-4 overflow-x-auto px-4 scrollbar-hide lg:px-0">
                                        <div className="flex select-none items-center space-x-2 text-muted-foreground">
                                            <FaNodeJs className="size-6" />
                                            <span className="whitespace-nowrap text-sm font-medium">
                                                Node.js
                                            </span>
                                        </div>
                                        <div className="flex select-none items-center space-x-2 text-muted-foreground">
                                            <RiNextjsLine className="size-6" />
                                            <span className="whitespace-nowrap text-sm font-medium">
                                                Next.js
                                            </span>
                                        </div>
                                        <div className="flex select-none items-center space-x-2 text-muted-foreground">
                                            <FaReact className="size-6" />
                                            <span className="whitespace-nowrap text-sm font-medium">
                                                React
                                            </span>
                                        </div>
                                        <div className="flex select-none items-center space-x-2 text-muted-foreground">
                                            <RiTailwindCssFill className="size-6" />
                                            <span className="whitespace-nowrap text-sm font-medium">
                                                Tailwind CSS
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-[2] row-[1]" />
                            <div className="col-[2] row-[2] flex items-center justify-center overflow-hidden p-4 lg:p-8">
                                <img
                                    alt="Vani Studio"
                                    width={1024}
                                    height={1020}
                                    className="h-auto w-[432px] max-w-full saturate-[1.2]"
                                    style={{ color: "transparent" }}
                                    src={img}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}