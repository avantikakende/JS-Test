//1.  Write a function to generate the first n numbers in the Fibonacci sequence.
// function fib(n){
//     let fib=[0,1];
//     for(let i=2; i<n; i++){
//         fib[i]=fib[i-1]+fib[i-2];
//     }
//     return fib.slice(0,n);
// }
// console.log(fib(7));

//2. Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// function twoSum(num,value){
//     const numMap = {};
//     for(let i=0; i<num.length; i++){
//         if(numMap[a]!= undefined){
//             return [numMap[a], i];
//         }
//         numMap[num[i]]=i;
//     }
//     return [];
// }
// console.log(twoSum([3,5,8,2,9],4));


//3. Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// function symbol(s){
//     let b={
//         '(': ')', '{': '}', '[': ']'
//     }
//     for(let i=0; i<s.length; i++){
//         if (s[i] in b) {
//             a.push(s[i]);
//         } else{
//             if(s[i]!== map[last]) {
//                 return false;
//             }
//         }
//     }
//     return a.length===0;
// }
// console.log(symbol[{()}]);


//6. Given an array of strings, group anagrams together.
// function gana(arr) {
//     let map = new Map();
//     for (let str of arr) {
//         let sorted = str.split('').sort().join('');
//         if (!map.has(sorted)) {
//             map.set(sorted, []);
//         }
//         map.get(sorted).push(str);
//     }
//     return Array.from(map.values());
// }

// console.log(gana(["eat", "tea", "tan", "nat", "bat"]));



//7. Find the kth largest element in an unsorted array.
// function findlar(num,k){
//     num.sort((a,b)=>b-a);
//     return num[k-1];
// }
// console.log(findlar([2,3,4,5,6,7,8],5));


//10. Write a function to check if a given string is a palindrome.
// function pal(s){
//     let left=0; right=s.length-1;
//     while(left<right){
//         if(s[left]!==s[right]){
//             return false;
//         }
//         left++;
//         right++;
//     }
//     return true;
// }
// console.log(pal("I am a girl, sit in class"));



