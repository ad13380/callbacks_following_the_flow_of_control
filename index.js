console.log('1')
$.get("https://async-workshops-api.herokuapp.com/people", function(peopleResponse) {
  console.log(peopleResponse);
  peopleResponse.forEach(function(person) {
    console.log(person.name);
    console.log('3')
  });
});
console.log('2')

// $.ajax({
//   type: 'GET',
//   url: "https://async-workshops-api.herokuapp.com/people",
//   success: function(data) {
//     console.log("People response:", data);
//   }
// });