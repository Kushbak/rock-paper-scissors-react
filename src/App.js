import { useState } from 'react'

const App = () => {
  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResult] = useState(null)

  const choices = ['rock', 'paper', 'scissors']

  const handleClick = (value) => {
    setUserChoice(value)

    const randomNumber = Math.floor(Math.random() * choices.length)
    const randomChoice = choices[randomNumber]
    setComputerChoice(randomChoice)

    switch (value + randomChoice) {
      case 'rockscissors':
      case 'scissorspaper':
      case 'paperrock':
        setResult('YOU WIN!')
        break;
      case 'scissorsrock':
      case 'paperscissors':
      case 'rockpaper':
        setResult('YOU LOSE')
        break
      default:
        setResult('DRAW!!!')
        break;
    }
  }

  return (
    <div className="App">
      <h2>Your choice is: {userChoice}</h2>
      <h2>Computer choice is: {computerChoice}</h2>

      {choices.map(item => <button key={item} onClick={() => handleClick(item)}>{item}</button>)}

      <h2>{result}</h2>
    </div>
  );
}

export default App;
