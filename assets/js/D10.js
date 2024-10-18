/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log("ESERCIZIO A");
// const sum = 10 + 20;

const firstNum = 10;
const secondNum = 20;

const sum = firstNum + secondNum;

console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log("ESERCIZIO B");

const random = Math.floor(Math.random() * 21); //Ho messo 21 cosi che veniva compreso anche il numero 20, altrimenti potevo usare Math.ceil con limite *20, ma avrei escluso il numero 0 dai numeri da poter estrarre
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log("ESERCIZIO C");

const me = {
  name: "Emanuele",
  surname: "Bianchi",
  age: 23,
};
console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log("ESERCIZIO D");

delete me.age;
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log("ESERCIZIO E");

me.skills = ["C++", "C#", "Java", "Python"];

console.log(me);
console.log("Skills", me.skills);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log("ESERCIZIO F");

me.skills.push("PHP");

console.log(me);
console.log("Skills", me.skills);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log("ESERCIZIO G");

me.skills.pop();

console.log(me);
console.log("Skills", me.skills);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("ESERCIZIO 1");

const dice = () => {
  return Math.ceil(Math.random() * 6);
};
console.log("Numero casuale tra 1 e 6:", dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log("ESERCIZIO 2");

const num1 = 5;
const num2 = 10;

const whoIsBigger = (num1, num2) => {
  const biggerNum = Math.max(num1, num2);
  return biggerNum;
};

if (num1 === num2) {
  console.log("I numeri", num1, "e", num2, "sono uguali");
} else {
  console.log(
    "Il maggiore tra i numeri",
    num1,
    "e",
    num2,
    "è:",
    whoIsBigger(num1, num2)
  );
}

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log("ESERCIZIO 3");

const splitMe = (string) => {
  const newArr = string.split(" ");
  for (let i = 0; i < newArr.length; i++) {
    newArr[i] = newArr[i].toUpperCase().charAt(0) + newArr[i].slice(1);
  }
  return newArr;
  //Se avessi voluto riunire la stringa avrei usato .join(" ") ---> return newArr.join(" ");
};

console.log(splitMe("ciao mi chiamo emanuele"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log("ESERCIZIO 4");

const deleteOne = (string, bool) => {
  if (bool) {
    string = string.slice(1);
  } else {
    string = string.slice(0, -1); //al posto di -1 potevo mettere anche string.length-1
  }
  return string;
};
console.log(deleteOne("ciao mondo", true));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log("ESERCIZIO 5");

const onlyLetters = (string) => {
  const newArr = string.split(" ");
  for (let i = 0; i < newArr.length; i++) {
    //Non sono risucito ad usare typeoff, allora ho cambiato controllo vededo se l'elemento dell'array non fosse un numero
    if (!isNaN(newArr[i])) {
      newArr.splice(i, 1);
    }
  }
  return newArr.join(" ");
};

console.log(onlyLetters("oggi ho preso altri 2 giornali 3 da leggere"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log("ESERCIZIO 6");

const isThisAnEmail = (string) => {
  // const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //ho trovato su internet questo controllo tramite regex dei valori però non so se andava bene lasciarlo in questo modo
  // return email.test(string);

  //L'ho fatto anche in questo modo più semplice tenendo in considerazione che nella stringa ci fossero alemno i valori "@" e il "."
  const atSymbol = string.includes("@");
  const dotSymbol = string.includes(".");
  if (atSymbol && dotSymbol) {
    return true;
  } else {
    return false;
  }
};

console.log(isThisAnEmail("emanuelebianchi@gmail.com"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log("ESERCIZIO 7");

const whatDayIsIt = (date) => {
  return new Date(date).getDay();
};
console.log("Oggi è il", whatDayIsIt("2024-10-18"), "giorno della settimana");

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log("ESERCIZIO 8");

const rollTheDices = (num) => {
  const diceObj = {
    sum: 0,
    values: [],
  };
  for (let i = 0; i < num; i++) {
    newRandomNum = dice();
    diceObj.sum += newRandomNum;
    diceObj.values.push(newRandomNum);
  }
  return diceObj;
};

console.log(rollTheDices(3));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log("ESERCIZIO 9");

const howManyDays = (date) => {
  const inputDate = new Date(date); // Data immessa in input
  const currDate = new Date(); // Data corrente presa dal sistema

  const dateElapsedMilliseconds = currDate.getTime() - inputDate.getTime();

  const dateElapsed = Math.floor(
    dateElapsedMilliseconds / (1000 * 60 * 60 * 24) //Metodo trovato su internet per riconvertire la differenza trovata in millisecondi e riportarla in giorni approssimando per difetto
  );

  return dateElapsed;
};

console.log(
  "Sono trascorsi:",
  howManyDays("2024-09-30"),
  "giorni dalla data immessa"
);

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log("ESERCIZIO 10");

const isTodayMyBirthday = (date) => {
  const inputDate = new Date(date); // Data immessa in input
  const currDate = new Date("2020-10-25"); // Data del mio compleanno
  const dateMonth = inputDate.getMonth();
  const dateDay = inputDate.getDate();

  if (dateMonth === currDate.getMonth() && dateDay === currDate.getDate()) {
    console.log("Il giorno immesso corrisponde al mio compleanno");
    return true;
  } else {
    console.log("Il giorno immesso non corrisponde al mio compleanno");
    return false;
  }
};

isTodayMyBirthday("2024-10-18");

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log("ESERCIZIO 11");

const obj = {
  nome: "Emanuele",
  cognome: "Bianchi",
  età: 23,
  città: "Milano",
};

const deleteProp = (obj, string) => {
  const stringSplit = string.split(" ");
  for (let i = 0; i < string.length; i++) {
    delete obj[stringSplit[i]];
  }
  return obj;
};

console.log(deleteProp(obj, "nome cognome"));

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log("ESERCIZIO 12");

const newestMovie = (array) => {
  let newestMovie = null;
  array.forEach((movie) => {
    if (movie.Year > newestMovie) {
      newestMovie = movie.Year;
    }
  });
  return newestMovie;
};
console.log("Il film più recente è uscito nell'anno:", newestMovie(movies));

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log("ESERCIZIO 13");

const countMovies = (array) => {
  return array.length;
};

console.log("Il numero di film è:", countMovies(movies));

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log("ESERCIZIO 14");

const onlyTheYears = (array) => {
  return array.map((element) => element.Year);
};

console.log("Gli anni di uscita dei film sono:", onlyTheYears(movies));

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotti nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log("ESERCIZIO 15");

const onlyInLastMillennium = (array) => {
  const lastMillenium = array.filter((movie) => movie.Year < 2000);
  return lastMillenium;
};

console.log(
  "Film prodotti nello scorso millenio sono:",
  onlyInLastMillennium(movies)
);

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log("ESERCIZIO 16");

const sumAllTheYears = (array) => {
  const sumYears = array.reduce((accumulator, amount) => {
    accumulator += parseInt(amount.Year); //Senza il parseInt non funzionava il calcolo perchè mi concatenava i valori della stringa
    return accumulator;
  }, 0);
  return sumYears;
};

console.log("Somma degli anni di produzione dei film:", sumAllTheYears(movies));

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log("ESERCIZIO 17");

const searchByTitle = (array, string) => {
  const searchTitle = array.find((title) => title.Title === string);
  return searchTitle;
};

console.log(searchByTitle(movies, "The Lord of the Rings"));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log("ESERCIZIO 18");

const searchAndDivide = (array, string) => {
  const match = array.filter((title) => title.Title.includes(string));
  const unmatch = array.filter((title) => !title.Title.includes(string));

  const newArray = [];
  newArray.push(match, unmatch);
  return newArray;
};

console.log(searchAndDivide(movies, "Lord of"));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log("ESERCIZIO 19");

const removeIndex = (array, num) => {
  console.log("Elemento rimosso", array.splice(num, 1)); //Rimozione dell'elemento
  return array;
};

console.log("Array finale", removeIndex(movies, 5));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log("ESERCIZIO 20");

const selectContainer = () => {
  return document.getElementById("container");
};
console.log(selectContainer());

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
console.log("ESERCIZIO 21");

const selectTagTd = () => {
  return document.querySelectorAll("td");
};
console.log(selectTagTd());

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log("ESERCIZIO 22");

const printEveryTagTd = () => {
  const tds = document.querySelectorAll("td");
  tds.forEach((td) => {
    console.log("Elementi nelle td:", td.innerText);
  });
};
printEveryTagTd();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const changeColorLinks = () => {
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.style.backgroundColor = "red";
  });
};
changeColorLinks();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
const addNewElementList = () => {
  const ul = document.getElementById("myList");
  const li = document.createElement("li");
  li.innerText = "Quarto Elemento";
  ul.appendChild(li);
};
addNewElementList();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
const removeAllElementList = () => {
  const ul = document.getElementById("myList");
  ul.remove();
};
// removeAllElementList(); L'ho lasciato commentato perchè altrimenti non si vede il cambiamento

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
const addTrClass = () => {
  const tableRows = document.querySelectorAll("tr");
  tableRows.forEach((tr) => {
    tr.classList.add("test");
  });
};
addTrClass();
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
const halfTree = (num) => {
  const ast = "*";
  let tree = ""; //Ho provato a farlo ma non capisco come mai mi stampa piu asterischi di quanti ne chiedo su più righe.
  for (let i = 0; i <= num; i++) {
    tree += "*";
    console.log(tree);
  }
};
halfTree(3);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
console.log("ESERCIZIO 29");

const isItPrime = (num) => {
  for (let i = 2; i < num; i++) {
    //La i parte da 2 perchè 1 è sempre divisibile per tutti i numeri e mi annullerebbe il controllo sottostante
    if (num % i === 0) {
      //controllo se il numero è divisibile per un qualsiasi numero, se non ne trovo nessuno vuol dire che num è un numero primo
      console.log("Il numero non è primo");
      return false;
    }
  }
  console.log("Il numero è primo");
  return true;
};
isItPrime(5);
