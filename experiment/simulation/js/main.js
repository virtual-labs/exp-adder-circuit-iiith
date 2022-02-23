document.getScroll = function () {
    if (window.pageYOffset != undefined) {
        return [pageXOffset, pageYOffset];
    } else {
        var sx, sy, d = document,
            r = d.documentElement,
            b = d.body;
        sx = r.scrollLeft || b.scrollLeft || 0;
        sy = r.scrollTop || b.scrollTop || 0;
        return [sx, sy];
    }
}
const workingArea = document.getElementById("working-area");
var lastClickedElement = null;
const instance = jsPlumbBrowserUI.newInstance({
    container: workingArea,
    maxConnections: -1,
    endpoint: {
        type: "Dot",
        options: { radius: 7 },
    },
    dragOptions: {
        containment: "parentEnclosed",
        containmentPadding: 5,
    },
    connector: "Flowchart",
    paintStyle: { strokeWidth: 3, stroke: "#456" },
    connectionsDetachable: false,
});

const bindEvent1 = function () {
    instance.bind("beforeDrop", function (data) {
        var endpoint = data.connection.endpoints[0];
        var dropEndpoint = data.dropEndpoint;

        var start_uuid = endpoint.uuid.split(":")[0];
        var end_uuid = dropEndpoint.uuid.split(":")[0];

        if (start_uuid == "input" && end_uuid == "input") {
            return false;
        } else if (start_uuid == "output" && end_uuid == "output") {
            return false;
        } else {
            instance.connect({ uuids: [endpoint.uuid, dropEndpoint.uuid] });

            if (start_uuid == "output") {
                var input = gates[endpoint.elementId];
                input.isConnected = true;
                gates[dropEndpoint.elementId].addInput(input);
            } else if (end_uuid == "output") {
                var input = gates[dropEndpoint.elementId];
                input.isConnected = true;
                gates[endpoint.elementId].addInput(input);
            }

            // return true;
        }
    });
}

const bindEvent2 = function () {
    instance.bind("beforeDrop", function (data) {
        var endpoint = data.connection.endpoints[0];
        var dropEndpoint = data.dropEndpoint;

        var start_uuid = endpoint.uuid.split(":")[0];
        var end_uuid = dropEndpoint.uuid.split(":")[0];

        if (start_uuid == "input" && end_uuid == "input") {
            return false;
        } else if (start_uuid == "output" && end_uuid == "output") {
            return false;
        } else {
            instance.connect({ uuids: [endpoint.uuid, dropEndpoint.uuid] });
            var start_type = endpoint.elementId.split("-")[0];
            var end_type = dropEndpoint.elementId.split("-")[0];
            if (start_type == "FullAdder" && end_type == "FullAdder") {
                if (start_uuid == "output") {
                    
                    var input = fullAdder[endpoint.elementId];
                    console.log(endpoint.overlays);
                    var pos = "";
                    if (Object.keys(endpoint.overlays)[0].includes("sum")) {
                        pos = "Sum";
                    }
                    else if (Object.keys(endpoint.overlays)[0].includes("cout")) {
                        pos = "Carry";
                    }
                    input.setConnected(true, pos);
                    console.log(input);
                    if (Object.keys(dropEndpoint.overlays)[0].includes("a")) {
                        fullAdder[dropEndpoint.elementId].setA0([input, pos]);
                    }
                    else if (Object.keys(dropEndpoint.overlays)[0].includes("b")) {
                        fullAdder[dropEndpoint.elementId].setB0([input, pos]);
                    }
                    else if (Object.keys(dropEndpoint.overlays)[0].includes("cin")) {
                        fullAdder[dropEndpoint.elementId].setCin([input, pos]);
                    }
                } else if (end_uuid == "output") {
                    var input = gates[dropEndpoint.elementId];
                    var pos = "";
                    if (Object.keys(dropEndpoint.overlays)[0].includes("Sum")) {
                        pos = "Sum";
                    }
                    else if (Object.keys(dropEndpoint.overlays)[0].includes("Carry")) {
                        pos = "Carry";
                    }
                    input.setConnected(true, pos);
                    if (Object.keys(endpoint.overlays)[0].includes("A")) {
                        gates[endpoint.elementId].setA0([input, pos]);
                    }
                    else if (Object.keys(endpoint.overlays)[0].includes("B")) {
                        gates[endpoint.elementId].setB0([input, pos]);
                    }
                    else if (Object.keys(endpoint.overlays)[0].includes("CarryIn")) {
                        gates[endpoint.elementId].setCin([input, pos]);
                    }
                }
            }
            else if (start_type == "FullAdder" && end_type == "Input") {
                if (end_uuid == "output") {
                    var input = gates[dropEndpoint.elementId];
                    input.setConnected(true);
                    var pos = "";
                    if (Object.keys(endpoint.overlays)[0].includes("A")) {
                        fullAdder[endpoint.elementId].setA0([input, pos]);
                    }
                    else if (Object.keys(endpoint.overlays)[0].includes("B")) {
                        fullAdder[endpoint.elementId].setB0([input, pos]);
                    }
                    else if (Object.keys(endpoint.overlays)[0].includes("CarryIn")) {
                        fullAdder[endpoint.elementId].setCin([input, pos]);
                    }
                }
            }
            else if (start_type == "Input" && end_type == "FullAdder") {
                if (start_uuid == "output") {
                    var input = gates[endpoint.elementId];
                    input.setConnected(true);
                    var pos = "";
                    if (Object.keys(dropEndpoint.overlays)[0].includes("A")) {
                        fullAdder[dropEndpoint.elementId].setA0([input, pos]);
                    }
                    else if (Object.keys(dropEndpoint.overlays)[0].includes("B")) {
                        fullAdder[dropEndpoint.elementId].setB0([input, pos]);
                    }
                    else if (Object.keys(dropEndpoint.overlays)[0].includes("CarryIn")) {
                        fullAdder[dropEndpoint.elementId].setCin([input, pos]);
                    }
                }
            }
            else if (start_type == "FullAdder" && end_type == "Output") {
                if (start_uuid == "output") {
                    var input = fullAdder[endpoint.elementId];
                    if (Object.keys(endpoint.overlays)[0].includes("Sum")) {
                        pos = "Sum";
                    }
                    else if (Object.keys(endpoint.overlays)[0].includes("Carry")) {
                        pos = "Carry";
                    }
                    input.setConnected(true, pos);
                    finalOutputs[dropEndpoint.elementId] = [input, pos];
                }
            }
            else if (start_type == "Output" && end_type == "FullAdder") {
                if (start_uuid == "input") {
                    var input = fullAdder[dropEndpoint.elementId];
                    if (Object.keys(dropEndpoint.overlays)[0].includes("Sum")) {
                        pos = "Sum";
                    }
                    else if (Object.keys(dropEndpoint.overlays)[0].includes("Carry")) {
                        pos = "Carry";
                    }
                    input.setConnected(true, pos);
                    finalOutputs[endpoint.elementId] = [input, pos];
                }
            }
            else if (start_type == "Input" && end_type == "Output") {
                if (start_uuid == "output") {
                    var input = gates[endpoint.elementId];
                    input.setConnected(true);
                    finalOutputs[dropEndpoint.elementId] = [input, ""];
                }
            }
            else if (start_type == "Output" && end_type == "Input") {
                if (start_uuid == "input") {
                    var input = gates[dropEndpoint.elementId];
                    input.setConnected(true);
                    finalOutputs[endpoint.elementId] = [input, ""];
                }
            }
            // return true;
        }
    });
}

