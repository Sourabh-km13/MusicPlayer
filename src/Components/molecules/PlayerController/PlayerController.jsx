import { MdShuffle ,
    MdSkipNext,
    MdSkipPrevious,
    MdOutlinePlayCircleFilled,
    MdOutlinePauseCircleFilled,
    MdOutlineRepeat,
    MdPlayCircleFilled
    } from "react-icons/md";

import ReactHowler from "react-howler";
import { timeFormatter } from "../../../utils/timeformatter";
import { useEffect } from "react";


export default function PlayerController({
    playerstate,
    handleSongLoad,
    soundref,
    handleShuffle,
    previousSong,
    setPlayerstate,
    nextSong,
    handleSeek,
    songs,
}) {
    return (
        <div className="text-white">
            <ReactHowler
                ref={soundref}
                src={songs[playerstate.index].url}
                playing={playerstate.playing}
                onLoad={handleSongLoad}
                onEnd={nextSong} // Automatically play the next song
            />
            <div className="flex justify-center items-center space-x-4 py-2 px-16 text-gray-400 w-fit">
                <button
                    className={playerstate.shuffle ? "text-2xl text-white" : "text-2xl"}
                    onClick={handleShuffle}
                >
                    <MdShuffle />
                </button>
                <button className="text-3xl" onClick={previousSong}>
                    <MdSkipPrevious />
                </button>
                {playerstate.playing ? (
                    <button
                        className="text-4xl text-white"
                        onClick={() =>
                            setPlayerstate((prevState) => ({
                                ...prevState,
                                playing: false,
                            }))
                        }
                    >
                        <MdOutlinePauseCircleFilled />
                    </button>
                ) : (
                    <button
                        className="text-4xl text-white"
                        onClick={() =>
                            setTimeout(() => {
                                setPlayerstate((prevState) => ({
                                    ...prevState,
                                    playing: true,
                                }))
                            }, 0)
                        }
                    >
                        <MdPlayCircleFilled />
                    </button>
                )}
                <button className="text-3xl" onClick={nextSong}>
                    <MdSkipNext />
                </button>
                <button className="text-2xl">
                    <MdOutlineRepeat />
                </button>
            </div>
            {/* Progress bar */}
            <div className="flex items-center justify-center space-x-2 text-xs text-gray-400 py-2">
                <div className="text-left">{timeFormatter(playerstate.seek)}</div>
                <div className="w-full">
                    <input
                        type="range"
                        value={playerstate.seek}
                        className="w-full bg-gray-800 accent-violet-600"
                        min={0}
                        max={playerstate.duration || 0}
                        step={0.5}
                        onChange={handleSeek}
                        onMouseDown={() =>
                            setPlayerstate((prevState) => ({
                                ...prevState,
                                isSeeking: true,
                            }))
                        }
                        onMouseUp={() =>
                            setPlayerstate((prevState) => ({
                                ...prevState,
                                isSeeking: false,
                            }))
                        }
                    />
                </div>
                <div>{timeFormatter(playerstate.duration)}</div>
            </div>
        </div>
    );
}
