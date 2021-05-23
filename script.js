const container = document.querySelector('.container');
const card = document.querySelector('.card');

container.addEventListener('mousemove',e=>{
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
})

// animate in 
container.addEventListener('mouseenter', e=>{
    card.style.transition = 'none';
})
// animate out
container.addEventListener('mouseleave', e=>{
    card.style.transition = 'all 0.3s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
})