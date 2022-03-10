import {gates, testSimulation} from './gate.js';
import { testSimulationFA } from './fa.js';


export function halfAdder(Input0,Input1,CarryOut,SumOut)  // This function takes 4 ids of the respective Gates
{
    // Gates[input0].outputs = true;
    // Gates[input1].outputs = true;
    var Gates = gates;


    let input0 = Gates[Input0];
    let input1 = Gates[Input1];
    var flag = 0;

    var dataTable = ''

    for(var i=0; i<4;i++)
    {
        //convert i to binary
        let binary = i.toString(2);
        if(binary.length < 2)
            binary = '0' + binary;
        
        const bit0 = binary[1];
        const bit1 = binary[0];

        input1.setOutput(bit0 == "1");
        input0.setOutput(bit1 == "1");
        const calculatedSum = (input0.output && !input1.output) || (!input0.output && input1.output) ? 1 : 0;
        const calculatedCarry = input0.output && input1.output ? 1 : 0;

        // simulate the circuit
        testSimulation(Gates);
        const sum = Gates[SumOut].output ? 1 : 0;
        const carry = Gates[CarryOut].output ? 1 : 0;

        dataTable += '<tr><th>'+ bit1 +'</th><th>'+ bit0 +'</th><td>'+ calculatedSum +'</td><td>'+ calculatedCarry +'</td><td>'+ sum +'</td><td>'+ carry +'</td></tr>'

        if(sum != calculatedSum || carry != calculatedCarry)
        {
            flag = 1;
        }
    }

    var table_elem = document.getElementById('table-body');
    table_elem.insertAdjacentHTML('beforeend', dataTable);

    const result = document.getElementById('result');

    if(flag == 0)
    {
        result.innerHTML = "<span>&#10003;</span> Success";
        result.className = "success-message";
    }
    else
    {
        result.innerHTML = "<span>&#10007;</span> Fail";
        result.className = "failure-message";
    }
}

export function fullAdderTest(input0,input1,carryIn,carryOut,sumOut)
{
    // Gates[input0].outputs = true;
    // Gates[input1].outputs = true;
    var Gates = gates;
    var input0 = Gates[input0];
    var input1 = Gates[input1];
    var carryIn = Gates[carryIn];
    var flag = 0;
    var dataTable = ''

    for(var i=0; i<8;i++)
    {
        // covert i to binary
        var binary = i.toString(2);
        if(binary.length < 2)
            binary = '0' + binary;
        if(binary.length < 3)
            binary = '0' + binary;
        var bit0 = binary[2] || 0;
        var bit1 = binary[1] || 0;
        var bit2 = binary[0] || 0;

        input0.setOutput(bit2 == "1");
        input1.setOutput(bit1 == "1");
        carryIn.setOutput(bit0 == "1");

        var aXorb =  (input0.output && !input1.output) || (!input0.output && input1.output);

        // calculated sum is ((a xor b) xor carry_in)
        var calculatedSum = (aXorb && !carryIn.output) || (!aXorb && carryIn.output) ? 1 : 0;

        // calculated carry is a.b + (a xor b)
        var calculatedCarry = (input0.output && input1.output) || (aXorb && carryIn.output) ? 1 : 0;

        // simulate the circuit
        testSimulation(Gates);
        var sum = Gates[sumOut].output ? 1 : 0;
        var carry = Gates[carryOut].output ? 1 : 0;

        dataTable += '<tr><th>'+ bit2 +'</th><th>'+ bit1 +'</th><th>'+ bit0 +'</th><td>'+ calculatedSum +'</td><td>'+ calculatedCarry +'</td><td>'+ sum +'</td><td>'+ carry +'</td></tr>'

        if(sum != calculatedSum || carry != calculatedCarry)
        {
            flag = 1;
            // console.log(calculatedSum,calculatedCarry);
            // console.log(sum,carry,i);
        }
    }

    var table_elem = document.getElementById('table-body');
    table_elem.insertAdjacentHTML('beforeend', dataTable);

    const result = document.getElementById('result');

    if(flag == 0)
    {
        result.innerHTML = "<span>&#10003;</span> Success";
        result.className = "success-message";
    }
    else
    {
        result.innerHTML = "<span>&#10007;</span> Fail";
        result.className = "failure-message";
    }
}

