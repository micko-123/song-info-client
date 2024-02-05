export interface Song {
  id: string;
  _id: string;
  title: string;
  album: string;
  artist: string;
  genre: string;
}

export interface RootState {
  songs: Song[];
}
