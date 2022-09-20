//Given a list of integers, create a function that returns the nth-rarest-form. 
//The function should be called nth-most-rate-signature and it’s signature nth-most-rate-signature(list,n) 
//where list is the array of integers and n is the nth rarest term. 
//For example in ([5,4,5,4,5,4,4,5,3,3,3,2,2,1,5])
//If 2 is supplied as n, the answer is 2 as 2 is the 2nd rarest item
                //SOLUTION

let listOfIntegers = [
    5, 4, 5, 7, 7, 7, 4, 5, 4, 4, 4, 4, 4, 4, 5, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 5, 9, 9, 9, 9,
    9, 9,
  ];
  
  const project = (arr, n) => {
    const count = {};
    let nth = 0;
  
    arr.sort(function (a, b) {
      return a - b;
    });
  
    for (const element of arr) {
      if (count[element]) {
        count[element] += 1;
      } else {
        count[element] = 1;
      }
    }
  
    let val = Object.values(count).sort(function (a, b) {
      return a - b;
    });
  
    for (const key in count) {
      if (count.hasOwnProperty(key)) {
        if (count[key] === val[n - 1]) {
          nth = key;
        }
      }
    }
  
    return nth;
  };
  
  console.log(project(listOfIntegers, 3));
  