export function rippleAdderTest(inputA0,inputB0,inputA1,inputB1,inputA2,inputB2,inputA3,inputB3,inputCin,OutputCout,OutputS0,OutputS1,OutputS2,OutputS3)
{
    var Gates = gates;
    var FA = fullAdder;
    var inputA0 = Gates[inputA0];
    var inputB0 = Gates[inputB0];
    var inputA1 = Gates[inputA1];
    var inputB1 = Gates[inputB1];
    var inputA2 = Gates[inputA2];
    var inputB2 = Gates[inputB2];
    var inputA3 = Gates[inputA3];
    var inputB3 = Gates[inputB3];
    var carryIn = Gates[inputCin];
    var flag = 0;



    for(var i=0;i<512;i++) // 512 = 2^9 basically calculates all the possible combinations for 9 inputs
    {
        // covert i to binary
        var binary = i.toString(2);
        var bit0 = binary[0] || 0;
        var bit1 = binary[1] || 0;
        var bit2 = binary[2] || 0;
        var bit3 = binary[3] || 0;
        var bit4 = binary[4] || 0;
        var bit5 = binary[5] || 0;
        var bit6 = binary[6] || 0;
        var bit7 = binary[7] || 0;
        var bit8 = binary[8] || 0;

        inputA0.setOutput(bit0 == "1");
        inputB0.setOutput(bit1 == "1");
        inputA1.setOutput(bit2 == "1");
        inputB1.setOutput(bit3 == "1");
        inputA2.setOutput(bit4 == "1");
        inputB2.setOutput(bit5 == "1");
        inputA3.setOutput(bit6 == "1");
        inputB3.setOutput(bit7 == "1");
        carryIn.setOutput(bit8 == "1");

        // FOR FIRST ADDER
        var aXorb =  (inputA0.output && !inputB0.output) || (!inputA0.output && inputB0.output);
        // calculated sum is ((a xor b) xor carry_in)
        var sumS0 = (aXorb && !carryIn.output) || (!aXorb && carryIn.output);
        // calculated carry is a.b + (a xor b)
        var carryC1 = (inputA0.output && inputB0.output) || (aXorb && carryIn.output)



        // FOR SECOND ADDER
        var aXorb2 =  (inputA1.output && !inputB1.output) || (!inputA1.output && inputB1.output);
        var sumS1 = (aXorb2 && !carryC1) || (!aXorb2 && carryC1);
        var carryC2 = (inputA1.output && inputB1.output) || (aXorb2 && carryC1)


        // FOR THIRD ADDER
        var aXorb3 =  (inputA2.output && !inputB2.output) || (!inputA2.output && inputB2.output);
        var sumS2 = (aXorb3 && !carryC2) || (!aXorb3 && carryC2);
        var carryC3 = (inputA2.output && inputB2.output) || (aXorb3 && carryC2)


        // FOR FOURTH ADDER
        var aXorb4 =  (inputA3.output && !inputB3.output) || (!inputA3.output && inputB3.output);
        var sumS3 = (aXorb4 && !carryC3) || (!aXorb4 && carryC3);
        var carryCout = (inputA3.output && inputB3.output) || (aXorb4 && carryC3)
        
        // simulate the circuit
        testSimulationFA(FA,Gates)
        var sumSout0 = Gates[OutputS0].output
        var sumSout1 = Gates[OutputS1].output;
        var sumSout2 = Gates[OutputS2].output;
        var sumSout3 = Gates[OutputS3].output;
        var carryOut = Gates[OutputCout].output;

        if(sumS0!=sumSout0 || sumS1!=sumSout1 || sumS2!=sumSout2 || sumS3!=sumSout3 || carryCout!=carryOut)
        {
            flag=1;
            console.log(sumS0,sumSout0,sumS1,sumSout1,sumS2,sumSout2,sumS3,sumSout3);
            break;
        }
    }

    const result = document.getElementById('result');

    if(flag == 0)
    {
        result.innerHTML = "<span>&#10003;</span> Success";
        result.className = "success-message";
    }
    else
    {
        result.innerHTML = "<span>&#10007;</span> Fail";
        result.className = "failure-message";
    }

}
