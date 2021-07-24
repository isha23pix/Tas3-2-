function formvariables()
    {
        var form1 = document.getElementById("name").value;          
        var form2 = document.getElementById("about").value;
        var form3 = document.getElementById("address").value;          
        var form4 = document.getElementById("phone no.").value;
        var form5 = document.getElementById("email").value;
        var form6 = document.getElementById("college").value;

        var of1 = document.getElementById("p1").textContent = form1;
        var of2 = document.getElementById("p2").textContent = form2;
        var of3 = document.getElementById("p3").textContent = form3;
        var of4 = document.getElementById("p4").textContent = form4;
        var of5 = document.getElementById("p5").textContent = form5;
        var of6 = document.getElementById("p6").textContent = form6;

        document.getElementById('Details').reset();
    }