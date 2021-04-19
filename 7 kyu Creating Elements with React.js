// https://www.codewars.com/kata/55aac03755b0264947000138
var React = require('react');

const createElement = (content, tag, props) => React.createElement(tag || 'div', props, content);

const createUnorderedList = (list) =>
  React.createElement(
    'ul',
    null,
    list.map((el, id) => React.createElement('li', { key: id }, el))
  );
