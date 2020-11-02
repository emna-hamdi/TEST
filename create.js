const form = document.querySelector(".form");
const users = JSON.parse(localStorage.getItem("users")) || [];

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const fname = document.querySelector("#exampleFirstName");
    const lastname = document.querySelector("#exampleLasttName");
    const mail = document.querySelector("#exampleEmail11");
    const password = document.querySelector("#examplePassword11");
  
    
    let random = Math.random();
    let id = Math.floor(random * 100);
      const user = {
        nom: fname.value,
        prenom: lastname.value,
        email: mail.value,
        password: password.value,
        id: id,
      };
    
    console.log(user, users);
    const unique = users.find((user) => user.email === mail.value);
    if (!unique) {
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users))
      // location.href = "";
    } else {
      alert("email address already in use");
    }
    form.reset();
})
 