import logo from './logo.svg';
import './App.css';
import React, { cloneElement, useState } from 'react';

function Inpboxes(a, i, setTry, setI, cleft,wl,setWl) {
  // const array = [1,2,3,4,5,6,7,8];
  var idx = 0;
  return (
    <div>
      {a.split('').map((k) =>

        <input type="text" className="inpbx" maxLength="1" onChange={(e) => onChangeHandler(a, e, i, setTry, setI, cleft,wl,setWl)} key={idx++} />

      )}
    </div>
  );

}


function onChangeHandler(word, e, i, setTry, setI, cleft,wl,setWl) {


  var elementArray;

  elementArray = document.getElementsByClassName("inpbx");



  if (e.target.value != word[i]) {

    alert("word doesn't contain this letter")
    setTry(--cleft)
    




    
    setWl(wl+e.target.value);
    e.target.value = "";

  }

  else if (e.target.value == word[i] && i == word.length - 1) {
    alert("Won");
    window.location.reload();
  }



  else {
    setI(++i);
      setWl("");
  }


}


function handleReset() {
  window.location.reload();
}





function App() {

  // const words = ["insta", "facebook", "twitter", "apple", "lpu","burger","time"];

  const words=[
    {
      word: "python",
      hint: "programming language"
      },
      {
      word: "guitar",
      hint: "a musical instrument"
      },
      {
      word: "aim",
      hint: "a purpose or intention"
      },
      {
      word: "venus",
      hint: "planet of our solar system"
      },
      {
      word: "gold",
      hint: "a yellow precious metal"
      },
      {
      word: "ebay",
      hint: "online shopping site"
      },
      {
      word: "golang",
      hint: "programming language"
      },
      {
      word: "coding",
      hint: "related to programming"
      },
      {
      
      word: "matrix",
      hint: "science fiction movie"
      },
      {
      word: "bugs",
      hint: "related to programming"
      },
      {
      word: "avatar",
      hint: "epic science fiction film"
      },
      {
      word: "gif",
      hint: "a file format for image"
      },
      {
      word: "mental",
      hint: "related to the mind"
      },
      {
      word: "map",
      hint: "diagram represent of an area"
      },
      {
      word: "island",
      hint: "land surrounded by water"
      },
      {
      word: "hockey",
      hint: "a famous outdoor game"
      },
      {
      word: "chess",
      hint: "related to a indoor game"
      },
      {
      word: "viber",
      hint: "a social media app"
      },
      {
      
      word: "github",
      hint: "code hosting platform"
      },
      {
      word: "png",
      hint: "a image file format"
      },
      {
      word: "silver",
      hint: "precious greyish-white metal"
      },
      {
      word: "mobile",
      hint: "an electronic device"
      },
      {
      word: "gpu",
      hint: "computer component"
      },
      {
      word: "java",
      hint: "programming language"
      },
      {
      word: "google",
      hint: "famous search engine"
      },
      {
      word: "venice",
      hint: "famous city of waters"
      },
      {
      word: "excel",
      hint: "microsoft product for windows"
      },
      {
      word: "mysql",
      hint: "a relational database system"
      },
      {
      
      word: "nepal",
      hint: "developing country name"
      },
      {
      word: "flute",
      hint: "a musical instrument"
      },
      {
      word: "crypto",
      hint: "related to cryptocurrency"
      },
      {
      word: "tesla",
      hint: "unit of magnetic flux density"
      },
      {
      word: "mars",
      hint: "planet of our solar system"
      },
      {
      word: "proxy",
      hint: "related to server application"
      },
      {
      word: "email",
      hint: "related to exchanging message"
      },
      {
      word: "html",
      hint: "markup language for the web"
      },
      {
      word: "air",
      hint: "related to a gas"
      },
      {
      word: "idea",
      hint: "a thought or suggestion"
      },
      {
      
      word: "server",
      hint: "related to computer or system"
      },
      {
      word: "svg",
      hint: "a vector image format"
      },
      {
      word: "jpeg",
      hint: "a image file format"
      },
      {
      word: "search",
      hint: "act to find something"
      },
      {
      word: "key",
      hint: "small piece of metal"
      },
      {
      word: "egypt",
      hint: "a country name"
      },
      {
      word: "joker",
      hint: "psychological thriller film"
      },
      {
      word: "dubai",
      hint: "developed country name"
      },
      {
      word: "photo",
      hint: "representation of person or scene"
      },
      {
      word: "nile",
      hint: "largest river in the world"
      },
      {
      
      word: "rain",
      hint: "related to a water"
      },
  ]

  const [i, setI] = useState(0);
  const [ran, setRan] = useState(Math.floor(Math.random() * words.length));
  // const random_num = Math.floor(Math.random()*words.length);
  const [word, setWord] = useState(words[ran].word);
  const hints = ["Social Media", "Social Media", "Social Media", "Fruit", "university","fast food","very valuable"];
  const [cleft, setTry] = useState(10);
  const[wl,setWl] = useState("");

  return (
    <div className='main'>
      <div className="App">

        <div className="App-boxes">
          {Inpboxes(word, i, setTry, setI, cleft,wl,setWl)}
        </div>
        <div> <p>{`Hint: ${words[ran].hint}`}</p></div>
        <div> <p> {`Remaining Guesses: ${cleft}`}</p></div>
        <div><p> {`Wrong letters: ${wl}`}</p></div>
        <button className="button" onClick={handleReset}> Reset</button>
       
      </div>
    </div>
  );
}

export default App;
