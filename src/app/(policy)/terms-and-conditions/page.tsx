import Link from "next/link"
export default function TermsAndConditionsPage() {
    return (
        <>
            <main className="w-screen overflow-x-hidden">
                <article>
                    <div className="h-16" />
                    <div className="container">
                        <div className="mx-auto max-w-3xl">
                            <div className="prose prose-zinc max-w-none dark:prose-invert prose-headings:text-balance prose-headings:font-semibold prose-blockquote:border-border prose-figcaption:text-balance prose-figcaption:text-center prose-hr:border-border prose-lead:text-lg">
                                <h1>Điều kiện giao dịch chung của Vani Studio</h1>
                                <p className="lead">
                                    Các thông tin quan trọng về các tiêu chuẩn dịch vụ, quy trình cung cấp dịch
                                    vụ, biểu phí, và các điều khoản liên quan đến việc cung cấp dịch vụ của
                                    Vani Studio. Vani Studio cam kết cung cấp các dịch vụ thiết kế và phát triển phần mềm
                                    chất lượng, tuân thủ đầy đủ các điều kiện và quy định được nêu dưới đây để
                                    đảm bảo quyền lợi của cả hai bên trong mỗi giao dịch.
                                </p>
                                <h2>1. Điều kiện và hạn chế trong việc cung cấp dịch vụ</h2>
                                <h3>1.1. Điều kiện cung cấp dịch vụ</h3>
                                <ul>
                                    <li>
                                        Khách hàng phải cung cấp đầy đủ và chính xác các thông tin yêu cầu về dự
                                        án để đảm bảo tiến độ và chất lượng công việc.
                                    </li>
                                    <li>
                                        Mọi thay đổi hoặc điều chỉnh yêu cầu trong quá trình thực hiện dự án phải
                                        được thông báo kịp thời và có thể dẫn đến việc thay đổi thời gian và chi
                                        phí thực hiện.
                                    </li>
                                </ul>
                                <h3>1.2. Phạm vi địa lý</h3>
                                <ul>
                                    <li>
                                        Vani Studio không giới hạn về mặt địa lý, hỗ trợ khách hàng trên toàn lãnh thổ
                                        Việt Nam.
                                    </li>
                                    <li>
                                        Vani Studio có thể giao tiếp và làm việc với khách hàng thông qua các công cụ
                                        trực tuyến như email, video call, và các công cụ quản lý dự án trực tuyến.
                                    </li>
                                </ul>
                                <h3>1.3. Giới hạn về thời gian</h3>
                                <ul>
                                    <li>
                                        Vani Studio chỉ cung cấp dịch vụ trong khung giờ hành chính từ 8:30 đến 16:30
                                        từ thứ hai đến thứ sáu, trừ các ngày lễ và Tết.
                                    </li>
                                    <li>
                                        Thời gian hoàn thành dự án sẽ được thỏa thuận rõ ràng trong hợp đồng. Bất
                                        kỳ yêu cầu thay đổi thời gian phải được thông báo trước ít nhất 07 ngày
                                        làm việc.
                                    </li>
                                </ul>
                                <h3>1.4. Giới hạn về tính khả thi</h3>
                                <ul>
                                    <li>
                                        Vani Studio không chịu trách nhiệm trong trường hợp dự án bị trì hoãn hoặc
                                        không thể hoàn thành do các yếu tố khách quan như thiên tai, dịch bệnh,
                                        hoặc các sự cố ngoài tầm kiểm soát.
                                    </li>
                                </ul>
                                <hr />
                                <h2>2. Chính sách Thanh toán</h2>
                                <p>
                                    Thanh toán đầy đủ và đúng hạn các khoản phí theo thỏa thuận trong hợp đồng.
                                    Chi tiết về chính sách thanh toán xem tại{" "}
                                    <Link href="/payment-policy">
                                        Chính sách Thanh toán
                                    </Link>
                                    .
                                </p>
                                <hr />
                                <h2>3. Chính sách Giao nhận</h2>
                                <p>
                                    Vani Studio cam kết giao nhận sản phẩm đúng hạn và đúng chất lượng theo thỏa
                                    thuận trong hợp đồng. Chi tiết về chính sách giao nhận xem tại{" "}
                                    <Link href="/shipping-policy">
                                        Chính sách Giao nhận
                                    </Link>
                                    .
                                </p>
                                <hr />
                                <h2>4. Chính sách Bảo hành</h2>
                                <p>
                                    Vani Studio cung cấp chính sách bảo hành đối với các sản phẩm phần mềm trong thời
                                    gian từ 03 đến 12 tháng, tùy thuộc vào độ phức tạp của dự án. Chi tiết về
                                    chính sách bảo hành xem tại{" "}
                                    <Link href="/warranty-policy">
                                        Chính sách Bảo hành
                                    </Link>
                                    .
                                </p>
                                <hr />
                                <h2>5. Chính sách Bảo mật</h2>
                                <p>
                                    Vani Studio cam kết bảo mật thông tin khách hàng theo quy định tại{" "}
                                    <Link href="/privacy-policy">
                                        Chính sách Bảo mật
                                    </Link>
                                    .
                                </p>
                                <hr />
                                <h2>
                                    6. Các tiêu chuẩn dịch vụ, quy trình cung cấp dịch vụ, biểu phí và các điều
                                    khoản liên quan
                                </h2>
                                <h3>6.1. Tiêu chuẩn dịch vụ</h3>
                                <p>
                                    Vani Studio cam kết cung cấp dịch vụ thiết kế và phát triển phần mềm với các tiêu
                                    chuẩn chất lượng, đảm bảo mang lại sự hài lòng tối đa cho khách hàng. Các
                                    tiêu chuẩn dịch vụ của Vani Studio bao gồm:
                                </p>
                                <h4>6.1.1. Chất lượng sản phẩm</h4>
                                <ul>
                                    <li>
                                        Mọi sản phẩm phần mềm được thiết kế và phát triển bởi Vani Studio đều tuân theo
                                        các tiêu chuẩn kỹ thuật và chất lượng nghiêm ngặt.
                                    </li>
                                    <li>
                                        Vani Studio đảm bảo rằng phần mềm được xây dựng với độ tin cậy cao, dễ sử dụng,
                                        và tối ưu hóa hiệu suất.
                                    </li>
                                </ul>
                                <h4>6.1.2. Quy trình phát triển rõ ràng</h4>
                                <ul>
                                    <li>
                                        Quy trình phát triển phần mềm của Vani Studio tuân theo các phương pháp tiếp
                                        cận hiện đại như Agile, Scrum để đảm bảo tính linh hoạt và khả năng thích
                                        ứng với yêu cầu thay đổi của khách hàng.
                                    </li>
                                    <li>
                                        Mỗi dự án đều có một kế hoạch chi tiết và các mốc thời gian cụ thể để theo
                                        dõi tiến độ và đảm bảo hoàn thành đúng hạn.
                                    </li>
                                </ul>
                                <h4>6.1.3. Công nghệ hiện đại</h4>
                                <p>
                                    Vani Studio luôn cập nhật các công nghệ mới nhất và áp dụng các thực tiễn tốt
                                    nhất trong ngành để đảm bảo rằng khách hàng nhận được sản phẩm tốt nhất.
                                </p>
                                <h4>6.1.4. Hỗ trợ khách hàng tận tâm</h4>
                                <ul>
                                    <li>
                                        Vani Studio cung cấp dịch vụ hỗ trợ khách hàng 24/7, sẵn sàng giải đáp mọi thắc
                                        mắc và hỗ trợ kỹ thuật trong quá trình sử dụng phần mềm.
                                    </li>
                                    <li>
                                        Khách hàng luôn được thông báo và cập nhật về tiến độ dự án, các vấn đề
                                        phát sinh và cách giải quyết.
                                    </li>
                                </ul>
                                <h4>6.1.5. Bảo mật và bảo vệ dữ liệu</h4>
                                <p>
                                    Vani Studio cam kết bảo mật tất cả thông tin và dữ liệu của khách hàng. Mọi dự án
                                    đều được bảo vệ bằng các biện pháp bảo mật nghiêm ngặt.
                                </p>
                                <h4>6.1.6. Đánh giá và phản hồi</h4>
                                <p>
                                    Sau khi hoàn thành dự án, Vani Studio thực hiện các bước đánh giá chất lượng sản
                                    phẩm và dịch vụ, đồng thời lắng nghe phản hồi từ khách hàng để không ngừng
                                    cải tiến.
                                </p>
                                <h3>6.2. Quy trình cung cấp dịch vụ</h3>
                                <ul>
                                    <li>
                                        <strong>Bước 1. Tiếp nhận yêu cầu</strong>: Thu thập thông tin từ khách
                                        hàng về yêu cầu và mục tiêu của dự án.
                                    </li>
                                    <li>
                                        <strong>Bước 2. Phân tích và tư vấn</strong>: Phân tích yêu cầu, tư vấn
                                        giải pháp kỹ thuật, và lập kế hoạch dự án chi tiết.
                                    </li>
                                    <li>
                                        <strong>Bước 3. Ký hợp đồng</strong>: Thống nhất các điều khoản và ký kết
                                        hợp đồng dịch vụ.
                                    </li>
                                    <li>
                                        <strong>Bước 4. Thiết kế và phát triển</strong>: Triển khai thiết kế giao
                                        diện và phát triển phần mềm theo kế hoạch.
                                    </li>
                                    <li>
                                        <strong>Bước 5. Kiểm tra và hoàn thiện</strong>: Kiểm tra chất lượng, sửa
                                        lỗi (nếu có) và hoàn thiện sản phẩm.
                                    </li>
                                    <li>
                                        <strong>Bước 6. Bàn giao và đào tạo</strong>: Bàn giao sản phẩm, cung cấp
                                        tài liệu hướng dẫn và đào tạo sử dụng cho khách hàng.
                                    </li>
                                    <li>
                                        <strong>Bước 7: Hỗ trợ và bảo hành</strong>: Cung cấp hỗ trợ kỹ thuật và
                                        bảo hành sản phẩm theo chính sách đã cam kết.
                                    </li>
                                </ul>
                                <h3>6.3. Biểu phí</h3>
                                <p>
                                    Biểu phí dịch vụ sẽ được xác định trên giá niêm yết hoặc dựa trên phạm vi và
                                    yêu cầu cụ thể của từng dự án. Các khoản phí sẽ bao gồm phí thiết kế, phát
                                    triển, kiểm tra, và các chi phí phát sinh khác. Chi tiết về biểu phí sẽ được
                                    thỏa thuận và ghi rõ trong hợp đồng trước khi bắt đầu dự án.
                                </p>
                                <h3>6.4. Điều khoản liên quan đến việc cung cấp dịch vụ</h3>
                                <ul>
                                    <li>
                                        <Link href="/privacy-policy">
                                            Chính sách Bảo mật
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/payment-policy">
                                            Chính sách Thanh toán
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/shipping-policy">
                                            Chính sách Giao nhận
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/warranty-policy">
                                            Chính sách Bảo hành
                                        </Link>
                                    </li>
                                </ul>
                                <h3>6.5. Điều kiện và hạn chế</h3>
                                <ul>
                                    <li>
                                        Các yêu cầu thay đổi hoặc điều chỉnh trong quá trình thực hiện dự án phải
                                        được thông báo kịp thời và có thể ảnh hưởng đến thời gian và chi phí thực
                                        hiện.
                                    </li>
                                    <li>
                                        Vani Studio không chịu trách nhiệm trong các trường hợp dự án bị trì hoãn hoặc
                                        không thể hoàn thành do các yếu tố khách quan như thiên tai, dịch bệnh,
                                        hoặc các sự cố ngoài tầm kiểm soát.
                                    </li>
                                </ul>
                                <hr />
                                <h2>
                                    7. Nghĩa vụ của người bán và nghĩa vụ của khách hàng trong mỗi giao dịch
                                </h2>
                                <h3>7.1. Nghĩa vụ của người bán</h3>
                                <ul>
                                    <li>
                                        <strong>Cung cấp dịch vụ chất lượng</strong>: Đảm bảo cung cấp dịch vụ
                                        thiết kế và phát triển phần mềm đúng với các yêu cầu kỹ thuật và tiêu
                                        chuẩn chất lượng đã thỏa thuận.
                                    </li>
                                    <li>
                                        <strong>Bàn giao đúng hạn</strong>: Hoàn thành và bàn giao dự án theo đúng
                                        tiến độ đã cam kết trong hợp đồng.
                                    </li>
                                    <li>
                                        <strong>Hỗ trợ và bảo hành</strong>: Cung cấp dịch vụ hỗ trợ kỹ thuật và
                                        bảo hành sản phẩm trong thời gian quy định, đảm bảo khách hàng có thể sử
                                        dụng sản phẩm một cách hiệu quả.
                                    </li>
                                    <li>
                                        <strong>Bảo mật thông tin</strong>: Cam kết bảo mật tất cả thông tin và dữ
                                        liệu liên quan đến dự án và khách hàng theo quy định tại{" "}
                                        <Link href="/privacy-policy">
                                            Chính sách Bảo mật
                                        </Link>
                                        .
                                    </li>
                                </ul>
                                <h3>7.2. Nghĩa vụ của khách hàng</h3>
                                <ul>
                                    <li>
                                        <strong>Cung cấp thông tin đầy đủ và chính xác</strong>: Cung cấp đầy đủ
                                        và chính xác các thông tin yêu cầu về dự án để đảm bảo tiến độ và chất
                                        lượng công việc.
                                    </li>
                                    <li>
                                        <strong>Thanh toán đúng hạn</strong>: Thanh toán đầy đủ và đúng hạn các
                                        khoản phí theo thỏa thuận trong hợp đồng. Chi tiết về phương thức thanh
                                        toán có thể tham khảo tại{" "}
                                        <Link href="/payment-policy">
                                            Chính sách Thanh toán
                                        </Link>
                                        .
                                    </li>
                                    <li>
                                        <strong>Hợp tác trong quá trình thực hiện dự án</strong>: Phối hợp và phản
                                        hồi kịp thời các yêu cầu từ phía công ty trong suốt quá trình thiết kế và
                                        phát triển phần mềm.
                                    </li>
                                    <li>
                                        <strong>Bảo mật thông tin nội bộ</strong>: Không tiết lộ bất kỳ thông tin
                                        nội bộ hoặc dữ liệu nhạy cảm nào liên quan đến sản phẩm hoặc quy trình làm
                                        việc của công ty.
                                    </li>
                                </ul>
                                <hr />
                                <blockquote>
                                    Cảm ơn bạn đã đọc và hiểu rõ Điều kiện giao dịch chung của Vani Studio. Nếu có
                                    bất kỳ câu hỏi nào, vui lòng liên hệ với Vani Studio. Vani Studio luôn sẵn lòng hỗ trợ
                                    bạn một cách tốt nhất!
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
