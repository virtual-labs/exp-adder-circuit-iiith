function halfAdder(input0,input1,carryOut,sumOut)  // This function takes 4 ids of the respective Gates
{
    // Gates[input0].outputs = true;
    // Gates[input1].outputs = true;
    var Gates = gates;


    var input0 = Gates[input0];
    var input1 = Gates[input1];
    var flag = 0;

    for(var i=0; i<4;i++)
    {
        // covert i to binary
        var binary = i.toString(2);
        var bit0 = binary[0] || 0;
        var bit1 = binary[1] || 0;

        input0.setOutput(bit0 == "1");
        input1.setOutput(bit1 == "1");
        var calculatedSum = (input0.output && !input1.output) || (!input0.output && input1.output);
        var calculatedCarry = input0.output && input1.output;

        // simulate the circuit
        testSimulation(Gates);
        var sum = Gates[sumOut].output;
        var carry = Gates[carryOut].output;

        if(sum != calculatedSum || carry != calculatedCarry)
        {
            flag = 1;
            break;
        }
    }

    if(flag == 0)
    {
        alert("Success");
    }
    else
    {
        alert("Fail");
    }
}

function fullAdderTest(input0,input1,carryIn,carryOut,sumOut)
{
    // Gates[input0].outputs = true;
    // Gates[input1].outputs = true;
    var Gates = gates;
    var input0 = Gates[input0];
    var input1 = Gates[input1];
    var carryIn = Gates[carryIn];
    var flag = 0;

    for(var i=0; i<8;i++)
    {
        // covert i to binary
        var binary = i.toString(2);
        var bit0 = binary[0] || 0;
        var bit1 = binary[1] || 0;
        var bit2 = binary[2] || 0;

        input0.setOutput(bit0 == "1");
        input1.setOutput(bit1 == "1");
        carryIn.setOutput(bit2 == "1");

        var aXorb =  (input0.output && !input1.output) || (!input0.output && input1.output);

        // calculated sum is ((a xor b) xor carry_in)
        var calculatedSum = (aXorb && !carryIn.output) || (!aXorb && carryIn.output);

        // calculated carry is a.b + (a xor b)
        var calculatedCarry = (input0.output && input1.output) || (aXorb && carryIn.output)

        // simulate the circuit
        testSimulation(Gates);
        var sum = Gates[sumOut].output;
        var carry = Gates[carryOut].output;

        if(sum != calculatedSum || carry != calculatedCarry)
        {
            flag = 1;
            // console.log(calculatedSum,calculatedCarry);
            // console.log(sum,carry,i);
            break;
        }
    }

    if(flag == 0)
    {
        alert("Success");
    }
    else
    {
        alert("Fail");
    }
}

function rippleAdder()
{

}