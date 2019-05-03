let age = document.getElementById('age');
 
function showUser(surname, name) {
         alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
 
console.log(showUser.call(age,'ivan', 'petrov' ));
// console.log(showUser.apply(age, ['ivan', 'petrov']));
