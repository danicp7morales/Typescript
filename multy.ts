const multiplicar = (a:number , b: number, printText: string) => {
    console.log(printText, a * b)
}

//multiplicar(7 , 4 , 'Multiplicar el string  a y b:')

const parseArguments = (args): Array<number> => {
  if (args.length !== 4)  throw new Error ('wrong number of arguments');

  const firstNumber = Number(args[2]);
  const secondNumber = Number(args[3])


 
  if (!isNaN(firstNumber) && !isNaN(secondNumber)){
    return [   
        firstNumber,
        secondNumber
    ]
   }
    throw new Error('Provider valus were not numbers!')
  
}


const cleanArguments = parseArguments(process.argv)

//console.log(process.argv)
const a: number = Number(cleanArguments[0])
const b: number = Number(cleanArguments[1])

multiplicar(a, b, `Multiplicar ${a} and ${b} and the result is: `)

