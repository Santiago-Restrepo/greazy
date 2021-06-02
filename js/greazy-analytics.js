const database = firebase.database();
const today = new Date();
const userDate = `${today.getDate()}-${today.getMonth()+1}-${today.getFullYear()}`;
const userHour = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
let userIp;
let userLocation;

const writeUserData = (location, date, hour) => {
    firebase.database().ref('visits/').push({
        location: location,
        date : date,
        hour : hour
    });
}

const fetchIp = async () =>{
    let ipPromise = await fetch("https://api.ipify.org?format=json");
    let jsonIp = await ipPromise.json();
    return jsonIp.ip;
}

const fetchLocation = async (ip) =>{
    let locationPromise = await fetch(`http://api.ipstack.com/${ip}?access_key=14b04d5d1e4902a5f8accb961c66dcac`);
    let location = await locationPromise.json();
    return location;
}


window.addEventListener('load', async () =>{
    userIp = await fetchIp();
    userLocation = await fetchLocation(userIp);
    writeUserData(userLocation, userDate, userHour);
});

