const url = "https://api.quotable.io/random";

let qid=document.getElementById("qte");
let wid=document.getElementById("wrtr");
let bid=document.getElementById("btn");

bid.addEventListener("click",function(){
    fetch(url).then((data) => data.json()).then((item)=>{
        let cont='"'+" "+item.content+" "+'"'
        qid.innerText=cont;
        let auth="Author : - "+item.author;
        wid.innerText=auth;
    });
});