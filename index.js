document.addEventListener('DOMContentLoaded', function() {

    getInfo();
});
function getInfo(){
 fetch('http://localhost:3000/userInfo')
.then(res => res.json())
.then(renderInfo)
    
} 

function renderInfo(data) {
    const userInfo=document.getElementById("userInfo")
    for (let i = 0; i < data.length; i++) {
        const info=data[i]
        const unga=document.createElement("li")
    unga.innerHTML=`>>fetched-info display
    <p id="jiji">Name:${info.name}</p>
    <P>passport/id: ${info.numb}</p>
    <P>Ntsa.no: ${info.numb}</P>
    <P>Email: ${info.email}</p>
    <P>Password:${info.password}
    `
   userInfo.appendChild(unga)
   const btn=document.getElementById("cn")
   btn.addEventListener("click",()=>{
    const idName=document.getElementById("myname").value
    const newG=document.createElement("p")
    newG.innerHTML=idName
    userInfo.append(newG)
    
   })
   
    
} }
