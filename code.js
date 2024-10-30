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

let toggle = 0; // Counter to toggle between the images
const fadeDuration = 1000; // Fade duration for animations

const projects = [
    {
        img: "./Projects_img/2.png",
        title: "Smart Street Lighting System using IoT",
        desc: "Our project revolutionizes urban street light management using IoT technology. </br>Key Features: </br> 1. Remote monitoring and control through app/website </br> 2. Energy-efficient adaptive lighting control </br> 3. Real-time sensor data for optimized performance </br> 4. User-friendly interface for easy management </br> 5. Robust security against cyber threats </br> Benefits: </br> 1. Reduced energy waste </br> 2. Enhanced public safety </br> 3. Efficient maintenance </br> 4. Integration with smart city initiatives <br/>"
    },
    {
        img: "./Projects_img/3.png",
        title: "Automated Vein Detection Device",
        desc: "This project enhances healthcare diagnostics by automating vein detection. </br>Key Features: </br> 1. High precision vein detection </br> 2. Non-invasive technology </br> 3. Portable and easy to use </br> 4. Applicable for healthcare professionals </br> Benefits: </br> 1. Easier and safer vein detection </br> 2. Reduced patient discomfort </br> 3. Time-saving for medical staff </br> 4. Ideal for emergency situations <br/>"
    },
    {
        img: "./Projects_img/4.png",
        title: "Smart Grain Dispenser",
        desc: "Our IoT Controlled Grain Dispenser automates the grain dispensing process, allowing users to input the desired weight of grain through an app or manual control. </br>Key Features: </br> 1. IoT technology integration </br> 2. Accurate weight measurement </br> 3. App-controlled or manual operation </br> 4. Efficient dispensing system </br> Benefits: </br> 1. Reduces waste </br> 2. Enhances customer convenience </br> 3. Streamlines grain distribution </br> 4. Improves retailer operational efficiency <br/>"
    },
    {
        img: "./Projects_img/5.png",
        title: "Smart Hydroponics System",
        desc: "This hydroponics system optimizes water usage and plant growth through IoT sensors and automatic nutrient delivery systems. </br>Key Features: </br> 1. IoT sensors for monitoring humidity, temperature, and nutrients </br> 2. Automated nutrient supply based on plant needs </br> 3. Indoor and outdoor farming options </br> Benefits: </br> 1. Improved plant yield </br> 2. Reduced water and resource wastage </br> 3. Scalable for different farming needs <br/>"
    },
    {
        img: "./Projects_img/6.png",
        title: "Face Recognition for Missing Persons",
        desc: "This face recognition system helps locate missing persons using CCTV footage and a custom algorithm to identify people based on a single photo. </br>Key Features: </br> 1. High accuracy face matching algorithm </br> 2. Real-time processing of CCTV footage </br> Benefits: </br> 1. Improved search efficiency </br> 2. Assists law enforcement and rescue operations <br/>"
    },
    {
        img: "./Projects_img/7.png",
        title: "Smart Exoskeleton",
        desc: "A wearable exoskeleton integrated with sensors to assist individuals with mobility challenges. </br>Key Features: </br> 1. Real-time motion detection </br> 2. Torque control for knee support </br> Benefits: </br> 1. Reduces falls </br> 2. Enhances mobility and independence <br/>"
    },
    {
        img: "./Projects_img/8.png",
        title: "Tutti Qui",
        desc: "A modern digital solution for improving customer experience in the hospitality industry. </br>Key Features: </br> 1. Seamless integration with existing services </br> 2. Real-time customer feedback </br> Benefits: </br> 1. Enhanced user experience </br> 2. Increased customer satisfaction <br/>"
    },
    {
        img: "./Projects_img/9.png",
        title: "Vedagri Farmers",
        desc: "An app for empowering farmers with IoT solutions for better crop management and yield optimization. </br>Key Features: </br> 1. IoT-powered crop monitoring </br> 2. Soil health tracking </br> Benefits: </br> 1. Improved crop yield </br> 2. Reduced wastage <br/>"
    },
    {
        img: "./Projects_img/10.png",
        title: "UI/UX Design Portfolio",
        desc: "A portfolio of advanced UI/UX designs demonstrating high-quality user experience for web and mobile platforms. </br>Key Features: </br> 1. Interactive and intuitive designs </br> Benefits: </br> 1. Enhanced user engagement </br> 2. Improved brand visibility <br/>"
    },
    {
        img: "./Projects_img/1.png",
        title: "Oxygen Concentrator",
        desc: "In response to the urgent need for medical oxygen during the COVID-19 pandemic, our team developed an innovative, cost-effective oxygen concentrator. This project aimed to address the rising demand for oxygen therapy among individuals experiencing severe respiratory symptoms associated with the virus. <br><br>The successful execution of this project was made possible through the collaboration of a dedicated team from Adi Shankara Institute of Engineering and Technology, Kalady, including: <br> <b>Prof. R Rajaram</b> (Dean Projects & Consultancy at ASIET,Kalady), <b>Anuroop K B </b>(Assistant Professor Assistant Professor, ASIET) <b>Gokul Krishnan Sreekumar, Anna Mary Jose,  Ashly Shibu, Devika Menon, Sangeetha Prasad.</b>"
    }
   
];

