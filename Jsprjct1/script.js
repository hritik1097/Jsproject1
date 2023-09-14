const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        console.log(now - prev, delay);
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}

document.querySelector(".center")
    .addEventListener("mousemove", throttleFunction((deb) => {
        var ritik = document.createElement("div");
        ritik.classList.add("picdiv");
        ritik.style.left = deb.clientX + 'px';
        ritik.style.top = deb.clientY + 'px';
        var image = document.createElement("img");
        image.setAttribute("src")
        document.body.appendChild(ritik);
        setTimeout(() => {
            ritik.remove();
        }, 1000)
    }, 400)
    );

