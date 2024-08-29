 // JavaScript để xử lý sự kiện nhấp chuột
 document.getElementById("nvt").onclick = function(event) {
    event.preventDefault();
    document.getElementById("b23").classList.toggle("show");
};

// Đóng menu nếu người dùng nhấp ra ngoài nó
window.onclick = function(event) {
    if (!event.target.matches('#nvt')) {
        var dropdowns = document.getElementsByClassName("dropdown-menu");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}







const items = document.querySelectorAll('.slides-container li');
let currentIndex = 0;

function showNextItem() {
    items.forEach((item, index) => {
        item.style.opacity = index === currentIndex ? 1 : 0;
    });

    currentIndex = (currentIndex + 1) % items.length;
}

setInterval(showNextItem, 3000);
showNextItem();




document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
        type: 'loop',
        perPage: 3,
        autoplay: true,
    });

    splide.mount();
});















document.addEventListener('DOMContentLoaded', function() {
    const maskIcons = document.querySelectorAll('.mask-icon a');

    maskIcons.forEach(icon => {
        icon.addEventListener('click', function(event) {
            // Ví dụ xử lý khi click vào các biểu tượng
            event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
            alert('Icon clicked: ' + event.target.getAttribute('title'));
        });
    });
});










