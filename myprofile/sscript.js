/*const firebaseConfig = {
    apiKey: "AIzaSyBeXgVf3uKHa_qPiAhMlc_2tsiQZNj9LfA",
    authDomain: "surveyfrom-24fae.firebaseapp.com",
    databaseURL: "https://surveyfrom-24fae-default-rtdb.firebaseio.com",
    projectId: "surveyfrom-24fae",
    storageBucket: "surveyfrom-24fae.appspot.com",
    messagingSenderId: "1054912302334",
    appId: "1:1054912302334:web:b37bfb5bcfb64eb6d129af"
  };
firbase.initializeApp(firebaseConfig);

var surveyfromDB= firebaseConfig.database().ref('surveyfrom');*/

document.getElementById('surveyform').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const formMessage = document.getElementById('form-message');

    if (name && email && message) {
        formMessage.textContent = 'Thank you for your message! We will get connected through email';
        formMessage.style.color = 'green';
    } else {
        formMessage.textContent = 'Please fill out all fields!';
        formMessage.style.color = 'red';
    }
});
/*
    <!
    <style>
    @import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css);
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poiret+One&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&family=Shadows+Into+Light&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&family=Shadows+Into+Light&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');
body {
    font-family: 'Poppins',sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

header {
   background-color: #081b29;
    background-repeat: no-repeat;
    background-size: cover;
    color: #00abf0;
    padding: 40px 0;
    text-align: center;
}

header .profile-pic img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border: 2px solid #00abf0;
    margin-bottom: 10px;
    box-shadow: 0px 0px 15px #00abf0;
    transition: 0.5s;
    cursor: none;
}
.profile-pic img:hover{
    transform: scale(1.1);
}
h1{
    color: white;
    font-family: "Dancing Script", cursive;
    font-size: 40px;
    font-weight:800;
}
header .container p{
    font-size: 17px;
    font-weight: 600;
}

nav {
    background-color: #00abf0;
    color: #081b29;
    text-align: center;
    padding: 10px 0;
    height: 22px;
}

nav ul {
    margin:  auto;
    padding: auto;
    cursor: pointer;
}

nav ul li {
    display: inline;
    margin: 0 15px;
    padding: 5px;
}

nav ul li a {
    color:#081b29;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
}

nav ul li:hover{
    border: 2px solid #081b29;
    border-top:none;
    border-left: none;
    border-right: none;
    border-bottom-width: 5px;
}

main {
    padding: 20px;
}

section {
    margin-bottom: 40px;
}

.container {
    max-width: 800px;
    margin: 0 auto;
}

h2 {
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
}

ul {
    list-style: none;
    padding: 0;
}

ul li {
    margin-bottom: 15px;
}
.project-list, .skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    color: black;
}

.project, .skill {
    flex: 1 1 30%;
    padding: 15px;
    background-color: #eaeaea;
    border-radius: 8px;
    border: 2px solid  #081b29;
    transition: 1s;
    cursor: pointer;
}
.project:hover{
    transform: scale(1.1);
    z-index: 2;
}
.skill:hover{
    transform: scale(1.1);
    z-index: 2;
}
form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

form input, form textarea, form button {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

form button {
    background-color:#081b29;
    width: 300px;
    margin: 2px auto;
    color: #00abf0;
    border: none;
    cursor: pointer;
    transition: 1s ;
}

form button:hover {
    background: #081b29;
    transform: scale(1.1);
}

#form-message {
    margin-top: 15px;
    font-size: 16px;
    text-align: center;
}

footer {
    background-color: #081b29;
    color: #00abf0;
    text-align: center;
    padding: 15px 0;
}
.container i{
    padding: 5px;
    border: none;
    cursor: pointer;
    color: #00abf0;
}
</style>!>
*/