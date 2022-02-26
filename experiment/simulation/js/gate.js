let gates = {}; // Array of gates
window.numComponents = 0;
//(input0,input1,carryOut,OutputOut)


class Gate {
    constructor(type) {
        this.type = type;
        this.id = type + "-" + window.numComponents++;
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
    setId(id) {
        this.id = id;
    }
    addInput(gate) {
        this.inputs.push(gate);
    }
    removeInput(gate) {
        var index = this.inputs.indexOf(gate);
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

    generateComponent(x = 0, y = 0) {
        var component = '';

        if (this.type == "AND") {

            component = '<div class="drag-drop AND" id=' + this.id + '></div>'

        }
        else if (this.type == "NOT") {
            component = '<div class="drag-drop NOT" id=' + this.id + '></div>'

        }
        else if (this.type == "OR") {
            component = '<div class="drag-drop OR" id=' + this.id + '></div>'

        }
        else if (this.type == "XOR") {
            component = '<div class="drag-drop XOR" id=' + this.id + '></div>'

        }
        else if (this.type == "XNOR") {

            component = '<div class="drag-drop XNOR" id=' + this.id + '></div>'

        }
        else if (this.type == "NAND") {

            component = '<div class="drag-drop NAND" id=' + this.id + '></div>'

        }
        else if (this.type == "NOR") {

            component = '<div class="drag-drop NOR" id=' + this.id + '></div>'

        }
        else if (this.type == "Input") {
            component = '<div class="HIGH" id=' + this.id + ' ><a ondblclick="setInput(event)">1</a><p>' + this.name + '</p></div>'
            this.output = true;
            this.isInput = true;
        }
        else if (this.type == "Output") {
            component = '<div class="Output" id=' + this.id + '><a></a><p>' + this.name + '</p></div>'
            this.isOutput = true;
        }

        var parent = document.getElementById("working-area");



        parent.insertAdjacentHTML('beforeend', component);
        // get width of working area
        var width = document.getElementById("working-area").offsetWidth;
        var scale = 900;
        x = (x / scale) * width;
        document.getElementById(this.id).style.left = x + "px";
        document.getElementById(this.id).style.top = y + "px";
        if (this.type != "Input" && this.type != "Output") {
            var el = document.getElementById(this.id);
            el.addEventListener('contextmenu', function (ev) {
                ev.preventDefault();
                var left = ev.pageX - document.getScroll()[0];
                var top = ev.pageY - document.getScroll()[1];
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

    addInputPoints(input) {
        this.inputPoints.push(input);
    }

    addOutputPoints(output) {
        this.outputPoints.push(output);
    }


    generateOutput() {
        if (this.type == "AND") {
            this.output = this.inputs[0].output && this.inputs[1].output;
        }
        else if (this.type == "OR") {
            this.output = this.inputs[0].output || this.inputs[1].output;
        }
        else if (this.type == "NOT") {
            this.output = !this.inputs[0].output;
        }
        else if (this.type == "XOR") {
            this.output = (this.inputs[0].output && !this.inputs[1].output) || (!this.inputs[0].output && this.inputs[1].output);
        }
        else if (this.type == "XNOR") {
            this.output = (!this.inputs[0].output || this.inputs[1].output) && (this.inputs[0].output || !this.inputs[1].output);
        }
        else if (this.type == "NAND") {
            this.output = !(this.inputs[0].output && this.inputs[1].output);
        }
        else if (this.type == "NOR") {
            this.output = !(this.inputs[0].output || this.inputs[1].output);
        }
        else if (this.type == "Output") {
            this.output = this.inputs[0].output;
        }
    }

    setOutput(val) {
        this.output = val;
    }
    setConnected(val) {
        this.isConnected = val;
    }
}



function Add(event) {
    var type = event.target.innerHTML;
    var gate = new Gate(type);
    gate.generateComponent();
}

function getResult(gate) {
    if (gate.output != null) {
        return;
    }
    for (var i = 0; i < gate.inputs.length; i++) {
        if (gate.inputs[i].output == null) {
            getResult(gate.inputs[i]);
        }
    }
    gate.generateOutput();
    return;
}

function setInput(event) {
    var parentElement = event.target.parentElement;
    var element = event.target;
    var type = parentElement.className.split(" ")[0];
    var gate = gates[parentElement.id];
    if (type == "HIGH") {
        // change class HIGH to LOW
        parentElement.classList.replace("HIGH", "LOW");
        element.innerHTML = "0";
        gate.setOutput(false);
    }
    else if (type == "LOW") {
        parentElement.classList.replace("LOW", "HIGH");
        element.innerHTML = "1";
        gate.setOutput(true);
    }
}

function checkConnections() {
    var flag = 0;
    for (var gateId in gates) {
        var gate = gates[gateId];
        if (gate.inputPoints.length != gate.inputs.length) {
            flag = 1;
        }
        else if (gate.isConnected == false && gate.isOutput == false) {
            flag = 1;
        }
    }
    if (flag == 0) {
        return true;
    }
    else {
        alert("Connections are not correct");
        return false;
    }
}

function simulate() {
    if (window.currentTab == "Task3") {
        simulateFA();
        return;
    }


    if (!checkConnections()) {
        return;
    }

    // reset output in gate
    for (var gateId in gates) {
        if (!gates[gateId].isInput) {
            gates[gateId].output = null;
        }
    }


    for (var gateId in gates) {
        var gate = gates[gateId];
        if (gate.isOutput == true) {
            getResult(gate);
            var element = document.getElementById(gate.id)
            if (gate.output == true) {
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

function testSimulation(Gates) {
    if (!checkConnections()) {
        return;
    }

    // reset output in gate
    for (var gateId in Gates) {
        if (!Gates[gateId].isInput) {
            Gates[gateId].output = null;
        }
    }

    for (var gateId in Gates) {
        var gate = Gates[gateId];
        if (gate.isOutput == true) {
            getResult(gate);
        }
    }
}

// function to submit the desired circuit and get the final success or failure message
function submitCircuit() {

    document.getElementById("table-body").innerHTML = "";
    if (window.currentTab == "Task1") {
        halfAdder("Input-0", "Input-1", "Output-3", "Output-2");
    }
    else if (window.currentTab == "Task2") {
        fullAdderTest("Input-0", "Input-1", "Input-2", "Output-4", "Output-3");
    }
    else if (window.currentTab == "Task3") {
        rippleAdderTest("Input-0", "Input-1", "Input-3", "Input-4", "Input-6", "Input-7", "Input-9", "Input-10","Input-13","Output-12","Output-2","Output-5","Output-8","Output-11");
    }
}


function deleteElement(gateid) {

    var gate = gates[gateid];
    // instance.selectEndpoints().detachAll();
    instance.removeAllEndpoints(document.getElementById(gate.id));
    // instance.detach(gate.id); // <--
    instance._removeElement(document.getElementById(gate.id));
    for (elem in gates) {
        if (gates[elem].inputs.includes(gate)) {
            gates[elem].removeInput(gate);
        }
    }
    delete gates[gateid];
    // instance.repaintEverything();
}


