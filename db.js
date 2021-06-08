const { DataStore } = require('notarealdb');

const store = new DataStore('./data');

// console.log(store.collection('students'))
// console.log(store.collection('colleges'))

module.exports = {
   students:store.collection('students'),
   colleges:store.collection('colleges')
};