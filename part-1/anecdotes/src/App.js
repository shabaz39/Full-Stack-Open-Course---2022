import { useState } from 'react'


const MostVoted = ({anecdotes, votes}) => {

  const highestVoteCount = Math.max(...votes)
  const winnerIndex = votes.indexOf(highestVoteCount)
  const winner = anecdotes[winnerIndex]
  if (highestVoteCount === 0) {
    return ( 
      <p> No votes yet </p>
      )
  }


return ( 
  <div> 
    <p>{winner} </p>
    <p> has {highestVoteCount} votes</p>
  </div>
)

}


const Button = (props)=> {
  const {onPress} = props 
  
  return (
    <button type= 'button' onClick={onPress}>
      {props.text}
    </button>
  )

}
 

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(7).fill(0))

  const votesCounter = () => {

    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)

  }
   
const anecdoteGenerator= () => {
 
   const randomQuote = Math.floor(Math.random()*anecdotes.length)
   setSelected(randomQuote)
}
  

  return (
    <div>
  
     {anecdotes[selected]}
     <p>has {votes[selected]} votes</p>
      <div> 
      <Button onPress={votesCounter} text={'Vote'}/>
      <Button onPress={anecdoteGenerator} text={'next anectdote'}/>
    
      </div>
      
     <MostVoted anecdotes={anecdotes} votes={votes}/>

  

    </
    div>
  )
}

export default App