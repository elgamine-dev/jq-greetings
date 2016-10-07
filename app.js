$("button").click(function(){
	var person = {};
	person.first_name = $("#first_name").val();
	person.city = $("#city").val();
	person.last_name = $("#last_name").val();

	console.log(person);
	$("span").html(person..first_name +" "+person.last_name)
});

