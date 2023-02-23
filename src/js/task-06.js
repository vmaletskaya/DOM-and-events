const input = document.querySelector('#validation-input');

input.addEventListener('blur', e => {
  const length = e.target.dataset.length;
  const valueLength = e.target.value.length;

  if (valueLength === +length) {
    e.target.classList.add('valid');
    e.target.classList.remove('invalid');
  } else {
    e.target.classList.add('invalid');
    e.target.classList.remove('valid');
  }
});