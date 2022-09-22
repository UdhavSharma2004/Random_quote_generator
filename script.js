const quoteobj=[
    ["Start writing, no matter what. The water does not flow until the faucet is turned on."],
    ["Get it down. Take chances. It may be bad, but it's the only way you can do anything really good."],
    ["The first draft is just you telling yourself the story."],
    ["You can always edit a bad page. You can't edit a blank page"],
    ["The most valuable of all talents is that of never using two words when one will do. "]
]
const writerobj=[
    ["- Louis L'Amour"],
    ["- William Faulkner"],
    ["- Terry Pratchett"],
    ["- Jodi Picoult"],
    ["- Thomas Jefferson"]
]
let qid=document.getElementById("qte");
let wid=document.getElementById("wrtr");
let bid=document.getElementById("btn");

bid.addEventListener("click",function(){
    let ran= Math.floor(Math.random()*5);
    qid.innerText=`${quoteobj[ran]}`;
    wid.innerText=`${writerobj[ran]}`;
});