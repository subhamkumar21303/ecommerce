
(function () {
  var popularmusic = document.querySelectorAll('.popularimg');
  var allmusic = document.querySelectorAll('.playbar1');
  var bar = document.querySelectorAll(".bx");
  var masterplay = document.getElementById("play");
  var forward = document.getElementById("forward");
  var backward = document.getElementById("backward");
  var progressbar = document.getElementById("rangebutton");
  var mainimg = document.getElementById("mainimg");
  var gif = document.getElementById("gif");
  var songname = document.getElementById("songname");
  var name = document.querySelectorAll(".name");
  var artist = document.querySelectorAll(".artistimg");
  var music1 = document.querySelectorAll(".music1");
  var playlist = document.getElementsByClassName("playlist1");
  var heading = document.getElementsByClassName("heading");
  var subs1 = document.getElementsByClassName("subs1");
  var subs2 = document.getElementsByClassName("subs2");
  var min = document.getElementById("min");
  var dot = document.getElementById("dot");
  var sec = document.getElementById("sec");
  var bigimg = document.getElementsByClassName("bigimg");
  var heart = document.getElementById("heart");
  var vol = document.getElementById("volrange");
  var volicon = document.getElementById("volicon");
  var mood = document.getElementsByClassName("mood");
  var section2 = document.getElementsByClassName("section2");
  var makeheart = document.getElementsByClassName(" makeheart");
  const apikey = '3f289a7be4fb6207e0b978bf676b29d4';
  var array = ["9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26"];
  var array1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26"];
  var array3 = ["alan", "alan", "alan", "justin-bieber-lede", "justin-bieber-lede", "justin-bieber-lede", "arjit", "jubin-Nautiyal", "neha", "akhil", "dhvani", "Diljit_Dosanjh", "atif", "dhvani", "jubin-Nautiyal", "arjit", "rahat", "arjit", "guru", "arjit"];
  var array4 = ["akhil", "alan", "arjit", "atif ali", "dhvani", "Diljit_Dosanjh", "guru", "honey", "jubin-Nautiyal", "justin-bieber-lede", "neha"];

  var t;
  const music = new Audio();
  //console.log(popularmusic[0]);
  popularmusic.forEach(function (button) {
    button.addEventListener("click", function (e) {

      var r = e.target.dataset.num;
      for (var i = 0; i < array.length; i++) {
        if (r == array[i]) {
          t = i;
          break;
        }
      }
      console.log(t);
      music.src = `audio/${array[t]}.mp3`;
      music.play();
      var m = parseInt(r);
      mainimg.src = `img/${m}.jpg`;
      songname.innerHTML = name[m - 1].innerHTML;
      mainimg.style.opacity = "1";
      songname.style.opacity = "1";
      gif.style.opacity = "1";
      for (var i = 0; i < 26; i++) {
        bar[i].classList.add("bx-play-circle");
        bar[i].classList.remove("bx-pause-circle");
      }
      masterplay.classList.add("bx-pause-circle");
      masterplay.classList.remove("bx-play-circle");
      music.addEventListener("timeupdate", function (e) {
        let progress = parseInt(music.currentTime);
        var p = parseInt(progress / 60);
        if (p == 0) {
          min.style.opacity = "0";
          dot.style.opacity = "0";
        }
        else {
          min.style.opacity = "1";
          dot.style.opacity = "1";
          min.innerHTML = p;
        }
        var t = progress % 60;
        sec.innerHTML = t;
      })



    })
  })
  allmusic.forEach(function (button1) {
    button1.addEventListener("click", function (e) {
      var r = e.target.dataset.num;
      var m = parseInt(r);
      mainimg.src = `img/${m}.jpg`;
      songname.innerHTML = name[m - 1].innerHTML;
      mainimg.style.opacity = "1";
      songname.style.opacity = "1";
      gif.style.opacity = "1";
      for (var i = 0; i < array1.length; i++) {
        if (r == array1[i]) {
          t = i;
          break;
        }
      }
      music.src = `audio/${array1[t]}.mp3`;
      music.play();
      music.addEventListener("timeupdate", function (e) {
        let progress = parseInt(music.currentTime);
        var p = parseInt(progress / 60);
        if (p == 0) {
          min.style.opacity = "0";
          dot.style.opacity = "0";
        }
        else {
          min.style.opacity = "1";
          dot.style.opacity = "1";
          min.innerHTML = p;
        }
        var t = progress % 60;
        sec.innerHTML = t;
      })
      bar[t].classList.remove("bx-play-circle");
      bar[t].classList.add("bx-pause-circle");
      //console.log(t);
      for (var i = 0; i < 26; i++) {
        if (i != t) {
          bar[i].classList.add("bx-play-circle");
          bar[i].classList.remove("bx-pause-circle");
        }
      }
      masterplay.classList.add("bx-pause-circle");
      masterplay.classList.remove("bx-play-circle");
      makeheart[0].style.opacity = 1;
      makeheart[0].classList.remove("fullheart");
      makeheart[0].classList.add("heartfill");


    })
  })
  masterplay.addEventListener("click", function (e) {
    if (music.paused) {
      music.play();
      masterplay.classList.add("bx-pause-circle");
      masterplay.classList.remove("bx-play-circle");
    }
    else {
      music.pause();
      masterplay.classList.add("bx-play-circle");
      masterplay.classList.remove("bx-pause-circle");
      gif.style.opacity = "0";
    }
  })
  backward.addEventListener("click", function (e) {
    music.currentTime = music.currentTime - 10;
  })
  forward.addEventListener("click", function (e) {
    music.currentTime = music.currentTime + 10;
  })
  music.addEventListener("timeupdate", function (e) {
    let progress = parseInt((music.currentTime / music.duration) * 100);
    progressbar.value = progress;
  })
  progressbar.addEventListener("change", function (e) {
    music.currentTime = (progressbar.value * music.duration) / 100;
  })
  artist.forEach(function (button) {
    button.addEventListener("click", function (e) {
      heart.style.opacity = '0';
      subs2[0].innerHTML = "follow";
      var r = e.target.dataset.num;
      bigimg[0].src = `img/${r}.jpg`;
      var m = parseInt(r);
      heading[0].innerHTML = r;
      for (var i = 0; i < music1.length; i++) {
        music1[i].style.display = "none";
      }
      for (var i = 0; i < array3.length; i++) {
        if (array3[i] == r) {
          music1[i].style.display = "";
          //console.log(array3[i]);
        }

      }

      //console.log(r);
    })
  })
  //music1[0].style.display();
  console.log(playlist[0]);
  playlist[0].addEventListener("click", function (e) {
    for (var i = 0; i < 26; i++) {
      music1[i].style.display = "";
    }
  })
  subs2[0].addEventListener("click", function (e) {
    heart.style.opacity = '1';
    subs2[0].innerHTML = "following";
  })
  search1 = () => {
    var name = document.querySelectorAll(".name");
    var search = document.getElementById("search").value.toUpperCase();
    var music2 = document.getElementsByClassName("music1");

    for (var i = 0; i < name.length; i++) {
      var match = music2[i].getElementsByClassName("name")[0];
      if (match) {
        var r = match.innerHTML || match.textContent;
        if (r.toUpperCase().indexOf(search) > -1) {
          music2[i].style.display = "";
        }
        else {
          music2[i].style.display = "none";
        }
      }

    }
  };
  vol.addEventListener("change", function (e) {
    if (vol.value == 0) {
      volicon.classList.remove("bxs-volume-full");
      volicon.classList.add("bxs-volume-mute");
    }
    else {
      volicon.classList.add("bxs-volume-full");
      volicon.classList.remove("bxs-volume-mute");
    }
    music.volume = (vol.value) / 100;

  })
  // Check for browser support
  if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';

    const startButton = document.getElementById('startButton');
    const resultDiv = document.getElementById('result');

    startButton.addEventListener('click', function () {
      startButton.disabled = true;
      recognition.start();
    });

    recognition.onresult = function (event) {
      const result = event.results[0][0].transcript;
      resultDiv.innerText = 'You said: ' + result;
      resultDiv.classList.remove('hidden');
    };

    recognition.onend = function () {
      startButton.disabled = false;
    };
  } else {
    console.log('Speech recognition not supported by your browser.');
  }

  mood[0].addEventListener("click", async () => {
    navigator.geolocation.getCurrentPosition(gotLocation);
  });

  let latitude;
  let longitude;

  async function gotLocation(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`;
    console.log(url);
    let response = await fetch(url);
    var data = await response.json();

    let season = (data.weather[0].main);
    console.log("season", season);
    let m;
    if (season == "Thunderstorm") m = 21;
    else if (season == "Snow") m = 22;
    else if (season == "Clouds") m = 23;
    else if (season == "Clear") m = 24;
    else if (season == "Mist") m = 25;
    else if (season == "Rain") m = 26;
    else m = 26;

    music.src = `audio/${m}.mp3`;
    mainimg.src = `img/${m}.jpg`;
    songname.innerHTML = name[m - 1].innerHTML;
    music.play();
    mainimg.style.opacity = "1";
    songname.style.opacity = "1";
    gif.style.opacity = "1";
    masterplay.classList.add("bx-pause-circle");
    masterplay.classList.remove("bx-play-circle");
    music.addEventListener("timeupdate", function (e) {
      let progress = parseInt(music.currentTime);
      var p = parseInt(progress / 60);
      if (p == 0) {
        min.style.opacity = "0";
        dot.style.opacity = "0";
      }
      else {
        min.style.opacity = "1";
        dot.style.opacity = "1";
        min.innerHTML = p;
      }
      var t = progress % 60;
      sec.innerHTML = t;
    })
  }

  makeheart[0].addEventListener("click", function () {
    makeheart[0].classList.add("fullheart");
    makeheart[0].classList.remove("heartfill");

  })





})();





