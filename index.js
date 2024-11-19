/* (async () => {
    try {
        const response = await fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxg8FQ25B6bWR2lkk9vUWtMgydfjzPV7l2og&s');
        console.log(response);
        const blob = await response.blob();
        console.log(blob)
        document.querySelector('#myImage').src = URL.createObjectURL(blob);
    } catch (err) {
        console.log(err)
    }
})()
 */// id selector
 const content = document.querySelector("#content");

 // Loading page
 window.addEventListener("load", () => {
     getUsers();
 });
 
 async function getUsers() {
     let html = "";
     try {
         const response = await fetch("https://bscs3a-crud-api.onrender.com/api/members", { mode: "cors" });
         console.log(response);
         const data = await response.json();
         console.log(data);
         data.forEach((element) => {
             html += `<li>${element.first_name} ${element.last_name}</li>`;
         });
         content.innerHTML = html;
     } catch (error) {
         console.log(error);
     }
 }
 