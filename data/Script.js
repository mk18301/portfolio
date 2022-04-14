function required()
{
    var name = document.forms["Contact me"]["name"].value;
    var email = document.forms["Contact me"]["email"].value;
    
if (name == "")
{
    document.getElementById('namepanel').innerHTML="You did not enter your name please enter it and resubmit";
    return false;
}

if (email == "")
{
    document.getElementById('emailpanel').innerHTML="You did not enter your email address please enter it and resubmit";
    return false;
}
}

document.addEventListener("keypress", function onPress(event) {
    if (event.key === "a"){
        window.location.replace("index.html");

    }
});

document.addEventListener("keypress", function onPress(event) {
    if (event.key === "j"){
        window.location.replace("pastjobs.html");

    }
});

document.addEventListener("keypress", function onPress(event) {
    if (event.key === "c"){
        window.location.replace("contacts.html");

    }
});

var zoom = 1;
    var zoomStep = 0.2;

document.addEventListener("keypress", function onPress(event) {
    if (event.key === "+"){
         zoomin() 
    }
})

function zoomin(){
    zoom += zoomStep; 
    document.body.style.transform = "scale("+zoom+")"
}

document.addEventListener("keypress", function onPress(event) {
    if (event.key === "-"){
        zoomout()
    }
})

function zoomout(){
    zoom -= zoomStep; 
    document.body.style.transform = "scale("+zoom+")"
    
}

var data = { 
    "Bio": {
            "myBio": [{
                "bio":  {"name":"Mavrick Kickhaver", "Birthdate":"3/21/1999", "age":22, "family":"Mother, Father, Brother"}
            }
            ]
        }
    }
  
    var bioList = document.getElementById("");
      
    data.Bio.myBio.forEach(function(element) {
      myBio.insertAdjacentHTML( 'beforeend',"<li>" + "Name" + " : " + element.bio.name+ " </li>");
      myBio.insertAdjacentHTML( 'beforeend',"<li>" + "Birthdate" + " : " + element.bio.Birthdate+ " </li>");
      myBio.insertAdjacentHTML( 'beforeend',"<li>" + "Age" + " : " + element.bio.age+ " </li>");
      myBio.insertAdjacentHTML( 'beforeend',"<li>" + "Family" + " : " + element.bio.family+ " </li>");
  
    });