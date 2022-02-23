// Contextmenu
const menu = document.querySelector(".menu");
const menuOption = document.querySelector(".menu-option");
let menuVisible = false;

const toggleMenu = command => {
  menu.style.display = command === "show" ? "block" : "none";
  menuVisible = !menuVisible;
};

const setPosition = ({ top, left }) => {
  menu.style.left = `${left}px`;
  menu.style.top = `${top}px`;
  toggleMenu("show");
};

window.addEventListener("click", e => {
  if (menuVisible) toggleMenu("hide");
  window.selectedComponent = null;
    window.componentType = null;
});

menuOption.addEventListener("click", e => {
  if(e.target.innerHTML=="Delete"){
    deleteElement(window.selectedComponent);
  }
  window.selectedComponent = null;
    window.componentType = null;
});

// Tabs

function changeTabs(e) {
  var Task = e.target.parentNode.id;
  if(window.currentTab == Task){
    return;
  }
  
  if(window.currentTab != null){
    document.getElementById(window.currentTab).classList.remove("is-active");
  }
  window.currentTab = Task;
  document.getElementById(Task).classList.add("is-active");

  // Half adder
  if(Task=="Task1")
  {
    unbindEvent();
    bindEvent1();
    refreshWorkingArea();
    initHalfAdder();
  }
  else if(Task=="Task2")
  {
    unbindEvent();
    bindEvent1();
    refreshWorkingArea();
    initFullAdder();
  }
  else if(Task=="Task3")
  {
    unbindEvent();
    bindEvent2();
    refreshWorkingArea();
    initRippleAdder();
  }
  updateInstructions();
  updateToolbar();
  
}

function updateInstructions()
{
  if(window.currentTab == "Task1")
  {
    document.getElementById("TaskTitle").innerHTML = "Half Adder";
    document.getElementById("TaskDescription").innerHTML = 'Implement a 1-bit half adder by following the steps shown below:<ul><li>Connect the two inputs A and B to an XOR gate</li><li>Connect the two inputs to an AND gate</li><li>Then finally the output from our XOR gate will be our sum and the output from our AND gate will be the carry obtained.</li></ul><strong>Note: You cannot remove connection lines once made so to remove them just remove the gate to which they are connected.</strong>'
  }
  else if(window.currentTab == "Task2")
  {
    document.getElementById("TaskTitle").innerHTML = "Full Adder";
    document.getElementById("TaskDescription").innerHTML = 'Implement a 1-bit full adder by following the steps shown below:<ul><li>We will be using two XOR , two AND and one OR gate.</li><li>Firstly connect the two given inputs that is the input A and input B to an XOR gate (will be referred as XOR-1 gate)</li><li>Connect the output of the XOR-1 gate and the third input i.e the carry input to the inputs of XOR-2 gate.</li><li>The output of XOR-2 gate will be our required sum</li><li>Now connect the output of XOR-1 gate and the carry input to the inputs of the AND gate(will be referred as AND-1 gate)</li><li>Also connect input A and input B to AND-2 gate </li><li>Now the outputs of both the AND gates will act as input to an OR gate.</li><li>Finally the output of the OR gate will be our required carry output</li></ul><strong>Note: You cannot remove connection lines once made so to remove them just remove the gate to which they are connected.</strong>'
  }
  else if(window.currentTab == "Task3")
  {
    document.getElementById("TaskTitle").innerHTML = "Ripple Adder";
    document.getElementById("TaskDescription").innerHTML = 'Make a 4-bit adder by connecting four full adders by following the steps below:<ul><li>We will be using 4 1-bit full adders to implement the ripple carry adder.</li><li>Firstly connect the input A0,B0 and Carry input C0 to the first 1-bit full Adder</li><li>Now the first full adder will give Will give Sum S0 and Carry C1 as its output</li><li>Now the Carry C1 will act as input to the second 1-bit full Adder along with the inputs A1,B1</li><li>The second full Adder will give Carry C2 and Sum S1 as its output</li><li>Now the Carry C2 will act as input to the third 1-bit full Adder along with the inputs A2,B2</li><li>The third full Adder will give Carry C3 and Sum S2 as its output</li><li>Now the Carry C3 will act as input to the second 1-bit full Adder along with the inputs A3,B3</li><li>The fourth full Adder will give Carry C4 which will be our final output carry and Sum S3</li></ul><strong>Note: You cannot remove connection lines once made so to remove them just remove the gate to which they are connected.</strong>';

  }
}

// Toolbar

function updateToolbar() {
  var elem ="";
  if(window.currentTab == "Task1")
  {
    elem = '<div class="column is-one-half"><div class="component-button AND" onclick="Add(event)">AND</div><div class="component-button OR" onclick="Add(event)">OR</div><div class="component-button NOT" onclick="Add(event)">NOT</div><div class="component-button NAND" onclick="Add(event)">NAND</div></div><div class="column is-one-half"><div class="component-button NOR" onclick="Add(event)">NOR</div><div class="component-button XOR" onclick="Add(event)">XOR</div><div class="component-button XNOR" onclick="Add(event)">XNOR</div></div>'
  }
  else if(window.currentTab == "Task2")
  {
    elem = '<div class="column is-one-half"><div class="component-button AND" onclick="Add(event)">AND</div><div class="component-button OR" onclick="Add(event)">OR</div><div class="component-button NOT" onclick="Add(event)">NOT</div><div class="component-button NAND" onclick="Add(event)">NAND</div></div><div class="column is-one-half"><div class="component-button NOR" onclick="Add(event)">NOR</div><div class="component-button XOR" onclick="Add(event)">XOR</div><div class="component-button XNOR" onclick="Add(event)">XNOR</div></div>'
  }
  else if(window.currentTab == "Task3")
  {
    elem = '<div class="column is-one-half"><div class="component-button FullAdder" onclick="AddFA(event)"></div></div><div class="column is-one-half"></div>'
  }

  document.getElementById("toolbar").innerHTML = elem;
}