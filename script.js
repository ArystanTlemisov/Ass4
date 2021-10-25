const button = document.getElementById("submit");

button.addEventListener('click', () => {

    const bgEducation = document.getElementById("education");
//////////////////////////////////////////////
    const familyNet = document.getElementById("networth");
//////////////////////////////////////////////
    const brideCaste = document.getElementById("caste");
//////////////////////////////////////////////
    const brideSkills = document.getElementsByName("checkbox1");
//////////////////////////////////////////////
    const brideAge = document.getElementsByName("radiobtn");
//////////////////////////////////////////////
    const brideReputation = document.getElementsByName("checkbox2");
//////////////////////////////////////////////
    const priceTotal = document.getElementById("totalPrice");

    let beginPrice = 100.0;
    const bdEducSel = bgEducation.value;
    const famNet = familyNet.value;
    const briCas = brideCaste.value;

    if(bdEducSel=="blank" || famNet=="blank" || briCas=="blank"){
        alert("Not allowed to choose empty field")
    }
    else{
        ///
        if(bdEducSel == "bachelor"){
            beginPrice*=1.5;
        }
        else if(bdEducSel == "college"){
            beginPrice*=1.2;
        }
        else if(bdEducSel == "high_school"){
            beginPrice*=1.05;
        }
        else if(bdEducSel == "middle_school"){
            beginPrice*=0.9;
        }
        ///

        ///
        if(famNet == "upper_class"){
            beginPrice*=2;
        }
        else if(famNet == "middle_class"){
            beginPrice*=1.5;
        }
        else if(famNet == "lower_class"){
            beginPrice*=1.2;
        }
        ///

        ///
        if(briCas == "brahmin"){
            beginPrice+=100;
        }
        else if(briCas == "kshatriya"){
            beginPrice+=50;
        }
        else if(briCas == "vaishya"){
            beginPrice+=20;
        }
        else if(briCas == "shudra"){
            beginPrice+=15;
        }
        else if(briCas == "varna"){
            beginPrice-=50;
        }
        ///

        ///
        if(brideSkills[0].checked){
            beginPrice+=10;
        }
        if(brideSkills[1].checked){
            beginPrice+=20;
        }
        if(brideSkills[2].checked){
            beginPrice+=15;
        }
        if(brideSkills[3].checked){
            beginPrice+=10;
        }
        ///

        ///
        if(brideAge[0].checked){
            beginPrice*=1.5;
        }
        else if(brideAge[1].checked){
            beginPrice*=1.2;
        }
        else if(brideAge[2].checked){
            beginPrice*=0.95;
        }
        ///

        ///
        if(brideReputation[0].checked){
            beginPrice*=0.85;
        }
        if(brideReputation[1].checked){
            beginPrice*=0.9;
        }
        if(brideReputation[2].checked){
            beginPrice-=20;
        }

        priceTotal.innerHTML = "Total Price equals: " + beginPrice.toFixed(3);
    }
})


