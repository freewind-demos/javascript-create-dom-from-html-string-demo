const htmlCode = `
<h1>Hello</h1>
`;

function createDom(htmlCode) {
  const div = document.createElement('div');
  div.innerHTML = htmlCode.trim(); // important!
  const dom = div.firstChild;
  div.remove();
  return dom;
}

const dom = createDom(htmlCode);
console.log(dom);

document.getElementById('main').appendChild(dom);
