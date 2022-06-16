import Player from '@vimeo/player';
import _ from "lodash";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";
const SECONDS = localStorage.getItem(LOCALSTORAGE_KEY);

if(SECONDS) {
    const SECONDS_PARSED = JSON.parse(SECONDS);
    player.setCurrentTime(SECONDS_PARSED)
        .then(seconds => {
            seconds = SECONDS_PARSED;
        })
        
        .catch(error => {
            console.error(error);
        })
}

player.on('timeupdate', _.throttle(() => {
    player.getCurrentTime()
        .then(seconds => {
            
            localStorage.setItem(LOCALSTORAGE_KEY, seconds);
        })
        
        .catch(error => {
            console.error(error);
        })
}, 3000));