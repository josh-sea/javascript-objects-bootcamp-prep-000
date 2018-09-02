var playlist = {artistName: "songTitle"};
function updatePlayList(playList, artistName, songTitle) {
  playList[`${artistName}`]=songTitle
  return playList
}