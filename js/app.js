// const video1 = document.getElementById('s1')
//         const camcontrol = document.getElementById('video-control')
//         const audiocontrol = document.getElementById('audio-control')
//         const screenControl = document.getElementById('screen-share')
//         const video2 = document.getElementById('s2')
//         const chat_hide = document.getElementById('chat-hide')
//         let chat_corner = document.getElementById('chat-corners')
//         let message_btn = document.getElementById('message')



//         // Video Cam Play 
//         let camStream;
//         let screenStream;

//         const shareCam = () => {

//             navigator.mediaDevices.getUserMedia({
//                 video : true,
//                 audio : true
//             })
//             .then( stream => {
//                 camStream = stream
//                 video1.srcObject = stream
//             })
//         }

//         shareCam()
//         // Share Screen
        
//         const ShareScreen = () => {

//             navigator.mediaDevices.getDisplayMedia({
//                 video : true,
//                 audio : true
//             })
//             .then( stream => {
//                 screenStream = stream
//                 video1.srcObject = stream
//                 video2.srcObject = camStream
//             })
//         }



//         // video camera
//         let camVideoStatus = false
//         camcontrol.onclick = (e) => {
//             camVideoStatus = !camVideoStatus
//             camStream.getVideoTracks()[0].enabled = camVideoStatus;
//             camcontrol.classList.toggle('active')

//         }

//         // video camera
//         let camAudioStatus = true
//         audiocontrol.onclick = (e) => {
//             camAudioStatus = !camAudioStatus
//             camStream.getAudioTracks()[0].enabled = camAudioStatus
//             audiocontrol.classList.toggle('active')

//         }

//         // Share Screen PC
//         let screenShareStatus = false
//         screenControl.onclick = (e) => {
//             screenShareStatus = !screenShareStatus
//             if (screenShareStatus == true) {
//                 ShareScreen()

//             }else{
//                 screenStream.getVideoTracks()[0].enabled = false

//             }

//             screenControl.classList.toggle('active')


//         }


//        // Enable message Corner
//         message_btn.addEventListener('click', function messageHandleClick(e) {
//             message_btn.setAttribute('disabled', '');
//             chat_corner.classList.remove('corder-hide');
//             message_btn.classList.add('active')


//         })
//         chat_hide.addEventListener('click', function handleClick(event) {
            
//             chat_corner.classList.add('corder-hide')
//             message_btn.classList.remove('active')
//             message_btn.removeAttribute('disabled');

//         })