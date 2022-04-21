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

let newCircle = document.createElementNS(svgns, "circle");
gsap.set(newCircle, {
    attr: { cx: 100, cy: 240, r: 15, fill: "#FF0000" }
});
let newCircle1 = document.createElementNS(svgns, "circle");
gsap.set(newCircle1, {
    attr: { cx: 100, cy: 280, r: 15, fill: "#FF0000" }
});
let newCircle2 = document.createElementNS(svgns, "circle");
gsap.set(newCircle2, {
    attr: { cx: 100, cy: 340, r: 15, fill: "#FF0000" }
});
let newCircle3 = document.createElementNS(svgns, "circle");
gsap.set(newCircle3, {
    attr: { cx: 459, cy: 260, r: 15, fill: "#FF0000" }
});

let newCircle4 = document.createElementNS(svgns, "circle");
gsap.set(newCircle4, {
    attr: { cx: 100, cy: 240, r: 15, fill: "#FF0000" }
});

let newCircle5 = document.createElementNS(svgns, "circle");
gsap.set(newCircle5, {
    attr: { cx: 100, cy: 280, r: 15, fill: "#FF0000" }
});

let newCircle6 = document.createElementNS(svgns, "circle");
gsap.set(newCircle6, {
    attr: { cx: 459, cy: 260, r: 15, fill: "#FF0000" }
});
let newCircle7 = document.createElementNS(svgns, "circle");
gsap.set(newCircle7, {
    attr: { cx: 100, cy: 340, r: 15, fill: "#FF0000" }
});
let newCircle8 = document.createElementNS(svgns, "circle");
gsap.set(newCircle8, {
    attr: { cx: 632, cy: 460, r: 15, fill: "#FF0000" }
});
let newCircle9 = document.createElementNS(svgns, "circle");
gsap.set(newCircle9, {
    attr: { cx: 632, cy: 570, r: 15, fill: "#FF0000" }
});

let newCircle10 = document.createElementNS(svgns, "circle");
gsap.set(newCircle10, {
    attr: { cx: 610, cy: 320, r: 15, fill: "#FF0000" }
});

let newCircle11 = document.createElementNS(svgns, "circle");
gsap.set(newCircle11, {
    attr: { cx: 790, cy: 515, r: 15, fill: "#FF0000" }
});

let Input1text = document.createElementNS(svgns, "text");
let Input2text = document.createElementNS(svgns, "text");
let Input3text = document.createElementNS(svgns, "text");
let Output1text = document.createElementNS(svgns, "text");
let Output2text = document.createElementNS(svgns, "text");

Input1text.textContent = 2;
Input2text.textContent = 2;
Input3text.textContent = 2;
Output1text.textContent = 2;
Output2text.textContent = 2;
svg.appendChild(newCircle);
svg.appendChild(newCircle1);
svg.appendChild(newCircle2);
svg.appendChild(newCircle3);
svg.appendChild(newCircle4);
svg.appendChild(newCircle5);
svg.appendChild(newCircle6);
svg.appendChild(newCircle7);
svg.appendChild(newCircle8);
svg.appendChild(newCircle9);
svg.appendChild(newCircle10);
svg.appendChild(newCircle11);

gsap.set(Input1text, {
    x: 96,
    y: 244,
});
gsap.set(Input2text, {
    x: 96,
    y: 284,
});
gsap.set(Input3text, {
    x: 96,
    y: 344,
});
gsap.set(Output1text, {
    x: 840,
    y: 519,
});
gsap.set(Output2text, {
    x: 840,
    y: 324,

});

svg.appendChild(Input1text);
svg.appendChild(Input2text);
svg.appendChild(Input3text);
svg.appendChild(Output1text);
svg.appendChild(Output2text);
const INPUT1 = document.getElementById("input1");
const INPUT2 = document.getElementById("input2");
const INPUT3 = document.getElementById("input3");
const OUTPUT1 = document.getElementById("output1");
const OUTPUT2 = document.getElementById("output2");

function free() {
    document.getElementById("Observations").innerHTML = "";
}
function and(a,b,c) {
    if (a == 1 && b == 1) {
        setter(1, c);
    }
    else {
        setter(0, c);
    }
    return (a & b);
}

function xor(a,b,c) {
    if (a == b) {
        setter(0, c);
    }
    else {
        setter(1, c);
    }
    return (a ^ b);
}
function outputHandle(){
    Output1text.textContent = xor(xor(Input1text.textContent,Input2text.textContent,newCircle3),Input3text.textContent,newCircle10);
    Output2text.textContent = xor(and(xor(Input1text.textContent,Input2text.textContent,newCircle6),Input3text.textContent,newCircle8),and(Input1text.textContent,Input2text.textContent,newCircle9),newCircle11);
}

