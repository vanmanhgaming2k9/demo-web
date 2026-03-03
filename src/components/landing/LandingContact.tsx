import { MailPlus } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
export default function LandingContact() {
    return (
        <>
            <section id="contact" className="container">
                <Card className="flex flex-col items-center rounded-2xl border py-16">
                    <div className="mb-6 flex size-20 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-background dark:text-zinc-400">
                        <MailPlus size={40}/>
                    </div>
                    <h2 className="mb-4 text-center text-3xl font-medium !leading-[1.2] text-foreground md:text-5xl">
                        Liên hệ Vani Studio
                        <span className="block" /> để bắt đầu ý tưởng
                        <span className="block sm:inline-block" /> của bạn.
                    </h2>
                    <p className="mx-auto mb-8 text-balance text-center text-lg text-muted-foreground md:text-xl lg:max-w-2xl">
                        Bạn có một ý tưởng lớn? Hay một dự án nhỏ cần hoàn thành? Vani Studio ở đây để
                        giúp bạn hiện thực hoá ý tưởng.
                    </p>
                    <Link
                        data-slot="button"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-medium outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-destructive/20 dark:aria-[invalid=true]:ring-destructive/40 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 h-12 rounded-lg px-8"
                        href="/contact"
                    >
                        Liên hệ ngay
                    </Link>
                </Card>
            </section>
            <div className="h-16" />
        </>
    )
}