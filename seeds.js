function Seeds() {
    MakePeople();
    MakeFact();
    MakeMatch();
    console.log("Seeds : OK");
    console.log("Display : OK");
    Display()
}


function MakePeople() {
    new People(1, "Patrick", "Balkany", "pic_url");
    new People(2, "Nicolas", "Sarkozy", "pic_url");
    new People(3, "Jerome", "Cahuzac", "pic_url");
    new People(4, "Jacques", "Chirac", "pic_url");
}

function MakeFact() {
    new Fact(1, "Détournement de Levallois", peopleList[0]);
    new Fact(2, "Financement campagne lybienne", peopleList[1]);
    new Fact(3, "Phobie administrative", peopleList[2]);
    new Fact(4, "Blanchiement d'argent", peopleList[0]);
    new Fact(5, "Affaire Bygmallion", peopleList[1]);
    new Fact(6, "Emploi fictif du RPR", peopleList[3]);
}

function MakeMatch() {
    new Match(1, 1, 1);
    new Match(2, 2, 2);
    new Match(3, 3, 3);
    new Match(4, 1, 4);
    new Match(5, 2, 5);
    new Match(6, 4, 6)
}