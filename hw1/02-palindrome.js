function isPalindrome(inputString) {
  // Source: Reverse a string: https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
  const reversedString = inputString.split('').reverse().join('');
  return inputString === reversedString;
}

function resetInput() {
  document.getElementById('input').value = null;
}
function setAnswerText(answerString) {
  document.getElementById('answer').textContent = answerString;
}
function setAnswerPass() {
  document.getElementById('answer').style.color = 'green';
}
function setAnswerFail() {
  document.getElementById('answer').style.color = 'red';
}

function handleInput() {
  document.getElementById('answer').textContent = '';
  if (document.getElementById('input').value !== '') {
    const numberAsString = document.getElementById('input').value;
    const number = Number(numberAsString);
    setAnswerFail();

    if (Number.isNaN(number)) {
      setAnswerText('A valid number is required!');
      resetInput();
    } else if (number < 0) {
      setAnswerText('Negative numbers are not allowed!');
      resetInput();
    } else if (isPalindrome(numberAsString)) {
      setAnswerText('Yes. This is a palindrome!');
      setAnswerPass();
    } else {
      setAnswerText('No, Try again.');
    }
  }
}

function formatDocumentStyles() {
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
