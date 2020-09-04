function checkContain(str1, str2){
  str1 = str1.toLowerCase().split(' '); 
  str2 = str2.toLowerCase().split(' ');  
  for(var i = 0; i < str2.length; i++){
    if(str1[0] == str2[i]){
      var match = 1;
      for(var j = 0; j < str1.length; j ++) {
        if(str1[j+1] == str2[j+1+i]){
          match += 1;
        }       
      }
      if(match == str1.length){
        return true;
      }
    }  
  }   
  return false; 
}
