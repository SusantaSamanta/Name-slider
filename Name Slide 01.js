const nameContainer = document.getElementById("name_container")
//nameContainer.textContent = "Hello World"


const loop = (string) => {
  
//string = "Hello World"
let length;
length = string.length;
//console.log('length '+length)

let time = 1000, index = 0;

while(index<length){
  setTimeout(() => {
  //console.log("time : "+time,index)
  name(string, length);
  },time)
  time = time + 200;
 // console.log('index : '+index);
  index++;
  if(index >= length){
    time = 1000;
    console.log('timeeeee'+time)
  }
}
}

let index2 = 0
const name = (string, length) => {
  index2++;
  let text = string.slice(0,index2)
  console.log('text : '+text)
  nameContainer.textContent = text;
  if(index2 >= length){
    index2 = 0;
  }
}



loop('Hello world')














setTimeout(() => {
// console.log("After 4 second")
},4000)