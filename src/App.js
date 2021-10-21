import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound';

const Login = React.lazy(() => import('./features/login'))
const Homepage = React.lazy(() => import('./features/homepage'))

function App() {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/homepage" component={Homepage} />

          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
