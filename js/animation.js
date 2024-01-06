function animationBars(){
    const barsBack  = document.getElementsByClassName("bar__back");
    const barsFront = document.getElementsByClassName("bar__front");
    const chartBart = document.getElementsByClassName("chart__bar")[0];
    const title     = document.getElementsByClassName("name__title")[0];
    const subtitle  = document.getElementsByClassName("name__subtitle")[0];

    chartBart.classList.add("chart__bar--active");
    title.classList.add("name__title--active");
    subtitle.classList.add("name__subtitle--active");

    Array.from(barsBack).forEach((bar, i) => {
        bar.classList.add(`bar__back--${i+1}`);

        console.log(i)
    });

    Array.from(barsFront).forEach((bar, i)=>{
        bar.classList.add(`bar__front--${i+1}`);
    })
}

animationBars();


/*Controles del menu responsive*/
const nav            = document.getElementById("header__menu");
const backgroundMenu = document.getElementById("header__background");
const hamburguerIcon = document.getElementById("header__hamburguer");
const closeIcon      = document.getElementById("header__close");
const listLi         = document.getElementsByClassName("header__li");

function showMenu(){
  nav.style.right = "0px";
  backgroundMenu.style.display = "block";
};

function hiddenMenu(){
  nav.style.right = "-100%"
  backgroundMenu.style.display = "none";
}

hamburguerIcon.addEventListener("click", showMenu);
closeIcon.addEventListener("click", hiddenMenu);
backgroundMenu.addEventListener("click", hiddenMenu);

Array.from(listLi).forEach(list => {

  list.addEventListener("click", hiddenMenu);
  
});


/*----------------------------------------------------------------------------------------------*/

particlesJS({
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": .5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#93B1A6",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
});

