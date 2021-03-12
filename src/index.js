 module.exports = function check(str, bracketsConfig) {
    
    function bracket(item, arr) {
         let count = 0;
         for (k = 0; k < arr.length; k++) {
             for (t = 0; t < arr[k].length; t++) {
                 if (item == arr[k][t]) {
                     count++;
                 }
             }
         }
         if (count == 0) {
             return false;
         } else {
             return true;
         }
     }
    
    function array(arrItem, arr) {
         let count = 0;
         for (k = 0; k < arr.length; k++) {
             if (JSON.stringify(arrItem) == JSON.stringify(arr[k])) {
                 count++;
             }
         }
         if (count == 0) {
             return false;
         } else {
             return true;
         }
     }
    
    const strArray = str.split('');
    let n = 0;
    let count = 0;
      
    function foo(strArr, brconfig) {
        let brCount = 0;
    for (i = n; i < strArr.length; i++){
        if(bracket(strArr[i], brconfig) == true){
            brCount++;
        }
    }
    
         let arrTemp = [null, null];
         for (i = n; i < strArr.length - 1; i++) {
             if (bracket(strArr[i], brconfig) == true) {
                 arrTemp[0] = strArr[i];
             }
             for (j = i + 1; j < strArr.length; j++) {
                 if (bracket(strArr[j], brconfig) == true) {
                     arrTemp[1] = strArr[j];
                     if (array(arrTemp, brconfig) == true) {
                         strArr.splice(i, 1);
                         strArr.splice(j - 1, 1);
                         count = 0;
                         n = 0;
                         foo(strArray, brconfig);
                     } else {
                         count++;
                         n = j;
                         foo(strArray, brconfig);
                     }
                 }
             }
         }
         if(count == 0 && brCount == 0 || strArray.length == 0){
            return true;
        }else if(brCount >= 1){
            return false;
        }
     }
     return foo(strArray, bracketsConfig);
}

