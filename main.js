async function f(event) {
    event.preventDefault();
    var name = document.getElementById("country").value;
  
    try {
      let response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      let data = await response.json();
      let common = data[0].name.common;
      let flag = data[0].flags.png;
      let clang = Object.values(data[0].languages);
      let countryLang = [];
      let nativeName = data[0].name.nativeName;
      Object.values(nativeName).forEach((value) => {
        countryLang.push(value.official);
      });
      document.getElementById("cname").innerHTML = common;
      document.getElementById("pic").innerHTML = `<img src="${flag}" alt="">`;
      document.getElementById("lang").innerHTML = clang;
      document.getElementById("namel").innerHTML = countryLang;
    } catch (err) {
      alert(err);
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btn").addEventListener("click", f);
  });
  