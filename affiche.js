
//-----------affichage

const users = JSON.parse(localStorage.getItem("users")) || [];
let user={};
const tBody = document.querySelector("#test-table");
const genRow = (user)=>{
    const row = `
  
  <tr id=${user.id}>
        <td class="clearfix">${user.prenom} </td>
        <td >${user.nom} </td>
        
        <td >

        <button id="buttonDelete" class="btn btn-danger delete modal-open" data-toggle="modal"> Delete</button>      
        <button  id="buttonEdit" class="btn btn-success edite" data-toggle="modal">Edit</button>
  
        </td>
    </tr>
    `
    tBody.innerHTML += row
}
console.log('test');
users.forEach(user=>{
    genRow(user)
})

//--------------delete

const butt=document.querySelectorAll("#buttonDelete")
const deleteUser = (e) => {
  
  const filteredUser = users.filter((user) => user.id!= e.target.parentElement.parentElement.id );
  return filteredUser
};
butt.forEach(button=> button.addEventListener("click", (e) => {
  //e.preventDefault();
  if(e.target.classList.contains("delete")){
    const users = deleteUser(e);
    console.log(e.target.parentElement.parentElement);
    e.target.parentElement.parentElement.remove();
    
    localStorage.setItem("users", JSON.stringify(users));
  }
}))
// ----------------------update
const butt2=document.querySelectorAll("#buttonEdit")
const EditUser=(e)=>{
  const findUser = users.find((user)=> user.id ==e.target.parentElement.parentElement.id)
  return findUser

}
butt2.forEach(button=>button.addEventListener("click",(e)=>{
  if(e.target.classList.contains("edite")){
const user=EditUser(e);
localStorage.setItem("user", JSON.stringify(user));
location.href="./update.html"

  }
}))