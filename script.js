function merge2String(s1,s2){
    var longestString = s1.length - s2.length <0 ? S1.length : s2.length
    var result ="";
    for(let i=0 ; i< longestString;i++ ){
       result += s1[i] + s2[i];       
    }
 console.log(result)
}

merge2String("abc" , "123");
// merge2String("abc" , "0123");
// merge2String("abcd" , "123");
