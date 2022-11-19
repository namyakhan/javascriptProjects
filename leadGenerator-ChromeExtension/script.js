let myLeads = [];
const inputButton = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
const ulel = document.getElementById('ul-el');  
const deletebtn = document.getElementById('delete-btn')
const storeData = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById('tab-btn')

if(storeData){
    myLeads = storeData
    render(myLeads)
}

tabBtn.addEventListener('click', function (){
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

function render(leads) {

    let listItems = ''
    for(let i=0; i<leads.length; i++){
        listItems +=    
            `<li>
                <a href='${leads[i]}' target='_black'> 
                    ${leads[i]} 
                </a>
            </li>`
    }

    ulel.innerHTML = listItems;
}

deletebtn.addEventListener('dblclick', ()=>{
    localStorage.clear()
    myLeads = []
    render(myLeads);
})

inputButton.addEventListener('click', function (){
    myLeads.push(inputEl.value)
    inputEl.value = ''
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    //console.log(localStorage.getItem("myLeads"))
    render(myLeads)
})



