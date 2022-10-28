const screen1 = document.getElementById('screen-01')
const video1 = document.getElementById('s1')
const screen2 = document.getElementById('screen-02')
const video2 = document.getElementById('s2')
const chat_hide = document.getElementById('chat-hide')
let chat_corner = document.getElementById('chat-corners')
let message_btn = document.getElementById('message')


message_btn.addEventListener('click', function messageHandleClick(e) {
    message_btn.setAttribute('disabled', '');
    chat_corner.classList.remove('corder-hide');
    message_btn.classList.add('active')


})
chat_hide.addEventListener('click', function handleClick(event) {
    
    chat_corner.classList.add('corder-hide')
    message_btn.classList.remove('active')
    message_btn.removeAttribute('disabled');

})