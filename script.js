const cover = document.querySelector(".cover");
const content = document.querySelector("#content");
const button = document.querySelector("#openInvitation");
const music = document.querySelector("#bgMusic");

content.style.display = "none";

button.addEventListener("click", () => {

    cover.style.opacity = "0";

    setTimeout(() => {

        cover.style.display = "none";

        content.style.display = "block";

        music.play();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 1000);

});

const weddingDate =
new Date("November 22, 2026 08:00:00")
.getTime();

setInterval(() => {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.querySelector("#days").innerHTML = days;
    document.querySelector("#hours").innerHTML = hours;
    document.querySelector("#minutes").innerHTML = minutes;
    document.querySelector("#seconds").innerHTML = seconds;

},1000);

function copyText(text,button){

    navigator.clipboard.writeText(text);

    button.innerHTML =
    "✓ Berhasil Disalin";

    setTimeout(()=>{

        button.innerHTML =
        "📋 Tap untuk Salin Nomor Rekening";

    },2000);

}



