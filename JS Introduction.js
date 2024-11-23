function Left() {
    document.getElementById("image").src = 'https://fastly.picsum.photos/id/539/200/300.jpg?hmac=anJssHN1m53jBatiVAldD8gSdk_3w_5WHOCNCFvGFkk';
}


function Right(){
    document.getElementById("image").src = 'https://fastly.picsum.photos/id/591/200/300.jpg?hmac=GBnqheK8f8NgGoZ-JQIGl0uYMejcmT4gvw4PsBmUWPY';
}

function Small(){
    document.getElementById("demo").style.fontSize = "10px";
}

function Big(){
    document.getElementById("demo").style.fontSize = "30px"
}

function Gone(){
    document.getElementById("demo").style.display = "none";
}

function Appear(){
    document.getElementById("demo").style.display = "block";
}