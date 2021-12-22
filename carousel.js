var i=1;
var prva=433;
var vtora=332;
var treta=675;
var cetvrta=345;
var petta=1253;
var sesta=611;
var liked1=false;
var liked2=false;
var liked3=false;
var liked4=false;
var liked5=false;
var liked6=false;
if (window.localStorage.getItem("like1")==null)
{
    window.localStorage.setItem("like1",JSON.stringify(prva));
    window.localStorage.setItem("like2",JSON.stringify(vtora));
    window.localStorage.setItem("like3",JSON.stringify(treta));
    window.localStorage.setItem("like4",JSON.stringify(cetvrta));
    window.localStorage.setItem("like5",JSON.stringify(petta));
    window.localStorage.setItem("like6",JSON.stringify(sesta));

}
else
{
    if(prva!==parseInt(JSON.parse(window.localStorage.getItem("like1"))))
    {
        prva=parseInt(JSON.parse(window.localStorage.getItem("like1")));
        liked1=true;
    }
    if(vtora!==parseInt(JSON.parse(window.localStorage.getItem("like2"))))
    {
        vtora=parseInt(JSON.parse(window.localStorage.getItem("like2")));
        liked2=true;
    }
    if(treta!==parseInt(JSON.parse(window.localStorage.getItem("like3"))))
    {
        treta=parseInt(JSON.parse(window.localStorage.getItem("like3")));
        liked3=true;
    }
    if(cetvrta!==parseInt(JSON.parse(window.localStorage.getItem("like4"))))
    {
        cetvrta=parseInt(JSON.parse(window.localStorage.getItem("like4")));
        liked4=true;
    }
    if(petta!==parseInt(JSON.parse(window.localStorage.getItem("like5"))))
    {
        petta=parseInt(JSON.parse(window.localStorage.getItem("like5")));
        liked5=true;
    }
    if(sesta!==parseInt(JSON.parse(window.localStorage.getItem("like6"))))
    {
        sesta=parseInt(JSON.parse(window.localStorage.getItem("like6")));
        liked6=true;
    }
}




var kom1=[];
var kom2=[];
var kom3=[];
var kom4=[];
var kom5=[];
var kom6=[];

