// Nguyên lý cuối cùng trong SOLID chính là Dependency Inversion
// 1. Các module cấp cao không nên phụ thuộc vào các modules cấp thấp. Cả 2 nên phụ thuộc vào abstraction.
// 2. Interface (abstraction) không nên phụ thuộc vào chi tiết, mà ngược lại. 
// ( Các class giao tiếp với nhau thông qua interface,không phải thông qua implementation.)

// Nếu tuân theo Dependendy Inversion principle, các module cùng phụ thuộc vào 1 interface không đổi. 
// Ta có thể dễ dàng thay thế, sửa đổi module cấp thấp mà không ảnh hưởng gì tới module cấp cao.

// ## Trước Khi Áp Dụng DIP

// Giả sử chúng ta có một ứng dụng đơn giản để gửi thông báo, trong đó lớp NOTIFICATION phụ thuộc trực tiếp vào lớp EmailService.
class EmailService {
    sendEmail() {
        console.log('Send Email!')
    }
}
class NotificationService {
    private emailSv: EmailService
    constructor()  {
        this.emailSv = new EmailService()
    }

    send() {
        this.emailSv.sendEmail()
    }
}
const notify = new NotificationService()
notify.send()


// Trong ví dụ này, lớp Notification phụ thuộc trực tiếp vào lớp EmailService. 
// Nếu chúng ta muốn thay đổi cách gửi thông báo, ví dụ gửi qua SMS thay vì email,
//  chúng ta phải thay đổi mã của lớp Notification, điều này vi phạm DIP.



// Sau Khi Áp Dụng DIP
// Để áp dụng DIP, chúng ta sẽ giới thiệu một interface (hoặc abstract class) MessageService mà cả EmailService và SmsService đều triển khai. 
// Lớp Notification sẽ phụ thuộc vào MessageService thay vì EmailService.



interface MessageService {
    send(): void
}


class EmailService2 implements MessageService {
    send(): void {
        console.log('Send Email')
    }
}


class SmsService implements MessageService {
    send(): void {
        console.log('Send Sms')
    }
}


class Notification2 {
    private service: MessageService
    constructor(service: MessageService) {
        this.service = service
    }
    send() {
        this.service.send()
    } 
}


const sms = new SmsService()
const notify2 = new Notification2(sms).send()



// Tóm lại:
// Các module cấp cao không nên phục thuộc vào các module cấp thấp . Cả 2 nên phụ thuộc vào các trừ trượng.
// Các trừu tượng không nên phụ thuộc vào chi tiết. Chi tiết nên phụ thuộc vào các trừu tượng.



// Nhắc tới DIP thì không thể không nhắc đến IOC(Inversion of Control)
// Cách thực hiện IoC phổ biến nhất hiện nay là kết hợp giữa Service Locator (cung cấp bởi các Framework) và Dependency Injection.








