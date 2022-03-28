// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="todo">todo list reactJS</h1>
      <div className='table'>
      <table className='tb1'>
        <tr className='title-1'>
          <p className='conten1'> Add a tank ???</p>
        </tr>
        <tr>
          <p className='conten2'> Item</p>
        </tr>
        <tr>
          <p>
            <input className='conten3' placeholder='What do you want todo'></input>
          </p>
        </tr>
        <tr>
          <p className='conten4'>Enter what you want to</p>
        </tr>
        <tr>
          <p>
            <button className='btn'>Submit</button>
          </p>
        </tr>
      </table>

      <table>
        <tr className='title-1'>
          <p className='conten1'>Task</p>
        </tr>
        <tr className='row2'>
          <th className='col1'><p>Item </p></th>
          <th className='col2'><p>Statuts </p></th>
          <th className='col3'><p>Action </p></th>
        </tr>
        <tr className='row2'>
          <th className='col1 f-w'><p>Buy Benz </p></th>
          <th className='col2 f-w'><p>Not Complete </p></th>
          <th className='col3'><p>
            <button className='btn'>Complete</button>
            <button className='btn mgl bgcl'>Delete</button>
          </p>

          </th>
        </tr>
      </table>

      </div>
    </div>
  );
}

export default App;