function allDisappear() {
    TweenLite.to(newCircle, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle1, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle2, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle3, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle4, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle5, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle6, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle7, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle8, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle9, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle10, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle11, 0, { autoAlpha: 0 });

    TweenLite.to(Input1text, 0, { autoAlpha: 0 });
    TweenLite.to(Input2text, 0, { autoAlpha: 0 });
    TweenLite.to(Input3text, 0, { autoAlpha: 0 });
    TweenLite.to(Output1text, 0, { autoAlpha: 0 });
    TweenLite.to(Output2text, 0, { autoAlpha: 0 });
    gsap.set(INPUT1, {

        fill: "#008000"
    });
    gsap.set(INPUT2, {

        fill: "#008000"
    });
    gsap.set(INPUT3, {

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
function input1() {
    if (Input1text.textContent != 0 && tl.progress() == 0) {
        TweenLite.to(Input1text, 0, { autoAlpha: 0 });
        Input1text.textContent = 0;
        svg.appendChild(Input1text);
        gsap.set(Input1text, {
            x: 96,
            y: 244,
        });
        gsap.set(INPUT1, {
            fill: "#eeeb22"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(Input1text, 0, { autoAlpha: 1 });
        setter(Input1text.textContent, newCircle);
        setter(Input1text.textContent, newCircle4);
    }
    else if (Input1text.textContent != 1 && tl.progress() == 0) {    
        TweenLite.to(Input1text, 0, { autoAlpha: 0 });
        Input1text.textContent = 1;
        svg.appendChild(Input1text);
        gsap.set(Input1text, {
            x: 96,
            y: 244,
        });
        gsap.set(INPUT1, {
            fill: "#29e"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(Input1text, 0, { autoAlpha: 1 });
        setter(Input1text.textContent, newCircle);
        setter(Input1text.textContent, newCircle4);
    }

}
function input2() {
    if (Input2text.textContent != 0 && tl.progress() == 0) {
        TweenLite.to(Input2text, 0, { autoAlpha: 0 });
        Input2text.textContent = 0;
        svg.appendChild(Input2text);
        gsap.set(Input2text, {
            x: 96,
            y: 284,
        });
        gsap.set(INPUT2, {
            fill: "#eeeb22"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(Input2text, 0, { autoAlpha: 1 });
        setter(Input2text.textContent, newCircle1);
        setter(Input2text.textContent, newCircle5);
    }
    else if (Input2text.textContent != 1 && tl.progress() == 0) {
        TweenLite.to(Input2text, 0, { autoAlpha: 0 });
        Input2text.textContent = 1;
        svg.appendChild(Input2text);
        gsap.set(Input2text, {
            x: 96,
            y: 284,
        });
        gsap.set(INPUT2, {
            fill: "#29e"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(Input2text, 0, { autoAlpha: 1 });
        setter(Input2text.textContent, newCircle1);
        setter(Input2text.textContent, newCircle5);
    }


}

function input3() {
    if (Input3text.textContent != 0 && tl.progress() == 0) {
        TweenLite.to(Input3text, 0, { autoAlpha: 0 });
        Input3text.textContent = 0;
        svg.appendChild(Input3text);
        gsap.set(Input3text, {
            x: 96,
            y: 344
        });
        gsap.set(INPUT3, {
            fill: "#eeeb22"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(Input3text, 0, { autoAlpha: 1 });
        setter(Input3text.textContent, newCircle2);
        setter(Input3text.textContent, newCircle7);
    }
    else if (Input3text.textContent != 1 && tl.progress() == 0) {
        TweenLite.to(Input3text, 0, { autoAlpha: 0 });
        Input3text.textContent = 1;
        svg.appendChild(Input3text);
        gsap.set(Input3text, {
            x: 96,
            y: 344
        });
        gsap.set(INPUT3, {
            fill: "#29e"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(Input3text, 0, { autoAlpha: 1 });
        setter(Input3text.textContent, newCircle2);
        setter(Input3text.textContent, newCircle7);
    }
}
function outputSetter() {
    setter(Output1text.textContent, OUTPUT1);
    setter(Output2text.textContent, OUTPUT2);
}

function observation() {
    document.getElementById("Observations").innerHTML = "Simulation has finished. To reset the simulation, press Reset Simulation.";
}
let tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });
let speedCircuit = 1;
function SetSpeed(speed) {
    if (speed == "1") {
        if (Input1text.textContent != 2 && Input2text.textContent != 2 && Input3text.textContent!=2 && tl.progress()!=1) {
            // tl.resume();
            tl.timeScale(1);
        }
    }
    else if (speed == "2") {
        if (Input1text.textContent != 2 && Input2text.textContent != 2 && Input3text.textContent!=2&& tl.progress()!=1) {
            // tl.resume();
            tl.timeScale(2);
        }
    }
    else if (speed == "4") {
        if (Input1text.textContent != 2 && Input2text.textContent != 2 && Input3text.textContent!=2 && tl.progress()!=1) {
            // tl.resume();
            tl.timeScale(4);
        }
    }
    if(tl.progress()==0){
        speedCircuit = speed;
    }

}

function WorkCircuit() {
    let a = document.getElementById("currentwork").innerHTML;
    if (a == "Start") {
        StartCircuit();
    }
    else if (a == "Stop") {
        StopCircuit();
    }
}
function StopCircuit() {
    if (tl.time() != 0 && tl.progress() !=1) {
        tl.pause();
        document.getElementById("currentwork").innerHTML = "Start";
        document.getElementById("Observations").innerHTML = "Simulation has been stopped."
    }
    else if(tl.progress() == 1){
        document.getElementById("Observations").innerHTML = "Please Restart the simulation"
    }
}

function StartCircuit() {
    if (Input1text.textContent != 2 && Input2text.textContent != 2 && Input3text.textContent !=2 && tl.progress() != 1) {
        tl.play();
        tl.timeScale(speedCircuit);
        document.getElementById("currentwork").innerHTML = "Stop";
        document.getElementById("Observations").innerHTML = "Simulation has started."
    }
    else if (Input1text.textContent == 2 || Input2text.textContent == 2 || Input3text.textContent == 2 ) {
        document.getElementById("Observations").innerHTML = "Please select the values"
    }
    else if(tl.progress() == 1){
        document.getElementById("Observations").innerHTML = "Please Restart the simulation"  
    }
}


function outputVisible() {
    TweenLite.to(Output1text, 0, { autoAlpha: 1 });
    TweenLite.to(Output2text, 0, { autoAlpha: 1 });
}
function free() {
    document.getElementById("Observations").innerHTML = "";
}
function gate1_components_appear() {
    TweenLite.to(newCircle, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle1, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle2, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle5, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle4, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle7, 0, { autoAlpha: 1 });
}
function gate1_components_disappear() {
    TweenLite.to(newCircle, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle1, 0, { autoAlpha: 0 });
}
function gate23_components_appear() {
    TweenLite.to(newCircle3, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle6, 0, { autoAlpha: 1 });
}
function gate23_components_disappear() {
    TweenLite.to(newCircle2, 0, { autoAlpha: 0 }); 
    TweenLite.to(newCircle3, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle4, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle5, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle6, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle7, 0, { autoAlpha: 0 });
}
function gate45_components_appear() {
    TweenLite.to(newCircle8, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle9, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle10, 0, { autoAlpha: 1 });
}
function gate45_components_disappear() {
    TweenLite.to(newCircle8, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle9, 0, { autoAlpha: 0 });
}
function gate67_components_appear() {
    TweenLite.to(newCircle11, 0, { autoAlpha: 1 });
}
function gate67_components_disappear() {
    TweenLite.to(newCircle11, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle10, 0, { autoAlpha: 0 });
}


tl.add(gate1_components_appear, 0);
tl.add(gate1_components_disappear, 5);
tl.add(gate23_components_appear, 5);
tl.add(gate23_components_disappear, 10);
tl.add(gate45_components_appear, 10);
tl.add(gate45_components_disappear, 15);
tl.add(gate67_components_appear, 15);
tl.add(gate45_components_disappear, 20);
tl.add(outputVisible, 20);
tl.add(outputHandle, 0);
tl.add(outputSetter, 20);
tl.eventCallback("onComplete", outputVisible);
tl.eventCallback("onComplete", observation);
tl.to(newCircle, {
    motionPath: {
        path: "#path1",
        align: "#path1",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 5,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,

}, 0);
tl.to(newCircle1, {
    motionPath: {
        path: "#path2",
        align: "#path2",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 5,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,

}, 0);
tl.to(newCircle2, {
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
tl.to(newCircle3, {
    motionPath: {
        path: "#path4",
        align: "#path4",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 5,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,

}, 5);
tl.to(newCircle4, {
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

}, 0);
tl.to(newCircle5, {
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

}, 0);

tl.to(newCircle6, {
    motionPath: {
        path: "#path7",
        align: "#path7",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 5,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,

}, 5);
tl.to(newCircle7, {
    motionPath: {
        path: "#path8",
        align: "#path8",
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

tl.to(newCircle8, {
    motionPath: {
        path: "#path9",
        align: "#path9",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 5,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,
}, 10);

tl.to(newCircle9, {
    motionPath: {
        path: "#path10",
        align: "#path10",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 5,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,
}, 10);

tl.to(newCircle10, {
    motionPath: {
        path: "#path11",
        align: "#path11",
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

tl.to(newCircle11, {
    motionPath: {
        path: "#path12",
        align: "#path12",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 5,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,
}, 15);
tl.pause();
allDisappear();