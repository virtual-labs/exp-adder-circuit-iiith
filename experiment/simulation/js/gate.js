import { registerGate } from "./main.js";
import { setPosition } from "./layout.js";
import { halfAdder, fullAdderTest, rippleAdderTest  } from "./validator.js";
import {jsPlumbInstance} from "./main.js";

export let gates = {}; // Dictionary of gates with their IDs as keys
window.numComponents = 0;
//(input0,input1,carryOut,OutputOut)
export function clearGates() {

    for (let gateId in gates) {
        delete gates[gateId];
    }

    gates = {};
}

export class Gate {
    constructor(type) {
        this.type = type;
        this.id = type + "-" + window.numComponents++; // Unique ID
        this.positionX = 0;
        this.positionY = 0;
        this.isConnected = false;
        this.inputPoints = [];
        this.outputPoints = [];
        // connections : start/end , line_id, button_id
        // { line_id : {button_id,start/end,}  }
        this.inputs = []; // List of input gates
        this.output = null; // Output value
        this.isInput = false;
        this.isOutput = false;
        this.name = null;
    }
    // Sets the id of the gate
    setId(id) {
        this.id = id;
    }
    // Adds input to the gate
    addInput(gate) {
        this.inputs.push(gate);
    }

    // Removes input from the gate
    removeInput(gate) {
        let index = this.inputs.indexOf(gate);
        if (index > -1) {
            this.inputs.splice(index, 1);
        }
    }
    updatePosition(id) {
        this.positionY = window.scrollY + document.getElementById(id).getBoundingClientRect().top // Y

        this.positionX = window.scrollX + document.getElementById(id).getBoundingClientRect().left // X
    }
    setName(name) {
        this.name = name;
    }
    // generate component for the gate
    generateComponent() {
        let component = '';

        switch(this.type) {
            // case "AND":
            //     component = '<div class="drag-drop logic-gate AND" id=' + this.id + '></div>'
            //     break;
            // case "OR":
            //     component = '<div class="drag-drop logic-gate OR" id=' + this.id + '></div>'
            //     break;
            // case "NOT":
            //     component = '<div class="drag-drop logic-gate NOT" id=' + this.id + '></div>'
            //     break;
            // case "NAND":
            //     component = '<div class="drag-drop logic-gate NAND" id=' + this.id + '></div>'
            //     break;
            // case "NOR":
            //     component = '<div class="drag-drop logic-gate NOR" id=' + this.id + '></div>'
            //     break;
            // case "XOR":
            //     component = '<div class="drag-drop logic-gate XOR" id=' + this.id + '></div>'
            //     break;
            // case "XNOR":
            //     component = '<div class="drag-drop logic-gate XNOR" id=' + this.id + '></div>'
            //     break;
            case "Input":
                component = '<div class="HIGH" id=' + this.id + ' ><a ondblclick="setInput(event)">1</a><p>' + this.name + '</p></div>'
                this.output = true;
                this.isInput = true;
                break;
            case "Output":
                component = '<div class="Output" id=' + this.id + '><a></a><p>' + this.name + '</p></div>'
                this.isOutput = true;
                break;
            default:
                component = '<div class="drag-drop logic-gate '+ this.type +'" id=' + this.id + '></div>'
        }
        return component;

    }

    // Adds element to the circuit board, adds event listeners and generates its endpoints.
    registerComponent(workingArea,x=0,y=0) {

        // get width of working area
        const width = document.getElementById(workingArea).offsetWidth;
        const height = document.getElementById(workingArea).offsetHeight;
        let scale = 900;
        let yScale = 800;
        x = (x / scale) * width;
        y = (y / yScale) * height;
        document.getElementById(this.id).style.left = x + "px";
        document.getElementById(this.id).style.top = y + "px";
        if (this.type != "Input" && this.type != "Output") {
            const el = document.getElementById(this.id);
            el.addEventListener('contextmenu', function (ev) {
                ev.preventDefault();
                let left = ev.pageX - document.getScroll()[0];
                let top = ev.pageY - document.getScroll()[1];
                const origin = {
                    left: left,
                    top: top
                };
                setPosition(origin);
                window.selectedComponent = this.id;
                window.componentType = "gate";
                // deleteElement(this.id);
                return false;
            }, false);
        }
        gates[this.id] = this;
        registerGate(this.id, this);

        this.updatePosition(this.id);
        
    }

    // adds input endpoints points to the list of input points
    addInputPoints(input) {
        this.inputPoints.push(input);
    }

    // adds output endpoints points to the list of output points
    addOutputPoints(output) {
        this.outputPoints.push(output);
    }

