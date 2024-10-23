// let data=document.getElementById("data");
// let button=document.getElementById("button");
// let readfile=new XMLHttpRequest();
// readfile.open("GET","dummy.txt");
// readfile.onload=()=>{
//     data.innerHTML=readfile.responseText
// }
// readfile.send();


let age=prompt("enter your age here");

const promise=new Promise((reslove,reject)=>{
    let num=age
    if (num>=18) {
      reslove()
        
    } else {
       reject()
    }
});
promise.then(()=>{
    alert("you are eligible")
}).catch(()=>{
    alert("you are not eligible")
})
