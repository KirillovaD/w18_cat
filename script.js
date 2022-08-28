let form = document.querySelector('form');
form.addEventListener('submit',function (event){
  event.preventDefault();
})

class Cat{
  constructor(name, breed, sex){
    this.name = name;
    this.breed = breed;
    this.sex = sex;
  }
}

const button = document.querySelector('#createCat');

let catName = document.getElementById('catName');
let breed = document.getElementById('breed');
let breedName = breed.options[breed.selectedIndex].text;
let sex = document.querySelector('input[name="sex"]');

button.addEventListener('click', createCat())

function createCat(){
  let cat = {}
  cat = new Cat(catName.value, breedName, sex.value)
  console.log(cat)
}
  
