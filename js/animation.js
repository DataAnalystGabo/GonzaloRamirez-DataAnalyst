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
        bar.classList.add(`bar__front--${i+1}`)
    })
}

animationBars();
