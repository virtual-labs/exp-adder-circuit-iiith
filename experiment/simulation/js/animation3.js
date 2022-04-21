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
    attr: { cx: 150, cy: 240, r: 15, fill: "#FF0000" }
});
let newCircle1 = document.createElementNS(svgns, "circle");
gsap.set(newCircle1, {
    attr: { cx: 200, cy: 240, r: 15, fill: "#FF0000" }
});
let newCircle2 = document.createElementNS(svgns, "circle");
gsap.set(newCircle2, {
    attr: { cx: 350, cy: 240, r: 15, fill: "#FF0000" }
});
let newCircle3 = document.createElementNS(svgns, "circle");
gsap.set(newCircle3, {
    attr: { cx: 400, cy: 240, r: 15, fill: "#FF0000" }
});

let newCircle4 = document.createElementNS(svgns, "circle");
gsap.set(newCircle4, {
    attr: { cx: 550, cy: 240, r: 15, fill: "#FF0000" }
});

let newCircle5 = document.createElementNS(svgns, "circle");
gsap.set(newCircle5, {
    attr: { cx: 600, cy: 240, r: 15, fill: "#FF0000" }
});

let newCircle6 = document.createElementNS(svgns, "circle");
gsap.set(newCircle6, {
    attr: { cx: 750, cy: 240, r: 15, fill: "#FF0000" }
});
let newCircle7 = document.createElementNS(svgns, "circle");
gsap.set(newCircle7, {
    attr: { cx: 800, cy: 240, r: 15, fill: "#FF0000" }
});
let newCircle8 = document.createElementNS(svgns, "circle");
gsap.set(newCircle8, {
    attr: { cx: 25, cy: 390, r: 15, fill: "#FF0000" }
});
let newCircle9 = document.createElementNS(svgns, "circle");
gsap.set(newCircle9, {
    attr: { cx: 225, cy: 390, r: 15, fill: "#FF0000" }
});

let newCircle10 = document.createElementNS(svgns, "circle");
gsap.set(newCircle10, {
    attr: { cx: 425, cy: 390, r: 15, fill: "#FF0000" }
});

let newCircle11 = document.createElementNS(svgns, "circle");
gsap.set(newCircle11, {
    attr: { cx: 625, cy: 390, r: 15, fill: "#FF0000" }
});

let newCircle12 = document.createElementNS(svgns, "circle");
gsap.set(newCircle12, {
    attr: { cx: 825, cy: 390, r: 15, fill: "#FF0000" }
});

let newCircle13 = document.createElementNS(svgns, "circle");
gsap.set(newCircle13, {
    attr: { cx: 175, cy: 440, r: 15, fill: "#FF0000" }
});

let newCircle14 = document.createElementNS(svgns, "circle");
gsap.set(newCircle14, {
    attr: { cx: 375, cy: 440, r: 15, fill: "#FF0000" }
});
let newCircle15 = document.createElementNS(svgns, "circle");
gsap.set(newCircle15, {
    attr: { cx: 575, cy: 440, r: 15, fill: "#FF0000" }
});
let newCircle16 = document.createElementNS(svgns, "circle");
gsap.set(newCircle16, {
    attr: { cx: 775, cy: 440, r: 15, fill: "#FF0000" }
});


let textA0 = document.createElementNS(svgns, "text");
let textA1 = document.createElementNS(svgns, "text");
let textA2 = document.createElementNS(svgns, "text");
let textA3 = document.createElementNS(svgns, "text");
let textB0 = document.createElementNS(svgns, "text");
let textB1 = document.createElementNS(svgns, "text");
let textB2 = document.createElementNS(svgns, "text");
let textB3 = document.createElementNS(svgns, "text");
let textC0 = document.createElementNS(svgns, "text");
let textC1 = document.createElementNS(svgns, "text");
let textC2 = document.createElementNS(svgns, "text");
let textC3 = document.createElementNS(svgns, "text");
let textC4 = document.createElementNS(svgns, "text");
let textS0 = document.createElementNS(svgns, "text");
let textS1 = document.createElementNS(svgns, "text");
let textS2 = document.createElementNS(svgns, "text");
let textS3 = document.createElementNS(svgns, "text");

