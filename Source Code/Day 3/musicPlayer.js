/**
 * CHALLENGE 1
 * You have a list of songs you want to play in an array `songs`.
 * Define a function `musicPlayer` that takes one argument, an array of objects,
 * where each object is a song. `musicPlayer` will iterate/loop through the array
 * and print all the songs and artists to the console in the following format:
 * `Now playing: <Song> by <Artist>`.
 */


// musicPlayer(songs); // => should log:
// // Now playing: "Toxic" by Britney Spears
// // Now playing: "Sun is Sunshine" by Bob Marley
// // Now playing: "Easy On Me" by Adele
// // Now playing: "DNA" by BTS

const songs = [
  { songName: 'Toxic', artistName: 'Britney Spears' },
  { songName: 'Sun is Sunshine', artistName: 'Bob Marley' },
  { songName: 'Easy On Me', artistName: 'Adele' },
  { songName: 'DNA', artistName: 'BTS' },
];

function musicPlayer(songs){
  for(let i =0; i<songs.length;i++){
      console.log(`Now Playing : ${songs[i].songName} by ${songs[i].artistName}`)
  }
}
// musicPlayer(songs); 


// Using Modified For Loop Syntax

const musicPlayer2 = function (songs) {

  for (const song of songs)
  {
     console.log(`Now Playing : ${song.songName} by ${song.artistName}`)

  }
  
}

musicPlayer2(songs);