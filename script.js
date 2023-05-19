function myFunction(){
 document.getElementById("demo").innerHTML =" Hello World!";
}

function table(){
    let text = "";

    for (let i = 0; i < 5; i++) {

      text += "APP VERSION :  " + i + "<br>";
    
    }

    document.getElementById('table').innerHTML ='<ol>' + text +'</ol>'

}