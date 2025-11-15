const form = document.getElementById("myForm");
const output = document.getElementById("output");

let setname = "Kirito";
let setpass = "123456";



if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // default page reload action is prevented

        const name = document.getElementById("name").value;
        const password = document.getElementById("password").value;
        
        if (name === setname && password === setpass) {
            output.textContent = "Login Successful!";
            output.style.color = "green";
        } else {
            output.textContent = "Invalid Credentials!";
            output.style.color = "red";
        }
    })
}