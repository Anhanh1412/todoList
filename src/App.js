// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="todo">todo list reactJS</h1>
      <div className='head'>
        <div className='title-1'>Add a task</div>
        <div className='name-item'>Item</div>
        <div><input className='input' placeholder='What do you want to do ???'></input></div>
        <div className='note'>Enter what you want</div>
        <div><button className='btn submit'>Submit</button></div>
      </div>
        

        <table>
          <tr className='title-1'>
            Task
          </tr>
          <tr className='row2'>
            <th className='col1'>Item</th>
            <th className='col2'>Statuts </th>
            <th className='col3'>Action </th>
          </tr>
          <tr className='row2'>
            <th className='col1 f-w'>Buy Benz </th>
            <th className='col2 f-w'>Not Complete </th>
            <th className='col3'>
              <button className='btn'>Complete</button>
              <button className='btn mgl bgcl'>Delete</button>           

            </th>
          </tr>
        </table>

      </div>
    
  );
}

export default App;
