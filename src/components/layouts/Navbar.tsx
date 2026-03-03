'use client'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react";
import Link from "next/link";
import BrandToggle from "../brand-toggle";

import { usePathname } from "next/navigation";

const navigationItems = [
    {
        id: "home",
        title: "Trang chủ",
        href: "/"
    },
    {
        id: "about", 
        title: "Giới thiệu",
        href: "/about"
    },
    {
        id: "services", 
        title: "Dịch vụ",
        href: "/services"
    },
    {
        id: "contact",
        title: "Liên hệ", 
        href: "/contact"
    }
];

export default function Navbar() {
    const pathname = usePathname();
    return (
        <header className="sticky top-0 z-50 flex h-16 items-center border-b bg-background/80 backdrop-blur-lg shadow-md supports-[backdrop-filter]:bg-background/80">
            <div className="container flex items-center gap-4 md:gap-8">
                <Link
                    className="flex gap-2 items-center group"
                    style={{ WebkitTouchCallout: "none" }}
                    href="/"
                >
                    <BrandToggle />
                    <span className="sr-only">Vani Studio</span>
                </Link>
                <div className="mx-4 hidden md:block h-8 w-px bg-border/40" />
                <div className="flex-1" />
                {/* Desktop Navigation */}
                <div className="hidden md:flex">
                    <nav className="flex items-center gap-2 md:gap-6">
                        {navigationItems.map((item) => {
                            const isActive =
                                item.href === "/"
                                    ? pathname === "/"
                                    : pathname.startsWith(item.href);
                            return (
                                <Link
                                    key={item.id}
                                    className={`relative px-2 py-1 font-medium transition-colors duration-200 hover:text-foreground
                                        ${isActive ? 'text-foreground after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-primary after:rounded-full after:scale-100 after:transition-transform after:duration-300' : 'text-muted-foreground after:scale-0'}
                                        after:content-[''] after:block after:origin-left`}
                                    title={item.title}
                                    href={item.href}
                                >
                                    {item.title}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
                <nav className="flex items-center gap-2 md:gap-3">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button 
                                title="Menu" 
                                className="inline-flex items-center justify-center whitespace-nowrap text-base font-medium outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-destructive/20 dark:aria-[invalid=true]:ring-destructive/40 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground size-8 group flex-col gap-1 rounded-full md:hidden"
                            >
                                <Menu />
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="start">
                            <DropdownMenuGroup>
                                {navigationItems.map((item) => {
                                    const isActive =
                                        item.href === "/"
                                            ? pathname === "/"
                                            : pathname.startsWith(item.href);
                                    return (
                                        <Link key={item.id} href={item.href}>
                                            <DropdownMenuItem className={`relative font-medium ${isActive ? 'text-foreground bg-accent/40' : 'text-muted-foreground'}`}
                                            >
                                                {item.title}
                                            </DropdownMenuItem>
                                        </Link>
                                    );
                                })}
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </nav>
            </div>
        </header>
    );
}