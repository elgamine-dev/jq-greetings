$("button").click(function(){

	var first_name = $("#first_name").val();
	var city = $("#city").val();
	var last_name = $("#last_name").val();
	console.log(first_name);

	var gerard = {

		first_name : first_name,
		city : city,
		last_name : last_name

	}
	console.log(gerard);
	$("span").html(gerard.first_name +" "+last_name)

	

});

