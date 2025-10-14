### 1-bit Half Adder

#### Circuit Diagram

<img src="images/half_adder.png" alt="Half Adder Circuit Diagram" style="width: 100%; max-width: 400px; margin: 10px 0;">

_Figure 1: Half Adder circuit diagram showing XOR gate for Sum output and AND gate for Carry output. Reference: Theory section_

#### Components Required

- 1 XOR gate
- 1 AND gate

#### Circuit Connections

1. Drag the XOR gate and connect its inputs with A and B inputs. Also, connect its output with the Sum output bit.
2. Drag the AND gate and connect its inputs with A and B inputs. Also, connect its output with the Carry output bit.
3. Click on "Simulate" and observe the values of Sum and Carry for different input values of A and B.

#### Observations

- The Sum bit shows the sum of A and B binary bits, while the Carry bit displays the carry of the sum of A and B.
- If the circuit has been made as described above, a "Success" message will be displayed upon clicking "Submit".

### 1-bit Full Adder

#### Circuit Diagram

<img src="images/full_adder.png" alt="Full Adder Circuit Diagram" style="width: 100%; max-width: 500px; margin: 10px 0;">

_Figure 2: Full Adder circuit diagram showing 2 XOR gates, 2 AND gates, and 1 OR gate to handle carry input. Reference: Theory section_

#### Components Required

- 2 XOR gates
- 2 AND gates
- 1 OR gate

#### Circuit Connections

1. Drag the first XOR gate and connect its inputs with A and B inputs.
2. Drag the second XOR gate and connect its inputs with the CarryIn input bit and the output point of the first XOR gate. Connect its output point with the Sum output bit.
3. Drag the first AND gate and connect its inputs with the CarryIn input bit and the output point of the first XOR gate.
4. Drag the second AND gate and connect its inputs with A and B inputs.
5. Drag the OR gate and connect its inputs with the output points of the two AND gates. Connect its output point with the CarryOut output bit.
6. Click on "Simulate" and observe the values of Sum and Carry for different input values of A, B, and CarryIn.

#### Observations

- The Sum bit shows the sum of A, B, and CarryIn binary bits, while the CarryOut bit displays the carry of the sum of A, B, and CarryIn.
- If the circuit has been made as described above, a "Success" message will be displayed upon clicking "Submit".

### 4-bit Ripple Carry Adder

#### Circuit Diagram

<img src="images/ripple_carry_adder.png" alt="4-bit Ripple Carry Adder Circuit Diagram" style="width: 100%; max-width: 600px; margin: 10px 0;">

_Figure 3: 4-bit Ripple Carry Adder circuit diagram showing 4 full adders connected in series with carry propagation. Reference: Theory section_

#### Components Required

- 4 1-bit Full Adders

#### Circuit Connections

1. Drag the first Full Adder and connect its A0 and B0 input points with A0 and B0 input bits. Connect its Cin input point with the CarryIn input bit and Sum output point with the Sum0 output bit.
2. Drag the second Full Adder and connect its A0 and B0 input points with A1 and B1 input bits. Connect its Cin input point with the Cout output point of the first Full Adder and Sum output point with the Sum1 output bit.
3. Drag the third Full Adder and connect its A0 and B0 input points with A2 and B2 input bits. Connect its Cin input point with the Cout output point of the second Full Adder and Sum output point with the Sum2 output bit.
4. Drag the fourth Full Adder and connect its A0 and B0 input points with A3 and B3 input bits. Connect its Cin input point with the Cout output point of the third Full Adder and Sum output point with the Sum3 output bit.
5. Connect the CarryOut output bit with the Cout output point of the fourth Full Adder and click on "Simulate".

#### Observations

- The binary sum of two 4-bit numbers A3A2A1A0 and B3B2B1B0, along with carry CarryIn, is observed as Sum3Sum2Sum1Sum0 with carry CarryOut.
- If the circuit has been made as described above, a "Success" message will be displayed upon clicking "Submit".
