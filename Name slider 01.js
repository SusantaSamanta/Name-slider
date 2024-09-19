const nameContainer = document.getElementById("name_container")

let length, string = 'Hello World';
length = string.length;
let time = 600, index = 0;
  
  
  
const loop = (string) => {
  index++;
  let text = string.slice(0,index);
  let t_length = text.length;
  console.log(text);
  setTimeout(loop, 150, string)
}

setTimeout(() => {
  loop(string);
  },2000);
  
//string = "Hello World"
//console.log('length '+length)



let s='susanta'
let su=s.slice(0,7)
//console.log(su)


  
