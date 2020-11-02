
const users = JSON.parse(localStorage.getItem("users")) || [];
const user = JSON.parse(localStorage.getItem("user")) || [];
const fname = document.querySelector("#exampleFirstName");
const lname = document.querySelector("#exampleLasttName");
const email = document.querySelector("#exampleEmail11");
const password = document.querySelector("#examplePassword11");

fname.value=user.nom;
lname.value=user.prenom;
email.value=user.email;
password.value=user.password;

const butt3=document.querySelector(".update")
 butt3.addEventListener("click",(e)=>
 {

    const user1 = {
        nom: fname.value,
        prenom: lname.value,
        email: email.value,
        password: password.value,
        id: user.id,
      };
    

        const newUsers=users.map(user=>{
            if(user.id ===user1.id){
             user=user1
             console.log(user);
            }
            return user
          })
            localStorage.setItem("users", JSON.stringify(newUsers));
       localStorage.removeItem("user")
     
      
    
 })
