const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = (props) => {
    return (
      <div> 
        <h1>{props.course}</h1>
      </div>
    )
  }


  const Content = (props) => {
    return (
      <div> 
        <p> Part name: {props.partname}, Number of exercises: {props.exercisename}</p>
      </div>
    )
  }

  const Total = (props) => {
    return (
      <div>
        <p>Total Number of exercises: {props.exercises1 + exercises2 + exercises3}</p>
      </div>
    )
  }

  return (
    <div>
      <Header course ={course}/>
      <Content partname = {part1} exercisename ={exercises1}/>
      <Content partname = {part2} exercisename ={exercises2}/>
      <Content partname = {part3} exercisename ={exercises3}/>   
      <Total exercises1 = {exercises1} exercises2={exercises2} exercises3={exercises3}/>  

    </div>
  )
}

export default App