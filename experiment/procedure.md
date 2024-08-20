# 1-bit Half Adder

## Components Required - 

* 1 XOR gate
* 1 AND gate

## Circuit Connections - 

1) Drag the XOR gate and connect its inputs with A and B inputs. Also, connect its output with Sum output bit.
2) Drag the AND gate and connect its inputs with A and B inputs. Also, connect its output with Carry output bit.
3) Click on "Simulate" and observe the values of Sum and Carry for different input values of A and B.

## Observations - 

1) The Sum bit shows the sum of A and B binary bits while Carry bit displays the carry of the sum of A and B.
2) If the circuit has been made as described above, a "Success" message will be displayed upon clicking "Submit".

# 1-bit Full Adder

## Components Required - 

* 3 XOR gates
* 2 AND gates

## Circuit Connections - 

1) Drag the first XOR gate and connect its inputs with A and B inputs.
2) Drag the second XOR gate and connect its inputs with CarryIn input bit and the output point of the first XOR gate. Connect its output point with Sum output bit. 
3) Drag the first AND gate and connect its inputs with CarryIn input bit and the output point of the first XOR gate. 
4) Drag the second AND gate and connect its inputs with A and B inputs.
5) Drag the third XOR gate and connect its inputs with output points of the two AND gates. Connect its output point with CarryOut output bit. 
6) Click on "Simulate" and observe the values of Sum and Carry for different input values of A,B and CarryIn.

## Observations - 

1) The Sum bit shows the sum of A,B and CarryIn binary bits while CarryOut bit displays the carry of the sum of A,B and CarryIn.
2) If the circuit has been made as described above, a "Success" message will be displayed upon clicking "Submit".

# 4-bit Ripple Carry Adder

## Components Required - 

* 4 1-bit Full Adders

## Circuit Connections - 

1) Drag the first Full Adder and connect its A0 and B0 input points with A0 and B0 input bits. Connect its Cin input point with CarryIn input bit and Sum output point with Sum0 output bit.
2) Drag the second Full Adder and connect its A0 and B0 input points with A1 and B1 input bits. Connect its Cin input point with Cout output point of first Full Adder and Sum output point with Sum1 output bit.
3) Drag the third Full Adder and connect its A0 and B0 input points with A2 and B2 input bits. Connect its Cin input point with Cout output point of second Full Adder and Sum output point with Sum2 output bit.
4) Drag the fourth Full Adder and connect its A0 and B0 input points with A3 and B3 input bits. Connect its Cin input point with Cout output point of third Full Adder and Sum output point with Sum3 output bit.
5) Connect the CarryOut output bit with the Cout output point of the fourth Full Adder and click on "Simulate".

## Observations - 

1) The binary sum of 4 numbers A0B0, A1B1, A2B2 and A3B3 alongwith carry CarryIn is observed as Sum3Sum2Sum1Sum0 with carry CarryOut.  
2) If the circuit has been made as described above, a "Success" message will be displayed upon clicking "Submit".