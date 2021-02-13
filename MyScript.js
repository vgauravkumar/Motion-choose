function final(x)
{
	document.getElementById("demo").innerHTML = "Motion for the debate will be Motion No. : " + x;
}
function toss(a,b)
{
	let coinToss = null;
	coinToss = Math.random();
	if(coinToss < 0.5)
	{
		final(a);
	}
	else
	{
		final(b);
	}
}
function myFunction()
{
	let g1 = document.getElementById("mySelect1g").value;
	let g2 = document.getElementById("mySelect2g").value;
	let g3 = document.getElementById("mySelect3g").value;
	let o1 = document.getElementById("mySelect1o").value;
	let o2 = document.getElementById("mySelect2o").value;
	let o3 = document.getElementById("mySelect3o").value;
	if(g1 == o1)
	{
		final(g1);
	}
	else if(g2 == o2)
	{
		final(g2);
	}
	else if (g3==o3)
	{
		toss(g1,o1)
	}
	else if(o1 == g2)
	{
		final(o1);
	}
	else if(o2 == g1)
	{
		final(o2);
	}
	// document.getElementById("myBtn").disabled = true;
	// document.getElementById("mySelect1g").value = "select";
	// document.getElementById("mySelect2g").value = "select";
	// document.getElementById("mySelect3g").value = "select";
	// document.getElementById("mySelect1o").value = "select";
	// document.getElementById("mySelect2o").value = "select";
	// document.getElementById("mySelect3o").value = "select";
}