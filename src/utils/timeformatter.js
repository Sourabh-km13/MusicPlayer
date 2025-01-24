import formatDuration from "format-duration"



export function timeFormatter(timeinsec=0){
    return formatDuration((timeinsec*1000))
}