textA0.textContent = 2;
textA1.textContent = 2;
textA2.textContent = 2;
textA3.textContent = 2;
textB0.textContent = 2;
textB1.textContent = 2;
textB2.textContent = 2;
textB3.textContent = 2;
textC0.textContent = 2;
textC1.textContent = 2;
textC2.textContent = 2;
textC3.textContent = 2;
textC4.textContent = 2;
textS0.textContent = 2;
textS1.textContent = 2;
textS2.textContent = 2;
textS3.textContent = 2;

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
svg.appendChild(newCircle12);
svg.appendChild(newCircle13);
svg.appendChild(newCircle14);
svg.appendChild(newCircle15);
svg.appendChild(newCircle16);

gsap.set(textA0, {
    x: 146,
    y: 244,
});
gsap.set(textA1, {
    x: 346,
    y: 244,
});
gsap.set(textA2, {
    x: 546,
    y: 244,
});
gsap.set(textA3, {
    x: 746,
    y: 244,
});
gsap.set(textB0, {
    x: 196,
    y: 244,
});
gsap.set(textB1, {
    x: 396,
    y: 244,
});
gsap.set(textB2, {
    x: 596,
    y: 244,
});
gsap.set(textB3, {
    x: 796,
    y: 244,
});
gsap.set(textC0, {
    x: 21,
    y: 394,
});

gsap.set(textC4, {
    x: 921,
    y: 394,
});


gsap.set(textS0, {
    x: 170,
    y: 546,
});
gsap.set(textS1, {
    x: 370,
    y: 546,
});
gsap.set(textS2, {
    x: 570,
    y: 546,
});
gsap.set(textS3, {
    x: 770,
    y: 546,
});

svg.appendChild(textA0);
svg.appendChild(textA1);
svg.appendChild(textA2);
svg.appendChild(textA3);
svg.appendChild(textB0);
svg.appendChild(textB1);
svg.appendChild(textB2);
svg.appendChild(textB3);
svg.appendChild(textC0);
svg.appendChild(textC4);
svg.appendChild(textS0);
svg.appendChild(textS1);
svg.appendChild(textS2);
svg.appendChild(textS3);

const A0 = document.getElementById("input1");
const A1 = document.getElementById("input3");
const A2 = document.getElementById("input5");
const A3 = document.getElementById("input7");
const B0 = document.getElementById("input2");
const B1 = document.getElementById("input4");
const B2 = document.getElementById("input6");
const B3 = document.getElementById("input8");
const C0 = document.getElementById("input9");
const C4 = document.getElementById("output1");
const S0 = document.getElementById("output2");
const S1 = document.getElementById("output3");
const S2 = document.getElementById("output4");
const S3 = document.getElementById("output5");

