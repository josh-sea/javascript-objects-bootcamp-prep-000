var playlist = {artistName: "songTitle"};
function updatePlaylist(playList, artistName, songTitle) {
  playList[`${artistName}`]=songTitle
  return playList
}

function removeFromPlaylist(playListObj, artistName) {
 return Object.assign({}, {playListObj: `${artistName}`})
}
