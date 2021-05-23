const container = document.querySelector('.container');
const card = document.querySelector('.card');
// items
const title = document.querySelector('.title');
const sneakers = document.querySelector('.sneakers img');
const description = document.querySelector('.info h4');
const sizes = document.querySelector('.sizes');
const purchase = document.querySelector('.purchase');

container.addEventListener('mousemove',e=>{
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
});

// animate in 
container.addEventListener('mouseenter', e=>{
    card.style.transition = 'none';
    // popups
    title.style.transform = `translateZ(120px)`;
    sneakers.style.transform = `translateZ(120px) rotateX(-45deg)`;
    description.style.transform = `translateZ(120px)`;
    sizes.style.transform = `translateZ(120px)`;
    purchase.style.transform = `translateZ(120px)`;
})
// animate out
container.addEventListener('mouseleave', e=>{
    card.style.transition = 'all 0.3s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
      // popups
      title.style.transform = `translateZ(0px)`;
      sneakers.style.transform = `translateZ(0px) rotateX(0deg)`;
      description.style.transform = `translateZ(0px)`;
      sizes.style.transform = `translateZ(0px)`;
      purchase.style.transform = `translateZ(0px)`;
})