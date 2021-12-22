var first=true;
window.onload = (event) => {
    submitPost();
};
function submitPost()
{
    var cela=[];
    if (localStorage.getItem("blog")!=null)
    {
        cela=JSON.parse(window.localStorage.getItem("blog"));
        console.log(cela);
    }
    if (first==true)
    {
        first=false;
        for (var i=0;i<cela.length;i++)
        {
            var name=cela[i][0];
            var naslov=cela[i][1];
            var sodrzina=cela[i][2];
            var date=cela[i][3];


            var outter=document.createElement("div");
            outter.classList.add("fixed");

            var nam=document.createElement("p");
            var nasl=document.createElement("p");
            var sodr=document.createElement("p");
            var dat=document.createElement("p");

            nam.classList.add("fixed");
            nasl.classList.add("fixed");
            sodr.classList.add("fixed");
            dat.classList.add("fixed");

            var nam1=document.createElement("img");
            var nasl1=document.createElement("img");
            var sodr1=document.createElement("img");
            var dat1=document.createElement("img");
            nam1.setAttribute("src","user.jpg");
            nasl1.setAttribute("src","naslov.gif");
            sodr1.setAttribute("src","text-icon.png");
            dat1.setAttribute("src","calen.jpg");
            nam1.classList.add("blogSliki");
            nasl1.classList.add("blogSliki");
            sodr1.classList.add("blogSliki");
            dat1.classList.add("blogSliki");

            nam.innerHTML=name ;
            nasl.innerHTML=naslov  ;
            sodr.innerHTML=sodrzina ;
            dat.innerHTML=date  ;
            outter.appendChild(nam1);
            outter.appendChild(nam);
            outter.appendChild(nasl1);
            outter.appendChild(nasl);
            outter.appendChild(sodr1);
            outter.appendChild(sodr);
            outter.appendChild(dat1);
            outter.appendChild(dat);
        document.getElementById("allp").appendChild(outter);
        }
    }
    else
    {
        var name=document.getElementById("name").value;
        var naslov=document.getElementById("naslov").value;
        var sodrzina=document.getElementById("sodrzina").value;
        var date=document.getElementById("date").value;

        var post=[];
        post.push(name);
        post.push(naslov);
        post.push(sodrzina);
        post.push(date);
        cela.push(post);
        window.localStorage.setItem("blog",JSON.stringify(cela));


        document.getElementById("name").value="";
        document.getElementById("naslov").value="";
        document.getElementById("sodrzina").value="";
        document.getElementById("date").value="";

        var outter=document.createElement("div");
        outter.classList.add("fixed");

        var nam=document.createElement("p");
        var nasl=document.createElement("p");
        var sodr=document.createElement("p");
        var dat=document.createElement("p");

        nam.classList.add("fixed");
        nasl.classList.add("fixed");
        sodr.classList.add("fixed");
        dat.classList.add("fixed");

        var nam1=document.createElement("img");
        var nasl1=document.createElement("img");
        var sodr1=document.createElement("img");
        var dat1=document.createElement("img");
        nam1.setAttribute("src","user.jpg");
        nasl1.setAttribute("src","naslov.gif");
        sodr1.setAttribute("src","text-icon.png");
        dat1.setAttribute("src","calen.jpg");
        nam1.classList.add("blogSliki");
        nasl1.classList.add("blogSliki");
        sodr1.classList.add("blogSliki");
        dat1.classList.add("blogSliki");

        nam.innerHTML=name ;
        nasl.innerHTML=naslov  ;
        sodr.innerHTML=sodrzina ;
        dat.innerHTML=date  ;
        outter.appendChild(nam1);
        outter.appendChild(nam);
        outter.appendChild(nasl1);
        outter.appendChild(nasl);
        outter.appendChild(sodr1);
        outter.appendChild(sodr);
        outter.appendChild(dat1);
        outter.appendChild(dat);

        document.getElementById("allp").appendChild(outter);

    }
    }
