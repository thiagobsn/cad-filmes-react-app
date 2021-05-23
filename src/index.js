import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { criarServidor } from './services/mirage-server';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './routes';


const ambiente = process.env.NODE_ENV;
if(ambiente !== 'production'){
  criarServidor({environment :  ambiente});
}

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      {routes.map( (route, index) => (
        <Route key={index} path={route.path} component={route.component} exact={route.exact} />
      ))}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
