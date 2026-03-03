import { MapPin, Phone, Mail, Globe, Github, Gitlab } from "lucide-react"
import Link from "next/link"
import ModeToggle from "../mode-toggle"

const contactInfo = [
    {
        id: "address",
        icon: MapPin,
        content: "Phường Cam Ranh, Tỉnh Khánh Hòa, Việt Nam",
        href: null
    },
    {
        id: "phone", 
        icon: Phone,
        content: "+84 (0) 935 974 907",
        href: "tel:0935974907"
    },
    {
        id: "email",
        icon: Mail, 
        content: "welcome@vanistudio.com",
        href: "mailto:welcome@vanistudio.com"
    },
    {
        id: "website",
        icon: Globe,
        content: "vanistudio.com", 
        href: null
    }
];

const policyLinks = [
    {
        id: "terms",
        title: "Điều kiện giao dịch chung",
        href: "/terms-and-conditions"
    },
    {
        id: "privacy",
        title: "Chính sách Bảo mật", 
        href: "/privacy-policy"
    },
    {
        id: "payment",
        title: "Chính sách Thanh toán",
        href: "/payment-policy"
    },
    {
        id: "shipping", 
        title: "Chính sách Giao nhận",
        href: "/shipping-policy"
    },
    {
        id: "warranty",
        title: "Chính sách Bảo hành", 
        href: "/warranty-policy"
    }
];

const additionalLinks = [
    {
        id: "facebook",
        title: "Facebook",
        href: "https://www.facebook.com/vanixjnk",
        external: false
    },
    {
        id: "instagram",
        title: "Instagram",
        href: "https://www.instagram.com/vanixjnk",
        external: false
    },
    {
        id: "tiktok",
        title: "TikTok",
        href: "https://www.tiktok.com/@vanixjnk",
        external: false
    },
    {
        id: "youtube",
        title: "YouTube",
        href: "https://www.youtube.com/@vanixjnk2",
        external: false
    },
    {
        id: "discord",
        title: "Discord",
        href: "https://vanistudio.com/discord",
        external: false
    }
];

const socialLinks = [
    {
        id: "gitlab",
        title: "GitLab",
        href: "https://gitlab.com/vanistudio",
        icon: Gitlab
    }
];

export default function Footer() {
    return (
        <footer className="w-screen overflow-x-hidden border-t border-edge bg-background">
            <div className="container">
                <div className="grid divide-edge border-x border-edge lg:grid-cols-4 lg:divide-x">
                    <address className="relative col-span-1 space-y-2 py-4 pl-4 not-italic text-muted-foreground sm:col-span-2 after:absolute after:-left-[100vw] after:bottom-0 after:h-px after:w-[200vw] after:bg-edge lg:after:hidden">
                        <div className="text-xl font-medium uppercase text-foreground">
                            Vani Studio (V. Studio)
                        </div>
                        {contactInfo.map((contact) => {
                            const IconComponent = contact.icon;
                            return (
                                <div key={contact.id} className="flex gap-2">
                                    <IconComponent className="mt-0.5 size-4 shrink-0" />
                                    {contact.href ? (
                                        <Link
                                            className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
                                            href={contact.href}
                                            {...(contact.href.startsWith('mailto:') && {
                                                title: "Email",
                                                target: "_blank",
                                                rel: "noopener noreferrer"
                                            })}
                                        >
                                            {contact.content}
                                        </Link>
                                    ) : (
                                        <p className="flex-1 text-balance text-sm">
                                            {contact.content}
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </address>
                    <div className="relative flex flex-col items-start space-y-2 py-4 pl-4 after:absolute after:-left-[100vw] after:bottom-0 after:h-px after:w-[200vw] after:bg-edge sm:after:hidden">
                        {policyLinks.map((policy) => (
                            <Link
                                key={policy.id}
                                className="block text-sm underline-offset-4 transition-colors hover:underline"
                                title={policy.title}
                                href={policy.href}
                            >
                                {policy.title}
                            </Link>
                        ))}
                    </div>
                    <div className="flex flex-col items-start space-y-2 border-edge py-4 pl-4 sm:border-l lg:border-l-0">
                        {additionalLinks.map((link) => (
                            <Link
                                key={link.id}
                                className="block text-sm underline-offset-4 transition-colors hover:underline"
                                title={link.title}
                                href={link.href}
                                {...(link.external && {
                                    target: "_blank",
                                    rel: "noopener noreferrer"
                                })}
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="relative flex flex-col items-center justify-between gap-4 border-x border-edge p-4 pb-[calc(1rem+env(safe-area-inset-bottom,0px))] before:absolute before:-left-[100vw] before:top-0 before:h-px before:w-[200vw] before:bg-edge sm:flex-row">
                    <div className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Vani Studio (V. Studio) All rights reserved.
                    </div>
                    <div className="flex items-center justify-center gap-4 *:text-muted-foreground *:transition-colors">
                        {socialLinks.map((social) => {
                            const IconComponent = social.icon;
                            return (
                                <Link
                                    key={social.id}
                                    href={social.href}
                                    title={social.title}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-foreground"
                                >
                                    <IconComponent className="size-5" />
                                    <span className="sr-only">{social.title}</span>
                                </Link>
                            );
                        })}
                        <div className="hover:text-foreground">
                            <ModeToggle />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}