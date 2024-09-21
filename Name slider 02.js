const nameContainer = document.getElementById("name_container")

let length, string = 'SUSANTA SAMANTA';
length = string.length;
let time = 600, index = 0;
  
  
  
const loop = (string) => {
  index++;
  let text = string.slice(0,index);
  let t_length = text.length
  if(t_length == length){
    index = -1;
  }
  
  let  fist_lett = text.slice(0,index-1);
  console.log(fist_lett)
  let last_lett = text.slice(index-1,index);
  console.log(last_lett)
  let final_text = `${fist_lett}<span class="${"big_text"}">${last_lett}</span>`;
  
  nameContainer.innerHTML = final_text;
  //console.log(final_text);
  setTimeout(loop, 1000, string)
  
}

setTimeout(() => {
  loop(string);
  },1000);
  
//string = "Hello World"
//console.log('length '+length)



let s='susanta'
let su=s.slice(0,7)
//console.log(su)


