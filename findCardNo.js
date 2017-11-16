function findCardNo() {
   var kaynak = document.getElementById('ocrtext');
   var hedef = document.getElementById('cardnotext');
   txt = kaynak.value;
  
   rs = [];
   //var re = /\s*([^[:]+):\"([^"]+)"/g; //copy paste
   //var re = /^(?=(?:.{20})$)[0-9]*$/g; //ilk deneme
   var re = /([0-9]|[ ]){19}/g;
   /* var s = '[description:"aoeu" uuid:"123sth"]';*/
   var m;
   do {
     m = re.exec(txt);
     if (m) {
       rs.push(m[0]);
    }
  } while (m);
  
  hedef.value = rs;
  return rs;
} 