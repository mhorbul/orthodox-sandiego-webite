var xmlHttp;
function loadCalendar2r(mm, dd, yy, dt, hh, ll, tt, ss, lang = '')
{
xmlHttp=null;
if (window.XMLHttpRequest)
  {// code for Firefox, Opera, IE7, etc.
  xmlHttp=new XMLHttpRequest();
  }
else if (window.ActiveXObject)
  {// code for IE6, IE5
  xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
if (xmlHttp!=null)
  {
      var par="/orthodox_calendar/" + lang;
  par=par+"?month="+mm + "&today="+dd + "&year="+yy + "&dt="+dt + "&header="+hh + "&lives="+ll + "&trp="+tt + "&scripture="+ss;
  par=par+"&sid="+Math.random();

  xmlHttp.onreadystatechange=stateChanged2r;

  xmlHttp.open("GET", par, true);
  xmlHttp.send(null);
  }
else
  {
  alert("Your browser does not support XMLHTTP.");
  }
}

function stateChanged2r() 
{ 
if (xmlHttp.readyState==4) // 4 = "loaded"
 {
   if (xmlHttp.status==200) // 200 = "OK"
    {
       document.getElementById('orthodox_calendar').innerHTML=xmlHttp.responseText
    }
  else
    {
    alert("Problem retrieving data: " + xmlHttp.statusText);
    }
 } 
}


function popup(mylink, windowname)
{
  if (! window.focus)return true;
  var href;
  if (typeof(mylink) == 'string')
    href=mylink;
  else
    href=mylink.href;
  var showWin = window.open(href, windowname, 'width=600,height=500,resizable=yes,dependent=yes,scrollbars=yes');
  showWin.focus();
  return false;
}
