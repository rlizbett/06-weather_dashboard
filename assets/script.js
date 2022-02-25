function bringInfo() {
    const newInfo = document.getElementById("citySearch");
    const cityName = document.getElementById("cityName");
    cityName.innerHTML = new.Name.value


    fetch("http://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=42cbf04a88a18f2c4bb3aa2d12e6d652")
        .then(response => response.json())
        .then(data => {
            for (i = 0; i < 5; i++) {
                document.getElementById("day" + (i + 1) + "Min").innerHTML = "Min:" + Number(data.list[i].main.temp_min - 274.89).toFixed(1) + "°";
            }
            for (i = 0; i < 5; i++) {
                document.getElementById("day" + (i + 1) + "Max").innerHTML = "Max:" + Number(data.list[i].main.temp_max - 274.89).toFixed(1) + "°";
            }
            for (i = 0; i < 5; i++) {
                document.getElementById("img" + (i + 1)).src = " http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png";
            }
        })
        .catch(err => alert("Sorry, something went wrong"))
}
function defaultS() {
    document.getElementById("citySearch").defaultValue = "Austin";
    newInfo();
}

const d = new Date();
const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Staurday"];

function startDay(day) {
    if (day + d.getDay() > 6) {
        return day + d.getDay() - 7;
    }
    else {
        return day + d.getDay();
    }
}

for (i = 0; i < 5; i++) {
    document.getElementById("day" + (i + 1)).innerHTML =weekday[startDay(i)];
}