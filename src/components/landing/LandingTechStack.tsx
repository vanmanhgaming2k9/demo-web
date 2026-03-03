import { 
    SiNextdotjs, 
    SiReact, 
    SiVuedotjs,
    SiNuxtdotjs,
    SiAngular,
    SiJavascript,
    SiTypescript, 
    SiPython,
    SiCplusplus,
    SiPhp,
    SiLaravel,
    SiBootstrap,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiNestjs,
    SiFastify,
    SiHono,
    SiDotnet,
    SiMongodb,
    SiVercel,
    SiDocker,
    SiFirebase,
    SiMysql,
    SiRedis,
    SiAntdesign,
    SiFramer,
} from "react-icons/si";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
  } from "@/components/ui/tooltip"

const techStack = [
    {
        id: "nextjs",
        name: "Next.js",
        category: "Frontend",
        icon: SiNextdotjs,
    },
    {
        id: "react",
        name: "React",
        category: "Frontend", 
        icon: SiReact,
    },
    {
        id: "vue",
        name: "Vue.js",
        category: "Frontend",
        icon: SiVuedotjs,
    },
    {
        id: "nuxt",
        name: "Nuxt.js",
        category: "Frontend",
        icon: SiNuxtdotjs,
    },
    {
        id: "angular",
        name: "Angular",
        category: "Frontend",
        icon: SiAngular,
    },
    {
        id: "javascript",
        name: "JavaScript",
        category: "Language",
        icon: SiJavascript,
    },
    {
        id: "typescript",
        name: "TypeScript",
        category: "Language",
        icon: SiTypescript,
    },
    {
        id: "python",
        name: "Python",
        category: "Language",
        icon: SiPython,
    },
    {
        id: "c++",
        name: "C++",
        category: "Language",
        icon: SiCplusplus,
    },
    {
        id: "php",
        name: "PHP",
        category: "Language",
        icon: SiPhp,
    },
    {
        id: "laravel",
        name: "Laravel",
        category: "Backend",
        icon: SiLaravel,
    },
    {
        id: "bootstrap",
        name: "Bootstrap",
        category: "Frontend",
        icon: SiBootstrap,
    },
    {
        id: "tailwind",
        name: "Tailwind CSS",
        category: "Styling",
        icon: SiTailwindcss,
    },
    {
        id: "antdesign",
        name: "Ant Design",
        category: "Styling",
        icon: SiAntdesign,
    },
    {
        id: "framer",
        name: "Framer",
        category: "Styling",
        icon: SiFramer,
    },
    {
        id: "nodejs",
        name: "Node.js", 
        category: "Backend",
        icon: SiNodedotjs,
    },
    {
        id: "express",
        name: "Express",
        category: "Backend",
        icon: SiExpress,
    },
    {
        id: "nestjs",
        name: "Nest.js",
        category: "Backend",
        icon: SiNestjs,
    },
    {
        id: "fastify",
        name: "Fastify",
        category: "Backend",
        icon: SiFastify,
    },
    {
        id: "hono",
        name: "Hono",
        category: "Backend",
        icon: SiHono,
    },
    {
        id: "dotnet",
        name: ".NET",
        category: "Backend",
        icon: SiDotnet,
    },
    {
        id: "mongodb",
        name: "MongoDB",
        category: "Database",
        icon: SiMongodb,
    },
    {
        id: "mysql",
        name: "MySQL",
        category: "Database",
        icon: SiMysql,
    },
    {
        id: "redis",
        name: "Redis",
        category: "Database",
        icon: SiRedis,
    },
    {
        id: "vercel",
        name: "Vercel",
        category: "Deployment",
        icon: SiVercel,
    },
    {
        id: "docker",
        name: "Docker",
        category: "DevOps",
        icon: SiDocker,
    },
    {
        id: "firebase",
        name: "Firebase", 
        category: "Backend",
        icon: SiFirebase,
    }
];
export default function LandingTechStack() {
    return (
        <section className="container py-16">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-medium mb-4 text-foreground md:text-5xl">
                    Công nghệ yêu thích
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Chúng tôi sử dụng những công nghệ hiện đại nhất để xây dựng các sản phẩm 
                    chất lượng cao và trải nghiệm người dùng tuyệt vời.
                </p>
            </div>
            <div className="mt-16">
                <h3 className="text-2xl font-medium text-center mb-8">Tất cả công nghệ</h3>
                <div className="grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-6">
                    {techStack.map((tech) => {
                        const IconComponent = tech.icon;
                        return (
                            <div 
                                key={tech.id} 
                                className="flex flex-col items-center p-4 rounded-lg transition-colors group"
                            >
                                <Tooltip>
                                    <TooltipTrigger>
                                        <IconComponent className={`lg:size-10 size-8 mb-2 text-muted-foreground group-hover:scale-110 transition-transform duration-300`} />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        {tech.name}
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
} 