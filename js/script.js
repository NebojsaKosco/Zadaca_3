class Osoba{
    constructor (ime, prezime, email, brojTelefona){
        this.ime = ime;
        this.prezime = prezime;
        this.email = email;
        this.brojTelefona = brojTelefona;
    }
}

//Inicijalizacija niza
var prvaOsoba = new Osoba("Diana", "Rudic", "diana.rudic@gmail.com", "066/666-666");
var drugaOsoba = new Osoba("Dragan", "Milosevic", "Dragan.Milosevic@gmail.com", "066/666-667");
var trecaOsoba = new Osoba("Ana", "Matulin", "Ana.Matulin@gmail.com", "066/666-668");
var cetvrtaOsoba = new Osoba("Danijel", "Macanovic", "Danijel.Macanovic@gmail.com", "066/666-669");
var petaOsoba = new Osoba("Mihajlo", "Tomic", "Mihajlo.Tomic@gmail.com", "066/666-670");
var osobe = [prvaOsoba, drugaOsoba, trecaOsoba, cetvrtaOsoba,   ];

//Nasli element unutar kojeg trebamo dodavati redove (stavke)
var tabel = document.getElementById("tabela");
var headerRed = tabel.innerHTML;

function ispis(){
    //Ponisti/izbrisi stari innerHTML
    tabel.innerHTML = headerRed;

    //Koristimo niz da prodjemo kroz sve indekse unutar niza da bi ispisali elemente unutar tabele
    for(var i = 0; i < osobe.length; i++){
        //Dodajemo element (ime) koji ima trenutni index tj. koliko je i
        tabel.innerHTML += "<tr><td>" + osobe[i].ime + "</td>"
        + "<td>" + osobe[i].prezime + "</td>"
        + "<td>" + osobe[i].email + "</td>"
        + "<td>" + osobe[i].brojTelefona + "</td>"
        + "<td><button onclick='izmjeni(" + i + ")'>Izmjeni</button></td>"
        + "<td><button onclick='izbrisi(" + i + ")'>Izbrisi</button></td></tr>";
    }
}
ispis();

function dodajNovuOsobu(){
    var novoIme = document.getElementById("ime").value;
    var novoPrezime = document.getElementById("prezime").value;
    var noviEmail = document.getElementById("email").value;
    var noviBroj = document.getElementById("brojTelefona").value;

    //var novaOsoba = new Osoba(novoIme, novoPrezime, noviEmail, noviBroj)
    osobe.push(new Osoba(novoIme, novoPrezime, noviEmail, noviBroj));
    osobe.sort(function(a, b){
        if(a.ime < b.ime) { return -1; }
        if(a.ime > b.ime) { return 1; }
        return 0;
    })
    ispis();
}

function izbrisi(index){
    osobe.splice(index, 1);
    ispis();
}


function izmjeni(index) {
    var novoIme = prompt("Unesite novo ime");
    imena[index] = novoIme;
    ispis();
}