$(document).ready(function(){
    $("#error").hide();
    for (var j=1;j<=6;j++)
    {
        if (i!==j)
        {
            $('#'+j).hide();

        }
        else
        {
            $('#'+j).show();
            document.getElementById("number").innerHTML=prva;
        }
    }
});
function prev()
{
    $("#error").hide();
    $('#'+i).hide();
    i--;
    if (i==0)
    {
        i=6;
    }
    $('#'+i).show();
    if (i==1)
    {
        document.getElementById("number").innerHTML=prva;
        document.getElementById("allcoms").innerHTML="Comments:";
        var j=0;
        while(j!=kom1.length)
        {
            var full=document.createElement("div");
            var namee=document.createElement("span");
            var comm=document.createElement("p");
            namee.innerHTML="Name:"+kom1[j];
            j++;
            comm.innerHTML="Comment:"+kom1[j];
            j++;
            full.appendChild(namee);
            full.appendChild(comm);
            document.getElementById("allcoms").appendChild(full);
        }

    }
    if (i==2)
    {
        document.getElementById("number").innerHTML=vtora;
        document.getElementById("allcoms").innerHTML="Comments:";
        var j=0;
        while(j!=kom2.length)
        {
            var full=document.createElement("div");
            var namee=document.createElement("span");
            var comm=document.createElement("p");
            namee.innerHTML="Name:"+kom2[j];
            j++;
            comm.innerHTML="Comment:"+kom2[j];
            j++;
            full.appendChild(namee);
            full.appendChild(comm);
            document.getElementById("allcoms").appendChild(full);
        }
    }
    if (i==3)
    {
        document.getElementById("number").innerHTML=treta;
        document.getElementById("allcoms").innerHTML="Comments:";
        var j=0;
        while(j!=kom3.length)
        {
            var full=document.createElement("div");
            var namee=document.createElement("span");
            var comm=document.createElement("p");
            namee.innerHTML="Name:"+kom3[j];
            j++;
            comm.innerHTML="Comment:"+kom3[j];
            j++;
            full.appendChild(namee);
            full.appendChild(comm);
            document.getElementById("allcoms").appendChild(full);
        }
    }
    if (i==4)
    {
        document.getElementById("number").innerHTML=cetvrta;
        document.getElementById("allcoms").innerHTML="Comments:";
        var j=0;
        while(j!=kom1.length)
        {
            var full=document.createElement("div");
            var namee=document.createElement("span");
            var comm=document.createElement("p");
            namee.innerHTML="Name:"+kom4[j];
            j++;
            comm.innerHTML="Comment:"+kom4[j];
            j++;
            full.appendChild(namee);
            full.appendChild(comm);
            document.getElementById("allcoms").appendChild(full);
        }
    }
    if (i==5)
    {
        document.getElementById("number").innerHTML=petta;
        document.getElementById("allcoms").innerHTML="Comments:";
        var j=0;
        while(j!=kom1.length)
        {
            var full=document.createElement("div");
            var namee=document.createElement("span");
            var comm=document.createElement("p");
            namee.innerHTML="Name:"+kom5[j];
            j++;
            comm.innerHTML="Comment:"+kom5[j];
            j++;
            full.appendChild(namee);
            full.appendChild(comm);
            document.getElementById("allcoms").appendChild(full);
        }
    }
    if (i==6)
    {
        document.getElementById("number").innerHTML=sesta;
        document.getElementById("allcoms").innerHTML="Comments:";
        var j=0;
        while(j!=kom6.length)
        {
            var full=document.createElement("div");
            var namee=document.createElement("span");
            var comm=document.createElement("p");
            namee.innerHTML="Name:"+kom6[j];
            j++;
            comm.innerHTML="Comment:"+kom6[j];
            j++;
            full.appendChild(namee);
            full.appendChild(comm);
            document.getElementById("allcoms").appendChild(full);
        }
    }


}
function next()
{
    $("#error").hide();
    $('#'+i).hide();
    i++;
    if (i==7)
    {
        i=1;
    }
    $('#'+i).show();
    if (i==1)
    {

        document.getElementById("number").innerHTML=prva;
        document.getElementById("allcoms").innerHTML="Comments:";
        var j=0;
        while(j!=kom1.length)
        {
            var full=document.createElement("div");
            var namee=document.createElement("span");
            var comm=document.createElement("p");
            namee.innerHTML="Name:"+kom1[j];
            j++;
            comm.innerHTML="Comment:"+kom1[j];
            j++;
            full.appendChild(namee);
            full.appendChild(comm);
            document.getElementById("allcoms").appendChild(full);
        }

    }
    if (i==2)
    {
        document.getElementById("number").innerHTML=vtora;
        document.getElementById("allcoms").innerHTML="Comments:";
        var j=0;
        while(j!=kom2.length)
        {
            var full=document.createElement("div");
            var namee=document.createElement("span");
            var comm=document.createElement("p");
            namee.innerHTML="Name:"+kom2[j];
            j++;
            comm.innerHTML="Comment:"+kom2[j];
            j++;
            full.appendChild(namee);
            full.appendChild(comm);
            document.getElementById("allcoms").appendChild(full);
        }
    }
    if (i==3)
    {
        document.getElementById("number").innerHTML=treta;
        document.getElementById("allcoms").innerHTML="Comments:";
        var j=0;
        while(j!=kom3.length)
        {
            var full=document.createElement("div");
            var namee=document.createElement("span");
            var comm=document.createElement("p");
            namee.innerHTML="Name:"+kom3[j];
            j++;
            comm.innerHTML="Comment:"+kom3[j];
            j++;
            full.appendChild(namee);
            full.appendChild(comm);
            document.getElementById("allcoms").appendChild(full);
        }
    }
    if (i==4)
    {
        document.getElementById("number").innerHTML=cetvrta;
        document.getElementById("allcoms").innerHTML="Comments:";
        var j=0;
        while(j!=kom4.length)
        {
            var full=document.createElement("div");
            var namee=document.createElement("span");
            var comm=document.createElement("p");
            namee.innerHTML="Name:"+kom4[j];
            j++;
            comm.innerHTML="Comment:"+kom4[j];
            j++;
            full.appendChild(namee);
            full.appendChild(comm);
            document.getElementById("allcoms").appendChild(full);
        }
    }
    if (i==5)
    {
        document.getElementById("number").innerHTML=petta;
        document.getElementById("allcoms").innerHTML="Comments:";
        var j=0;
        while(j!=kom5.length)
        {
            var full=document.createElement("div");
            var namee=document.createElement("span");
            var comm=document.createElement("p");
            namee.innerHTML="Name:"+kom5[j];
            j++;
            comm.innerHTML="Comment:"+kom5[j];
            j++;
            full.appendChild(namee);
            full.appendChild(comm);
            document.getElementById("allcoms").appendChild(full);
        }
    }
    if (i==6)
    {
        document.getElementById("number").innerHTML=sesta;
        document.getElementById("allcoms").innerHTML="Comments:";
        var j=0;
        while(j!=kom6.length)
        {
            var full=document.createElement("div");
            var namee=document.createElement("span");
            var comm=document.createElement("p");
            namee.innerHTML="Name:"+kom6[j];
            j++;
            comm.innerHTML="Comment:"+kom6[j];
            j++;
            full.appendChild(namee);
            full.appendChild(comm);
            document.getElementById("allcoms").appendChild(full);
        }
    }

}
function like()
{
    var wrong=false;
    if (i==1 && liked1==false)
    {
        $("#error").hide();
        document.getElementById("number").innerHTML=prva+1;
        prva++;
        window.localStorage.setItem("like1",JSON.stringify(prva));
        liked1=true;
        wrong=true;
    }
    if (i==2 && liked2==false)
    {
        $("#error").hide();
        document.getElementById("number").innerHTML=vtora+1;
        vtora++;
        window.localStorage.setItem("like2",JSON.stringify(vtora));
        liked2=true;
        wrong=true;
    }
    if (i==3 && liked3==false)
    {
        $("#error").hide();
        document.getElementById("number").innerHTML=treta+1;
        treta++;
        window.localStorage.setItem("like3",JSON.stringify(treta));
        liked3=true;
        wrong=true;
    }
    if (i==4 && liked4==false)
    {
        $("#error").hide();
        document.getElementById("number").innerHTML=cetvrta+1;
        cetvrta++;
        window.localStorage.setItem("like4",JSON.stringify(cetvrta));
        liked4=true;
        wrong=true;
    }
    if (i==5 && liked5==false)
    {
        $("#error").hide();
        document.getElementById("number").innerHTML=petta+1;
        petta++;
        window.localStorage.setItem("like5",JSON.stringify(petta));
        liked5=true;
        wrong=true;
    }
    if (i==6 && liked6==false)
    {
        $("#error").hide();
        document.getElementById("number").innerHTML=sesta+1;
        sesta++;
        window.localStorage.setItem("like6",JSON.stringify(sesta));
        liked6=true;
        wrong=true;
    }
    if (wrong==false)
    {
        $("#error").show();
    }
}
function submitcom()
{
    var name=document.getElementById("name").value;
    var comment=document.getElementById("comm").value;
    document.getElementById("comm").value=" ";
    document.getElementById("name").value=" ";
    if (i==1)
    {
        kom1.push(name);
        kom1.push(comment);
        var full=document.createElement("div");
        var namee=document.createElement("span");
        var comm=document.createElement("p");
        namee.innerHTML="<img src = user.jpg class = 'slik' > "+name + "\n" ;
        comm.innerHTML="<img src = comm.jpg class = 'slikk' style='margin-left: 5px;margin-right: 5px;'> " +comment +"\n";
        full.appendChild(namee);
        full.appendChild(comm);
        document.getElementById("allcoms").appendChild(full);
    }
    if (i==2)
    {

        kom2.push(name);
        kom2.push(comment);
        var full=document.createElement("div");
        var namee=document.createElement("span");
        var comm=document.createElement("p");
        namee.innerHTML="<img src = user.jpg class = 'slik' > "+name + "\n" ;
        comm.innerHTML="<img src = comm.jpg class = 'slikk' style='margin-left: 5px;margin-right: 5px;'> " +comment +"\n";
        full.appendChild(namee);
        full.appendChild(comm);
        document.getElementById("allcoms").appendChild(full);
    }
    if (i==3)
    {
        kom3.push(name);
        kom3.push(comment);
        var full=document.createElement("div");
        var namee=document.createElement("span");
        var comm=document.createElement("p");
        namee.innerHTML="<img src = user.jpg class = 'slik' > "+name + "\n" ;
        comm.innerHTML="<img src = comm.jpg class = 'slikk' style='margin-left: 5px;margin-right: 5px;' > " +comment +"\n";
        full.appendChild(namee);
        full.appendChild(comm);
        document.getElementById("allcoms").appendChild(full);
    }
    if (i==4)
    {
        kom4.push(name);
        kom4.push(comment);
        var full=document.createElement("div");
        var namee=document.createElement("span");
        var comm=document.createElement("p");
        namee.innerHTML="<img src = user.jpg class = 'slik' > "+name + "\n" ;
        comm.innerHTML="<img src = comm.jpg class = 'slikk' style='margin-left: 5px;margin-right: 5px;' > " +comment +"\n";
        full.appendChild(namee);
        full.appendChild(comm);
        document.getElementById("allcoms").appendChild(full);
    }
    if (i==5)
    {
        kom5.push(name);
        kom5.push(comment);
        var full=document.createElement("div");
        var namee=document.createElement("span");
        var comm=document.createElement("p");
        namee.innerHTML="<img src = user.jpg class = 'slik' > "+name + "\n" ;
        comm.innerHTML="<img src = comm.jpg class = 'slikk' style='margin-left: 5px;margin-right: 5px;'> " +comment +"\n";
        full.appendChild(namee);
        full.appendChild(comm);
        document.getElementById("allcoms").appendChild(full);  }
    if (i==6)
    {
        kom6.push(name);
        kom6.push(comment);
        var full=document.createElement("div");
        var namee=document.createElement("span");
        var comm=document.createElement("p");
        namee.innerHTML="<img src = user.jpg class = 'slik' > "+name + "\n" ;
        comm.innerHTML="<img src = comm.jpg class = 'slikk' style='margin-left: 5px;margin-right: 5px;' > " +comment +"\n";
        full.appendChild(namee);
        full.appendChild(comm);
        document.getElementById("allcoms").appendChild(full);
    }


}