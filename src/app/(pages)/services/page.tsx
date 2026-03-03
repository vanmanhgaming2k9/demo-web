import { Phone, ShoppingCart, ChevronRight, DraftingCompass, CodeXml, Sparkles, ShieldCheck, Headset, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";
import { premiumServices, regularServices, features } from "@/lib/services";
import Link from "next/link";
const PremiumServiceCard = ({ service }: { service: typeof premiumServices[0] }) => {
    const IconComponent = service.icon;

    return (
        <div className="relative dark:[--stroke-dark:hsl(240_5.3%_26.1%)] dark:[--stroke-light:hsl(240_3.7%_15.9%)]">
            <div className="absolute left-[1%] top-0 z-1 hidden h-px w-[95%] bg-[linear-gradient(90deg,transparent,var(--stroke-light)_10%,var(--stroke-dark)_80%,transparent)] dark:block" />
            <div className="relative flex flex-col overflow-hidden rounded-2xl border bg-background p-4 shadow-sm">
                <div className="mb-4 grow">
                    <div className="mb-4 flex items-start justify-between">
                        <div className={`relative flex size-10 items-center justify-center text-muted-foreground ${service.hasSpecialIcon ? '' : 'rounded-lg border border-zinc-300 dark:border-zinc-700'}`}>
                            <IconComponent className="size-6" />
                            {service.hasSpecialIcon && (
                                <>
                                    <span className="absolute top-1.5 h-px w-10 bg-zinc-300 dark:bg-zinc-700" />
                                    <span className="absolute bottom-1.5 h-px w-10 bg-zinc-300 dark:bg-zinc-700" />
                                    <span className="absolute left-1.5 h-10 w-px bg-zinc-300 dark:bg-zinc-700" />
                                    <span className="absolute right-1.5 h-10 w-px bg-zinc-300 dark:bg-zinc-700" />
                                </>
                            )}
                        </div>
                        <div className="relative flex">
                            <span
                                data-slot="badge"
                                className="inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-auto whitespace-nowrap rounded-md border px-2 py-0.5 text-sm font-medium transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-destructive/20 dark:aria-[invalid=true]:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3 text-foreground select-none dark:border-0 dark:bg-white/[0.08]"
                                style={{ textShadow: "rgba(255, 255, 255, 0.8) 1px 1px 8px" }}
                            >
                                <Gem className="size-3" />
                                <span>Premium</span>
                            </span>
                            <div className="absolute top-2.5 hidden h-2 w-full bg-white blur-lg filter dark:block" />
                        </div>
                    </div>
                    <h2 className="mb-2 flex items-center text-xl font-medium">
                        {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        {service.description}
                    </p>
                </div>
                <Link
                    data-slot="button"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-base font-medium outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-destructive/20 dark:aria-[invalid=true]:ring-destructive/40 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 h-10 px-4 py-2 md:self-start"
                    href={service.contactUrl}
                >
                    <Phone className="size-4" />
                    Liên hệ tư vấn
                </Link>
            </div>
        </div>
    );
};
const RegularServiceCard = ({ service }: { service: typeof regularServices[0] }) => (
    <div className="grid grid-cols-1 divide-y divide-dashed rounded-2xl border bg-background shadow-sm md:grid-cols-2 md:divide-x md:divide-y-0">
        <div className="space-y-2 p-4">
            <h2 className="text-balance text-xl font-medium">
                {service.title}
            </h2>
            <div>
                <div className="text-lg font-medium text-destructive">
                    Chỉ từ {service.price}&nbsp;₫
                </div>
            </div>
            <p className="flex-grow">
                {service.description}
            </p>
        </div>
        <div className="col-span-1 flex flex-col space-y-4 p-4">
            <div className="space-y-4">
                {features.map((feature, index) => {
                    const FeatureIcon = feature.icon;
                    return (
                        <div key={index} className="flex items-center space-x-4">
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-zinc-900 dark:text-zinc-400">
                                <FeatureIcon className="size-6" />
                            </div>
                            <div>
                                <div className="font-medium">{feature.title}</div>
                                <div className="text-balance text-sm text-muted-foreground">
                                    {feature.description}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="grid grid-cols-1 items-center gap-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 lg:gap-4">
                <Button className="w-full" variant="outline">
                    <Phone className="size-4" />
                    Liên hệ mua ngay
                </Button>
            </div>
        </div>
    </div>
);

export default function Services() {
    return (
        <main>
            <header className="border-b">
                <div className="container space-y-2 py-8">
                    <h1 className="text-balance text-4xl font-medium">Dịch vụ</h1>
                    <p className="text-balance text-lg text-muted-foreground">
                        Khám phá các dịch vụ chất lượng và chuyên nghiệp của V. Studio.
                    </p>
                </div>
            </header>
            <section id="services" className="container space-y-4 py-8 lg:space-y-8">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                    {premiumServices.map((service) => (
                        <PremiumServiceCard key={service.id} service={service} />
                    ))}

                    <div className="col-span-1 space-y-4 lg:col-span-2">
                        {regularServices.map((service) => (
                            <RegularServiceCard key={service.id} service={service} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}