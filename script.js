const from=document.querySelector("#FROM");
const to=document.querySelector("#TO");
const result=document.querySelector("#RESULT");
const amount =document.querySelector("#AMOUNT");
const button =document.querySelector("#BUTTON");
button.addEventListener("click",function(){
      let inputf=from.value;
     let inputt=to.value;
     let amt=amount.value;
     fetch(`https://api.exchangerate-api.com/v4/latest/${inputf}`)
     .then(response => {
           return response.json();
     })
     .then(data =>  {
      let rate = data.rates[inputt];
      let total = rate * amt;
      result.innerHTML = `${amt} ${inputf} = ${total}
      ${inputt}`;
   });


})

