/*TEST CASES*/
var a = groupBy([6.1, 4.2, 6.3], Math.floor) // { 6: [6.1, 6.3], 4: [4.2] }
a
var a = groupBy(['one', 'two', 'three'], 'length') // { 3: ['one', 'two'], 5: ['three'] }
a
var a = groupBy([{age: 23}, {age: 24}], 'age') // { 23: [{age: 23}], 24: [{age: 24}] }
a

var a = groupBy(
  [1397639141184, 1363223700000],
  timestamp => new Date(timestamp).getFullYear()
)
a
// { 2013: [1363223700000], 2014: [1397639141184] }

var a = groupBy([
  { title: 'JavaScript: The Good Parts', rating: 8 },
  { title: 'Aprendiendo Git', rating: 10 },
  { title: 'Clean Code', rating: 9 },
], 'rating')
a
// { 8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
//   9: [{ title: 'Clean Code', rating: 9 }],
//   10: [{ title: 'Aprendiendo Git', rating: 10 }] }

function groupBy(collection, it) {
  let result = {}
  collection.map(el=>{
    if(typeof(it) == "function") {
        if(result[it(el)]==undefined) {
            result[it(el)] = [el]
        }else{
            result[it(el)].push(el)
        }
    }else if(el[it] != undefined) {
        if(result[el[it]]==undefined) {
            result[el[it]] = [el]
        }else{
            result[el[it]].push(el)
        }
    }
  })
  return result
}