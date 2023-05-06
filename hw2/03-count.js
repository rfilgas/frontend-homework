const originalText = document.getElementById('paragraph').textContent;

function handleInput(e) {
  if (e.target.value.length === 0) {
    document.getElementById('paragraph').textContent = originalText;
    return;
  }
  // target.value is used to access event variables like input.
  const matchText = e.target.value;

  document.getElementById('paragraph').innerHTML = originalText.replace(
    // \\b represents a word boundary. 'i' means ignore case. 'g' means global.
    new RegExp(`\\b(${matchText})\\b`, 'ig'),
    // $& is a variable representing the original text
    // span is used rather than <mark> as it doesn't change spacing.
    '<span style="background-color:yellow;">$&</span>',
  );
}

const input = document.querySelector('input');
// The keydown event was replaced with an input event so that
// the match text would be callable inside of the event before
// the handle input function is called. Otherwise highlighting
// lags a character behind.
input.addEventListener('input', handleInput);

document.getElementById('highlighter-card').style.padding = '25px';
document.getElementById('highlighter-card').overflow = 'auto';
document.getElementById('highlighter-card').style.position = 'relative';
document.getElementById('highlighter-card').style.top = '30px';

// Resources
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
// https://www.gastonsanchez.com/r4strings/boundaries.html
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
