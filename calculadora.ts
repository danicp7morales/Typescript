
 
type Operation = 'multyplicar' | 'add' | 'divide';
type Result = number | string
//const operations = ['multyplicar', 'add', 'divide'];

const calculadora = (a:number , b: number, op: Operation):  Result => {
  /*  if (!operations.includes(op)){  
      console.log('no se puede')  
    }
*/
    if(op == 'multyplicar') return a * b;
    

    if(op === 'add') return a + b;

    if(op == 'divide'){
        if (b === 0) throw new Error('no se puede dividir');
    return a / b;

  }
  
  throw new Error('Operation is not valid')
  
}
/*
try {
  console.log(calculadora(1, 5, 'divide'))
  console.log(calculadora(1, 0, 'divide'))
} catch(e) {
  console.log('something went wrong', e)
}
*/

console.log(process.argv)


console.log(calculadora(1, 7, 'add'))




const result =calculadora(1, 3, 'add')
console.log(result);