// Dimensions of working area
const circuitBoard = document.getElementById("circuit-board");
const sidePanels = document.getElementsByClassName("v-datalist-container");
// Distance of working area from top
const circuitBoardTop = circuitBoard.offsetTop;
// Full height of window
const windowHeight = window.innerHeight;
const width = window.innerWidth;
if (width < 1024) {
  circuitBoard.style.height = 600 + "px";
} else {
  circuitBoard.style.height = windowHeight - circuitBoardTop - 20 + "px";
}
sidePanels[0].style.height = circuitBoard.style.height;

// Instruction box
const instructionBox = document.getElementsByClassName("instructions-box")[0];
instructionBox.addEventListener("click", (e) => {
  instructionBox.classList.toggle("expand");
});




const svg = document.querySelector(".svg");
const inputpath1 = document.querySelector("#inputpath1");
const svgns = "http://www.w3.org/2000/svg";
gsap.registerPlugin(MotionPathPlugin);

let input1Dot = document.createElementNS(svgns, "circle");
gsap.set(input1Dot, {
    attr: { cx: 100, cy: 150, r: 15, fill: "#FF0000" }
});
let input1Dot2 = document.createElementNS(svgns, "circle");
gsap.set(input1Dot2, {
    attr: { cx: 100, cy: 150, r: 15, fill: "#FF0000" }
});
let input2Dot1 = document.createElementNS(svgns, "circle");
gsap.set(input2Dot1, {
    attr: { cx: 100, cy: 600, r: 15, fill: "#FF0000" }
});
let input2Dot2 = document.createElementNS(svgns, "circle");
gsap.set(input2Dot2, {
    attr: { cx: 100, cy: 600, r: 15, fill: "#FF0000" }
});

let dotFromOR = document.createElementNS(svgns, "circle");
gsap.set(dotFromOR, {
    attr: { cx: 520, cy: 170, r: 15, fill: "#FF0000" }
});

let dotFromAND = document.createElementNS(svgns, "circle");
gsap.set(dotFromAND, {
    attr: { cx: 520, cy: 590, r: 15, fill: "#FF0000" }
});

let input1Text = document.createElementNS(svgns, "text");
let input2Text = document.createElementNS(svgns, "text");
let output1Text = document.createElementNS(svgns, "text");
let output2Text = document.createElementNS(svgns, "text");

input1Text.textContent = 2;
input2Text.textContent = 2;
output1Text.textContent = 2;
output2Text.textContent = 2;

svg.appendChild(input1Dot);
svg.appendChild(input1Dot2);
svg.appendChild(input2Dot1);
svg.appendChild(input2Dot2);
svg.appendChild(dotFromOR);
svg.appendChild(dotFromAND);

gsap.set(input1Text, {
    x: 96,
    y: 164
});
gsap.set(input2Text, {
    x: 96,
    y: 604
});
gsap.set(output1Text, {
    x: 616,
    y: 174
});
gsap.set(output2Text, {
    x: 616,
    y: 594
});

svg.appendChild(input1Text);
svg.appendChild(input2Text);
svg.appendChild(output1Text);
svg.appendChild(output2Text);
const INPUT1 = document.getElementById("input1");
const INPUT2 = document.getElementById("input2");
const OUTPUT1 = document.getElementById("output1");
const OUTPUT2 = document.getElementById("output2");

function input1DotDisappear() {
    TweenLite.to(input1Dot, 0, { autoAlpha: 0 });
}
function free() {
    document.getElementById("Observations").innerHTML = "";
}
function and() {
    if (input1Text.textContent == 1 && input2Text.textContent == 1) {
        setter(1, dotFromAND);
    }
    else {
        setter(0, dotFromAND);
    }
}

