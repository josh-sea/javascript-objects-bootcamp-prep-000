var playlist = {artistName: "songTitle"};
function updatePlaylist(playList, artistName, songTitle) {
  playList[`${artistName}`]=songTitle
  return playList
}

function removeFromPlaylist(playList, artistName) {
 delete playListObj.artistName;
 return playListObj 
}

// Object.assign({}, {playListObj: `${artistName}`})