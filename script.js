const form = document.querySelector('form');

class Cat{
  constructor(data){ //отдаем работу с data формы самому классу
    this.catName = data.get('catName'); // через метод гет у объекта data модем запросить данные из нужного нам поля
    this.breed = data.get('breed'); //let breedName = breed.options[breed.selectedIndex].text;
    this.sex = data.get('sex');
    this.food = data.get('feed');
    
  }

  print() {

    console.log(this); //выводим в консоль сам объект this

  }
}


form.addEventListener('submit',function (event){
  event.preventDefault();
  let data = new FormData(form); // доступ к полям форму
  fetch("https://httpbin.org/post",
    {
      method: "POST",
      body: new FormData(form),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      }
    })
    .then(respose => respose.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
   
  const button = document.querySelector('#createCat');
  button.addEventListener('click', (createCat)=>{
    let cat = new Cat(data);
    cat.print();})

    
  });

  //декструктуризация объекта
  //let cat = new Cat({catName, breed, sex, food});//передача аргументов в виде объектов, когда их много!!!
