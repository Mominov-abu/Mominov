// JS animatsiya uchun – floating mouse effect
const circles = document.querySelectorAll(".circle");

document.addEventListener("mousemove", (e)=>{
    circles.forEach((circle, i)=>{
        const speed = (i+1)*0.05;
        const x = e.clientX * speed;
        const y = e.clientY * speed;
        circle.style.transform = `translate(${x}px, ${y}px)`;
    });
});