import Song from "./Song/Song";
import { useDispatch, useSelector } from 'react-redux';
import { GET_SONGS } from "../../redux/types";
// import { setSongSlice } from "../../redux/slice/song";
import { useEffect } from "react";

const Songs = () => {

  const songs = useSelector(state => state.songs)
  const dispatch = useDispatch()

  useEffect(()=>{dispatch({type: GET_SONGS})},[])
  console.log(songs)

  return (
    <div>
      <Song
        song={{ title: "haha", album: "gg", artist: "lili", genre: "pop" }}
        onEdit={() => {
          console.log("edit");
        }}
        onDelete={() => {
          console.log("delete");
        }}
      />
    </div>
  );
};

export default Songs;
