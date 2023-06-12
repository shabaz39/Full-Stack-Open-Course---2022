const express = require('express')
const app = express()
const persons = require('./data')
const morgan = require('morgan')
const cors = require('cors')

app.use(express.json());
app.use(cors())

morgan.token('requestData', (req, res) => {
    return JSON.stringify(req.body);
  });

  const customLogFormat = ':method :url :status :response-time ms - :res[content-length] :requestData';
  app.use(morgan(customLogFormat));

app.get('/', function (req, res) {
    res.send('hello, world!')
  })

app.get('/', (request,response) => {
    response.send('<h1>Hello world!</h1>')
})

app.get('/api/persons', (request,response) => {
    response.json(persons)
})

app.get('/info', (request,response) => {
    const currentTime = new Date().toString()
    response.send(`<p>Phonebook has info for ${persons.length} people</p> <br> Request received at: ${currentTime}`)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    
    if (person){
        response.json(person)
    }
    else {
        response.status(404).end()
    }
    
})

const generateId = () => {
    const maxId = persons.length > 0 ? Math.max(...persons.map(n => n.id)) : 0
    return maxId + 1
  }

app.post('/api/persons', (request, response)=> {
    const body = request.body
    const {name, number} = request.body
  
    if (!body.name || !body.number) {
      return response.status(400).json({ 
        error: 'name or number missing' 
      })
    }

    const existingPerson = persons.find(person => person.name === name)
    if (existingPerson){
        return response.status(400).json({ 
            error: 'Name already exists' 
          })
    }

  
    const newPerson = {
      id: generateId(),
      name: body.name,
      number: body.number      
    }
  
    persons.push(newPerson)
  
    response.json(newPerson)

})


app.delete('/api/persons/:id', (request,response) => {
    const id = Number(request.params.id)
    const index = persons.findIndex(person => person.id === id)
    
    if (index !== -1){
        persons.splice(index, 1)
        response.sendStatus(204) 
    } else {
        response.status(404) 
    }
   
})

const PORT = 5001
app.listen(PORT)
console.log(`Server is running on ${PORT}`)