import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';

function App() {

  function handleClick(){
    alert("Button Clicked");
  }

  const handleClick2 = () =>{
    alert("Button-2 Clicked");
  }

  const fourthClick = (num) =>{
    alert(num + 5);
  }

  return (
    <>
      <h2>React Core Concepts-2</h2>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me-2</button>
      <button onClick={() => {alert("Third Clicked")}}>Third</button>
      {/* Vejailla */}
      <button onClick={() => fourthClick(7)}>Four</button>
    </>
  )
}

export default App
