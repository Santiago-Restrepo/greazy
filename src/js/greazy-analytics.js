
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAW7WI2yBZ2E7rsdTj_KWOXCP9aCstzKCU",
    authDomain: "analitics-greazy.firebaseapp.com",
    projectId: "analitics-greazy",
    storageBucket: "analitics-greazy.appspot.com",
    messagingSenderId: "885043834152",
    appId: "1:885043834152:web:22d92e14cd75640280341d",
    measurementId: "G-2N3SV5F150"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();const database = firebase.database();
const today = new Date();
const userDate = `${today.getDate()}-${today.getMonth()+1}-${today.getFullYear()}`;
const userHour = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
let userIp;
let userLocation;
let findIP;

const writeUserData = (location, date, hour) => {
    firebase.database().ref('visits/').push({
        location: location,
        date : date,
        hour : hour
    });
}

const fetchIp = async () =>{
    try{
        let ipPromise = await fetch("https://api.ipify.org?format=json");
        let jsonIp = await ipPromise.json();
        return jsonIp.ip;
    }catch(error){
        console.error(error);
    }
    
}

const fetchLocation = async (ip) =>{
    try{
        // let locationPromise = await fetch(`https://ipwhois.app/json/${ip}`);
        let locationPromise = await fetch(`https://ipinfo.io/${ip}?token=298c4e899c2f78`);
        // ,{
        // headers: new Headers({
        //     'mode':'no-cors'
        // })});
        let location = await locationPromise.json();
        return location;    
    }catch(error){
        console.error(error);
    }
    
}


window.addEventListener('load', async () =>{
    userIp = await fetchIp();
    userLocation = await fetchLocation(userIp);
    writeUserData(userLocation, userDate, userHour);
});

