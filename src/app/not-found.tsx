import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
export default function Home() {
    return (
        <>
            <main>
                <div className="flex h-screen flex-col items-center justify-center gap-4">
                    <img src="/vs.png" alt="Vani Studio" className="h-15" />
                    <h1 className="text-4xl font-bold">404 Not Found</h1>
                    <p className="text-lg">Trang bạn đang tìm kiếm không tồn tại.</p>
                    <Link href="/" className="mt-4">
                        <Button variant="default" size="lg">
                            <ArrowLeftIcon className="mr-2 h-4 w-4" /> Quay lại trang chủ
                        </Button>
                    </Link>
                </div>
            </main>
        </>
    );
}
