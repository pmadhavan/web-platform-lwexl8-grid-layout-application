// helper function
function createStyledElementWithText(element, options) {
  const { text, className } = options;
  const ele = document.createElement(element);
  ele.className = className;
  ele.textContent = text;
  return ele;
}

const renderCalendar = () => {
  const ROWS = 5;
  const COLS = 7;
  const calendarEle = document.getElementById('calendar');
  for (let i = 0; i < ROWS * COLS; i++) {
    const boxEle = createStyledElementWithText('div', { className: 'box' });
    calendarEle.appendChild(boxEle);
  }
};
renderCalendar();
