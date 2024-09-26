const nameContainer = document.getElementById("name_container")

let length, string = 'SUSANTA SAMANTA* ';
length = string.length;
let time = 600, index = 0;
  
  
  
const loop = (string) => {
  index++;
  let text = string.slice(0,index);
  let t_length = text.length;
  if(t_length == length)
    index =-1;
  
  let last_line = `<span class="${"last_line"}">${"|"}</span>`;
  let fist_lett = text.slice(0,index-1);
 // console.log(fist_lett)
  
  
  let last_lett = 0;
  if(t_length <= length){
    if(text[length-2] == '*' )
      last_lett = '';
      //last_line;
    else
      last_lett = text.slice(index-1,index)
      //+last_line;
  }
  
 // let last_lett = text.slice(index-1,index)+last_line;
 
  let final_text = `${fist_lett}<span id="${"big_text"}" class="${"fade-in"}">${last_lett}</span>${last_line}`;
  
  
  setTimeout(function() {
   let element = document.getElementById('big_text');
   element.classList.add('show-text');
  }, 40);
  
  
  
  //nameContainer.style.opacity = "1";
  //nameContainer.setPropertiesValue
  //nameContainer.classList.add('opacity');
 // .style="opacity:1";
  
  
  
 nameContainer.innerHTML = final_text;
  console.log(final_text);
  //}
  setTimeout(loop, 500, string)
}

setTimeout(() => {
  loop(string);
  },1000);
  
//string = "Hello World"
//console.log('length '+length)



let s='susanta'
let su=s.slice(0,7)
//console.log(su)



let txt = "Susanta8"

len = txt.length
i=len
if(len == i){
  //console.log("ok")
}
if(len == i){
  if(i == len){
    test = 1;
  }
  else{
    test = 2;
  }
}
//console.log(test)



