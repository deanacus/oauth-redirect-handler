const capitalise = (word) => word.charAt(0).toUpperCase() + word.slice(1);

const createCopyButton = (content) => {
  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.innerHTML = `<svg><use xlink:href="#copy-icon" /></svg>`;
  button.addEventListener('click', () =>
    window.navigator.clipboard.writeText(content),
  );
  return button;
};

const createParamBlock = ([name, value]) => {
  const block = document.createElement('article');
  // header
  block.innerHTML += `<header><h2>${capitalise(name)}</h2></header>`;
  // content
  block.innerHTML += `<div class="param-value">${value}</div>`;
  // copy button
  block.appendChild(createCopyButton(value));

  return block;
};

if (window.location.search) {
  const params = new URLSearchParams(window.location.search);
  const outputEl = document.getElementById('output');
  outputEl.innerText = '';
  for (const param of params.entries()) {
    outputEl.appendChild(createParamBlock(param));
  }
}
