const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.classList.add('active');
    }
  });
});

const modal = document.getElementById('modal');
const payBtns = document.querySelectorAll('.pay-btn');

payBtns.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    modal.classList.add('active');
  });
});

function closeModal(){
  modal.classList.remove('active');
}

const countdownElement = document.getElementById('countdown');
const endDate = new Date();
endDate.setDate(endDate.getDate() + 3);

function updateCountdown(){
  const now = new Date();
  const diff = endDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownElement.innerHTML = 
    `${days}д ${hours}ч ${minutes}м ${seconds}с`;

  if(diff <= 0){
    countdownElement.innerHTML = "Предложение завершено";
  }
}

setInterval(updateCountdown,1000);


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});
