import { Phone, ShoppingCart, ChevronRight, DraftingCompass, CodeXml, Sparkles, ShieldCheck, Headset, Gem } from "lucide-react";
const premiumServices = [
    {
        id: "ui-ux-design",
        title: "Thiết kế giao diện (UI/UX)",
        description: "Chuyển hóa ý tưởng của bạn thành giao diện phần mềm trực quan, hấp dẫn, dễ sử dụng, giúp tối ưu hóa trải nghiệm người dùng cho sản phẩm của bạn.",
        icon: DraftingCompass,
        contactUrl: "/contact",
        hasSpecialIcon: true
    },
    {
        id: "software-development", 
        title: "Phát triển phần mềm",
        description: "Chuyển hóa ý tưởng và thiết kế của bạn thành sản phẩm phần mềm chất lượng cao, hiệu suất tối ưu, phù hợp hoàn hảo với nhu cầu kinh doanh của bạn.",
        icon: CodeXml,
        contactUrl: "/contact",
        hasSpecialIcon: false
    }
];

const regularServices = [
    {
        id: "mmo-website",
        title: "Dịch vụ Thiết kế Website MMO", 
        price: "3.000.000",
        description: "Website chuyên nghiệp dành cho doanh nghiệp, giúp doanh nghiệp dễ dàng tự động hóa quy trình kiếm tiền online và tối ưu hóa quy trình quản lý khách hàng.",
        detailUrl: "/services/mmo-website"
    },
    {
        id: "landing-page",
        title: "Dịch vụ Thiết kế Landing Page",
        price: "1.500.000", 
        description: "Website là một trang web đơn lẻ, thường được sử dụng để giới thiệu sản phẩm, dịch vụ hoặc thông tin của một cá nhân hoặc tổ chức, giúp tăng tính nổi bật và thu hút khách hàng.",
        detailUrl: "/services/landing-page"
    },
    {
        id: "personal-website",
        title: "Dịch vụ Thiết kế Website Cá nhân",
        price: "1.000.000",
        description: "Website chuyên nghiệp dành cho cá nhân, giới thiệu đầy đủ các thông tin cơ bản của bạn như tên, công việc, thông tin liên hệ, các liên kết mạng xã hội giúp mọi người dễ dàng tìm kiếm và kết nối với bạn.",
        detailUrl: "/services/personal-website"
    },
    {
        id: "software-development",
        title: "Dịch vụ Phát triển Phần mềm",
        price: "5.000.000",
        description: "Giúp cá nhân, doanh nghiệp sở hữu hệ thống phần mềm chuyên nghiệp, an toàn, và tối ưu chi phí sử dụng.",
    },
    {
        id: "discord-bot", 
        title: "Dịch vụ thiết kế và phát triển Discord Bot",
        price: "3.000.000",
        description: "Giúp cá nhân, doanh nghiệp sở hữu hệ thống Discord Bot chuyên nghiệp, an toàn, và tối ưu chi phí sử dụng.",
        detailUrl: "/services/discord-bot"
    },
    {
        id: "customize-website",
        title: "Dịch vụ Tùy chỉnh Website",
        price: "1.000.000",
        description: "Giúp cá nhân, doanh nghiệp sửa lỗi và cập nhật chức năng của website theo yêu cầu riêng, đảm bảo tính độc đáo và phù hợp với nhu cầu sử dụng.",
        detailUrl: "/services/customize-website"
    },
    {
        id: "customize-discord-bot",
        title: "Dịch vụ Tùy chỉnh Discord Bot",
        price: "1.000.000",
        description: "Giúp cá nhân, doanh nghiệp sửa lỗi và cập nhật chức năng của Discord Bot theo yêu cầu riêng, đảm bảo tính độc đáo và phù hợp với nhu cầu sử dụng.",
        detailUrl: "/services/customize-discord-bot"
    }
];

const features = [
    {
        icon: Sparkles,
        title: "Công nghệ hiện đại",
        description: "Sử dụng các công nghệ mới nhất"
    },
    {
        icon: ShieldCheck,
        title: "Bảo hành", 
        description: "Cam kết bảo hành sản phẩm"
    },
    {
        icon: Headset,
        title: "Hỗ trợ 24/7",
        description: "Luôn sẵn sàng hỗ trợ"
    }
];

export { premiumServices, regularServices, features };