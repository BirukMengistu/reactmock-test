 const isPalindrome =(str)=>{
  const strReverse = str.toLowerCase().split('')
                         .reverse().join('').replaceAll(',','')
   let strInput = str.toLowerCase()
   
 return str === strReverse            
}

 const stringIncrement=(str)=>{
    const strReverse = str.toLowerCase().split('')
                           .reverse().join('').replaceAll(',','')
     let strInput = str.toLowerCase()
     
   return str === strReverse            
  }

  export {
    stringIncrement,
    isPalindrome
  }

