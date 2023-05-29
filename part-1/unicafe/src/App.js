 
const Course = () => {
  return 
}

const Header = ({course}) => {
  return <h1>{course}</h1>
}

const Part = ({part}) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = ({parts}) => {
  return (
    <div>
    <Part part ={parts[0]} />
    <Part part ={parts[1]} />
    <Part part ={parts[2]} />
    <Part part ={parts[3]} />
    </div> 
  )
}


const Total = ({parts}) => {
  return (
 
       <h4> total of{" "} {parts[0].exercises + parts[1].exercises + parts[2].exercises + parts[3].exercises} exercises 
       </h4>
  
  )
}


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    
    <div> 
    <Header course={course.name} />
    <Content parts = {course.parts} />
    <Total parts = {course.parts} />

    </div>
   

    )

   
}

export default App