const unbindEvent = () => {
    instance.unbind("beforeDrop");
}


function registerGate(id, gate) {
    var Element = document.getElementById(id);
    var gateType = id.split("-")[0];

    if (
        gateType == "AND" ||
        gateType == "OR" ||
        gateType == "XOR" ||
        gateType == "XNOR" ||
        gateType == "NAND" ||
        gateType == "NOR"
    ) {
        gate.addInputPoints(
            instance.addEndpoint(Element, {
                anchor: [0, 0.5, -1, 0, -7, -9],
                source: true,
                target: true,
                connectionsDetachable: false,
                uuid: "input:0:" + id,
            })
        );
        gate.addInputPoints(
            instance.addEndpoint(Element, {
                anchor: [0, 0.5, -1, 0, -7, 10],
                source: true,
                target: true,
                connectionsDetachable: false,
                uuid: "input:1:" + id,
            })
        );
        gate.addOutputPoints(
            instance.addEndpoint(Element, {
                anchor: [1, 0.5, 1, 0, 7, 0],
                source: true,
                target: true,
                connectionsDetachable: false,
                uuid: "output:0:" + id,
            })
        );
    } else if (gateType == "NOT") {
        gate.addInputPoints(
            instance.addEndpoint(Element, {
                anchor: [0, 0.5, -1, 0, -7, 0],
                source: true,
                target: true,
                connectionsDetachable: false,
                uuid: "input:0:" + id,
            })
        );
        gate.addOutputPoints(
            instance.addEndpoint(Element, {
                anchor: [1, 0.5, 1, 0, 7, 0],
                source: true,
                target: true,
                connectionsDetachable: false,
                uuid: "output:0:" + id,
            })
        );
    } else if (gateType == "Input") {
        gate.addOutputPoints(
            instance.addEndpoint(Element, {
                anchor: [1, 0.5, 1, 0, 7, 0],
                source: true,
                target: true,
                connectionsDetachable: false,
                uuid: "output:0:" + id,
            })
        );
    } else if (gateType == "Output") {
        gate.addInputPoints(
            instance.addEndpoint(Element, {
                anchor: [0, 0.5, -1, 0, -7, 0],
                source: true,
                target: true,
                connectionsDetachable: false,
                uuid: "input:0:" + id,
            })
        );
    }
    else if (gateType == "FullAdder") {
        // carry output
        gate.addOutputPoints(
            instance.addEndpoint(Element, {
                anchor: [0, 0.5, -1, 0, -7, 0],
                source: true,
                target: true,
                connectionsDetachable: false,
                uuid: "output:0:" + id,
                overlays: [
                    { type: "Label", options: { label: "Cout", id: "cout", location: [3, 0.2] } }
                ],
            })
        );
        // sum output
        gate.addOutputPoints(
            instance.addEndpoint(Element, {
                anchor: [0.5, 1, 0, 1, 0, 7],
                source: true,
                target: true,
                connectionsDetachable: false,
                uuid: "output:1:" + id,
                overlays: [
                    { type: "Label", options: { label: "Sum", id: "sum", location: [0.3, -1.7] } }
                ],
            })
        );
        // input A0
        gate.addInputPoints(
            instance.addEndpoint(Element, {
                anchor: [0.5, 0, 0, -1, -25, -7],
                source: true,
                target: true,
                connectionsDetachable: false,
                uuid: "input:0:" + id,
                overlays: [
                    { type: "Label", options: { label: "A0", id: "a0", location: [0.3, 1.7] } }
                ],
            })
        );
        // input B0
        gate.addInputPoints(
            instance.addEndpoint(Element, {
                anchor: [0.5, 0, 0, -1, 25, -7],
                source: true,
                target: true,
                connectionsDetachable: false,
                uuid: "input:1:" + id,
                overlays: [
                    { type: "Label", options: { label: "B0", id: "b0", location: [0.3, 1.7] } }
                ],
            })
        );
        // carry input
        gate.addInputPoints(
            instance.addEndpoint(Element, {
                anchor: [1, 0.5, 1, 0, 7, 0],
                source: true,
                target: true,
                connectionsDetachable: false,
                uuid: "input:2:" + id,
                overlays: [
                    { type: "Label", options: { label: "Cin", id: "cin", location: [-1, 0.2] } }
                ],
            })
        );
    }
}
function initHalfAdder() {
    let ids = ["Input-0", "Input-1", "Output-2", "Output-3"]; // [A B Sum Carry Out]
    let types = ["Input", "Input", "Output", "Output"];
    let names = ["A", "B", "Sum", "Carry"];
    let positions = [
        { x: 40, y: 200 },
        { x: 40, y: 550 },
        { x: 820, y: 200 },
        { x: 820, y: 550 },
    ];
    for (var i = 0; i < ids.length; i++) {
        var gate = new Gate(types[i]);
        gate.setId(ids[i]);
        gate.setName(names[i]);
        gate.generateComponent(positions[i].x, positions[i].y);
    }
}

