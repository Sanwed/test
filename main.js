const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  console.log('Кнопка нажата');
});

function f() {
  return 1 + 2 + 3;
}

console.log(f())
