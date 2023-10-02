const songs = [
  {
    id: 0,
    name: "Song 1",
    artist: "Artist 1",
    img: "/j-music-project/tarsemjassar.jpeg",
    genre: "Pop",
    source: "/j-music-project/sidu295.mpeg",
  },
  {
    id: 1,
    name: "Song 2",
    artist: "Artist 2",
    img: "/j-music-project/babumaan.jpeg",
    genre: "Rock",
    source: "/j-music-project/sidu295.mpeg",
  },
  {
    id: 2,
    name: "Song 3",
    artist: "Artist 3",
    img: "/j-music-project/diljeet.jpeg",
    genre: "Hip-Hop",
    source: "/j-music-project/sidu295.mpeg",
  },
  // Add more songs here as needed
];

function currplay(curid) {
  const song = songs[curid];
  const songpic = document.getElementById("song-picture");
  const songcon = document.getElementById("song-control");
  songpic.innerHTML = `
    <div class="card card1">
        <img src="${song.img}" alt="${song.name}" class="card-img-top card-img">
       
    </div>
    
    <h5 class="card11">${song.name}</h5>
    <p class="card11">${song.artist}</p>
`;

  songcon.innerHTML = `<audio controls>
        <source src="${song.source}" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>`;

  const ar2 = document.getElementById("area-2");
  // ar2.innerHTML = ''; // Clear the existing content in "area-2"

  const addplaylistbtn = document.getElementById("add-playlist-btn");
  addplaylistbtn.addEventListener("click", () => {
    addToPlaylist(song, playlistIndex);
  });
}

function showsongs(genre) {
  const songlist = document.getElementById("all-songs");
  songlist.innerHTML = "";
  const filteredSongs = [];
  for (let i = 0; i < songs.length; i++) {
    if (!genre || songs[i].genre === genre) {
      filteredSongs.push(songs[i]);
    }
  }
  for (let i = 0; i < filteredSongs.length; i++) {
    const songItem = document.createElement("button");
    const song = filteredSongs[i];
    songItem.innerHTML = `
       
        <p>${song.name} - ${song.artist}</p>
        
    `;

    songlist.appendChild(songItem);

    songItem.addEventListener("click", () => {
      currplay(song.id);
    });
  }
}
const genreSelect = document.getElementById("genre-select");
genreSelect.addEventListener("change", () => {
  showsongs(genreSelect.value);
});
showsongs();
currplay(0);

const toggleTheme = document.getElementById("toggle-theme");
const themeStylesheet = document.getElementById("theme-stylesheet");
const currentTheme = localStorage.getItem("theme"); // Check for the saved theme

if (currentTheme) {
  themeStylesheet.href = currentTheme; // Set the theme based on the saved theme
}

// Add a change event listener to the theme toggle checkbox
toggleTheme.addEventListener("change", () => {
  // Toggle between dark and light themes
  if (themeStylesheet.href.endsWith("light-theme.css")) {
    themeStylesheet.href = "dark-theme.css"; // Switch to dark theme
  } else {
    themeStylesheet.href = "light-theme.css"; // Switch to light theme
  }

  // Save the theme choice to localStorage
  localStorage.setItem("theme", themeStylesheet.href);
});

function addToPlaylist(song, playlistIndex) {
  if (playlists[playlistIndex]) {
    playlists[playlistIndex].songs.push(song);

    console.log(`Added "${song.name}" to the playlist.`);
  }
}

const inputplay = document.getElementById("playlist-name-input");
const createplaybtn = document.getElementById("create-playlist-button");
const playlistSongs = document.getElementById("playlist-songs"); // Add this line

//const createPlaylist = document.getElementById('create-playlist');
//const AllPlaylist = document.getElementById('All Playlist');

// Initialize the playlists array

const playlists = [];
let playlistIndex = 1; // Initialize the index

// Function to create a new playlist
function createPlaylist(playlistName) {
  if (playlistName) {
    const newPlaylist = { index: playlistIndex, name: playlistName, songs: [] };
    playlists.push(newPlaylist);
    inputplay.value = "";
    displayPlaylists();
    playlistIndex++; // Increment the playlist index for the next playlist
  }
}

//code changes shuchi

// Function to display the playlists
function displayPlaylists() {
  playlistSongs.innerHTML = ""; // Clear the existing list
  playlists.forEach((playlist, index) => {
    const listItem = document.createElement("button");

    listItem.textContent = ` ${playlist.name}`;

    playlistSongs.appendChild(listItem);

    listItem.addEventListener("click", () => {
      const allplaylist = document.getElementById("all-playlist");
      const playlistindex = listItem.getAttribute("index");
      const playl = playlists[playlistindex];
      const n = playl;

      for (let i = 0; i < playl.length; i++) {
        const songItems = document.createElement("button");
        const songi = playl[i];
        songItems.innerHTML = `
                   
                    <p>${songi.name} - ${songi.artist}</p>
                    
                `;

        allplaylist.appendChild(songItems);

        songItems.addEventListener("click", () => {
          currplay(songi.id);
        });
      }
    });
  });
}

createplaybtn.addEventListener("click", () => {
  const inputname = inputplay.value;
  createPlaylist(inputname);
});

// Initial call to displayPlaylists
displayPlaylists();

// Function to display the current playlist

// const sentences =
//   `The quick brown fox jumps over the lazy dog.
//   Sphinx of black quartz, judge my vow.
//   Pack my box with five dozen liquor jugs.
//   How vexingly quick daft zebras jump!`
// ;

// let sec = 1;
// let stbtn=document.getElementById('start-btn');

// stbtn.addEventListener('click',()=>{
//     const inputElement=  document.getElementById('input')
//    document.getElementById('input').disabled=false;
//     let sen=document.getElementById('sentence');
//     let typear=document.createElement('h4');
//     typear.textContent=sentences;

//     sen.appendChild(typear);

//  stbtn.disabled=true;
// let seconds=sec;

// const timerElement = document.getElementById("timer");

// const timer = setInterval(() => {
//   seconds--;
//   timerElement.textContent = `Time: 00:${seconds}`;
//   if(seconds<=0)
//   {
//    timerElement.textContent=`Time: 00:00`;
//    clearInterval(timer);
//     document.getElementById('input').disabled=true;
//     stbtn.disabled=true;

//     document.getElementById('result').style.display='block';

//     let ret=document.getElementById('retry-btn');
//     ret.addEventListener('click',()=>{
//         stbtn.disabled=false;
//         document.getElementById('result').style.display='none';
//         document.getElementById('input').value='';
//        sen.textContent='';
//      seconds=sec;

// /*************/

//     })
//   }
// }, 1000);

// })
