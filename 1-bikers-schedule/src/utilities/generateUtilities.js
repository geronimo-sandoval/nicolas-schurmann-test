/**
 * Generate list of bikers according 
 * to the number provided as argument
 * @returns {array}
 */
export const generateBikers = (numBikers) => {
    const bikers = Array.from({ length: numBikers }, (_, index) => index + 1);
    return bikers;
}

/**
 * Generate hour array according to interval and start
 * @param {int} start time interval between each hour (in seconds)
 * @param {int} end time to where it should go (in seconds)
 * @param {int} interval from where it begins to count (in minutes)
 * @returns {array}
 */
export const generateHours = (start, end, interval) => {
    let times = []; // array that keeps all the times
    const periods = ['AM', 'PM']; // AM-PM Periods

    //loop to increment the time and push results in array
    for (let i = 0; start < end; i++) {
        let hh = Math.floor(start / 60); // getting hours of day in 0-24 format
        let mm = (start % 60); // getting minutes of the hour in 0-55 format
        times[i] = ("0" + (hh % 12 === 0 ? 12 : hh % 12)).slice(-2) + ':' + ("0" + mm).slice(-2) + periods[Math.floor(hh / 12)]; // pushing data in array in [00:00 - 12:00 AM/PM format]
        start = start + interval;
    }

    return times;
}