document.getElementById('form-container').style.padding = '15px';
document.getElementById('form-container').overflow = 'auto';
document.getElementById('form-container').style.position = 'relative';
document.getElementById('form-container').style.top = '30px';

function logSubmit(event) {
  console.log('Full Name:', document.getElementById('input-full-name').value);
  console.log('Email:', document.getElementById('input-email').value);
  console.log('Registration Status:', document.getElementById('registration-status').value);
  console.log('Programming Languages:', document.getElementById('programming-language-check').checked);
  console.log('Operating Systems:', document.getElementById('operating-systems-check').checked);
  console.log('Full Stack:', document.getElementById('full-stack-check').checked);
  console.log('Anything Else:', document.getElementById('anything-else-box').value);
  document.getElementById('form').reset();
  event.preventDefault();
}

const form = document.getElementById('form');
form.addEventListener('submit', logSubmit);
