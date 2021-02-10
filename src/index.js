import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'
import 'antd/dist/antd.css'
// const content = "Hello World";
// function tick() {
//   const element = (
//     <div>
//       <h1>{content}</h1>
//       <h2>Time = {new Date().toLocaleTimeString()}</h2>
//     </div>
//   )
//   ReactDOM.render(element, document.getElementById('root'));
// };
// setInterval(tick, 1000);

ReactDOM.render(<App />, document.getElementById('root'))