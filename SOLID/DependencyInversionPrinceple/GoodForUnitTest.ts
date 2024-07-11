// Dependency Injection (DI) là một kỹ thuật thiết kế phần mềm trong đó các phụ thuộc (dependencies) của một đối tượng được cung cấp từ bên ngoài, thay vì được tạo ra bên trong đối tượng đó. DI giúp cải thiện tính linh hoạt và khả năng kiểm tra của mã nguồn. Dưới đây là cách DI giúp chúng ta trong việc viết test:

// 1. Tách biệt phụ thuộc và đối tượng
// Khi sử dụng DI, các phụ thuộc của một đối tượng được tách biệt ra và được cung cấp từ bên ngoài, thông qua constructor, setter hoặc interface. Điều này giúp các đối tượng không phụ thuộc trực tiếp vào các phụ thuộc cụ thể, mà vào các interface hoặc abstract class.

// IMPORTANT
// 2. Dễ dàng mock và stub các phụ thuộc
// Trong quá trình viết test, chúng ta thường không muốn sử dụng các phụ thuộc thực sự (như database, API bên ngoài, hoặc các dịch vụ khác) vì chúng có thể làm cho test chậm và không ổn định. Thay vào đó, chúng ta có thể dễ dàng thay thế các phụ thuộc này bằng các mock hoặc stub.
// import { UserService } from './UserService';
// import { UserRepository } from './UserRepository';

// describe('UserService', () => {
//     it('should get user', () => {
//         // Tạo mock UserRepository
//         const mockUserRepository = {
//             getUser: jest.fn().mockReturnValue({ id: 1, name: 'John Doe' })
//         };

//         // Inject mock vào UserService
//         const userService = new UserService(mockUserRepository as unknown as UserRepository);

//         // Kiểm tra hành vi của UserService
//         const user = userService.getUser(1);
//         expect(user).toEqual({ id: 1, name: 'John Doe' });
//         expect(mockUserRepository.getUser).toHaveBeenCalledWith(1);
//     });
// });









// 3. Tăng khả năng kiểm tra độc lập
// DI cho phép kiểm tra từng phần của hệ thống một cách độc lập, bởi vì các phụ thuộc được tiêm vào có thể dễ dàng thay thế bằng các mock hoặc stub, cho phép kiểm tra hành vi của đối tượng mà không cần phụ thuộc vào trạng thái của các phụ thuộc bên ngoài.

// 4. Giảm thiểu mã test phức tạp
// Khi sử dụng DI, mã test trở nên đơn giản hơn bởi vì không cần phải thiết lập các phụ thuộc phức tạp. Thay vào đó, bạn chỉ cần cung cấp các mock hoặc stub cho đối tượng đang được kiểm tra.