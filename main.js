// Tạo bóng bay liên tục
function createBalloon() {
    const balloonContainer = document.querySelector('.balloon-container');
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.left = `${Math.random() * 100}%`;
    balloon.style.backgroundColor = getRandomColor();
    balloonContainer.appendChild(balloon);

    // Loại bỏ bóng bay sau khi hoàn thành hoạt ảnh
    balloon.addEventListener('animationend', () => {
        balloon.remove();
    });

    // Tạo bóng bay mới sau một khoảng thời gian ngẫu nhiên
    setTimeout(createBalloon, Math.random() * 1000);
}

// Hàm tạo màu ngẫu nhiên cho bóng bay
function getRandomColor() {
    const colors = ['#FF6347', '#FF4500', '#FFD700', '#ADFF2F', '#7CFC00', '#00FA9A', '#00CED1', '#1E90FF', '#FF69B4', '#EE82EE'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Bắt đầu tạo bóng bay khi tải trang
window.onload = createBalloon;

'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function(){
    console.log("button clicked");
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for(let i = 0; i < btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener(('click'),openModal);
}

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
btnsCloseModal.addEventListener(('click'), closeModal);
overlay.addEventListener(('click'),closeModal);

// document.addEventListener('keydown',function(e){
//     console.log(e.key);
// });
document.addEventListener('keydown',function(e){
    console.log(e.key);
    if(e.key === "Escape" && !modal.classList.contains("hidden")){
        closeModal();
    }
});