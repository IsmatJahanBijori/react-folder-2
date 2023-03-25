import logo from './logo.svg';
import './App.css';

const num = 5;
const s = { name: "moni", age: 23 }
// const fav = { color: 'purple' }

function App() {

  // module 47-2 practice
  // return(
  //   <div className="App">
  //     <div className="container">
  //       <h1>Hello React</h1>
  //     </div>
  //     <div className="student">

  //     </div>
  //     <div className="mingle">
  //       <p>Name: {2 + num}</p>
  //       <p>Identity: {s.name} and {s.age}</p>
  //       <p style={{ color: 'purple' }}>Nothing special in this file</p>
  //     </div>
  //   </div>
  // );


  // 47-3 practise
  // return (
  //   <div className="App">
  //     <Person></Person>
  //   </div>
  // )


  // module 47-4 practise (pass dynamic data to component, props using)
  // return (
  //   <div className="App">
  //     <Person name="Moni" age="23"></Person> 
  //     {/* <Person></Person> it means to call Person component */}
  //   </div>
  // )


  // module 47-5 practise(create multiple components from an array and object)

  // array
  const players1 = ['Mash', 'Shakib', 'Tamim', 'Mushi', 'Riyad']

  // array like object
  const players2 = [
    { id: 1, p1: 'Mash' },
    { id: 2, p1: 'Shakib' },
    { id: 3, p1: 'Tamim' },
    { id: 4, p1: 'Mushi' },
    { id: 5, p1: 'Riyad' }]
  // console.log(players)
  return (
    <div className="App">
      {
        // array
        // players1.map(player1 => <Players name={player1}></Players>)
      }
      {
        // array like object
        players2.map(player2 => <Players id={player2.id} name={player2.p1}></Players>)
      }

    </div>
  )
}

// creating own component module 47-3
function Person(props) {

  // creating own tag module 47-3
  // return (
  //   <div className="person">
  //     <h1>Name: Bijori</h1>
  //     <p>Profession: Bekar</p>
  //   </div>
  // )

  // creating own tag module 47-4 (pass dynamic data to component, props using)
  // return (
  //   <div className="person">
  //     <h3>Name: {props.name}</h3>
  //     <h3>Age: {props.age}</h3>
  //   </div>
  // )
}


// module 47-5 practise(create multiple components from an array and object)
function Players(props) {
  return (
    <div>
      {/* array */}
      {/* <h1>Player's name is: {props.name}</h1> */}


      {/* array like object */}
      <h3>Players id: {props.id}</h3>
      <p>Player's name is: {props.name}</p>
    </div>
  )
}

export default App;
