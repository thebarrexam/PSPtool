
  function myFunction() {

    var b = "Quote: " + document.getElementById('quotenum').value;
    var x = document.getElementById('pnum').value + " S-N ";
    var a = document.getElementById('sernum').value;
    var c = " For " + document.getElementById('id').value;
    var d = " Duration " + document.getElementById('dur').value + " Months ";
    var e = document.getElementById('email').value;
    var f = document.getElementById('name').value;
    var tx = "This is a nondeliverable item";
    var str =  b + x + a + c + d + e + " " + f + tx;
    /*var result = '';
  				
  				while (str.length > 0) {
    			result += str.substring(0, 30) + '<br>';
    			str = str.substring(30);
    		}*/
   

    var newStr = str.replace(/(.{30})/g, "$1<br>")
    //document.getElementById("output").innerHTML = result;
     document.getElementById("output").innerHTML = newStr;
  }
