'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { toast } from 'sonner'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
export default function PaymentPolicyPage() {
    const [copied, setCopied] = useState(false)
    const copyLink = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text)
            setCopied(true)
            toast.success("Sao chép thành công!")
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            toast.error("Sao chép thất bại!")
        }
    }
    return (
        <>
            <main className="w-screen overflow-x-hidden">
                <article>
                    <div className="h-16" />
                    <div className="container">
                        <div className="mx-auto max-w-3xl">
                            <div
                                className="prose prose-zinc max-w-none dark:prose-invert prose-headings:text-balance prose-headings:font-semibold prose-blockquote:border-border prose-figcaption:text-balance prose-figcaption:text-center prose-hr:border-border prose-lead:text-lg"
                            >
                                <h1>Chính sách Thanh toán của Vani Studio</h1>
                                <p className="lead">
                                    Để đảm bảo sự minh bạch và thuận tiện, Vani Studio chỉ áp dụng một hình thức thanh toán duy nhất: khách hàng vui lòng liên hệ trực tiếp với chúng tôi để được hướng dẫn và xác nhận phương thức thanh toán phù hợp cho từng dự án/dịch vụ.
                                </p>
                                <h2>Hình thức thanh toán</h2>
                                <ul>
                                    <li>
                                        <b>Liên hệ trực tiếp:</b> Sau khi trao đổi và thống nhất dịch vụ, khách hàng sẽ nhận được hướng dẫn chi tiết về cách thức thanh toán từ đội ngũ Vani Studio qua email, điện thoại hoặc các kênh liên lạc chính thức.
                                    </li>
                                </ul>
                                <h2>Lưu ý</h2>
                                <ul>
                                    <li>Vani Studio không yêu cầu thanh toán qua bất kỳ website trung gian hoặc bên thứ ba nào.</li>
                                    <li>Vui lòng xác nhận thông tin tài khoản và nội dung chuyển khoản với nhân viên phụ trách trước khi thực hiện thanh toán.</li>
                                    <li>Mọi thắc mắc về thanh toán, vui lòng liên hệ trực tiếp để được hỗ trợ nhanh chóng và chính xác nhất.</li>
                                </ul>
                                <p>
                                    Thông tin thanh toán qua hình thức <strong>Chuyển khoản ngân hàng</strong>:
                                </p>
                                <ul>
                                    <li>
                                        Ngân hàng: <strong>MB Bank</strong> (Military Commercial Joint Stock Bank)
                                    </li>
                                    <li>
                                        Chủ tài khoản:
                                        <strong className="ml-2 font-mono text-success-foreground">
                                            NGUYEN DINH BAO
                                        </strong>
                                    </li>
                                    <li>
                                        Số tài khoản:
                                        <span className="ml-2 inline-flex items-center gap-2">
                                            <strong className="font-mono text-success-foreground">
                                                100000001
                                            </strong>{" "}
                                            <Tooltip>
                                              <TooltipTrigger asChild>
                                                <button
                                                  type="button"
                                                  className="inline-flex text-muted-foreground transition-colors hover:text-foreground"
                                                  onClick={() => copyLink('100000001')}
                                                >
                                                  {copied ? (
                                                    <Check className="inline" size={15} />
                                                  ) : (
                                                    <Copy className="inline" size={15} />
                                                  )}
                                                  <span className="sr-only">Sao chép</span>
                                                </button>
                                              </TooltipTrigger>
                                              <TooltipContent>
                                                Sao chép
                                              </TooltipContent>
                                            </Tooltip>
                                        </span>
                                    </li>
                                    <li>
                                        Nội dung thanh toán: <strong>Vani Studio sẽ cung cấp mã thanh toán đơn hàng cho bạn</strong>
                                    </li>
                                </ul>
                                <figure className="mx-auto w-fit sm:ml-8">
                                    <div className="not-prose relative overflow-hidden rounded-lg md:rounded-xl">
                                        <img
                                            alt="Vietcombank QR"
                                            src="https://img.vietqr.io/image/MB-100000001-compact.png"
                                            style={{ color: "transparent", width: 320 }}
                                        />
                                        <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 dark:ring-white/10 md:rounded-xl" />
                                    </div>
                                </figure>
                                <hr />
                                <blockquote>
                                    Cảm ơn bạn đã đọc và hiểu rõ Chính sách Thanh toán của Vani Studio. Nếu có bất kỳ
                                    câu hỏi nào, vui lòng liên hệ với Vani Studio. Vani Studio luôn sẵn lòng hỗ trợ bạn
                                    một cách tốt nhất!
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 h-12" />
                </article>
            </main>
        </>
    )
}
