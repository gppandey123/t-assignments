import React from 'react';
import CustomerTable from './components/table/customertable';
import Container from '@material-ui/core/Container';
import './App.css';

const App = () => {
  return (
    <div className='container'>
      <Container fixed>
      <h1>Now You can see the customers details here !</h1>;
      <CustomerTable />
      </Container>
    </div>
  )
}

export default App;
