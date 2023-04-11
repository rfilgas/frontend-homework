function isPalindrome(inputString) {
  // Source: Reverse a string: https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
  const reversedString = inputString.split('').reverse().join('');
  return inputString === reversedString;
}

function handleInput() {
  document.getElementById('answer').textContent = '';
  if (document.getElementById('input').value !== '') {
    const numberAsString = document.getElementById('input').value;
    const number = Number(numberAsString);
    document.getElementById('answer').style.color = 'red'; // fail by default

    if (Number.isNaN(number)) {
      document.getElementById('answer').textContent = 'A valid number is required!';
      document.getElementById('input').value = null;
    } else if (number < 0) {
      document.getElementById('answer').textContent = 'Negative numbers are not allowed!';
      document.getElementById('input').value = null;
    } else if (isPalindrome(numberAsString)) {
      document.getElementById('answer').textContent = 'Yes. This is a palindrome!';
      document.getElementById('answer').style.color = 'green';
    } else {
      document.getElementById('answer').textContent = 'No, Try again.';
    }
  }
}

function formatDocumentStyles() {
  document.body.style.backgroundColor = 'blue';
  document.getElementById('palindrome-card').style.backgroundColor = 'white';
  document.getElementById('palindrome-card').style.padding = '25px';
  document.getElementById('palindrome-card').overflow = 'auto';
  document.getElementById('palindrome-card').style.position = 'relative';
  document.getElementById('palindrome-card').style.top = '30px';
  document.getElementById('is-palindrome').style.paddingTop = '25px';
  document.getElementById('input').style.minWidth = '100px';
  document.getElementById('input').style.display = 'flex';
}

formatDocumentStyles();
const elem = document.querySelector('input');
elem.addEventListener('input', handleInput);
