//#region PEOPLE
var peopleList = [];
let factArrayByPeople = [];

function People(id, firstname, lastname, picture) {
	this.Id = id;
	this.Firstname = firstname;
	this.Lastname = lastname;
	this.Picture = picture;
	peopleList.push(this);



	
		this.Facts = function () {
			
			factList.forEach(fact => {
				if (fact.People.Id == this.Id) {
					// console.log(fact)
					factArrayByPeople.push(fact);
				}
			}) 
			return factArrayByPeople;
		}
	// TODO BALKANY.FACTS
	/* let properfact = [];
	this.Facts = function () {
		var peopleFactList = [];
		matchList.forEach(match => {
			if (this.Id == match.People_id) {
				// console.log(match)
				factList.forEach(fact => {
					if (fact.Id == match.People_id) {
						 console.log(fact)
						peopleFactList.push(fact);
						// console.log(peopleFactList)						
						//return peopleFactList;
					}
				}) 
			}
			
		} ) 
	} */
} 

function ListPeople() {
	peopleList.forEach(function (element) {
		console.log(element);
	});
}

function GetPeopleMaxId() {
	let max = 0;
	peopleList.forEach(people => {
		if (people.Id > max) {
			max = people.Id;
		}
	});
	return max;
}

//#endregion PEOPLE

//#region FACT
var factList = [];

function Fact(id, content, people) {
	this.Id = id;
	this.Content = content;
	this.People = people;
	factList.push(this);

}

function ListFact() {
	factList.forEach(function (element) {
		console.log(element);
	});
}

function GetFactMaxId() {
	let max = 0;
	factList.forEach(fact => {
		if (fact.Id > max) {
			max = fact.Id;
		}
	});
	return max;
}
//#endregion FACT

//#region MATCH

var matchList = [];
function Match(id, people_id, fact_id) {
	this.Id = id;
	this.People_id = people_id;
	this.Fact_id = fact_id;
	matchList.push(this);
}

function GetMatchMaxId() {
	let max = 0;
	matchList.forEach(match => {
		if (match.Id > max) {
			max = match.Id;
		}
	});
	return max;
}
//#endregion MATCH



