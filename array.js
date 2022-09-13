//1.Find the Product.
const Find_Prod = (array, N) => 
{
  let n=1;
  for(let i=0;i<array.length;i++){
    n=n*array[i];  
  }
  return n;   
};

//2.Find the Sum.
const Find_Sum = (array, N) => 
{
  let n=0;
   for(let i=0;i<array.length;i++){
    n=n+array[i];  
  }
  return n; 

};
 
//3.Count Occurrences.
const findCount = (N, K, Arr) => 
{
  let count = 0;
  for(let i = 0; i < N; i++){
    if(Arr[i] == K){
      count++;
    }
  }
  return count;
};

//4. Even Odd.
const findEvenOdd = (N, Arr) => 
{
  let B = [];
  let Even = 0 , Odd = 0;
  for(let i = 0; i < N; i++){
    if(Arr[i]%2 === 0){
      Even += Arr[i];
    }
    else{
      Odd += Arr[i];
    }
  }
  B.push(Even);
  B.push(Odd);
  return B;
};

//5. Find whether the number is present or not
const Find_Num = (array,N,M) => 
{
  for (let i = 0; i < N; i++){
    if(array[i] = M){
      return "YES";
    }
    else{
      return "NO";
    }
  }
};

//6. Higher Age
const highAge = (N, arr) => 
{
  let result = [];
  for(let i = 0; i < N; i++){
    if(arr[i] >= 18){
      result.push(arr[i]);
    }
  }
  return result;
};

//7. Increment the Array Elements
const Inc_Arr = (array,N) => 
{
    for(i=0;i<array.length;i++){
      array[i]+=1;
    }
    console.log(...array)
  };

  //8. Pass or Fail
  const isAllPass = (N, Arr) => 
{
    let i=0;
    while(i<Arr.length){
      if(Arr[i]>=32){
        i++;
      }
      else{
        return "NO"
      }
    }
    return "YES"
};

//9. Unique Color Shirt
function Unique_Shirts (arr,N) {
    arr = arr.sort();
    let count = 0;
    for(let i = 0; i < N; i++){
      if((arr[i-1] === arr[i]) || (arr[i] === arr[i+1])){
        count += 1;
      }
    }
    return (N - count);
  }

//10. Min and Max
function arrayMin(arr) {
    let min = arr[0];
    for(let i = 1; i < arr.length; i++){
      if(arr[i] < min){
        min = arr[i];
      }
    }
    return min;
  }
  
  function arrayMax(arr) {
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
      if(arr[i] > max){
        max = arr[i];
      }
    }
    return max;
  }
  
//11. Birthday Game
function Birthday_Game(arr,D ,M) {
    let counter = 0;
       for(let i = 0; i < arr.length - 1; i++){
            let subArray = arr.slice(i, i+M);
            if (subArray.length === M) {
               let sum = subArray.reduce((a,b) => a + b, 0);
               if(sum === D){
                    counter += 1;
                }
             }
       }
       return counter;
  } 