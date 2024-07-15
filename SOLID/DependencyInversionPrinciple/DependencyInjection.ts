// Về cốt lõi, DI đại diện cho triết lý "Composition Over Inheritance". Một đối tượng nên được tạo thành từ các viên gạch nhỏ hơn từ bên ngoài
// Dependency Injection: Đây là một cách để hiện thực Inversion of Control Pattern (Có thể coi nó là một design pattern riêng cũng được). 
// Các module phụ thuộc (dependency) sẽ được inject vào module cấp cao.


// Có thể hiểu Dependency Injection một cách đơn giản như sau:

// Các module không giao tiếp trực tiếp với nhau, mà thông qua interface.
//  Module cấp thấp sẽ implement interface, module cấp cao sẽ gọi module cấp thấp thông qua interface.
// Ví dụ: Để giao tiếp với database, ta có interface IDatabase, các module cấp thấp là XMLDatabase, SQLDatabase.
//  Module cấp cao là CustomerBusiness sẽ chỉ sử dụng interface IDatabase.
// Việc khởi tạo các module cấp thấp sẽ do DI Container thực hiện. 
// Ví dụ: Trong module CustomerBusiness, ta sẽ không khởi tạo IDatabase db = new XMLDatabase(), việc này sẽ do DI Container thực hiện. Module CustomerBusiness sẽ không biết gì về module XMLDatabase hay SQLDatabase.
// Việc Module nào gắn với interface nào sẽ được config trong code hoặc trong file XML.
// DI được dùng để làm giảm sự phụ thuộc giữa các module, dễ dàng hơn trong việc thay đổi module, bảo trì code và testing.