// Helper function for fadeOut with a promise
function fadeOut(element, duration) {
    return new Promise(resolve => {
        $(element).fadeOut(duration, resolve);
    });
}

// Helper function for fadeIn with a promise
function fadeIn(element, duration) {
    return new Promise(resolve => {
        $(element).fadeIn(duration, resolve);
    });
}

// Function to handle the next button click
async function handleNextButtonClick() {
    console.log("Current Toggle Value (Before):", toggle);

    // Disable the button to prevent multiple clicks
    const nextButton = document.querySelector(".next_butt_right_project");
    nextButton.disabled = true;

    // Select content elements
    const projectImage = document.querySelector(".project_contet_imge");
    const projectTitle = document.querySelector(".project_contet_h3");
    const projectDesc = document.querySelector(".project_contet_parp");

    // Fade out content
    await fadeOut(".project_contet_imge, .project_contet_h3, .project_contet_parp", fadeDuration);

    // Update the content based on the current toggle value
    projectImage.src = projects[toggle].img;
    projectTitle.textContent = projects[toggle].title;
    projectDesc.innerHTML = projects[toggle].desc;

    // Increment the toggle and wrap around if the end is reached
    toggle = (toggle + 1) % projects.length;
    console.log("Updated Toggle Value (After):", toggle);

    // Fade in the content and re-enable the button after the animation
    await fadeIn(".project_contet_imge, .project_contet_h3, .project_contet_parp", fadeDuration);
    nextButton.disabled = false;
}

// Attach the click event handler
document.querySelector(".next_butt_right_project").addEventListener("click", handleNextButtonClick);


// previous button
// Function to handle the next button click
async function handleNextButtonClick2() {
    console.log("Current Toggle Value (Before):", toggle);

    // Disable the button to prevent multiple clicks
    const previousButton = document.querySelector(".next_butt_right_project");
    previousButton.disabled = true;

    // Select content elements
    const projectImage = document.querySelector(".project_contet_imge");
    const projectTitle = document.querySelector(".project_contet_h3");
    const projectDesc = document.querySelector(".project_contet_parp");

    // Fade out content
    await fadeOut(".project_contet_imge, .project_contet_h3, .project_contet_parp", fadeDuration);

    if (toggle===-1){
         // Update the content based on the current toggle value
        projectImage.src = projects[toggle-1].img;
        projectTitle.textContent = projects[toggle-1].title;
        projectDesc.innerHTML = projects[toggle-1].desc;
    }

    // Update the content based on the current toggle value
    projectImage.src = projects[toggle-1].img;
    projectTitle.textContent = projects[toggle-1].title;
    projectDesc.innerHTML = projects[toggle-1].desc;

    // Increment the toggle and wrap around if the end is reached
    toggle = (toggle - 1) % projects.length;
    console.log("Updated Toggle Value (After):", toggle);

    // Fade in the content and re-enable the button after the animation
    await fadeIn(".project_contet_imge, .project_contet_h3, .project_contet_parp", fadeDuration);
    nextButton.disabled = false;
}

// Attach the click event handler
document.querySelector(".next_butt_left_project").addEventListener("click", handleNextButtonClick2);


// mobile phone and tablet 
$('.menu_img_div').on('click', function() {
    $('.nav_join_side').addClass('active');
});

$('.back_button').on('click', function() {
    $('.nav_join_side').removeClass('active');
});

document.querySelector('.AboutBtt1').addEventListener('click', () => {
    document.querySelector('.About_me_content').scrollIntoView({
        behavior: 'smooth'
    });
    // Close the side menu by removing the 'active' class
    document.querySelector('.nav_join_side').classList.remove('active');
});
// home page 
document.querySelector('.home_side_butt').addEventListener('click', () => {
    document.querySelector('.Nav_bar').scrollIntoView({
        behavior: 'smooth'
    });
    // Close the side menu by removing the 'active' class
    document.querySelector('.nav_join_side').classList.remove('active');
});
// certificates section
document.querySelector(".certificate_side_butt").addEventListener('click',()=> {
    document.querySelector(".Certificate_section").scrollIntoView({
        behavior: "smooth"
    });
    document.querySelector(".projects").classList.remove("active");
});

// project section
document.querySelector(".my_project_side_butt").addEventListener("click",()=>{
    document.querySelector(".projects").scrollIntoView({
        behavior:"smooth"
    });
    document.querySelector(".nav_join_side").classList.remove("active");

});

// contacts 
document.querySelector(".contact_side_butt").addEventListener("click",()=>{
    document.querySelector(".Contact_me").scrollIntoView({
        behavior:"smooth"
    });
    document.querySelector(".nav_join_side").classList.remove("active");

});