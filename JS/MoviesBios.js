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

//Array that holds the Movie description and Movie Poster values
var movies = [];
movies[0] = ["Who Framed Roger Rabbit is a 1988 American fantasy comedy film directed by Robert Zemeckis. The film combines live action and animation. The screenplay by Jeffrey Price and Peter S. Seaman is based on Gary K. Wolf's novel Who Censored Roger Rabbit?, which depicts a world in which cartoon characters interact directly with human beings. It stars Bob Hoskins as private detective Eddie Valiant, who investigates a murder involving the famous cartoon character, Roger Rabbit.", "../Images/WhoFramedRogerRabbit.jpg"];
movies[1] = ["Pacific Rim is a 2013 American science fiction monster film directed by Guillermo del Toro, written by del Toro and Travis Beacham, and starring Charlie Hunnam, Idris Elba, Rinko Kikuchi, Charlie Day, Robert Kazinsky, Max Martini, and Ron Perlman. The film is set in the 2020s, when Earth is at war with the Kaijus,[note 1] colossal monsters which have emerged from an interdimensional portal on the floor of the Pacific Ocean. To combat the monsters, humanity unites to create the Jaegers: gigantic humanoid mecha, each controlled by two pilots whose minds are joined by a neural bridge. Focusing on the war's later days, the story follows Raleigh Becket, a washed-up Jaeger pilot called out of retirement and teamed with rookie pilot Mako Mori as part of a last-ditch effort to defeat the Kaijus.", "../Images/PacificRim.jpg"];
movies[2] = ["Space Jam is a 1996 American family live-action/animated sports comedy film starring Michael Jordan and featuring the Looney Tunes characters. The film was produced by Ivan Reitman, and directed by Joe Pytka, with Tony Cervone and Bruce W. Smith directing the animation.", "../Images/SpaceJam.jpg"];
movies[3] = ["Citizen Kane is a 1941 American drama film directed, co-written, produced by, and starring Orson Welles. The picture was Welles's first feature film. The film was nominated for Academy Awards in nine categories; it won an Academy Award for Best Writing (Original Screenplay) by Herman Mankiewicz and Welles. The story is a film à clef that examines the life and legacy of Charles Foster Kane, played by Welles, a character based in part upon the American newspaper magnate William Randolph Hearst, Chicago tycoons Samuel Insull and Harold McCormick, and aspects of Welles's own life. Upon its release, Hearst prohibited mention of the film in any of his newspapers. Kane's career in the publishing world is born of idealistic social service, but gradually evolves into a ruthless pursuit of power. Narrated principally through flashbacks, the story is revealed through the research of a newsreel reporter seeking to solve the mystery of the newspaper magnate's dying word: 'Rosebud.'", "../Images/CitizenKane.jpg"];
movies[4] = ["The Blair Witch Project is a 1999 American horror film written and directed by Eduardo Sánchez and Daniel Myrick. The film was produced by the Haxan Films production company. Though fictional, it is presented as 'found footage', as if pieced together from amateur footage, and popularised this style of horror movie. The film relates the story of three student filmmakers (Heather Donahue, Joshua Leonard, and Michael C. Williams) who disappeared while hiking in the Black Hills near Burkittsville, Maryland in 1994 to film a documentary about a local legend known as the Blair Witch.", "../Images/TheBlairWitchProject.jpg"];
movies[5] = ["Jaws is a 1975 American thriller film directed by Steven Spielberg and based on Peter Benchley's novel of the same name. The prototypical summer blockbuster, its release is regarded as a watershed moment in motion picture history. In the story, a giant man-eating great white shark attacks beachgoers on Amity Island, a fictional summer resort town, prompting the local police chief to hunt it with the help of a marine biologist and a professional shark hunter. The film stars Roy Scheider as police chief Martin Brody, Richard Dreyfuss as oceanographer Matt Hooper, Robert Shaw as shark hunter Quint, Murray Hamilton as the mayor of Amity Island, and Lorraine Gary as Brody's wife, Ellen. The screenplay is credited to both Benchley, who wrote the first drafts, and actor-writer Carl Gottlieb, who rewrote the script during principal photography.", "../Images/Jaws.jpg"];
movies[6] = ["Finding Nemo is a 2003 American computer-animated comedy-drama adventure film written and directed by Andrew Stanton, released by Walt Disney Pictures, and the fifth film produced by Pixar Animation Studios. It tells the story of the over-protective clownfish named Marlin (Albert Brooks) who, along with a regal tang named Dory (Ellen DeGeneres), searches for his abducted son Nemo (Alexander Gould) all the way to Sydney Harbour. Along the way, Marlin learns to take risks and let Nemo take care of himself.", "../Images/FindingNemo.jpg"];
movies[7] = ["Inception is a 2010 science fiction film written, co-produced, and directed by Christopher Nolan. The film stars a large ensemble cast that includes Leonardo DiCaprio, Ken Watanabe, Joseph Gordon-Levitt, Marion Cotillard, Ellen Page, Tom Hardy, Dileep Rao, Cillian Murphy, Tom Berenger, and Michael Caine. DiCaprio plays Dom Cobb, a thief who commits corporate espionage by infiltrating the subconscious of his targets. He is offered a chance to regain his old life as payment for a task considered to be impossible: 'inception', the implantation of another person's idea into a target's subconscious.", "../Images/Inception.jpg"];

//Defining variables for specific page areas
var Display_Section_1 = document.getElementById('Movie_Name');
var Display_Section_2 = document.getElementById('Movie_Description');
var Display_Section_3 = document.getElementById('Movie_Poster');
var Display_Section_4 = document.getElementById('Movie_Cost');

//Prompts the user if there is no data on the movie requested
function CheckMovie()
{
    var movieName = location.hash.substring(1, location.hash.length);
        if (movieIndex.indexOf(movieName) < 0) {
            alert("Movie does not exist. Sorry.");
            history.back();
        } else {
            Display_Movie_Bios(movieName);
        }
}

//Will grab and display appropriate values to specific areas of the Movie_Bios page
function Display_Movie_Bios(film)
{
    var indexNumber = movieIndex.indexOf(film);
    document.getElementById("Movie_Name").innerHTML = film;
    document.getElementById("Movie_Description").innerHTML = movies[indexNumber][0];

    var img = document.createElement('img');
    img.setAttribute('src', movies[indexNumber][1]);
    document.getElementById('Movie_Poster').appendChild(img);
}