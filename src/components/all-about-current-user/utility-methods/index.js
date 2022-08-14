/**
 * 
 * @param {*} timeInMillis 
 * @returns an object with time elapsed break downs, starting from 'days' till 'seconds'
 * recieves an initial time difference and then continuosly reduces it after each breakdown
 * and finally returns object with found time elapsed breakdowns to be used y other helper methods or as such
 */
let calculateTimeDifference = timeInMillis => {
    let dd = Math.floor(timeInMillis / 1000 / 60 / 60 / 24);
    timeInMillis -= dd * 1000 * 60 * 60 * 24;
    let hh = Math.floor(timeInMillis / 1000 / 60 / 60);
    timeInMillis -= hh * 1000 * 60 * 60
    let mm = Math.floor(timeInMillis / 1000 / 60)
    timeInMillis -= mm * 1000 * 60
    let secs = Math.floor(timeInMillis / 1000)
    timeInMillis -= secs * 1000
    // console.log(dd, ":", hh, ":", mm, ":", secs, "::::", timeInMillis)
    return {
        days: dd,
        hours: hh,
        mins: mm,
        secs: secs
    }
}

/**
 * 
 * @param {*} time 
 * @returns time elapsed string, i.e. 1 day / 2 hours / 3 mins / 4 secs / 1 sec
 * takes in time and calculate difference and from there curate a time elapsed string to display
 */
let getTimeElapsed = (time) => {
    let currentTime = new Date().getTime()
    let diff = currentTime - time
    let timeElapseBreakDowns = calculateTimeDifference(diff)
    // let timeElapseBreakDowns = calculateTimeDifference(86400 * 2 * 1000)
    
    let showTime = '';

    if (timeElapseBreakDowns.days) {
        showTime = timeElapseBreakDowns.days + "days"
        return showTime;
    } else if (timeElapseBreakDowns.hours) {
        showTime = timeElapseBreakDowns.hours + "hours"
        return showTime;
    } else if (timeElapseBreakDowns.mins) {
        showTime = timeElapseBreakDowns.mins + "mins"
        return showTime;
    } else if (timeElapseBreakDowns.secs) {
        showTime = timeElapseBreakDowns.secs + "secs"
        return showTime;
    } else {
        showTime = "1 s"
        return showTime;
    }
}

export { getTimeElapsed, calculateTimeDifference }