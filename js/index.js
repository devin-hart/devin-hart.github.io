const siema = new Siema({
  loop: true
});

document.querySelector('.prev').addEventListener('click', () => siema.prev());
document.querySelector('.next').addEventListener('click', () => siema.next());
