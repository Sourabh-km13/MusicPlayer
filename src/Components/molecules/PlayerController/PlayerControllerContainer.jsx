import React from 'react'
import  Audio1  from "../../../assets/music1.mp3";
import  Audio2  from "../../../assets/music2.mp3";
import  Audio3 from  "../../../assets/music3.mp3";
import  Audio4 from  "../../../assets/music4.mp3";
import { useRef ,useState, useEffect } from "react";
import PlayerController from './PlayerController';
export default function PlayerControllerContainer() {
    const songs = [
            {
              id: 1,
              name: "song1",
              artist: "Artist 1",
              image: "https://robohash.org/song1",
              url: Audio1
            },
            {
              id: 2,
              name: "song2",
              artist: "Artist 2",
              image: "https://robohash.org/song2",
              url: Audio2
            },
            {
                id:3,
                name:"song3",
                artist:"artist3",
                image:"https://robohash.org/song3",
                url:Audio3
            },
            {
                id:4,
                name:"song4",
                artist:"artist4",
                image:"https://robohash.org/song4",
                url:Audio4
            }
          ]
        const soundref = useRef(null)
    
        const [playerstate, setPlayerstate] = useState({
            playing:false,
            index:0,
            seek:0.0,
            isSeeking:false,
            repeat:false,
            shuffle:false,
            duration:0.0,
        })
    
        function nextSong() {
            console.log("clicked next song");
        
            if (playerstate.shuffle) {
                const randomIndex = Math.floor(Math.random() * songs.length);
                setPlayerstate((prevState) => ({
                    ...prevState,
                    index: (randomIndex === prevState.index) ? (randomIndex + 1) % songs.length : randomIndex,
                }));
            } else {
                setPlayerstate((prevState) => ({
                    ...prevState,
                    index: (prevState.index + 1) % songs.length,
                }));
            }
        }
        
        function previousSong() {
            console.log("previous song func called");
        
            setPlayerstate((prevState) => ({
                ...prevState,
                index: (prevState.index - 1 + songs.length) % songs.length,
            }));
        }
        
        function handleShuffle() {
            console.log("shuffle called");
        
            setPlayerstate((prevState) => ({
                ...prevState,
                shuffle: !prevState.shuffle,
            }));
        }
        
        function handleSongLoad() {
            if (soundref.current) {
                setPlayerstate((prevState) => ({
                    ...prevState,
                    duration: soundref.current.duration(),
                    seek:0
                }));
                
            }
        }
        
        
        function handleSeek(e) {
                     
            const value = parseFloat(e.target.value);
            if (soundref.current) {
            soundref.current.seek(value);
            }
            setPlayerstate((prevState) => ({
            ...prevState,
            seek: value,
            }));
        }
        
        // Isolate `seek` updates to prevent interference
        // useEffect(() => {
        //     let id;
        //     if (playerstate.playing && !playerstate.isSeeking) {
        //         const updateSeek = () => {
                                     
        //             setPlayerstate((prevState)=>( {
        //                 ...prevState,
        //                 seek: soundref.current?.seek()
        //             }));
        //             id = requestAnimationFrame(updateSeek);
        //         };
        //         id = requestAnimationFrame(updateSeek);
        //         return () => cancelAnimationFrame(id);
        //     }
        //     cancelAnimationFrame(id);
        // }, [playerstate.playing, playerstate.isSeeking]);
        
        useEffect(() => {
            if (playerstate.playing && !playerstate.isSeeking) {
                const updateSeek = () => {
                    setPlayerstate((prevState) => ({
                        ...prevState,
                        seek: soundref.current?.seek() || 0,
                    }));
                    requestAnimationFrame(updateSeek);
                };
                const id = requestAnimationFrame(updateSeek);
                return () => cancelAnimationFrame(id);
            }
        }, [playerstate.playing, playerstate.isSeeking]);
        
       
        return (
            <PlayerController
                playerstate={playerstate}
                setPlayerstate={setPlayerstate}
                handleSeek={handleSeek}
                handleShuffle={handleShuffle}
                handleSongLoad={handleSongLoad}
                previousSong={previousSong}
                nextSong={nextSong}
                soundref={soundref}
                songs={songs}
            />
        );
        
}
