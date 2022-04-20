<<<<<<< HEAD
=======
const svg = document.querySelector(".svg");
const inputpath1 = document.querySelector("#inputpath1");
const svgns = "http://www.w3.org/2000/svg";
gsap.registerPlugin(MotionPathPlugin);

>>>>>>> 0288e00a3fe62dc8d8655fad21c8e273f9c0e5b5
// Dimensions of working area
let circuitBoard = document.getElementById("circuit-board");
let sidePanels = document.getElementsByClassName("components-list");
// Distance of working area from top
let circuitBoardTop = circuitBoard.offsetTop;
// Full height of window
let windowHeight = window.innerHeight;
let width = window.innerWidth;
if (width < 1024) {
  circuitBoard.style.height = 600 + "px";
} else {
  circuitBoard.style.height = windowHeight - circuitBoardTop - 20 + "px";
}

<<<<<<< HEAD
const svg = document.querySelector(".svg");
const inputpath1 = document.querySelector("#inputpath1");
const svgns = "http://www.w3.org/2000/svg";
gsap.registerPlugin(MotionPathPlugin);
=======
sidePanels[0].style.height = circuitBoard.style.height;
sidePanels[1].style.height = circuitBoard.style.height;
>>>>>>> 0288e00a3fe62dc8d8655fad21c8e273f9c0e5b5

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

<<<<<<< HEAD
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
=======
var textINPUT1 = document.createElementNS(svgns, "text");
var textINPUT2 = document.createElementNS(svgns, "text");
var textINPUT3 = document.createElementNS(svgns, "text");
var textOUTPUT1 = document.createElementNS(svgns, "text");
var textOUTPUT2 = document.createElementNS(svgns, "text");


textINPUT1.textContent = 2;
textINPUT2.textContent = 2;
textINPUT3.textContent = 2;
textOUTPUT1.textContent = 2;
textOUTPUT2.textContent = 2;
>>>>>>> 0288e00a3fe62dc8d8655fad21c8e273f9c0e5b5
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

<<<<<<< HEAD
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
=======
gsap.set(textINPUT1, {
    x: 96,
    y: 244,
});
gsap.set(textINPUT2, {
    x: 96,
    y: 284,
});
gsap.set(textINPUT3, {
    x: 96,
    y: 344,
});
gsap.set(textOUTPUT1, {
    x: 840,
    y: 519,
});
gsap.set(textOUTPUT2, {
>>>>>>> 0288e00a3fe62dc8d8655fad21c8e273f9c0e5b5
    x: 840,
    y: 324,

});

<<<<<<< HEAD
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
=======
svg.appendChild(textINPUT1);
svg.appendChild(textINPUT2);
svg.appendChild(textINPUT3);
svg.appendChild(textOUTPUT1);
svg.appendChild(textOUTPUT2);
var INPUT1 = document.getElementById("input1");
var INPUT2 = document.getElementById("input2");
var INPUT3 = document.getElementById("input3");
var OUTPUT1 = document.getElementById("output1");
var OUTPUT2 = document.getElementById("output2");
>>>>>>> 0288e00a3fe62dc8d8655fad21c8e273f9c0e5b5

