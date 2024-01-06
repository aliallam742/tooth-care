
// function clearComments(){
//     userName.value="";
//     feedBackInput.value"
// }
// function run(){
//     addComment()
//     displayComments()
// }


var doctorName= document.getElementById("doctorName");
var selctedTime = document.getElementById("time");
var selctedDate = document.getElementById("date");
var username = document.getElementById("username");
var userEmail = document.getElementById("userEmail");
var userPhone = document.getElementById("userPhone");
var disData = document.getElementById("displayData");
var userData = [];

if(localStorage.getItem("dateTime") !=null){
    userData = JSON.parse(localStorage.getItem('dateTime'));
    displayData()
}

function addTime(){
        if(true){
            var times ={
                name : username.value,
                time : selctedTime.value,
                date : selctedDate.value,
                email : userEmail.value,
                phone : userPhone.value,
                doctor : doctorName.value
        }
            userData.push(times);
            localStorage.setItem("dateTime",JSON.stringify(userData));
            displayData()
        }else{
            alert("invalidusername")
        }
}
function deleteComment(commentIndex){
    userData.splice(commentIndex,1);
    localStorage.setItem("dateTime",JSON.stringify(userData));
    displayData();
}
function search(term){
    var cartona = ""
    for(var i =0 ; i < userData.length ; i++){
        if(userData[i].name.toLowerCase().includes(term.toLowerCase()) == true){ 
            cartona +=`
            <tr>
                <td>${userData[i].name}</td>
                <td>${userData[i].phone}</td>
                <td>${userData[i].doctor}</td>
                <td>${userData[i].date}</td>
                <td>${userData[i].time}</td>
                <td><div onclick="deleteComment(${i})" delete class="btn btn-sm btn-danger ">Delete</div></td>
            </tr>
        `
        }
    }
    disData.innerHTML = cartona;
} 
function displayData(){
    var cartona = ""
    for(var i = 0 ; i < userData.length ; i++){
        cartona +=`
        <tr>
            <td>${userData[i].name}</td>
            <td>${userData[i].doctor}</td>
            <td>${userData[i].date}</td>
            <td>${userData[i].time}</td>
            <td><div onclick="deleteComment(${i})" delete class="btn btn-sm btn-danger ">Delete</div></td>
        </tr>
    `
    }
    disData.innerHTML=cartona;
}

function validUserName(){
    var regx = /^[A-Z][a-z]{3,9}[0-9]{0,4}$/;
    if(regx.test(username.value) == true){
        return true
    }else{
        return false ;
    }
}









// var userName = document.getElementById("userName");
// var feedBackInput = document.getElementById("feedBackInput");
// var displayComment = document.getElementById("displayComment");
// var commentsContainer  = []

// if(localStorage.getItem("userComments") != null){
//     commentsContainer = JSON.parse(localStorage.getItem('userComments'));
//     displayComments()
// }

// function addComment(){

//     var comments ={
//             name : userName.value,
//             descreption : feedBackInput.value
//     }
//     if(comments.name === ""){
//         comments.name = "user system"
//     }if (comments.descreption === "") {
//         comments.descreption = "goooooooooooooooood"
//     }
//     commentsContainer.push(comments);
//     localStorage.setItem("userComments",JSON.stringify(commentsContainer));
//     displayComments()
// }
// function displayComments(){
//     var cartona = ""
//     for (var i = 0 ; i < commentsContainer.length ; i++){
//         cartona += `                    
//         <div class="user-comment">
//             <h6>${commentsContainer[i].name} : </h6>
//             <p class="comment lead px-3">${commentsContainer[i].descreption}</p>
//             <a class="btn btn-primary">Edite</a>
//             <a class="btn btn-danger">Delete</a>
//         </div>`
//     }
//     displayComment.innerHTML = cartona
// }