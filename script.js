const capitalise = (word) => word.charAt(0).toUpperCase() + word.slice(1);

const createCopyButton = (content) => {
  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.innerHTML = `Copy`;
  button.addEventListener('click', () =>
    window.navigator.clipboard.writeText(content),
  );
  return button;
};

const createParamBlock = ([name, value]) => {
  const block = document.createElement('article');
  block.innerHTML += `<header><h2>${capitalise(name)}</h2></header>`;
  block.innerHTML += `<div class="param-value">${value}</div>`;
  block.appendChild(createCopyButton(value));

  return block;
};

const copyContentToDialog = () => {
  const article = document.querySelector('#output article');
  const closeButton = document.createElement('button');
  closeButton.setAttribute('type', 'button');
  closeButton.innerHTML = `Close`;
  closeButton.addEventListener('click', () => dialog.close());

  article.appendChild(closeButton);

  const dialog = document.createElement('dialog');
  dialog.appendChild(article);

  document.addEventListener('keypress', (e) => {
    if (e.key === '?') {
      dialog.showModal();
    }
    if (e.key === 'Escape') {
      dialog.close();
    }
  });

  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) {
      dialog.close();
    }
  });

  document.querySelector('body').insertAdjacentElement('beforeend', dialog);
};

(() => {
  const output = document.getElementById('output');
  if (window.location.search) {
    copyContentToDialog();
    const params = new URLSearchParams(window.location.search);
    output.innerText = '';
    for (const param of params.entries()) {
      output.appendChild(createParamBlock(param));
    }
  }
})();
