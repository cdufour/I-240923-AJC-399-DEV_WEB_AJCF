import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import ShowTask from './components/ShowTask';

function App() {

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submit !')
  }


  return (
    <div className="App">
      <Header />
      <AddTask test="Add" handleSubmit={handleSubmit} />
      <ShowTask />
    </div>
  );
}

export default App;
