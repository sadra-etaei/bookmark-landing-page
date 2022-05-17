var p1 = document.getElementById("p-1")
var p2 = document.getElementById("p-2")
var p3 = document.getElementById("p-3")
var p4 = document.getElementById("p-4")
var h = document.getElementById("h")
var p = document.getElementById("p")
var x = 0
function display() {
    if (x === 0) {
        p1.style.display = "block"
        x++
    }
    else if (x = 1) {
        p1.style.display = "none"
        x--
    }
}
function display2() {
    if (x === 0) {
        p2.style.display = "block"
        x++
    }
    else if (x = 1) {
        p2.style.display = "none"
        x--
    }
}
function display3() {
    if (x === 0) {
        p3.style.display = "block"
        x++
    }
    else if (x = 1) {
        p3.style.display = "none"
        x--
    }
}
function display4() {
    if (x === 0) {
        p4.style.display = "block"
        x++
    }
    else if (x = 1) {
        p4.style.display = "none"
        x--
    }
}
function changeText() {
    h.innerHTML = "Bookmark in one click"
    p.innerHTML = "Organize your bookmarks however you like. Our simple drag-and-drop interfacegives you complete control over how you manage your favourite sites."
}
function changeText1() {
    h.innerHTML = "Intelligent search"
    p.innerHTML = "Our powerful search feature will help you find saved sites in no time at all.No need to trawl through all of your bookmarks."

}
function changeText2() {
    h.innerHTML = "Share your bookmarks"
    p.innerHTML = " Easily share your bookmarks and collections with others. Create a shareablelink that you can send at the click of a button."

}