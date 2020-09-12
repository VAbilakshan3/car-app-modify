import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
// import {Router, Route} from 'react-router';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Main from './common/main.component.jsx'
import Home from './common/home.component.jsx'
import About from './common/about.component.jsx'
import Car from './car/car.component.jsx'
import CarDetail from './car/car-detail.component.jsx'

const data = [
    {
        id: 1,
        name: 'HTML Course',
        Course: 'Html',
        Hours: '300',
        media: 'https://catalin.red/dist/uploads/2011/01/css3-html5-logo-initial.png',
        Description: 'HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web pages appearance or presentation (CSS) or functionality behavior JavaScript Hypertext refers to links that connect web pages to one another, either within a single website or between websites. Links are a fundamental aspect of the Web. By uploading content to the Internet and linking it to pages created by other people, you become an active participant in the World Wide Web.',
        Link: <a target="_blank" href="https://www.w3schools.com/html/default.asp">"https://www.w3schools.com/html/default.asp"</a>
    },
    {
        id: 2,
        name: 'CSS Course ',
        Course: 'CSS',
        Hours: '300',
        media: 'https://cdn.freebiesupply.com/logos/thumbs/2x/css3-logo.png',
        Description: 'CSS stands for Cascading Style Sheets. CSS describes how HTML elements are to be displayed on screen, paper, or in other media. CSS saves a lot of work. It can control the layout of multiple web pages all at once. External stylesheets are stored in CSS files.',
        Link: <a target="_blank" href="https://www.w3schools.com/css/default.asp">"https://www.w3schools.com/css/default.asp"</a>

    },{
        id: 3,
        name: 'JavaScript Course',
        Course: 'JavaScript',
        Hours: '400',
        media: 'data:image/png;base64,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',
        Description: 'JavaScript was initially created to make web pages alive.The programs in this language are called scripts. They can be written right in a web page’s HTML and run automatically as the page loads.Scripts are provided and executed as plain text. They don’t need special preparation or compilation to run.In this aspect, JavaScript is very different from another language called Java.',
        Link: <a target="_blank" href="https://www.w3schools.com/js/default.asp">"https://www.w3schools.com/js/default.asp"</a>


    },
    {
            id: 4,
            name: 'ReactJS Course',
            Course: 'ReactJS',
            Hours: '200',
            media: 'data:image/png;base64,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',
            Description: "React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components.",
            Link: <a target="_blank" href="https://www.w3schools.com/react/default.asp">"https://www.w3schools.com/react/default.asp"</a>

        
        
    },
    {
        id: 5,
        name: 'NodeJS Course', 
        Course: 'NodeJS',
        Hours: '100',
        media: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png',
        Description: "Node. js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node. js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.",
        Link: <a target="_blank" href="https://www.w3schools.com/nodejs/default.asp">"https://www.w3schools.com/nodejs/default.asp"</a>


    },
];


render(
    <Router history={browserHistory}>
        <Route component={Main}>
            <Route path="/" component={Home}/>
            <Route path="/cars" component={Car} data={data}/>
            {/* Parameter route*/}
            <Route path="/cars/:id" component={CarDetail} data={data}/>
            <Route path="/about" component={About}/>
        </Route>
    </Router>,
    document.getElementById('container')
);





// render(
//     <Router history={browserHistory}>
//     <Router>
//         <Route path="/" component={Home}/>
//         <Route path="/cars" component={Car}/>
//         <Route path="/about" component={About}/>
//     </Router>
//     </Router>,
//     document.getElementById('container')
// );