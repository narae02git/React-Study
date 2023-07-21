import React from 'react';
// import ReactDOM from 'react-dom';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList';
import Accommodate from './chapter_07/Accommodate';

// const root = ReactDOM.createRoot(document.getElementById('root'));

//chapter_03/Library
// ReactDOM.render(
//   <React.StrictMode>
//     <Library />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//chapter_04/Clock
// setInterval(() =>{
//   ReactDOM.render(
//   <React.StrictMode>
//     <Clock />
//   </React.StrictMode>,
//   document.getElementById('root')
//   );
// }, 1000);

//chapter_05/CommentList
  // ReactDOM.render(
  // <React.StrictMode>
  //   <CommentList />
  // </React.StrictMode>,
  // document.getElementById('root')
  // );

//chapter_06/NotificationList
  // ReactDOM.render(
  // <React.StrictMode>
  //   <NotificationList />
  // </React.StrictMode>,
  // document.getElementById('root')
  // );


  // const root = ReactDOM.createRoot(document.getElementById('root'));
  // root.render(
  //   <React.StrictMode>
  //     <NotificationList />
  //   </React.StrictMode>
  // );


  //chapter_07/Accommodate
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Accommodate />
    </React.StrictMode>
  );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
