function RandomFact () {
    let randIndex = Math.floor(Math.random()*factList.length)
    let randomFact = factList[randIndex];
    console.log("Délit : " + randomFact.Content);
    console.log("Coupable : " + randomFact.People.Firstname + " " + randomFact.People.Lastname);

    let tempfactList = []
    factList.forEach(fact => {
		if (fact.People !=  randomFact.People) {
			tempfactList.push(fact)
		}
    });
    
    let decoy1 = tempfactList[Math.floor(Math.random()*tempfactList.length)].People
    console.log("Decoy 1 : " + decoy1.Firstname +" " + decoy1.Lastname)

    let tempfactList2 = []
    tempfactList.forEach(fact => {
		if (fact.People !=  decoy1) {
			tempfactList2.push(fact)
		}
    });

    let decoy2 = tempfactList2[Math.floor(Math.random()*tempfactList2.length)].People
    console.log("Decoy 2 : " + decoy2.Firstname + " " + decoy2.Lastname)

    $(".randomfact").empty();
    $(".randomfact").append("Fact : " + randomFact.Content)
    $(".randomfact").append("<br>")
    $(".randomfact").append("Coupable : " + randomFact.People.Firstname + " " + randomFact.People.Lastname)
    $(".randomfact").append("<br>")
    $(".randomfact").append("Leurres : " + decoy1.Firstname + ' ' + decoy1.Lastname + " et " + decoy2.Firstname + ' ' + decoy2.Lastname)
}