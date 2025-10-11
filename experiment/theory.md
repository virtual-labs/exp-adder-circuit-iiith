### Half Adder

<img src="images/half_adder.png">

A half adder adds two 1-bit binary numbers A and B to generate a 1-bit SUM (S) and a 1-bit CARRY (C) as output. The carry is theoretically carried on to the next bit position. The final sum numerically equals **2×C + S**. The simplest half-adder design, shown in the picture, incorporates an XOR gate for S and an AND gate for C. Half adders cannot be composed to produce larger bit adders as they lack a carry-in input.

The outputs S and C can be expressed as logical functions of input variables A and B as follows:

**S** = **1** either if (**A = 0** and **B = 1**) or if (**A = 1** and **B = 0**) = **A XOR B**

**C = 1** only if (**A = 1** and **B = 1**) = **A AND B**

**Truth Table**

| A   | B   | CARRY | SUM |
| --- | --- | ----- | --- |
| 0   | 0   | 0     | 0   |
| 0   | 1   | 0     | 1   |
| 1   | 0   | 0     | 1   |
| 1   | 1   | 1     | 0   |

### Full Adder

<img src="images/full_adder.png">

A full adder adds two 1-bit binary numbers along with a carry brought in and produces a sum and carry out as outputs. A 1-bit full adder adds three 1-bit numbers, often written as A, B, and Cin, where A and B are the operands, and Cin is a bit carried in from a previous addition. The circuit produces a 2-bit output sum typically represented by the signals Cout and S, where the sum numerically equals **2×Cout + S**.

A full adder can be implemented using various circuit configurations including custom transistor-level designs or combinations of basic logic gates.

**Logic Equations:**

**S = A XOR B XOR Cin**

**Cout = (A AND B) OR (Cin AND (A XOR B))**

**Truth Table**

| A   | B   | Cin | Cout | S   |
| --- | --- | --- | ---- | --- |
| 0   | 0   | 0   | 0    | 0   |
| 1   | 0   | 0   | 0    | 1   |
| 0   | 1   | 0   | 0    | 1   |
| 1   | 1   | 0   | 1    | 0   |
| 0   | 0   | 1   | 0    | 1   |
| 1   | 0   | 1   | 1    | 0   |
| 0   | 1   | 1   | 1    | 0   |
| 1   | 1   | 1   | 1    | 1   |

### Ripple Carry Adder

<img src="images/ripple_carry_adder.png">

Multiple full adders can be used to create adders of greater bit lengths. Each full adder uses the Cout of the previous adder as its Cin. This kind of adder is called a ripple carry adder, since the carry bits "ripple" through the full adder stages. Note that the first (and only the first) full adder may be replaced by a half adder.

#### Understanding the Equations

For a 4-bit ripple carry adder, each bit position has its own sum and carry equations. The key concept is that each stage depends on the carry output from the previous stage:

**Bit 0 (LSB):**

- S₀ = A₀ ⊕ B₀ ⊕ Cin
- C₀ = A₀B₀ + B₀Cin + CinA₀

**Bit 1:**

- S₁ = A₁ ⊕ B₁ ⊕ C₀
- C₁ = A₁B₁ + B₁C₀ + C₀A₁

**Bit 2:**

- S₂ = A₂ ⊕ B₂ ⊕ C₁
- C₂ = A₂B₂ + B₂C₁ + C₁A₂

**Bit 3 (MSB):**

- S₃ = A₃ ⊕ B₃ ⊕ C₂
- C₃ = A₃B₃ + B₃C₂ + C₂A₃

**Key Points to Understand:**

- Each sum bit (S) uses XOR of the two input bits and the carry from the previous stage
- Each carry bit (C) is generated when any two of the three inputs (A, B, Cin) are 1
- The carry "ripples" from LSB to MSB, which is why it's called a ripple carry adder
- The final carry C₃ represents an overflow if we're working with 4-bit numbers
