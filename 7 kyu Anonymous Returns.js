// https://www.codewars.com/kata/53d628de83db278fb1000710

name = 'The Window';

var alpha = {
  name: 'My Alpha',
  getNameFunc: function () {
    return function () {
      return this.name;
    }.bind(this);
  },
};
