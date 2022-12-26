// prime number with range

w=document.createElement("Button")
w.setAttribute("onclick","addition();");
w.innerHTML="click Me"
document.body.appendChild(w);

function addition(){
   x=document.createElement("Button");
   x.setAttribute("onclick","single();"); 
   x.innerHTML="start";
   document.body.appendChild(x)
}

function single(){
	var y = document.createElement("input");
    y.setAttribute("type", "text");
    y.setAttribute("placeholder", "Enter the number:");
    y.setAttribute("id","n");
    document.body.appendChild(y);

    z=document.createElement("Button");
    z.setAttribute("onclick","run();");
    z.innerHTML="run";
    document.body.appendChild(z)
} 

function run()
{
	var rangeInput = parseInt(document.getElementById("n").value);
	for (i=2;i<=rangeInput;i++)
	{
		for(j=2;j<i;j++)
		{
			if (i%j==0)
			{
				break;
			}
		}
		if(i==j)
		{
			document.write(i+"is a prime number<br>");
		}
	}
}

