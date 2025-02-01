import React, { useContext } from 'react'
import songs from '../../../utils/songArray';
import { useRef, useEffect } from "react";
import PlayerController from './PlayerController';
import playerContext from './../../../Context/playerContext';
export default function PlayerControllerContainer() {

    const soundref = useRef(null);
    const {playerstate,setPlayerstate}=useContext(playerContext);


    function nextSong() {
        console.log("clicked next song");
        if (playerstate.shuffle) {
            const randomIndex = Math.floor(Math.random() * songs.length);
            setPlayerstate((prevState) => ({
                ...prevState,
                index: randomIndex === prevState.index ? (randomIndex + 1) % songs.length : randomIndex,
                seek: 0,
            }));
        } else {
            setPlayerstate((prevState) => ({
                ...prevState,
                index: (prevState.index + 1) % songs.length,
                seek: 0,
            }));
        }
    }

    function previousSong() {
        console.log("previous song func called");
        setPlayerstate((prevState) => ({
            ...prevState,
            index: (prevState.index - 1 + songs.length) % songs.length,
            seek: 0,
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
                seek: 0,
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

    // Synchronize `seek` with the current playback position
    useEffect(() => {
        let animationFrameId;

        if (playerstate.playing && !playerstate.isSeeking) {
            const updateSeek = () => {
                setPlayerstate((prevState) => ({
                    ...prevState,
                    seek: soundref.current?.seek() || 0,
                }));
                animationFrameId = requestAnimationFrame(updateSeek);
            };
            animationFrameId = requestAnimationFrame(updateSeek);
        }

        return () => cancelAnimationFrame(animationFrameId);
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
