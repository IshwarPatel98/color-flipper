const colors = ["green", "red", "rgba(133,122,200)","#f15025"]
const btn = document.getElementById("btn");
const color = document.querySelector(".color")

btn.addEventListener('click', () => {
    //get random number between  0-3 colors[0]
    const rn = 2;
    document.body.style.backgroundColor =colors[rn]
    color.textContent = colors[rn]
    console.log(document.body);

})