function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function unos() {
    var text;
    var p =  document.getElementById("fix").value;
      switch (p) {
        case "1":
          text = "Opklada je položena!";
          break;
        case "2":
          text = "Opklada je položena!";
          break;
          case "x":
            text = "Opklada je položena!";
            break;  
          case "2+":
              text = "Opklada je položena!";
              break;
          case "3+":
              text = "Opklada je položena!";
                break;
          case "x-1":
              text = "Opklada je položena!";
                  break;
          case "1-x":
          text = "Opklada je položena!";
          break;       
          case "2-x":
           text = "Opklada je položena!";
            break;
          case "x-2":
          text = "Opklada je položena!";
            break;
            default:
          text = "Morate uneti opkladu!";
        
      }
      document.getElementById("ver").innerHTML = text;
  }
  function betting() {
  var show, x;
  show = document.getElementById("show");
  show.innerHTML = "";
  x = document.getElementById("opklada").value;
  
  try { 
    if(x == "")  throw "Unesite šifru utakmice!";
    if(isNaN(x)) throw "Uneti podatak nije broj";
    if(x > 7006)   throw "Šifra ne postoji!";
    if(x < 1000)  throw "Šifra ne postoji!";
    if(x == 1000, 2000, 3000, 4000, 5000, 6000, 7000) throw "Šifra vase opklade je uneta!";
  }
  catch(err) {
    show.innerHTML = "" + err;
  }
}

  