function free() {
    document.getElementById("Observations").innerHTML = "";
}
function outputS(a,b,c){
    s=1;
    if(a==b){
        s=0;
    }
    s= (parseInt(s)+parseInt(c))%2;
    return s;
}
function outputC(a,b,c){
    s=c;
    if(a==1 && b==1 && c==0){
        s=1;
    }
    if(a==0 && b==0 && c==1){
        s=0;
    }
    return s;
}
function outputHandle(){
    textS0.textContent = outputS(textA0.textContent,textB0.textContent,textC0.textContent);
    setter(textS0.textContent,newCircle13);
    textC1.textContent = outputC(textA0.textContent,textB0.textContent,textC0.textContent);
    setter(textC1.textContent,newCircle9);
    textS1.textContent = outputS(textA1.textContent,textB1.textContent,textC1.textContent);
    setter(textS1.textContent,newCircle14);
    textC2.textContent = outputC(textA1.textContent,textB1.textContent,textC1.textContent);
    setter(textC2.textContent,newCircle10);
    textS2.textContent = outputS(textA2.textContent,textB2.textContent,textC2.textContent);
    setter(textS2.textContent,newCircle15);
    textC3.textContent = outputC(textA2.textContent,textB2.textContent,textC2.textContent);
    setter(textC3.textContent,newCircle11);
    textS3.textContent = outputS(textA3.textContent,textB3.textContent,textC3.textContent);
    setter(textS3.textContent,newCircle16);
    textC4.textContent = outputC(textA3.textContent,textB3.textContent,textC3.textContent);
    setter(textC4.textContent,newCircle12);
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
    TweenLite.to(newCircle12, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle13, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle14, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle15, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle16, 0, { autoAlpha: 0 });
    TweenLite.to(textA0, 0, { autoAlpha: 0 });
    TweenLite.to(textA1, 0, { autoAlpha: 0 });
    TweenLite.to(textA2, 0, { autoAlpha: 0 });
    TweenLite.to(textA3, 0, { autoAlpha: 0 });
    TweenLite.to(textB0, 0, { autoAlpha: 0 });
    TweenLite.to(textB1, 0, { autoAlpha: 0 });
    TweenLite.to(textB2, 0, { autoAlpha: 0 });
    TweenLite.to(textB3, 0, { autoAlpha: 0 });
    TweenLite.to(textC0, 0, { autoAlpha: 0 });
    TweenLite.to(textC4, 0, { autoAlpha: 0 });
    TweenLite.to(textS0, 0, { autoAlpha: 0 });
    TweenLite.to(textS1, 0, { autoAlpha: 0 });
    TweenLite.to(textS2, 0, { autoAlpha: 0 });
    TweenLite.to(textS3, 0, { autoAlpha: 0 });

    gsap.set(A0, {
        fill: "#008000"
    });

    gsap.set(A1, {
        fill: "#008000"
    });

    gsap.set(A2, {
        fill: "#008000"
    });

    gsap.set(A3, {
        fill: "#008000"
    });

    gsap.set(B0, {
        fill: "#008000"
    });

    gsap.set(B1, {
        fill: "#008000"
    });

    gsap.set(B2, {
        fill: "#008000"
    });

    gsap.set(B3, {
        fill: "#008000"
    });

    gsap.set(C0, {
        fill: "#008000"
    });

    gsap.set(C4, {
        fill: "#008000"
    });

    gsap.set(S0, {
        fill: "#008000"
    });

    gsap.set(S1, {
        fill: "#008000"
    });

    gsap.set(S2, {
        fill: "#008000"
    });

    gsap.set(S3, {
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
    if (textA0.textContent != 0 && tl.progress() == 0) {
        TweenLite.to(textA0, 0, { autoAlpha: 0 });
        textA0.textContent = 0;
        svg.appendChild(textA0);
        gsap.set(textA0, {
            x: 146,
            y: 244,

        });
        gsap.set(A0, {
            fill: "#eeeb22"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(textA0, 0, { autoAlpha: 1 });
        setter(textA0.textContent, newCircle);
    }
    else if (textA0.textContent != 1 && tl.progress() == 0) {    
        TweenLite.to(textA0, 0, { autoAlpha: 0 });
        textA0.textContent = 1;
        svg.appendChild(textA0);
        gsap.set(textA0, {
            x: 146,
            y: 244,
        });
        gsap.set(A0, {
            fill: "#29e"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(textA0, 0, { autoAlpha: 1 });
        setter(textA0.textContent, newCircle);
    }

}
function input3() {
    if (textA1.textContent != 0 && tl.progress() == 0) {
        TweenLite.to(textA1, 0, { autoAlpha: 0 });
        textA1.textContent = 0;
        svg.appendChild(textA1);
        gsap.set(textA1, {
            x: 346,
            y: 244,
        });
        gsap.set(A1, {
            fill: "#eeeb22"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(textA1, 0, { autoAlpha: 1 });
        setter(textA1.textContent, newCircle2);
    }
    else if (textA1.textContent != 1 && tl.progress() == 0) {
        TweenLite.to(textA1, 0, { autoAlpha: 0 });
        textA1.textContent = 1;
        svg.appendChild(textA1);
        gsap.set(textA1, {
            x: 346,
            y: 244,
        });
        gsap.set(A1, {
            fill: "#29e"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(textA1, 0, { autoAlpha: 1 });
        setter(textA1.textContent, newCircle2);
    }
}

function input5() {
    
    if (textA2.textContent != 0 && tl.progress() == 0) {
        TweenLite.to(textA2, 0, { autoAlpha: 0 });
        textA2.textContent = 0;
        svg.appendChild(textA2);
        gsap.set(textA2, {
            x: 546,
            y: 244,
        });
        gsap.set(A2, {
            fill: "#eeeb22"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(textA2, 0, { autoAlpha: 1 });
        setter(textA2.textContent, newCircle4);
    }
    else if (textA2.textContent != 1 && tl.progress() == 0) {
        TweenLite.to(textA2, 0, { autoAlpha: 0 });
        textA2.textContent = 1;
        svg.appendChild(textA2);
        gsap.set(textA2, {
            x: 546,
            y: 244,
        });
        gsap.set(A2, {
            fill: "#29e"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(textA2, 0, { autoAlpha: 1 });
        setter(textA2.textContent, newCircle4);
    }
}

function input7() {
    
    if (textA3.textContent != 0 && tl.progress() == 0) {
        TweenLite.to(textA3, 0, { autoAlpha: 0 });
        textA3.textContent = 0;
        svg.appendChild(textA3);
        gsap.set(textA3, {
            x: 746,
            y: 244,
        });
        gsap.set(A3, {
            fill: "#eeeb22"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(textA3, 0, { autoAlpha: 1 });
        setter(textA3.textContent, newCircle6);
    }
    else if (textA3.textContent != 1 && tl.progress() == 0) {
        TweenLite.to(textA3, 0, { autoAlpha: 0 });
        textA3.textContent = 1;
        svg.appendChild(textA3);
        gsap.set(textA3, {
            x: 746,
            y: 244,
        });
        gsap.set(A3, {
            fill: "#29e"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(textA3, 0, { autoAlpha: 1 });
        setter(textA3.textContent, newCircle6);
    }
}

function input2() {
    
    if (textB0.textContent != 0 && tl.progress() == 0) {
        TweenLite.to(textB0, 0, { autoAlpha: 0 });
        textB0.textContent = 0;
        svg.appendChild(textB0);
        gsap.set(textB0, {
            x: 196,
            y: 244
        });
        gsap.set(B0, {
            fill: "#eeeb22"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(textB0, 0, { autoAlpha: 1 });
        setter(textB0.textContent, newCircle1);
    }
    else if (textB0.textContent != 1 && tl.progress() == 0) {
        TweenLite.to(textB0, 0, { autoAlpha: 0 });
        textB0.textContent = 1;
        svg.appendChild(textB0);
        gsap.set(textB0, {
            x: 196,
            y: 244
        });
        gsap.set(B0, {
            fill: "#29e"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(textB0, 0, { autoAlpha: 1 });
        setter(textB0.textContent, newCircle1);
    }
}

function input4() {
    
    if (textB1.textContent != 0 && tl.progress() == 0) {
        TweenLite.to(textB1, 0, { autoAlpha: 0 });
        textB1.textContent = 0;
        svg.appendChild(textB1);
        gsap.set(textB1, {
            x: 396,
            y: 244
        });
        gsap.set(B1, {
            fill: "#eeeb22"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(textB1, 0, { autoAlpha: 1 });
        setter(textB1.textContent, newCircle3);
    }
    else if (textB1.textContent != 1 && tl.progress() == 0) {
        TweenLite.to(textB1, 0, { autoAlpha: 0 });
        textB1.textContent = 1;
        svg.appendChild(textB1);
        gsap.set(textB1, {
            x: 396,
            y: 244
            
        });
        gsap.set(B1, {
            fill: "#29e"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(textB1, 0, { autoAlpha: 1 });
        setter(textB1.textContent, newCircle3);
    }
}

function input6() {
    
    if (textB2.textContent != 0 && tl.progress() == 0) {
        TweenLite.to(textB2, 0, { autoAlpha: 0 });
        textB2.textContent = 0;
        svg.appendChild(textB2);
        gsap.set(textB2, {
            x: 596,
            y: 244

        });
        gsap.set(B2, {
            fill: "#eeeb22"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(textB2, 0, { autoAlpha: 1 });
        setter(textB2.textContent, newCircle5);
    }
    else if (textB2.textContent != 1 && tl.progress() == 0) {
        TweenLite.to(textB2, 0, { autoAlpha: 0 });
        textB2.textContent = 1;
        svg.appendChild(textB2);
        gsap.set(textB2, {
            x:  596,
            y: 244

        });
        gsap.set(B2, {
            fill: "#29e"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(textB2, 0, { autoAlpha: 1 });
        setter(textB2.textContent, newCircle5);
    }
}

function input8() {
    
    if (textB3.textContent != 0 && tl.progress() == 0) {
        TweenLite.to(textB3, 0, { autoAlpha: 0 });
        textB3.textContent = 0;
        svg.appendChild(textB3);
        gsap.set(textB3, {
            x: 796,
            y: 244

        });
        gsap.set(B3, {
            fill: "#eeeb22"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(textB3, 0, { autoAlpha: 1 });
        setter(textB3.textContent, newCircle7);
    }
    else if (textB3.textContent != 1 && tl.progress() == 0) {
        TweenLite.to(textB3, 0, { autoAlpha: 0 });
        textB3.textContent = 1;
        svg.appendChild(textB3);
        gsap.set(textB3, {
            x: 796,
            y: 244

        });
        gsap.set(B3, {
            fill: "#29e"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(textB3, 0, { autoAlpha: 1 });
        setter(textB3.textContent, newCircle7);
    }
}

function input9() {
    
    if (textC0.textContent != 0 && tl.progress() == 0) {
        TweenLite.to(textC0, 0, { autoAlpha: 0 });
        textC0.textContent = 0;
        svg.appendChild(textC0);
        gsap.set(textC0, {
            x: 21,
            y: 394

        });
        gsap.set(C0, {
            fill: "#eeeb22"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(textC0, 0, { autoAlpha: 1 });
        setter(textC0.textContent, newCircle8);
    }
    else if (textC0.textContent != 1 && tl.progress() == 0) {
        TweenLite.to(textC0, 0, { autoAlpha: 0 });
        textC0.textContent = 1;
        svg.appendChild(textC0);
        gsap.set(textC0, {
            x: 21,
            y: 394

        });
        gsap.set(C0, {
            fill: "#29e"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(textC0, 0, { autoAlpha: 1 });
        setter(textC0.textContent, newCircle8);
    }
}
function outputSetter() {
    setter(textS0.textContent, S0);
    setter(textS1.textContent, S1);
    setter(textS2.textContent, S2);
    setter(textS3.textContent, S3);
    setter(textC4.textContent, C4);
}

function observation() {
    document.getElementById("Observations").innerHTML = "Simulation has finished. To reset the simulation, press Reset Simulation.";
}
let tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });
let speed_circuit = 1;
function SetSpeed(speed) {
    if (speed == "1") {
        if (textA0.textContent != 2 && textB0.textContent != 2 && textA1.textContent != 2 && textB1.textContent != 2 &&textA2.textContent != 2 && textB2.textContent != 2 && textA3.textContent != 2 && textB3.textContent != 2 &&  tl.progress()!=1) {
            tl.timeScale(1);
        }
    }
    else if (speed == "2") {
        if (textA0.textContent != 2 && textB0.textContent != 2 && textA1.textContent != 2 && textB1.textContent != 2 &&textA2.textContent != 2 && textB2.textContent != 2 && textA3.textContent != 2 && textB3.textContent != 2 && tl.progress()!=1) {
            tl.timeScale(2);
        }
    }
    else if (speed == "4") {
        if (textA0.textContent != 2 && textB0.textContent != 2 && textA1.textContent != 2 && textB1.textContent != 2 &&textA2.textContent != 2 && textB2.textContent != 2 && textA3.textContent != 2 && textB3.textContent != 2 && tl.progress()!=1) {
            tl.timeScale(4);
        }
    }
    if(tl.progress()==0){
        speed_circuit = speed;
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
    if (textA0.textContent != 2 && textA1.textContent != 2 && textA2.textContent!=2 && textA3.textContent!=2 && textB0.textContent!=2 && textB1.textContent!=2 && textB2.textContent!=2 && textB3.textContent!=2 && textC0.textContent!=2 && tl.progress()!=1) {
        tl.play();
        document.getElementById("currentwork").innerHTML = "Stop";
        tl.timeScale(speed_circuit);
        document.getElementById("Observations").innerHTML = "Simulation has started."
    }
    else if (textA0.textContent == 2 || textA1.textContent == 2 || textA2.textContent == 2 || textA3.textContent == 2 || textB0.textContent == 2 || textB1.textContent == 2 || textB2.textContent == 2 || textB3.textContent == 2 || textC0.textContent == 2 ) {
        document.getElementById("Observations").innerHTML = "Please select the values"
    }
    else if(tl.progress() == 1){
        document.getElementById("Observations").innerHTML = "Please Restart the simulation"  
    }
}


function free() {
    document.getElementById("Observations").innerHTML = "";
}
function gate1ComponentsAppear() {
    TweenLite.to(newCircle, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle1, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle8, 0, { autoAlpha: 1 });
}
function gate1ComponentsDisappear() {
    TweenLite.to(newCircle, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle1, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle8, 0, { autoAlpha: 0 });
}
function gate2ComponentsAppear() {
    TweenLite.to(newCircle2, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle3, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle9, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle13, 0, { autoAlpha: 1 });
    
}
function gate2ComponentsDisappear() {
    TweenLite.to(newCircle2, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle3, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle9, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle13, 0, { autoAlpha: 0 });

}
function gate3ComponentsAppear() {
    TweenLite.to(textS0, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle4, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle5, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle10, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle14, 0, { autoAlpha: 1 });

}
function gate3ComponentsDisappear() {
    TweenLite.to(newCircle4, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle5, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle10, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle14, 0, { autoAlpha: 0 });


}
function gate4ComponentsAppear() {
    TweenLite.to(textS1, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle6, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle7, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle11, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle15, 0, { autoAlpha: 1 });
}
function gate4ComponentsDisappear() {
    TweenLite.to(newCircle6, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle7, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle11, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle15, 0, { autoAlpha: 0 });
}
function gate5ComponentsAppear() {
    TweenLite.to(textS2, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle12, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle16, 0, { autoAlpha: 1 });
}
function gate5ComponentsDisappear() {
    TweenLite.to(newCircle12, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle16, 0, { autoAlpha: 0 });
    TweenLite.to(textC4, 0, { autoAlpha: 1 });
    TweenLite.to(textS3, 0, { autoAlpha: 1 });
    
}



tl.add(gate1ComponentsAppear, 0);
tl.add(gate1ComponentsDisappear, 2);
tl.add(gate2ComponentsAppear, 2);
tl.add(gate2ComponentsDisappear, 4);
tl.add(gate3ComponentsAppear, 4);
tl.add(gate3ComponentsDisappear, 6);
tl.add(gate4ComponentsAppear, 6);
tl.add(gate4ComponentsDisappear, 8);
tl.add(gate5ComponentsAppear, 8);
tl.add(gate5ComponentsDisappear, 10);
tl.add(outputHandle, 0);
tl.add(outputSetter, 10);
tl.eventCallback("onComplete", observation);
tl.to(newCircle, {
    motionPath: {
        path: "#path1",
        align: "#path1",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 2,
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

    duration: 2,
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

    duration: 2,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,

}, 2);
tl.to(newCircle3, {
    motionPath: {
        path: "#path4",
        align: "#path4",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 2,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,

}, 2);
tl.to(newCircle4, {
    motionPath: {
        path: "#path5",
        align: "#path5",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },
    
    duration: 2,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,

}, 4);
tl.to(newCircle5, {
    motionPath: {
        path: "#path6",
        align: "#path6",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 2,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,

}, 4);

tl.to(newCircle6, {
    motionPath: {
        path: "#path7",
        align: "#path7",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 2,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,

}, 6);
tl.to(newCircle7, {
    motionPath: {
        path: "#path8",
        align: "#path8",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 2,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,
}, 6);

tl.to(newCircle8, {
    motionPath: {
        path: "#path9",
        align: "#path9",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 2,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,
}, 0);

tl.to(newCircle9, {
    motionPath: {
        path: "#path10",
        align: "#path10",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 2,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,
}, 2);

tl.to(newCircle10, {
    motionPath: {
        path: "#path11",
        align: "#path11",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 2,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,
}, 4);

tl.to(newCircle11, {
    motionPath: {
        path: "#path12",
        align: "#path12",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 2,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,
}, 6);

tl.to(newCircle12, {
    motionPath: {
        path: "#path13",
        align: "#path13",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 2,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,
}, 8);

tl.to(newCircle13, {
    motionPath: {
        path: "#path14",
        align: "#path14",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 2,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,
}, 2);

tl.to(newCircle14, {
    motionPath: {
        path: "#path15",
        align: "#path15",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 2,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,
}, 4);

tl.to(newCircle15, {
    motionPath: {
        path: "#path16",
        align: "#path16",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 2,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,
}, 6);

tl.to(newCircle16, {
    motionPath: {
        path: "#path17",
        align: "#path17",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 2,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,
}, 8);


tl.pause();
allDisappear();