function xor() {
    if (input1Text.textContent ==  input2Text.textContent) {
        setter(0, dotFromOR);
    }
    else {
        setter(1, dotFromOR);
    }
}
function allDisappear() {
    TweenLite.to(input1Dot, 0, { autoAlpha: 0 });
    TweenLite.to(input1Dot2, 0, { autoAlpha: 0 });
    TweenLite.to(input2Dot1, 0, { autoAlpha: 0 });
    TweenLite.to(input2Dot2, 0, { autoAlpha: 0 });
    TweenLite.to(dotFromOR, 0, { autoAlpha: 0 });
    TweenLite.to(dotFromAND, 0, { autoAlpha: 0 });
    TweenLite.to(input1Text, 0, { autoAlpha: 0 });
    TweenLite.to(input2Text, 0, { autoAlpha: 0 });
    TweenLite.to(output1Text, 0, { autoAlpha: 0 });
    TweenLite.to(output2Text, 0, { autoAlpha: 0 });
    gsap.set(INPUT1, {

        fill: "#008000"
    });
    gsap.set(INPUT2, {

        fill: "#008000"
    });
    gsap.set(OUTPUT1, {

        fill: "#008000"
    });
    gsap.set(OUTPUT2, {

        fill: "#008000"
    });

}
function set(a) {
    gsap.set(a, {
        fill: "#eeeb22"
    });
}//output 0
function unset(a) {
    gsap.set(a, {
        fill: "#29e"
    });
}//output 1
function setter(a, b) {
    if (a == 1) {
        unset(b);
    }
    else if (a == 0) {
        set(b);
    }
}
function appendInput1() {
    if (input1Text.textContent != 0 && tl.progress() == 0) {
        TweenLite.to(input1Text, 0, { autoAlpha: 0 });
        input1Text.textContent = 0;
        svg.appendChild(input1Text);
        gsap.set(input1Text, {
            x: 96,
            y: 164
        });
        gsap.set(INPUT1, {
            fill: "#eeeb22"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(input1Text, 0, { autoAlpha: 1 });
        setter(input1Text.textContent, input1Dot);
        setter(input1Text.textContent, input2Dot1);
    }
    else if (input1Text.textContent != 1 && tl.progress() == 0) {    
        TweenLite.to(input1Text, 0, { autoAlpha: 0 });
        input1Text.textContent = 1;
        svg.appendChild(input1Text);
        gsap.set(input1Text, {
            x: 96,
            y: 164
        });
        gsap.set(INPUT1, {
            fill: "#29e"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(input1Text, 0, { autoAlpha: 1 });
        setter(input1Text.textContent, input1Dot);
        setter(input1Text.textContent, input2Dot1);
    }
}
function appendInput2() {
    
    if (input2Text.textContent != 0 && tl.progress() == 0) {
        TweenLite.to(input2Text, 0, { autoAlpha: 0 });
        input2Text.textContent = 0;
        svg.appendChild(input2Text);
        gsap.set(input2Text, {
            x: 96,
            y: 604
        });
        gsap.set(INPUT2, {
            fill: "#eeeb22"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(input2Text, 0, { autoAlpha: 1 });
        setter(input2Text.textContent, input1Dot2);
        setter(input2Text.textContent, input2Dot2);
    }
    else if (input2Text.textContent != 1 && tl.progress() == 0) {
        TweenLite.to(input2Text, 0, { autoAlpha: 0 });
        input2Text.textContent = 1;
        svg.appendChild(input2Text);
        gsap.set(input2Text, {
            x: 96,
            y: 604
        });
        gsap.set(INPUT2, {
            fill: "#29e"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(input2Text, 0, { autoAlpha: 1 });
        setter(input2Text.textContent, input1Dot2);
        setter(input2Text.textContent, input2Dot2);
    }

}
function outputSetter() {
    setter(output1Text.textContent, OUTPUT1);
    setter(output2Text.textContent, OUTPUT2);
}

function observation() {
    document.getElementById("Observations").innerHTML = "Simulation has finished. To reset the simulation, press Reset Simulation.";
}
var tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });

var speed_circuit = 1;
function SetSpeed(speed) {
    if (speed == "1") {
        if (input1Text.textContent != 2 && input2Text.textContent != 2 && tl.progress()!=1) {
            // tl.resume();
            tl.timeScale(1);
        }
    }
    else if (speed == "2") {
        if (input1Text.textContent != 2 && input2Text.textContent != 2 && tl.progress()!=1) {
            // tl.resume();
            tl.timeScale(2);
        }
    }
    else if (speed == "4") {
        if (input1Text.textContent != 2 && input2Text.textContent != 2 && tl.progress()!=1) {
            // tl.resume();
            tl.timeScale(4);
        }
    }
    if(tl.progress()==0){
        speed_circuit = speed;
    }

}

function StopCircuit() {
    if (tl.time() != 0 && tl.progress() !=1) {
        document.getElementById("currentwork").innerHTML = "Start";
        tl.pause();
        document.getElementById("Observations").innerHTML = "Simulation has been stopped."
    }
    else if(tl.progress() == 1){
        document.getElementById("Observations").innerHTML = "Please Restart the simulation"
    }
}
function WorkCircuit() {
    var a = document.getElementById("currentwork").innerHTML;
    if (a == "Start") {
        StartCircuit();
    }
    else if (a == "Stop") {
        StopCircuit();
    }
}


function StartCircuit() {
    if (input1Text.textContent != 2 && input2Text.textContent != 2 && tl.progress() != 1) {
        document.getElementById("currentwork").innerHTML = "Stop";
        tl.play();
        tl.timeScale(speed_circuit);
        document.getElementById("Observations").innerHTML = "Simulation has started."
    }
    else if (input1Text.textContent == 2 || input2Text.textContent == 2 ) {
        document.getElementById("Observations").innerHTML = "Please select the values"
    }
    else if(tl.progress() == 1){
        document.getElementById("Observations").innerHTML = "Please Restart the simulation"  
    }
}


function inputVisible() {
    TweenLite.to(input1Dot, 0, { autoAlpha: 1 });
    TweenLite.to(input1Dot2, 0, { autoAlpha: 1 });
    TweenLite.to(input2Dot1, 0, { autoAlpha: 1 });
    TweenLite.to(input2Dot2, 0, { autoAlpha: 1 });
    
}
function inputDisappear() {
    TweenLite.to(input1Dot, 0, { autoAlpha: 0 });
    TweenLite.to(input1Dot2, 0, { autoAlpha: 0 });
    TweenLite.to(input2Dot1, 0, { autoAlpha: 0 });
    TweenLite.to(input2Dot2, 0, { autoAlpha: 0 });
}
function outputVisible() {
    TweenLite.to(dotFromOR, 0, { autoAlpha: 1 });
    TweenLite.to(dotFromAND, 0, { autoAlpha: 1 });
}

function outputDisappear() {
    TweenLite.to(dotFromOR, 0, { autoAlpha: 0 });
    TweenLite.to(dotFromAND, 0, { autoAlpha: 0 });
}

function text_output_disappear() {
    TweenLite.to(output1Text, 0, { autoAlpha: 0 });
    TweenLite.to(output2Text, 0, { autoAlpha: 0 });
}
function textOutputVisible() {
    TweenLite.to(output1Text, 0, { autoAlpha: 1 });
    TweenLite.to(output2Text, 0, { autoAlpha: 1 });
}
function textInputDisappear() {
    TweenLite.to(input1Text, 0, { autoAlpha: 0 });
    TweenLite.to(input2Text, 0, { autoAlpha: 0 });
}
function textInputVisible() {
    TweenLite.to(input1Text, 0, { autoAlpha: 1 });
    TweenLite.to(input2Text, 0, { autoAlpha: 1 });
}
function free() {
    document.getElementById("Observations").innerHTML = "";
}

function outputHandler() {
    if (input1Text.textContent == 1 && input2Text.textContent == 0) {
        output1Text.textContent = 1;
        output2Text.textContent = 0;
    }
    else if (input1Text.textContent == 0 && input2Text.textContent == 1) {
        output1Text.textContent = 1;
        output2Text.textContent = 0;
    }
    else if (input1Text.textContent == 1 && input2Text.textContent == 1) {
        output1Text.textContent = 0;
        output2Text.textContent = 1;
    }
    else if (input1Text.textContent == 0 && input2Text.textContent == 0) {
        output1Text.textContent = 0;
        output2Text.textContent = 0;
    }

}
tl.add(inputVisible, 0);
tl.add(inputDisappear, 10);
tl.add(outputVisible, 10);

tl.add(and, 10);
tl.add(xor, 10);
tl.add(textOutputVisible, 20);
tl.add(outputHandler, 20);
tl.add(outputSetter, 22);
tl.eventCallback("onComplete", outputVisible);
tl.eventCallback("onComplete", observation);

tl.to(input1Dot, {
    motionPath: {
        path: "#path1",
        align: "#path1",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 10,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,

}, 0);
tl.to(input1Dot2, {
    motionPath: {
        path: "#path2",
        align: "#path2",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 10,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,

}, 0);
tl.to(input2Dot1, {
    motionPath: {
        path: "#path3",
        align: "#path3",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 10,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,

}, 0);
tl.to(input2Dot2, {
    motionPath: {
        path: "#path4",
        align: "#path4",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 10,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,

}, 0);
tl.to(dotFromOR, {
    motionPath: {
        path: "#path5",
        align: "#path5",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },
    
    duration: 10,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,

}, 10);
tl.to(dotFromAND, {
    motionPath: {
        path: "#path6",
        align: "#path6",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 10,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,

}, 10);

tl.pause();

allDisappear();