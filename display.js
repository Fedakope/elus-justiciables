function Display() {
	
	DisplayPeople();
	DisplayFact();
	DisplayMatch();
}

function DisplayPeople() {
	var structure = `
	<h5>People :</h5>
<table class="table table-hover" id="">
            <thead>
            <tr>
            <th scope="col">ID</th>
            <th scope="col">Firstname</th>
            <th scope="col">Lastname</th>
            <th scope="col">Edit</th>
            </tr>
            </thead>
            <tbody id="peopleTable">
            </tbody>
			</table>
			`
	$(".peopleBox").append(structure);

	for (people of peopleList) {
		let ligne = $("<tr></tr>");
		ligne.append($("<td></td>").html(people.Id));
		ligne.append($("<td></td>").html(people.Firstname));
		ligne.append($("<td></td>").html(people.Lastname));
		ligne.append($("<td></td>").append($("<button></button>")
			.addClass('btn btn-link update').attr("peopleid", people.Id).html("Lien")))
		$("#peopleTable").append(ligne);
	}
}


function DisplayFact() {
	var structure = `
	<h5>Fact :</h5>
	<table class="table table-hover" id="">
				<thead>
				<tr>
				<th scope="col">ID</th>
				<th scope="col">Content</th>
				<th scope="col">Edit</th>
				</tr>
				</thead>
				<tbody id="factTable">
				</tbody>
				</table>
				`
		$(".factBox").append(structure);

	for (fact of factList) {
		let ligne = $("<tr></tr>");
		ligne.append($("<td></td>").html(fact.Id));
		ligne.append($("<td></td>").html(fact.Content));
		ligne.append($("<td></td>").append($("<button></button>")
			.addClass('btn btn-link update').attr("factid", fact.Id).html("Lien")))
		$("#factTable").append(ligne);
	}
}

function DisplayMatch() {
	var structure = `
	<h5>Match :</h5>
	<table class="table table-hover" id="">
				<thead>
				<tr>
				<th scope="col">ID</th>
				<th scope="col">People ID</th>
				<th scope="col">Fact ID</th>
				<th scope="col">Edit</th>
				</tr>
				</thead>
				<tbody id="matchTable">
				</tbody>
				</table>
				`
		$(".matchBox").append(structure);

	for (match of matchList) {
		let ligne = $("<tr></tr>");
		ligne.append($("<td></td>").html(match.Id));
		ligne.append($("<td></td>").html(match.People_id));
		ligne.append($("<td></td>").html(match.Fact_id));
		ligne.append($("<td></td>").append($("<button></button>")
			.addClass('btn btn-link update').attr("matchid", match.Id).html("Lien")))
		$("#matchTable").append(ligne);
	}
}