import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
// import Table from './components/Table';

import TableTwo from './components/TableTwo';

function App() {
  return (
    <div>
      <Header name="Michelle" />
      {/* <Table />   */}
      <TableTwo />    
      <Footer year={new Date().getFullYear()} />
    </div>
    
  );
}

export default App;
