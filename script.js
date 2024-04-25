var box = {
    x: 50,
    y: 50,
    h: 100,
    w: 100,
    tpx: null,
    selected: false
};

var mouse = {
    x: 0,
    y: 0
};

function start() {
    refreshBox()
}

function selectBox() {
    if (box.selected == false) {
        box.selected = true;
        document.getElementById("box").style.transition = "0.0s"
        document.getElementById("box").style.border ="3px solid green";
    }
    else {
        box.selected = false;
        document.getElementById("box").style.transition = "0.3s";
        document.getElementById("box").style.border ="";
    }
    //console.log("MOUSE - " + mouse.x + "% | "+ box.y + "%"); Check Mouse and Box Position
    //console.log("BOX - " + box.x + "% | " + box.y + "%")
}

function refreshBox() {
    document.getElementById("box").style.left = box.x + "%"
    document.getElementById("box").style.top = box.y + "%"
    document.getElementById("box").style.height = box.h + "px";
    document.getElementById("box").style.width = box.w + "px";
    box.tpx = box.h * box.w
}

document.addEventListener('mousemove', function(e) {
    mouse.x = (e.clientX / window.innerWidth) * 100;
    mouse.y = (e.clientY / window.innerHeight) * 100;

    if (box.selected == true) {
        box.x = mouse.x - 3;
        box.y = mouse.y - 6;
        refreshBox()
    }
});

function increase() {
    box.h += 10; box.w += 10;
    refreshBox()
    console.log("Box Size: " + box.tpx + "px")
}

function decrease() {
    if (box.tpx != 6400) { //Box bugges out if decrease any fewer, I could fix but dont wanna :3
        box.h -= 10; box.w -= 10;
        refreshBox()
        console.log("Box Size: " + box.tpx + "px")
    }
}