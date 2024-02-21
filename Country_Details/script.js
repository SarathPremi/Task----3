const req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload = function () {
  const obj = JSON.parse(this.response);
  for (let ind = 0; ind < obj.length; ind++) {
    console.log("Country Name : " + obj[ind].name.common);
    console.log("Region : " + obj[ind].region);
    console.log("Sub_Region : " + obj[ind].subregion);
    console.log("Population : " + obj[ind].population);
  }
};
