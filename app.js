var getdata=document.getElementById("inp");
function getinput(b){
    getdata.value += b; 
}

function clearEntry() {
    
    getdata.value = getdata.value.slice(0, -1);
}

function clearAll() {
    document.getElementById("inp").value = "";
}

function calculate() {
        getdata.value = eval(getdata.value) 
}