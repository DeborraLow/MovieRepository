//Array that holds the Movie title & Movie Poster values
var movies = [];
movies[0] = ["Who Framed Roger Rabbit?", "../Images/WhoFramedRogerRabbit.jpg"];
movies[1] = ["Pacific Rim", "../Images/PacificRim.jpg"];
movies[2] = ["Space Jam", "../Images/SpaceJam.jpg"];
movies[3] = ["Citizen Kane", "../Images/CitizenKane.jpg"];
movies[4] = ["The Blair Witch Project", "../Images/TheBlairWitchProject.jpg"];
movies[5] = ["Jaws", "../Images/Jaws.jpg"];
movies[6] = ["Finding Nemo", "../Images/FindingNemo.jpg"];
movies[7] = ["Inception", "../Images/Inception.jpg"];

//Array that isued to help generate the movie list
MovieListArr = [];

//Grabs and displays the values from the movies array into their appropriate areas
function Display_Movie_List() {
    for (var i = 0; i < movies.length; i++)
    {
        MovieListArr.push(movies[i][0]);
    }

    for (w = 0; w < movies.length; w++)
        if(MovieListArr.indexOf(movies[w][0]) != -1)
        {
            var table = document.getElementById('Movie_List_Table');
            var row = table.insertRow(-1);
            var postercell   = row.insertCell(0).innerHTML = "<img src='" + movies[w][1] + "' " + "id='" + movies[w][0] + "' />";
            var titlecell = row.insertCell(1).innerHTML = movies[w][0];
            
            var AddtoList = document.createElement('input');
            AddtoList.type = 'button';
            AddtoList.value = 'Add to Cart';
            AddtoList.setAttribute('onclick', "Add_Movie_To_List();");
            var AddtoListcell = row.insertCell(2).appendChild(AddtoList);
            //img1.setAttribute('src', MoviePosters[arr[0]]);
            //img1.setAttribute('onclick', "document.location='MoviesBios.html#" + movieIndex[arr[0]] + "'");
            //img1.setAttribute('style', 'cursor:pointer');
            //var checkboxcell = row.insertCell(2).innerHTML = "<input type='checkbox' id='" + movies[w][0] + "Box'" + "onclick=" + "'"     //'alert('grah');'></input>";
        }
    }

//Allows the user to search for a specific movie title in the movie list
function SearchDropdown() {
    for (var z = 0; z < movies.length; z++)
    {
        if (MovieListArr.indexOf(movies[z][0]) != -1)
        {
            var search = document.getElementById('Search');
            search.innerHTML += "<option value='" + z + "'>" + movies[z][0] + "</option>";
        }
    }
}

function SearchMovies()
{
    var movieselected = document.getElementById('Search');
    document.location="Movie_List.html#" + movies[movieselected.value][0];
}

//Array that holds the movies that were selected
List_Items = [];

//Adds a movie to the Cart when a movie' checkbox is checked
function Add_Movie_To_List()
{
    for (c = 0; c < movies.length; c++)
    {
            var Cart = document.getElementById('Movie_List');
            var li = document.createElement('li');
            Cart.appendChild(li);
            Cart.innerHTML = movies[c][0];
    }
}

//Displays the checkout details according to the movies selected in the Cart 
function Start_Checkout()
{
    document.getElementById('Checkout').style.display = "block";
    document.location = "Movie_List.html#Checkout";
    NumMovies = 0;
    var NumberSelected = document.getElementById('Number_Movies_Selected');
    for (x = 0; x < 8; x++)
    {
        if (document.getElementByIdf('Movie_List' + x).checked) {
            alert(NumMovies);
            NumMovies = NumMovies + 1;
            
            document.getElementById('Number_Movies_Selected').innerHTML = NumMovies;
        }
    }

    var TotalPrice = NumberSelected.value * 5;
    document.getElementById('Total_Cost').innerHTML = TotalPrice;
}

//Confirms the purchase of movie(s)
function Confirm_Purchase()
{
    var Purchase_Prompt = document.getElementById('Confirm_Purchase');
    if (NumMovies == 0) {
        Purchase_Prompt.innerHTML = "You have not selected any Movies yet! Purchase Incomplete.";
    }
    else {
        Purchase_Prompt.innerHTML = "Purchase Complete. Thank you for your patronage.";
    }
}