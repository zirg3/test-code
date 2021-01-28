export default () => {
  const all = document.querySelector('#all');
  const gender = document.querySelector('#gender');
  const age = document.querySelector('#age');
  const recordFilter = document.querySelector('.book-records__filter-category');

  if (!recordFilter) return;

  function filterBtn() {
    all.addEventListener('click', (e) => {
      e.target.classList.add('book-records__active');
      [
        ...gender.querySelectorAll('.book-records__active'),
        ...age.querySelectorAll('.book-records__active'),
      ].forEach(n => n.classList.remove('book-records__active'));
    });

    gender.addEventListener('click', function add(e) {
      if (e.target.tagName === 'BUTTON') {
        this.querySelectorAll('button').forEach((n) => {
          n.classList.toggle('book-records__active', n === e.target);
        });
        all.classList.remove('book-records__active');
      }
    });

    age.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
        e.target.classList.toggle('book-records__active');
        all.classList.remove('book-records__active');
      }
    });
  }

  filterBtn();
};
export default () => {
  const regionalHeadquarters = document.querySelector('.headquarters');

  if (!regionalHeadquarters) {
    return;
  }
  function onOpenButtonClick(e) {
    const { target } = e;
    const item = target.closest('.headquarters__region');

    if (item) {
      const elemThis = item;

      if (!elemThis.classList.contains('headquarters__svg-open')) {
        elemThis.classList.add('headquarters__svg-open');
      } else {
        elemThis.classList.remove('headquarters__svg-open');
      }
    }

    if (item) {
      const parentItem = item.nextElementSibling;

      if (!parentItem.classList.contains('headquarters__open')) {
        parentItem.classList.add('headquarters__open');
        parentItem.style.maxHeight = `${parentItem.scrollHeight}px`;
      } else {
        parentItem.classList.remove('headquarters__open');
        parentItem.style.maxHeight = null;
      }
    }
  }

  regionalHeadquarters.addEventListener('click', onOpenButtonClick);
};