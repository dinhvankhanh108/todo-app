# Todo Application


## Tổng quan


Ứng dụng Todo đầy đủ sử dụng ReactJS và NodeJS, cho phép người dùng quản lý danh sách công việc cần làm.


## Công nghệ sử dụng


### Frontend (Client)
- ReactJS 18 với Vite
- JavaScript (không sử dụng TypeScript)
- React Router DOM để điều hướng
- Axios để gọi API
- @shadcn/ui để tạo giao diện người dùng
- Redux Toolkit để quản lý state


### Backend (Server)
- NodeJS v21
- ExpressJS để xây dựng API
- Sequelize ORM kết nối với MySQL
- Sequelize CLI để tạo model, migration


### Cơ sở dữ liệu
- MySQL 8.0


## Tính năng

- Hiển thị danh sách todo
- Thêm todo mới
- Đánh dấu todo đã hoàn thành
- Chỉnh sửa nội dung todo
- Xóa todo
- Lọc todo theo trạng thái (Tất cả/Đang thực hiện/Đã hoàn thành)


### Yêu cầu hệ thống
- NodeJS v21+
- MySQL 8.0
- npm hoặc yarn


### Cài đặt cơ sở dữ liệu
1. Tạo database MySQL có tên `todo_app`
2. Cập nhật thông tin kết nối database trong file `server/.env` nếu cần
