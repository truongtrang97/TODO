- Phân tích todo:
- hành động: điền input tự thêm
- bấm vào check sẽ tự check all hay bỏ check
- item left hiển thị số lượng check
- đoạn (all, action, compelete) : filter đoạn hiển thị 
- clear compelete : xoá những phần compelete
- hover vào từng phần có icon x (x xoá dk item)
- note những template <read comment để hỉu>
+ edit:
- dup click chuột : -> class: edit 
- khi không có item nào check thì clear compelete ẩn đi 

+ Các bước cần làm:
- Thiết lập store lưu dữ liệu cho nó
- xây dựng chức năng render (render ra từ store)
- xây dựng các chức năng thêm sửa xoá


+ phần mềm trug gian :
- nằm giữa reducer khi dispatch action => trả ra trạng thái trước dispatch và sau dispatch


- Phải có connect mới lấy được dữ liệu từ storage

- note 1 số...
- input , label ?? input lồi hiển thi label --> todolist
- todos.forEach((todo)=>todo.completed=completed) khác todo.completed==completed) ntn ? viết cái ni k toggle all được 