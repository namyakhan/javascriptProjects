const editableInput = document.querySelector(".editable"),
readonlyInput = document.querySelector(".readonly"),
placeholder = document.querySelector(".placeholder"),
counter = document.querySelector(".counter"),
button = document.querySelector("button");

editableInput.onkeyup = (e) => {
    let element = e.target; //getting keyup element
    checkInput(element) //function calling
}

editableInput.onkeypress = (e) => {
    let element = e.target; //getting keyup element
    checkInput(element) //function calling
    counter.style.display = "none"
}

function checkInput(element){
    let currentLength = element.innerText.length;  //getting length of keypressed element 
    let maxLength = 100;
    let textTag = element.innerHTML;

    if(currentLength <= 0){ //if currenLength is less than or equal to 0
        placeholder.style.display = "block";
        counter.style.display = "none"
        button.classList.remove("active")
    }
    else{
        placeholder.style.display = "none";
        counter.style.display = "block"
        button.classList.add("active")
    }

    counter.innerText = maxLength - currentLength

    if(currentLength > maxLength){
      let overText = element.innerText.substr(maxLength); //extracting over texts, the substring method extracts parts of a string, beginning at the character at the specified positon

      overText = `<span class= "highlight">${overText}</span>`; //creating new span and passing over texts
      textTag = element.innerText.substr(0, maxLength) + overText; //replacing inner html of editable div with new 
      readonlyInput.style.zIndex = "1";
      counter.style.color = "#e0245e";
      button.classList.remove("active")
    }else{
         readonlyInput.style.zIndex = "-1"
         counter.style.color = "#333"
    }

    readonlyInput.innerHTML =  textTag; //replacing innerHTML of readonly div with new span with over texts
}