import {  Star, Phone } from "lucide-react";
import Link from "next/link";
import { SiFacebook, SiGmail, SiMapbox, SiDiscord, SiTelegram, SiInstagram } from "react-icons/si";
const contacts = [
  {
    label: "Email",
    icon: SiGmail,
    value: "vanixjnk2@gmail.com",
    href: "mailto:vanixjnk2@gmail.com",
  },
  {
    label: "Điện thoại",
    icon: Phone,
    value: "+84 (0) 935 974 907",
    href: "tel:+84935974907",
  },
  {
    label: "Địa chỉ",
    icon: SiMapbox,
    value: "288/28 Dương Bá Trạc, Phường Chánh Hưng, Thành phố Hồ Chí Minh, Quận 8, TP.HCM",
    href: undefined,
  },
  {
    label: "Facebook",
    icon: SiFacebook,
    value: "facebook.com/vanixjnk",
    href: "https://facebook.com/vanixjnk",
  },
  {
    label: "Discord",
    icon: SiDiscord,
    value: "vanistudio.com/discord",
    href: "https://vanistudio.com/discord",
  },
  {
    label: "Telegram",
    icon: SiTelegram,
    value: "t.me/vanixjnk",
    href: "https://t.me/vanixjnk",
  },
  {
    label: "Instagram",
    icon: SiInstagram,
    value: "@vanixjnk",
    href: "https://instagram.com/vanixjnk",
  }
];

export default function Contact() {
  return (
    <main>
      <header className="border-b">
        <div className="container space-y-2 py-8">
          <h1 className="text-balance text-4xl font-medium">Liên hệ</h1>
          <p className="text-balance text-lg text-muted-foreground">
            Nếu bạn cần hỗ trợ hoặc có bất kỳ câu hỏi nào, vui lòng liên hệ với chúng tôi qua các kênh sau:
          </p>
        </div>
      </header>
      <section id="services" className="container space-y-4 py-8 lg:space-y-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {contacts.map((contact, idx) => {
            const Icon = contact.icon;
            return (
              <div
                key={contact.label}
                className="group relative rounded-2xl border bg-gradient-to-br from-card via-background to-muted p-8 flex flex-col items-start gap-4 shadow-sm hover:shadow-lg transition-all duration-200 hover:border-primary/60 overflow-hidden"
              >
                <div className="flex items-center gap-4 mb-2">
                  <span className="inline-flex items-center justify-center rounded-full  dark:bg-primary/10 bg-blue-50 p-3">
                    <Icon className="w-5 h-5  text-blue-600 dark:text-zinc-400 transition-transform duration-200" />
                  </span>
                  <h6 className="text-lg font-bold tracking-tight">{contact.label}</h6>
                </div>
                {contact.href ? (
                  <Link
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener' : undefined}
                    className="text-primary underline break-all text-sm group-hover:text-primary/80 transition-colors"
                  >
                    {contact.value}
                  </Link>
                ) : (
                  <span className="text-sm">{contact.value}</span>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}