import { useState } from 'react'

const Button = (props)=> {
  const {onPress} = props 
  
  return (
    <button type= 'button' onClick={onPress}>
      {props.text}
    </button>
  )

}

const StatisticLine = (props) => { 
  
  return (
    <div>
      {props.text} {props.value} {props.symbol}
    </div>
  )

}
 

const Statistics = (props) => {

   if (props.newAllValue === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
 
  return (
    <div> 
      <table>
        <tbody>
     
        <tr><td><StatisticLine text ='good'/> </td><td><StatisticLine value={props.newGoodValue}/></td></tr>
        <tr><td><StatisticLine text ='neutral'/> </td><td><StatisticLine value={props.newNeutralValue}/></td></tr>
        <tr><td><StatisticLine text ='bad'/> </td><td><StatisticLine value={props.newBadValue}/></td></tr>
        <tr><td><StatisticLine text ='all'/> </td><td><StatisticLine value={props.newAllValue}/></td></tr>
        <tr><td><StatisticLine text ='average'/></td><td><StatisticLine value={props.averageValue}/></td></tr>
        <tr><td><StatisticLine text ='positive feedback'/></td><td><StatisticLine value={props.postiveFeedback}symbol='%'/></td></tr>
        </tbody> 
     
      </table>
    
      
    </div>
  )
}

const App = () => {
  const [goodValue, setGoodValue] = useState(0)
  const [neutralValue, setNeutralValue] = useState(0)
  const [badvalue, setBadValue] = useState(0)
  const [scoreValue, setScoreValue] = useState(0)
 

const setToGoodValue = (newValue) => {
    console.log('Good', newValue) 
  setGoodValue(newValue)
}

const setToNeutralValue = (newValue) => {
  console.log('Neutral', newValue) 
  setNeutralValue(newValue)
}

const setToBadValue = (newValue) => {
  console.log('Bad', newValue) 
  setBadValue(newValue)
}

const goodFunc= () => {
  setToGoodValue(goodValue + 1)
  setScoreValue(scoreValue + 1)
}

const badFunc= () => {
      setToBadValue(badvalue + 1) 
      setScoreValue(scoreValue - 1)}

const neutralFunc=() =>{ 
 setToNeutralValue(neutralValue + 1)
}

  return (
    <div>
      <div> 
        <h1> give feedback </h1>    
        <Button onPress={goodFunc} text={'good'}/>
        <Button onPress={neutralFunc} text={'Neutral'}/>
        <Button onPress={badFunc} text={'bad'}/>
        
        
      </div>

      <div> 
        <h1> statistics </h1>
        <Statistics newGoodValue={goodValue} newNeutralValue={neutralValue} newBadValue={badvalue}  newAllValue={goodValue+neutralValue+badvalue} averageValue= {(scoreValue) / (goodValue+neutralValue+badvalue) }  postiveFeedback={((goodValue) / (goodValue+neutralValue+badvalue))*100} />
        

      </div>

    </div>

   
  )
}


export default App