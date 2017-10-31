function colorQuads() {
    let quadrant = '#' + prompt(`Select quadrant`)
    let color = prompt("Now Choose any color you'll like")
    let element = document.querySelector(quadrant)

    if (!element) {
        window.alert("no element found")
    } else {
        element.style.backgroundColor = color
    }

    setTimeout(function () {
        let option = prompt("Would you like to add another color?")
        if (option.toLowerCase() === "yes") {
            colorQuads()
        }
    }, 1000)
}

colorQuads()