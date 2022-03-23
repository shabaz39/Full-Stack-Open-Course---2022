const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  
  const Header = (props) => {
    console.log(props)
    return (
      <div> 
        <h1>{props.course}</h1>
      </div>
    )
  }

  const Part = (props) => {
    return (
      <div>
         <p> Part name: {props.partname}, Number of exercises: {props.exercisename}</p>
         
      </div>
    )
  }


  const Content = () => {
    return (
      <div> 
       <Part partname={course.parts[0].name} exercisename={course.parts[0].exercises}/>
       <Part partname={course.parts[1].name} exercisename={course.parts[1].exercises}/>
       <Part partname={course.parts[2].name} exercisename={course.parts[2].exercises}/>
      </div>
    )
  }

  const Total = (props) => {
    return (
      <div>
        <p>Total Number of exercises: {props.exercises1 + props.exercises2 + props.exercises3}</p>
      </div>
    )
  }

  return (
    <div>
      <Header course ={course.name}/>
      <Content />      
      <Total exercises1 = {course.parts[0].exercises} exercises2={course.parts[1].exercises} exercises3={course.parts[2].exercises}/>  

    </div>
  )
}

export default App