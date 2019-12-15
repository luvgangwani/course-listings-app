import React from 'react';
import ReactDOM from 'react-dom';
import Single from './Single';

const item = {
  "id": 1,
  "title": "Building an App with ReactJS and MeteorJS",
  "category": "react",
  "description": "Meteor and React are a powerhouse combination. Meteor gives you a fast, easy-to-use solution for data management across clients and servers, and React gives you a way to structure your app's UI from reusable components. The combination allows you to create your dream apps: dynamic, data driven, and cross-platform.",
  "link": "https://www.lynda.com/React-js-tutorials/Building-App-React-js-MeteorJS/533228-2.html",
  "release_date": "12/21/2016",
  "views": "31,266",
  "image": "https://cdn.lynda.com/course/533228/533228-636179098122239600-16x9.jpg"
};

describe('Single test', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Single item={ item } />, div);
      });
})
