import _ from 'lodash';
import printMe from './print';

function component() {
  let element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = '点击这里，然后查看 console！';
  btn.onclick = printMe;

  element.append(btn);

  return element;
}

document.body.appendChild(component());