    // Generates the output of the gate
    generateOutput() {
        switch(this.type) {
            case "AND":
                this.output = this.inputs[0].output && this.inputs[1].output;
                break;
            case "OR":
                this.output = this.inputs[0].output || this.inputs[1].output;
                break;
            case "NOT":
                this.output = !this.inputs[0].output;
                break;
            case "NAND":
                this.output = !(this.inputs[0].output && this.inputs[1].output);
                break;
            case "NOR":
                this.output = !(this.inputs[0].output || this.inputs[1].output);
                break;
            case "XOR":
                this.output = (this.inputs[0].output != this.inputs[1].output);
                break;
            case "XNOR":
                this.output = (this.inputs[0].output == this.inputs[1].output);
                break;
            case "Output":
                this.output = this.inputs[0].output;
                break;
        }

    }

    setOutput(val) {
        this.output = val;
    }
    setConnected(val) {
        this.isConnected = val;
    }
}


// Adds gate to the circuit board
function add_gate(event) {
    const type = event.target.innerHTML;
    const gate = new Gate(type);
    const component = gate.generateComponent();
    const parent = document.getElementById("working-area");
    parent.insertAdjacentHTML('beforeend', component);
    gate.registerComponent("working-area");
}

window.Add = add_gate;


// Recursive function to generate the output of the circuit
export function getResult(gate) {
    if (gate.output != null) {
        return;
    }
    for (let i = 0; i < gate.inputs.length; i++) {
        if (gate.inputs[i].output == null) {
            getResult(gate.inputs[i]);
        }
    }
    gate.generateOutput();
    return;
}

// Set the Input values of the input bits on double click
 function setInput(event) {
    let parentElement = event.target.parentElement;
    let element = event.target;
    let type = parentElement.className.split(" ")[0];
    let gate = gates[parentElement.id];
    if (type === "HIGH") {
        // change class HIGH to LOW
        parentElement.classList.replace("HIGH", "LOW");
        element.innerHTML = "0";
        gate.setOutput(false);
    }
    else if (type === "LOW") {
        parentElement.classList.replace("LOW", "HIGH");
        element.innerHTML = "1";
        gate.setOutput(true);
    }
}

window.setInput = setInput;


// Check if the connections are correct
export function checkConnections() {
    let flag = 0;
    for (let gateId in gates) {
        const gate = gates[gateId];
        if (gate.inputPoints.length != gate.inputs.length) {
            flag = 1;
        }
        else if (gate.isConnected === false && gate.isOutput === false) {
            flag = 1;
        }
    }
    if (flag === 0) {
        return true;
    }
    else {
        alert("Connections are not correct");
        return false;
    }
}

// Simulate the circuit
export function simulate() {

    if (!checkConnections()) {
        return;
    }

    // reset output in gate
    for (let gateId in gates) {
        if (!gates[gateId].isInput) {
            gates[gateId].output = null;
        }
    }


    for (let gateId in gates) {
        const gate = gates[gateId];
        if (gate.isOutput === true) {
            getResult(gate);
            let element = document.getElementById(gate.id)
            if (gate.output === true) {
                element.className = "HIGH";
                element.childNodes[0].innerHTML = "1";
            }
            else {
                element.className = "LOW";
                element.childNodes[0].innerHTML = "0";
            }
        }
    }
}

window.simulate = simulate;


// Simulate the circuit for given gates; Used for testing the circuit for all possible inputss
export function testSimulation(gates) {
    if (!checkConnections()) {
        return;
    }

    // reset output in gate
    for (let gateId in gates) {
        if (!gates[gateId].isInput) {
            gates[gateId].output = null;
        }
    }

    for (let gateId in gates) {
        const gate = gates[gateId];
        if (gate.isOutput === true) {
            getResult(gate);
        }
    }
}

// function to submit the desired circuit and get the final success or failure message
export function submitCircuit() {

    document.getElementById("table-body").innerHTML = "";
    if (window.currentTab === "Task1") {
        halfAdder("Input-0", "Input-1", "Output-3", "Output-2");
    }
    else if (window.currentTab === "Task2") {
        fullAdderTest("Input-0", "Input-1", "Input-2", "Output-4", "Output-3");
    }
    else if (window.currentTab === "Task3") {
        rippleAdderTest("Input-0", "Input-1", "Input-3", "Input-4", "Input-6", "Input-7", "Input-9", "Input-10","Input-13","Output-12","Output-2","Output-5","Output-8","Output-11");
    }
}
window.submitCircuit = submitCircuit;


// Delete the selected gate
export function deleteElement(gateid) {

    let gate = gates[gateid];
    // jsPlumbInstance.selectEndpoints().detachAll();
    jsPlumbInstance.removeAllEndpoints(document.getElementById(gate.id));
    // jsPlumbInstance.detach(gate.id); // <--
    jsPlumbInstance._removeElement(document.getElementById(gate.id));
    for (let elem in gates) {
        if (gates[elem].inputs.includes(gate)) {
            gates[elem].removeInput(gate);
        }
    }
    delete gates[gateid];
    // jsPlumbInstance.repaintEverything();
}


