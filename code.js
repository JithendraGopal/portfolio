// certificate animation down
// Certificate data
const certificates = [
    { img: './Cerificates/1.jpg', title: 'Google Cloud Platform Big Data and Machine Learning Fundamentals' },
    { img: './Cerificates/2.jpg', title: 'Introduction to Artificial Intelligence (AI)' },
    { img: './Cerificates/3.jpg', title: 'Programming for Everybody (Getting Started with Python)' },
    { img: './Cerificates/4.jpg', title: 'VR and 360 Video Production' },
    { img: './Cerificates/5.jpg', title: 'Industrial IoT on Google Cloud Platform' },
    { img: './Cerificates/6.jpg', title: 'Python for Beginners by IIT (Kottayam)' },
    { img: './Cerificates/7.jpg', title: 'Problem Solving through Programming in C' },
    { img: './Cerificates/8.jpg', title: '30 Days of Google Cloud program' },
    { img: './Cerificates/9.jpg', title: 'Departmental Workshop of YIP 5.0' },
    { img: './Cerificates/10.jpg', title: 'Artificial Intelligence & Machine Learning Workshop ' },
    { img: './Cerificates/11.jpg', title: 'Industry 4.0 & IoT' }
];

// Current visible certificates index
let currentIndex = 0;

// Function to update certificates
function updateCertificates(direction) {
    const maxIndex = certificates.length - 1;

    // Update currentIndex based on direction
    if (direction === 'next') {
        currentIndex = (currentIndex + 3) > maxIndex ? 0 : currentIndex + 3;
    } else if (direction === 'prev') {
        currentIndex = (currentIndex - 3) < 0 ? maxIndex - 2 : currentIndex - 3;
    }

    // Update images and titles
    document.getElementById('certificateImage1').src = certificates[currentIndex].img;
    document.getElementById('certificateTitle1').innerText = certificates[currentIndex].title;

    document.getElementById('certificateImage2').src = certificates[currentIndex + 1].img;
    document.getElementById('certificateTitle2').innerText = certificates[currentIndex + 1].title;

    document.getElementById('certificateImage3').src = certificates[currentIndex + 2].img;
    document.getElementById('certificateTitle3').innerText = certificates[currentIndex + 2].title;

    // Animate certificates transition
    animateCertificates();
}

// Add click events for next and previous buttons
document.querySelector('.next_butt_right').addEventListener('click', () => updateCertificates('next'));
document.querySelector('.next_butt_left').addEventListener('click', () => updateCertificates('prev'));

// Function to add animation class
function animateCertificates() {
    const certDivs = document.querySelectorAll('.certificate_div');
    certDivs.forEach(div => {
        div.classList.add('fade');
        setTimeout(() => div.classList.remove('fade'), 500);
    });
}




// navbar code

// Use querySelector for a single element
document.querySelector('.AboutmeBtt').addEventListener('click', () => {
    document.querySelector('.About_me_content').scrollIntoView({
        behavior: 'smooth'
    });
});


document.querySelector('.CertificateBtt').addEventListener('click',()=> {
    document.querySelector('.Certificate_section').scrollIntoView({
        behavior:'smooth'
    });
});

document.querySelector('.ProjectssBtt').addEventListener('click',()=>{
    document.querySelector('.projects').scrollIntoView({
        behavior:"smooth"
    });
});

document.querySelector(".ContactsBtt").addEventListener("click",()=>{
    document.querySelector(".Contact_me").scrollIntoView({
        behavior:"smooth"
    });
});
document.querySelector(".whatsapp_div").addEventListener("click",()=>{
    window.open('https://wa.me/+917306520432', '_blank');
});
document.querySelector(".mail_div").addEventListener("click",()=>{
    window.open("mailto:jjithendragopal.com","_blank");
});
document.querySelector(".phoneNumber_div").addEventListener("click",()=>{
    window.open("tel:+917306520432");
});
document.querySelector(".LinkedIn_div").addEventListener("click",()=>{
    window.open("https://www.linkedin.com/in/j-jithendra-gopal-00527918b/","_blank");
});
// footer seection
document.querySelector(".Footer_Logo").addEventListener("click",()=>{
    document.querySelector(".Nav_bar").scrollIntoView({
        behavior:"smooth"
    });
});
document.querySelector(".Fotter_text_jithendra").addEventListener("click",()=>{
    document.querySelector(".Nav_bar").scrollIntoView({
        behavior:"smooth"
    });
});
document.querySelector(".Link_About").addEventListener("click",()=>{
    document.querySelector(".About_me_content").scrollIntoView({
        behavior:"smooth"
    });
});
document.querySelector(".Link_Certificates").addEventListener("click",()=>{
    document.querySelector(".Certificate_section").scrollIntoView({
        behavior:"smooth"
    });
});
document.querySelector(".Link_My_Project").addEventListener("click",()=>{
    document.querySelector(".projects").scrollIntoView({
        behavior:"smooth"
    });
});
document.querySelector(".Link_Contact_me").addEventListener("click",()=>{
    document.querySelector(".Contact_me").scrollIntoView({
        behavior:"smooth"
    });
});

// follow me buttons 


document.querySelector(".facebook").addEventListener("click",()=>{
    window.open("https://www.facebook.com/profile.php?id=100008322553897","_blank");
});

document.querySelector(".Instagram").addEventListener("click",()=>{
    window.open("https://www.instagram.com/jithendra_gopal/profilecard/?igsh=MXQ1bmlwc3VtM2d3","_blank");
});

document.querySelector(".LinkedIn_icon").addEventListener("click",()=>{
    window.open("https://www.linkedin.com/in/j-jithendra-gopal-00527918b/","_blank");
});

// h1 animation wave
const waveTextElements = document.querySelectorAll('.MainH1');
const duration = 3000; // Set the animation duration to 20000 ms (20 seconds)

function animateGradient() {
    waveTextElements.forEach((h1, index) => {
        // Create a dynamic angle based on time and index
        const angle = (index * 60 + (Date.now() / duration) * 360) % 360; // Adjust for smoother animation
        h1.style.backgroundImage = `linear-gradient(${angle}deg, #509DD6, #4935C2)`;
    });
    requestAnimationFrame(animateGradient); // Repeat the animation

    
}

animateGradient(); // Start the animation
// tow arrow click to about me 
document.querySelector(".downArrow").addEventListener("click",()=>{
    document.querySelector(".About_me_content").scrollIntoView({
        behavior:"smooth"
    })
});
// project section


