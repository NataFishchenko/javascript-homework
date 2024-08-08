// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let array = ['name', 'surname', 'username', 'password', 'e-mail', 'gender', 'nationality', 'address_country', 'address-city'];

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book = {
    title: 'about author', pageCount: '235', genre: 'history'
}
console.log(book)
let book1 = {
    title: 'Java Script', pageCount: '235', genre: 'programming'
}
let book2 = {
    title: 'Angelica', pageCount: '235', genre: 'love story'
}
//  - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let bookJS = {title: 'Java Script', pageCount: '235', genre: 'programming',authors:['name',' age']

}
let bookJava = {title: 'Java', pageCount: '230', genre: 'programming',authors:['name',' age']

}
let bookPython = {title: 'Python', pageCount: '350', genre: 'programming',authors:['name',' age']

}
//Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let user = [

    {name:'Anna',username:'Ann1', password:'ann3'},
    {name:'Any',username:'Any1', password:'any13'},
    {name:'Vasy',username:'VAnn1', password:'van3'},
    {name:'Alla',username:'All1', password:'all133'},
    {name:'Nata',username:'NAnn1', password:'nan3'},
    {name:'Olga',username:'olga1', password:'olga3'},
    {name:'Maks',username:'MAnn1', password:'mann3'},
    {name:'Anastasya',username:'Anna1', password:'anna3'},
    {name:'Oleg',username:'oleg1', password:'gann3'},
    {name:'Gleb',username:'gAnn1', password:'gann3'},
]
console.log(user[2].password)
// описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

let temperature=[
    {morning: 12,afternoon:23,evening:20},
    {morning: 12,afternoon:23,evening:20},
    {morning: 12,afternoon:23,evening:20},
    {morning: 12,afternoon:23,evening:20},
    {morning: 12,afternoon:23,evening:20},
    {morning: 12,afternoon:23,evening:20},
    {morning: 12,afternoon:23,evening:20}
]