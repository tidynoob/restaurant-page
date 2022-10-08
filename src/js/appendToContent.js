var fp = require('lodash/fp');

const div = document.getElementById('content');
const appendToContent = fp.bind(div.appendChild)(div);

export default appendToContent;