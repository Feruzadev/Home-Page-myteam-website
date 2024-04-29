const buttons = document.querySelectorAll(".team-about__more");
let clickCounts = new Array(buttons.length).fill(0);

const clickHandler = (index) => {
    return () => {
        console.log("ok");
        const modddals = document.querySelectorAll(".team-card__content");
        const modddal = modddals[index];
        modddal.classList.toggle("active");
        clickCounts[index]++;
        
        if (clickCounts[index] >= 6) {
            buttons[index].removeEventListener("click", clickHandlers[index]);
        }
    };
};

const clickHandlers = [];

buttons.forEach((button, index) => {
    const handler = clickHandler(index);
    clickHandlers.push(handler);
    button.addEventListener("click", handler);
});