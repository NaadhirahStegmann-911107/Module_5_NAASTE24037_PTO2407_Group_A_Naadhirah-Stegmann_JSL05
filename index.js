// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Feel free to add even more songs
    { title: "Go All the Way", artist: "Raspberries", genre: "Rock" },
    { title: "Reasons", artist: "Earth, Wind & Fire", genre: "R&B" },
    { title: "Wham Bam", artist: "Silver", genre: "Pop"},
    { title: "Flashlight", artist: "Parliment-Funkadelic", genre: "R&B" },
    { title: "Bring It on Home to Me", artist: "Sam Cooke", genre: "R&B" },

];


// Object containing each Guardian's preferred genre
const guardians = [
    {name: "Star-Lord", genre: "Rock"},
    {name: "Gamora", genre: "Pop"},
    // Add preferences for Drax, Rocket, and Groot
    {name: "Drax", genre: "R&B"},
    {name: "Rocket", genre: "Rock"},
    {name: "Groot", genre: "Pop"},
];

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    // Your code here
    return guardians.map(guardian =>({ 
        guardian: guardian.name, 
        playlist: songs.filter(song => song.genre === guardian.genre)
    }) )
    
    }
 

function displayPlaylist(playlist) {
    const playlistDiv = document.getElementById("playlists");
    playlistDiv.innerHTML = "";
    playlist.forEach( ({guardian, playlist}) =>{
        const guardianDiv = document.createElement("div");
        guardianDiv.classList.add("playlist");
        guardianDiv.innerHTML = `<h2>${guardian}</h2>`; 
        const songList = document.createElement("ul");
        playlist.forEach(song => {
            const songItem = document.createElement("li");
            songItem.innerHTML = `<div><span class= "song-title">${song.title}</span> by ${song.artist}</div>`;
            songList.appendChild(songItem);
        });
        guardianDiv.appendChild(songList);
        playlistDiv.appendChild(guardianDiv);
    }) 
}
            
         
// Call generatePlaylist and display the playlists for each Guardian
const playlist = generatePlaylist(guardians, songs);

displayPlaylist(playlist);