const lengthSlider = document.querySelector(".pass-length input"),
options = document.querySelectorAll(".option input"),
generateBtn = document.querySelector(".generate-btn"),
passwordInput = document.querySelector(".input-box input"),
passwordIdicator = document.querySelector(".pass-indicator"),
copyIcon = document.querySelector(".input-box span") 


const characters = { //Object of letters numbers and symbols
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "1234567890",
    symbols: "!@#$%^*()_+{}[]|`~"

}


const generatePassword = () =>{ 
    let staticPassword = '',
    randomPassword = '',
    passLength = lengthSlider.value,
    excludeDuplicate = false;
    

    options.forEach(option => { //looping through each optio's checkbox
        if(option.checked){ //if checkbx is checked
            //if checkbox id isn't exe duplicate && spaces
            if(option.id !== 'exe-duplicate' && option.id !== 'spaces'){
                //adding particular key value from character to  staticPassword
                staticPassword += characters[option.id]
            }
            else if(option.id === "spaces"){ //if checkbox id is spaces
                staticPassword += `  ${staticPassword}  ` // added spaces in the end and the beginnig.
            }
            else{ //else pass true value to exclude duplicate
                excludeDuplicate = true;
            }
        }
    })


    
    for(let i = 0 ; i < passLength; i++){
        //getting random character from the static  password 
        let randdomChar = staticPassword[Math.floor(Math.random()*staticPassword.length)] 
        if(excludeDuplicate){ //if  exclude duplicate is true 
            //if randomPassword doesn't contains the current random character or randomChar is equal
            //to space ' ' then add random character or random password else decrement i by 1
            !randomPassword.includes(randdomChar) || randdomChar == " " ? randomPassword += randdomChar : i--
        }
        else{// else add randomChar to randomPassword
            randomPassword += randdomChar;
        }
    }
    passwordInput.value = randomPassword
}

const updatePasswordIndicator = () => {
    //if length slider value is less than equal 8 indicate "weak", if less than equal 16 indicate "medium"
    // else indicate "strong" you can also do it by if else conditions if you don't know the conditional statements
    passwordIdicator.id = lengthSlider.value <= 10 ? 'weak' : lengthSlider.value <= 20 ? 'medium' : 'strong'
}

const  updateSlider = () => {
    document.querySelector(".pass-length span").innerHTML = lengthSlider.value 
    generatePassword()
    updatePasswordIndicator()
}

updateSlider()

const copyPassword = () => {
    navigator.clipboard.writeText(passwordInput.value)
    copyIcon.innerText = "check";
    setTimeout(() => {
        copyIcon.innerText = "content_copy"
    }, 1000);
}

copyIcon.addEventListener("click", copyPassword)
lengthSlider.addEventListener("input", updateSlider)
generateBtn.addEventListener("click", generatePassword)