function initFullAdder() {
    let ids = ["Input-0", "Input-1", "Input-2", "Output-3", "Output-4"]; // [A,B,carry -input,Sum,carry-output]
    let types = ["Input", "Input", "Input", "Output", "Output"];
    let names = ["A", "B", "CarryIn", "Sum", "CarryOut"];
    let positions = [
        { x: 40, y: 150 },
        { x: 40, y: 375 },
        { x: 40, y: 600 },
        { x: 820, y: 262.5 },
        { x: 820, y: 487.5 },
    ];
    for (var i = 0; i < ids.length; i++) {
        var gate = new Gate(types[i]);
        gate.setId(ids[i]);
        gate.setName(names[i]);
        gate.generateComponent(positions[i].x, positions[i].y);
    }
}

function initRippleAdder() {
    let ids = ["Input-0", "Input-1", "Output-2", "Input-3", "Input-4", "Output-5", "Input-6", "Input-7", "Output-8", "Input-9", "Input-10", "Output-11", "Output-12", "Input-13"] // [A0,B0,Sum0,A1,B1,Sum1,A2,B2,Sum2,A3,B3,Sum3,CarryOut, CarryIn]
    let types = ["Input", "Input", "Output", "Input", "Input", "Output", "Input", "Input", "Output", "Input", "Input", "Output", "Output", "Input"]
    let names = ["A0", "B0", "Sum0", "A1", "B1", "Sum1", "A2", "B2", "Sum2", "A3", "B3", "Sum3", "CarryOut", "CarryIn"]
    let positions = [
        { x: 40, y: 200 },
        { x: 40, y: 550 },
        { x: 820, y: 200 },
        { x: 40, y: 200 },
        { x: 40, y: 550 },
        { x: 820, y: 200 },
        { x: 40, y: 200 },
        { x: 40, y: 550 },
        { x: 820, y: 200 },
        { x: 40, y: 200 },
        { x: 40, y: 550 },
        { x: 820, y: 200 },
        { x: 820, y: 550 },
        { x: 820, y: 550 },
    ];
    for (var i = 0; i < ids.length; i++) {
        var gate = new Gate(types[i]);
        gate.setId(ids[i]);
        gate.setName(names[i]);
        gate.generateComponent(positions[i].x, positions[i].y);
    }
}

function refreshWorkingArea() {
    instance.reset();
    window.numComponents = 0;
    gates = {};
    fullAdder = {};
}