function free() {
    document.getElementById("Observations").innerHTML = "";
}
<<<<<<< HEAD
function and(a,b,c) {
    if (a == 1 && b == 1) {
        setter(1, c);
    }
    else {
        setter(0, c);
=======
function AND(a,b,c) {
    if (a == 1 && b == 1) {
        SETTER(1, c);
    }
    else {
        SETTER(0, c);
>>>>>>> 0288e00a3fe62dc8d8655fad21c8e273f9c0e5b5
    }
    return (a & b);
}

<<<<<<< HEAD
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
=======
function XOR(a,b,c) {
    if (a == b) {
        SETTER(0, c);
    }
    else {
        SETTER(1, c);
    }
    return (a ^ b);
}
function output_handle(){
    textOUTPUT1.textContent = XOR(XOR(textINPUT1.textContent,textINPUT2.textContent,newCircle3),textINPUT3.textContent,newCircle10);
    textOUTPUT2.textContent = XOR(AND(XOR(textINPUT1.textContent,textINPUT2.textContent,newCircle6),textINPUT3.textContent,newCircle8),AND(textINPUT1.textContent,textINPUT2.textContent,newCircle9),newCircle11);
}

function All_disappear() {
    console.log("All_disappear");
>>>>>>> 0288e00a3fe62dc8d8655fad21c8e273f9c0e5b5
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

<<<<<<< HEAD
    TweenLite.to(Input1text, 0, { autoAlpha: 0 });
    TweenLite.to(Input2text, 0, { autoAlpha: 0 });
    TweenLite.to(Input3text, 0, { autoAlpha: 0 });
    TweenLite.to(Output1text, 0, { autoAlpha: 0 });
    TweenLite.to(Output2text, 0, { autoAlpha: 0 });
=======
    TweenLite.to(textINPUT1, 0, { autoAlpha: 0 });
    TweenLite.to(textINPUT2, 0, { autoAlpha: 0 });
    TweenLite.to(textINPUT3, 0, { autoAlpha: 0 });
    TweenLite.to(textOUTPUT1, 0, { autoAlpha: 0 });
    TweenLite.to(textOUTPUT2, 0, { autoAlpha: 0 });
>>>>>>> 0288e00a3fe62dc8d8655fad21c8e273f9c0e5b5
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
<<<<<<< HEAD
function setter(a, b) {
=======
function SETTER(a, b) {
>>>>>>> 0288e00a3fe62dc8d8655fad21c8e273f9c0e5b5
    if (a == 1) {
        unset(b);
    }
    else if (a == 0) {
        set(b);
    }
}
function input1() {
<<<<<<< HEAD
    if (Input1text.textContent != 0) {
        TweenLite.to(Input1text, 0, { autoAlpha: 0 });
        Input1text.textContent = 0;
        svg.appendChild(Input1text);
        gsap.set(Input1text, {
=======
    console.log("here we go");
    console.log(textINPUT1.textContent);
    console.log(textINPUT2.textContent);
    if (textINPUT1.textContent != 0) {
        TweenLite.to(textINPUT1, 0, { autoAlpha: 0 });
        textINPUT1.textContent = 0;
        svg.appendChild(textINPUT1);
        gsap.set(textINPUT1, {
>>>>>>> 0288e00a3fe62dc8d8655fad21c8e273f9c0e5b5
            x: 96,
            y: 244,
        });
        gsap.set(INPUT1, {
            fill: "#eeeb22"
        });
        document.getElementById("Observations").innerHTML = "";
<<<<<<< HEAD
        TweenLite.to(Input1text, 0, { autoAlpha: 1 });
        setter(Input1text.textContent, newCircle);
        setter(Input1text.textContent, newCircle4);
    }
    else if (Input1text.textContent != 1) {    
        TweenLite.to(Input1text, 0, { autoAlpha: 0 });
        Input1text.textContent = 1;
        svg.appendChild(Input1text);
        gsap.set(Input1text, {
=======
        TweenLite.to(textINPUT1, 0, { autoAlpha: 1 });
        SETTER(textINPUT1.textContent, newCircle);
        SETTER(textINPUT1.textContent, newCircle4);
    }
    else if (textINPUT1.textContent != 1) {    
        TweenLite.to(textINPUT1, 0, { autoAlpha: 0 });
        textINPUT1.textContent = 1;
        svg.appendChild(textINPUT1);
        gsap.set(textINPUT1, {
>>>>>>> 0288e00a3fe62dc8d8655fad21c8e273f9c0e5b5
            x: 96,
            y: 244,
        });
        gsap.set(INPUT1, {
            fill: "#29e"
        });
        document.getElementById("Observations").innerHTML = "";
<<<<<<< HEAD
        TweenLite.to(Input1text, 0, { autoAlpha: 1 });
        setter(Input1text.textContent, newCircle);
        setter(Input1text.textContent, newCircle4);
    }

}
function input2() {
    if (Input2text.textContent != 0) {
        TweenLite.to(Input2text, 0, { autoAlpha: 0 });
        Input2text.textContent = 0;
        svg.appendChild(Input2text);
        gsap.set(Input2text, {
=======
        TweenLite.to(textINPUT1, 0, { autoAlpha: 1 });
        SETTER(textINPUT1.textContent, newCircle);
        SETTER(textINPUT1.textContent, newCircle4);
    }

    console.log("after input1 function");
    console.log(textINPUT1.textContent);
    console.log(textINPUT2.textContent);
}
function input2() {
    console.log("here we go");
    if (textINPUT2.textContent != 0) {
        TweenLite.to(textINPUT2, 0, { autoAlpha: 0 });
        textINPUT2.textContent = 0;
        svg.appendChild(textINPUT2);
        gsap.set(textINPUT2, {
>>>>>>> 0288e00a3fe62dc8d8655fad21c8e273f9c0e5b5
            x: 96,
            y: 284,
        });
        gsap.set(INPUT2, {
            fill: "#eeeb22"
        });
        document.getElementById("Observations").innerHTML = "";
<<<<<<< HEAD
        TweenLite.to(Input2text, 0, { autoAlpha: 1 });
        setter(Input2text.textContent, newCircle1);
        setter(Input2text.textContent, newCircle5);
    }
    else if (Input2text.textContent != 1) {
        TweenLite.to(Input2text, 0, { autoAlpha: 0 });
        Input2text.textContent = 1;
        svg.appendChild(Input2text);
        gsap.set(Input2text, {
=======
        TweenLite.to(textINPUT2, 0, { autoAlpha: 1 });
        SETTER(textINPUT2.textContent, newCircle1);
        SETTER(textINPUT2.textContent, newCircle5);
    }
    else if (textINPUT2.textContent != 1) {
        TweenLite.to(textINPUT2, 0, { autoAlpha: 0 });
        textINPUT2.textContent = 1;
        svg.appendChild(textINPUT2);
        gsap.set(textINPUT2, {
>>>>>>> 0288e00a3fe62dc8d8655fad21c8e273f9c0e5b5
            x: 96,
            y: 284,
        });
        gsap.set(INPUT2, {
            fill: "#29e"
        });
        document.getElementById("Observations").innerHTML = "";
<<<<<<< HEAD
        TweenLite.to(Input2text, 0, { autoAlpha: 1 });
        setter(Input2text.textContent, newCircle1);
        setter(Input2text.textContent, newCircle5);
    }


}

function input3() {
    if (Input3text.textContent != 0) {
        TweenLite.to(Input3text, 0, { autoAlpha: 0 });
        Input3text.textContent = 0;
        svg.appendChild(Input3text);
        gsap.set(Input3text, {
=======
        TweenLite.to(textINPUT2, 0, { autoAlpha: 1 });
        SETTER(textINPUT2.textContent, newCircle1);
        SETTER(textINPUT2.textContent, newCircle5);
    }


    console.log("after input1 function");
    console.log(textINPUT1.textContent);
    console.log(textINPUT2.textContent);
}

function input3() {
    console.log("here we go");
    if (textINPUT3.textContent != 0) {
        TweenLite.to(textINPUT3, 0, { autoAlpha: 0 });
        textINPUT3.textContent = 0;
        svg.appendChild(textINPUT3);
        gsap.set(textINPUT3, {
>>>>>>> 0288e00a3fe62dc8d8655fad21c8e273f9c0e5b5
            x: 96,
            y: 344
        });
        gsap.set(INPUT3, {
            fill: "#eeeb22"
        });
        document.getElementById("Observations").innerHTML = "";
<<<<<<< HEAD
        TweenLite.to(Input3text, 0, { autoAlpha: 1 });
        setter(Input3text.textContent, newCircle2);
        setter(Input3text.textContent, newCircle7);
    }
    else if (Input3text.textContent != 1) {
        TweenLite.to(Input3text, 0, { autoAlpha: 0 });
        Input3text.textContent = 1;
        svg.appendChild(Input3text);
        gsap.set(Input3text, {
=======
        TweenLite.to(textINPUT3, 0, { autoAlpha: 1 });
        SETTER(textINPUT3.textContent, newCircle2);
        SETTER(textINPUT3.textContent, newCircle7);
    }
    else if (textINPUT3.textContent != 1) {
        TweenLite.to(textINPUT3, 0, { autoAlpha: 0 });
        textINPUT3.textContent = 1;
        svg.appendChild(textINPUT3);
        gsap.set(textINPUT3, {
>>>>>>> 0288e00a3fe62dc8d8655fad21c8e273f9c0e5b5
            x: 96,
            y: 344
        });
        gsap.set(INPUT3, {
            fill: "#29e"
        });
        document.getElementById("Observations").innerHTML = "";
<<<<<<< HEAD
        TweenLite.to(Input3text, 0, { autoAlpha: 1 });
        setter(Input3text.textContent, newCircle2);
        setter(Input3text.textContent, newCircle7);
    }
}
function outputSetter() {
    setter(Output1text.textContent, OUTPUT1);
    setter(Output2text.textContent, OUTPUT2);
=======
        TweenLite.to(textINPUT3, 0, { autoAlpha: 1 });
        SETTER(textINPUT3.textContent, newCircle2);
        SETTER(textINPUT3.textContent, newCircle7);
    }
}
function output_setter() {
    SETTER(textOUTPUT1.textContent, OUTPUT1);
    SETTER(textOUTPUT2.textContent, OUTPUT2);
>>>>>>> 0288e00a3fe62dc8d8655fad21c8e273f9c0e5b5
}

function observation() {
    document.getElementById("Observations").innerHTML = "Simulation has finished. Press Restart the simulation.";
}
<<<<<<< HEAD
let tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });
let speedCircuit = 1;
function SetSpeed(speed) {
    if (speed == "1") {
        if (Input1text.textContent != 2 && Input2text.textContent != 2 && Input3text.textContent!=2 && tl.progress()!=1) {
=======
var tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });
function FourxSpeed() {
    if (textINPUT1.textContent != 2 && textINPUT2.textContent != 2 && tl.progress()!=1) {
        tl.resume();
        tl.timeScale(4);
        document.getElementById("Observations").innerHTML = "4x speed"
    }
}

var speed_circuit = 1;
function SetSpeed(speed) {
    console.log(speed)
    if (speed == "1") {
        if (textINPUT1.textContent != 2 && textINPUT2.textContent != 2 && textINPUT3.textContent!=2 && tl.progress()!=1) {
>>>>>>> 0288e00a3fe62dc8d8655fad21c8e273f9c0e5b5
            // tl.resume();
            tl.timeScale(1);
        }
    }
    else if (speed == "2") {
<<<<<<< HEAD
        if (Input1text.textContent != 2 && Input2text.textContent != 2 && Input3text.textContent!=2&& tl.progress()!=1) {
=======
        if (textINPUT1.textContent != 2 && textINPUT2.textContent != 2 && textINPUT3.textContent!=2&& tl.progress()!=1) {
>>>>>>> 0288e00a3fe62dc8d8655fad21c8e273f9c0e5b5
            // tl.resume();
            tl.timeScale(2);
        }
    }
    else if (speed == "4") {
<<<<<<< HEAD
        if (Input1text.textContent != 2 && Input2text.textContent != 2 && Input3text.textContent!=2 && tl.progress()!=1) {
=======
        if (textINPUT1.textContent != 2 && textINPUT2.textContent != 2 && textINPUT3.textContent!=2 && tl.progress()!=1) {
>>>>>>> 0288e00a3fe62dc8d8655fad21c8e273f9c0e5b5
            // tl.resume();
            tl.timeScale(4);
        }
    }
    if(tl.progress()==0){
<<<<<<< HEAD
        speedCircuit = speed;
    }
=======
        speed_circuit = speed;
    }
    console.log("speead_circuit:"+ speed_circuit);
>>>>>>> 0288e00a3fe62dc8d8655fad21c8e273f9c0e5b5

}

function WorkCircuit() {
<<<<<<< HEAD
    let a = document.getElementById("currentwork").innerHTML;
=======
    var a = document.getElementById("currentwork").innerHTML;
>>>>>>> 0288e00a3fe62dc8d8655fad21c8e273f9c0e5b5
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
<<<<<<< HEAD
    if (Input1text.textContent != 2 && Input2text.textContent != 2 && Input3text.textContent !=2 && tl.progress() != 1) {
        tl.play();
        tl.timeScale(speedCircuit);
        document.getElementById("currentwork").innerHTML = "Stop";
        document.getElementById("Observations").innerHTML = "Simulation has started."
    }
    else if (Input1text.textContent == 2 || Input2text.textContent == 2 || Input3text.textContent == 2 ) {
=======
    if (textINPUT1.textContent != 2 && textINPUT2.textContent != 2 && textINPUT3.textContent !=2 && tl.progress() != 1) {
        tl.play();
        tl.timeScale(speed_circuit);
        document.getElementById("currentwork").innerHTML = "Stop";
        document.getElementById("Observations").innerHTML = "Simulation has started."
    }
    else if (textINPUT1.textContent == 2 || textINPUT2.textContent == 2 || textINPUT3.textContent == 2 ) {
>>>>>>> 0288e00a3fe62dc8d8655fad21c8e273f9c0e5b5
        document.getElementById("Observations").innerHTML = "Please select the values"
    }
    else if(tl.progress() == 1){
        document.getElementById("Observations").innerHTML = "Please Restart the simulation"  
    }
}


<<<<<<< HEAD
function outputVisible() {
    TweenLite.to(Output1text, 0, { autoAlpha: 1 });
    TweenLite.to(Output2text, 0, { autoAlpha: 1 });
=======
function input_visible() {
    TweenLite.to(newCircle, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle1, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle2, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle3, 0, { autoAlpha: 1 });
    
}
function input_disappear() {
    TweenLite.to(newCircle, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle1, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle2, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle3, 0, { autoAlpha: 0 });
}

function output_disappear() {
    TweenLite.to(textOUTPUT1, 0, { autoAlpha: 0 });
    TweenLite.to(textOUTPUT2, 0, { autoAlpha: 0 });
}
function output_visible() {
    TweenLite.to(textOUTPUT1, 0, { autoAlpha: 1 });
    TweenLite.to(textOUTPUT2, 0, { autoAlpha: 1 });
}
function text_input_disappear() {
    TweenLite.to(textINPUT1, 0, { autoAlpha: 0 });
    TweenLite.to(textINPUT2, 0, { autoAlpha: 0 });
}
function text_input_visible() {
    TweenLite.to(textINPUT1, 0, { autoAlpha: 1 });
    TweenLite.to(textINPUT2, 0, { autoAlpha: 1 });
>>>>>>> 0288e00a3fe62dc8d8655fad21c8e273f9c0e5b5
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
<<<<<<< HEAD
=======
    console.log("gate23_components_appear now");
>>>>>>> 0288e00a3fe62dc8d8655fad21c8e273f9c0e5b5
    TweenLite.to(newCircle3, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle6, 0, { autoAlpha: 1 });
}
function gate23_components_disappear() {
<<<<<<< HEAD
=======
    console.log("gate23_components_disappear now");
>>>>>>> 0288e00a3fe62dc8d8655fad21c8e273f9c0e5b5
    TweenLite.to(newCircle2, 0, { autoAlpha: 0 }); 
    TweenLite.to(newCircle3, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle4, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle5, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle6, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle7, 0, { autoAlpha: 0 });
}
function gate45_components_appear() {
<<<<<<< HEAD
=======
    console.log("gate45_components_appear now");
>>>>>>> 0288e00a3fe62dc8d8655fad21c8e273f9c0e5b5
    TweenLite.to(newCircle8, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle9, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle10, 0, { autoAlpha: 1 });
}
function gate45_components_disappear() {
<<<<<<< HEAD
=======
    console.log("gate45_components_disappear now");
>>>>>>> 0288e00a3fe62dc8d8655fad21c8e273f9c0e5b5
    TweenLite.to(newCircle8, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle9, 0, { autoAlpha: 0 });
}
function gate67_components_appear() {
<<<<<<< HEAD
    TweenLite.to(newCircle11, 0, { autoAlpha: 1 });
}
function gate67_components_disappear() {
=======
    console.log("gate67_components_appear now");
    TweenLite.to(newCircle11, 0, { autoAlpha: 1 });
}
function gate67_components_disappear() {
    console.log("gate67_components_disappear now");

>>>>>>> 0288e00a3fe62dc8d8655fad21c8e273f9c0e5b5
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
<<<<<<< HEAD
tl.add(outputVisible, 20);
tl.add(outputHandle, 0);
tl.add(outputSetter, 20);
tl.eventCallback("onComplete", outputVisible);
=======
tl.add(output_visible, 20);
tl.add(output_handle, 0);
tl.add(output_setter, 20);
tl.eventCallback("onComplete", output_visible);
>>>>>>> 0288e00a3fe62dc8d8655fad21c8e273f9c0e5b5
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
<<<<<<< HEAD
allDisappear();
=======
All_disappear();
>>>>>>> 0288e00a3fe62dc8d8655fad21c8e273f9c0e5b5
