import axios from "axios";
import data from './db.json'

const baseUrl = "http://localhost:3001/api/persons";
//const baseUrl = '/api/persons'



console.log()

const getAll = () => {
  // const request = axios.get(baseUrl);
  // return request.then(response => response.data);
  return Promise.resolve(data.persons);

};

const create = newObject => {
  // const request = axios.post(baseUrl, newObject);
  // return request.then(response => response.data);
  const personObject = {
    ...newObject,
    id: Math.floor(Math.random() * 101)
  };
  data.persons.push(personObject);
  return Promise.resolve(personObject);

};

// const update = (id, newObject) => {
//   const request = axios.put(`${baseUrl}/${id}`, newObject);
//   return request.then(response => response.data);
// };

  const update = (id, newObject) => {
  const personIndex = data.persons.findIndex(person => person.id === id);
  if (personIndex !== -1) {
    const updatedPerson = {
      ...data.persons[personIndex],
      ...newObject
    };
    data.persons[personIndex] = updatedPerson;
    return Promise.resolve(updatedPerson);
  }
  return Promise.reject(new Error('Person not found'));
};

// const deletePerson = id => {
//   const request = axios.delete(`${baseUrl}/${id}`);
//   return request.then(response => response.data);
// };

const deletePerson = id => {
  const personIndex = data.persons.findIndex(person => person.id === id);
  if (personIndex !== -1) {
    const deletedPerson = data.persons[personIndex];
    data.persons.splice(personIndex, 1);
    return Promise.resolve(deletedPerson);
  }
  return Promise.reject(new Error('Person not found'));
};

export default {
  getAll: getAll,
  create: create,
  update: update,
  deletePerson: deletePerson
};