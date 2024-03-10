const colors = ["green", "red", "rgba(133,122,200)","#f15025"]
const btn = document.getElementById("btn");
const color = document.querySelector(".color")

btn.addEventListener('click', () => {
    //get random number between  0-3 colors[0]
    const randomNumber = getRandomNumber()
    // const rn = 2;
    document.body.style.backgroundColor =colors[randomNumber]
    color.textContent = colors[randomNumber]
    console.log(document.body);

})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}