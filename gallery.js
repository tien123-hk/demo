 // Lấy tất cả nút và danh sách cây
 const filterButtons = document.querySelectorAll('.active');
 const plants = document.querySelectorAll('.sanpham');

 // Hàm lọc cây
 function filterPlants(type) {
    plants.forEach(sanpham => {
        const plantType = sanpham.getAttribute('data-type');

        // Hiển thị hoặc ẩn các cây dựa trên loại được chọn
        if (type === 'all' || type === plantType) {
            sanpham.classList.remove('hidden');
        } else {
            sanpham.classList.add('hidden');
        }
    });
     // Cập nhật nút đang được chọn
     filterButtons.forEach(button => {
         button.classList.remove('active');
         if (button.getAttribute('data-type') === type) {
             button.classList.add('active');
         }
     });
 }

 // Gán sự kiện cho mỗi nút
 filterButtons.forEach(button => {
     button.addEventListener('click', function() {
         const selectedType = this.getAttribute('data-type');
         filterPlants(selectedType);
     });
 });

 // Khởi tạo với tất cả cây được hiển thị
 filterPlants('all');