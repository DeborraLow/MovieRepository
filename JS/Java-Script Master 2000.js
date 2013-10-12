var UsernameArray = []; //Array that holds the Username values
var PasswordArray = []; //Array that holds the Password values

UsernameArray[0] = "Benedict";
UsernameArray[1] = "Nerd";
UsernameArray[2] = "Matt";

PasswordArray[0] = "sherlock";
PasswordArray[1] = "cubed";
PasswordArray[2] = "doctor";

//Validates user login based upon user input, if validation passes, the user is logged in
function ValidateLogin() 
{
    var Username = document.getElementById('Username_input');
    var Password = document.getElementById('Password_input');

    if (Username.value == "") {
        alert('Username field is blank. Please enter your Username.');
    }

    if (Password.value == "") {
        alert('Password is field is blank. Please enter your Password');
    }

    if (Password.value.length < 5) {
        alert('Password entered is too short.');
    }

    if (UsernameArray.indexOf(Username.value) > -1) {
        var indexNumber = UsernameArray.indexOf(Username.value);
        console.log(indexNumber);
        var getPassword = PasswordArray[indexNumber];

        if (Password.value == getPassword) {
            document.cookie = "name=" + Username.value + "#;";
            location.reload();
            return true;
        }

    else {
        alert("Username & Password combination incorrect. Please try again.");
    }
    }
}

//Array that holds the Movie title values
var movieIndex = [
        "Who Framed Roger Rabbit?",
        "Pacific Rim",
        "Space Jam",
        "Citizen Kane",
        "The Blair Witch Project",
        "Jaws",
        "Finding Nemo",
        "Inception"
]
movieIndex.sort();
//Array that holds the Movie posters values
var MoviePosters = [
'../Images/Jaws.jpg',
'../Images/CitizenKane.jpg',
'../Images/WhoFramedRogerRabbit.jpg',
'../Images/FindingNemo.jpg',
'../Images/TheBlairWitchProject.jpg',
'../Images/PacificRim.jpg',
'../Images/Inception.jpg',
'../Images/SpaceJam.jpg'];
MoviePosters.sort();

//Will logout a currently logged in user
function Logout()
{
    document.cookie = "name=";
    location.reload();
}

//Checks whether the user is logged in, then displays the appropriate Login details.
function Is_Login()
{
    var x = document.cookie.indexOf("name=", 0);
    var y = document.cookie.indexOf("#", x);
    var Cookie_Username = document.cookie.substring(x + 5, y);

    if (document.cookie !== "name=" || "")
    {
        var L_Bar = document.getElementById('Login_Bar');
        L_Bar.style.display = "none";
        document.getElementById('Loggedin_Username').innerHTML = "<a class='Small_Bold'>" + "Welcome," + "</a>" + "<a id='Username_Font'>" + Cookie_Username + "</a>";
    }

    else
    {
        var L_Bar_Loggedin = document.getElementById('Login_Bar_Loggedin');
        L_Bar_Loggedin.style.display = "none";
        var L_Bar = document.getElementById('Login_Bar');
        L_Bar.style.display = "block";
       
        
    }
}

//Displays the login detail fields 
function showme() {
    L_Credentials = document.getElementById('Login_Credentials');
    L_Credentials.style.display = "block";
}

//Hides the login detail fields
function hideme() {
    L_Credentials = document.getElementById('Login_Credentials');
    L_Credentials.style.display = "none";
}

//Will toggle the between hiding and displaying the login detail fields
var IsLoginVisible = false;
function togglehiding()
{
    switch (IsLoginVisible)
    {
        case true:
            hideme();
            IsLoginVisible = false;
            break;
            
        case false:
            showme();
            IsLoginVisible = true;
            break;
    }
}

//Validates the password confirmation
function Validate_PasswordMatch()
{
    var Field_2 = document.getElementById('Password').value;
    var Field_3 = document.getElementById('C_Password').value;

    if (Field_2 == Field_3)
    {
        document.getElementById('Wizard_Password_Match').innerHTML = "<b>Password matches.</b>";
        return true;
    }

    else
    {
        document.getElementById('Wizard_Password_Match').innerHTML = "<b>Password does not match. Please retype Password.</b>";
        return false;
    }

}

//Validates email address by comparing to commonly used email address reg
function Validate_Email()
{
    var UserInput = document.getElementById('Email');

    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(UserInput.value) == false) {
        document.getElementById('Wizard_Email').innerHTML = "<b>Please enter a valid E-mail address.</b>";
        return false;
    }

    else
    {
        document.getElementById('Wizard_Email').innerHTML = "";
        return true;
    }
}

//Validates individual fields for null value.
function Validate_Null(elem)
{
    if (elem.value == "" || elem.value == null)
    {
        alert('Please provide' + elem.name + '.');

        return false;
    }

}

//Runs Validate_Null on all fields.
function ValidateAll_Null()
{
    Validate_Null(document.getElementById('Username'));
    Validate_Null(document.getElementById('Password'));
    Validate_Null(document.getElementById('C_Password'));
    Validate_Null(document.getElementById('Email'));
}

function Confirm_Registration()
{
    var Confirm = window.confirm('Are you sure you want to confirm registration?');
    if (Confirm) {
        alert('Registration Completed, Welcome to The Movie Repository!');
        window.location = "Homepage.html";
    }

    else { }
}

//Randomly generates images and slots them in appropriate image areas
function GenRandomImage() {
    var arr = []
    while (arr.length < 3) {
        var randomnumber = Math.ceil(Math.random() * MoviePosters.length - 1)
        var found = false;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == randomnumber) { found = true; break }
        }
        if (!found) arr[arr.length] = randomnumber;
    }
    
    var img1 = document.createElement('img');
    img1.setAttribute('src', MoviePosters[arr[0]]);
    img1.setAttribute('onclick', "document.location='MoviesBios.html#" + movieIndex[arr[0]] + "'");
    img1.setAttribute('style', 'cursor:pointer');

    var img2 = document.createElement('img');
    img2.setAttribute('src', MoviePosters[arr[1]]);
    img2.setAttribute('onclick', "document.location='MoviesBios.html#" + movieIndex[arr[1]] + "'");
    img2.setAttribute('style', 'cursor:pointer');

    var img3 = document.createElement('img');
    img3.setAttribute('src', MoviePosters[arr[2]]);
    img3.setAttribute('onclick', "document.location='MoviesBios.html#" + movieIndex[arr[2]] + "'");
    img3.setAttribute('style', 'cursor:pointer');

    document.getElementById('Random_Image').appendChild(img1);
    document.getElementById('Classics_Image1').appendChild(img2);
    document.getElementById('Classics_Image2').appendChild(img3);
}