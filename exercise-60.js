const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const personId = persons.find((item) => item.id === id)
          if (personId) {
             return resolve(personId) 
          } 
          return reject(`Person with id: ${id} doesn't exist`)
      }, 1000);
  })
}

function fetchJobById(id)  {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const JobId = jobs.find((item) => item.id === id)
          if (JobId) {
             return resolve(JobId) 
          } 
          return reject(`Person with id: ${id} doesn't exist`)
      }, 1000);
  })
}

Promise.all([fetchPersonById(2), fetchJobById((3))])
.then((person) => console.log(person))
.catch((err)  => console.error(err));

