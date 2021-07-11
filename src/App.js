import React from 'react';
import CustomerTable from './components/table/customertable';
import Container from '@material-ui/core/Container';
import { Route, Switch } from 'react-router-dom';
import Bid from './components/table/Bid'
import './App.css';

const App = () => {
  return (
    <Switch>
      <Route path='/' exact>
    <div className='container'>
      <Container fixed>
      <h1>Now You can see the customers details here !</h1>;
      <CustomerTable />
      </Container>
    </div>
    </Route>
    <Route path="/:id" component={Bid} />
    </Switch>
  )
}

export default App;
