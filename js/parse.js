var fs = require('fs');
var obj1=[];
var obj2=[];
var obj3=[];
//var countries={};
var obj4=[];
var asia=[];
var northAmerica=[];
var europe=[];
var africa=[];
var antartica=[];
var southAmerica=[];
var oceana=[];
var k=4;
var len;
function init(para)
{
  for(var j=1960;j<2016;j++)
  {
    para[j-1960]={};
    para[j-1960]["value"]=0;
  }
}
function clean(temp)
{
  for (var key in temp)
  {
    if (temp[key]["value"]==0)
    {
      temp.splice(key,1);
    }
  }
}

function processFile(inputFile) {
  readline = require('readline'),
  instream = fs.createReadStream(inputFile),
  outstream = new (require('stream'))(),
  rl = readline.createInterface(instream, outstream);

  rl.on('line', function (line) {
    var lines =line.split(",");

    if(lines[0]=="India")
    {
      if(lines[3]=="AG.LND.ARBL.ZS")
      {
        for(var i=1960;i<2016;i++)
        {
          if(lines[k]!="")
          {
            var temp={};
            temp["year"]=String(i);
            temp["value"]=parseFloat(lines[k]);
            obj1.push(temp);
          }
          k++;
        }
        k=4;
        //  console.log("object 1");
        //  console.log(JSON.stringify(obj1,null,2));
        //console.log("\n \n");
      }
      else if(lines[3]=="AG.LND.ARBL.HA.PC")
      {
        for(var i=1960;i<2016;i++)
        {
          if(lines[k]!="")
          {
            var temp={};
            temp["year"]=String(i);
            temp["value"]=parseFloat(lines[k]);
            obj2.push(temp);
          }
          k++;
        }
        k=4;
        //console.log("object 2");
        //  console.log(JSON.stringify(obj2,null,2));
        //console.log("\n");
      }
      else if(lines[3]=="AG.LND.ARBL.HA")
      {
        for(var i=1960;i<2016;i++)
        {
          if(lines[k]!="")
          {
            var temp={};
            temp["year"]=String(i);
            temp["value"]=parseFloat(lines[k]);
            obj3.push(temp);
          }
          k++;
        }
        k=4;
        // console.log("object 3");
        //  console.log(JSON.stringify(obj3,null,2));
      }
    }
    if(countries[lines[1]]=="AF" && lines[3]=="AG.LND.ARBL.ZS")
    {
      //console.log(typeof lines[1]);
      var temp={};
      temp["country"]=lines[0];
      temp["value"]=parseFloat(lines[54]);
      obj4.push(temp);
    }
    if(countries[lines[1]]=="AS" && lines[3]=="AG.LND.ARBL.HA")
    {
      for(var i=1960;i<2016;i++)
      {
        if(lines[k]!=0.0)
        {
          asia[i-1960]["year"]=String(i);
          asia[i-1960]["value"]=asia[i-1960]["value"]+parseFloat(lines[k]);
        }
        k++;
      }
      k=4;
    }
    else if(countries[lines[1]]=="NA" && lines[3]=="AG.LND.ARBL.HA")
    {
      for(var i=1960;i<2016;i++)
      {
        if(lines[k]!=0.0)
        {
          northAmerica[i-1960]["year"]=String(i);
          northAmerica[i-1960]["value"]=northAmerica[i-1960]["value"]+parseFloat(lines[k]);
        }
        k++;
      }
      k=4;
    }
    else if(countries[lines[1]]=="EU" && lines[3]=="AG.LND.ARBL.HA")
    {
      for(var i=1960;i<2016;i++)
      {
        if(lines[k]!=0.0)
        {
          europe[i-1960]["year"]=String(i);
          europe[i-1960]["value"]=europe[i-1960]["value"]+parseFloat(lines[k]);
        }
        k++;
      }
      k=4;
    }
    else if(countries[lines[1]]=="AF" && lines[3]=="AG.LND.ARBL.HA")
    {
      for(var i=1960;i<2016;i++)
      {
        if(lines[k]!=0.0)
        {
          africa[i-1960]["year"]=String(i);
          africa[i-1960]["value"]=africa[i-1960]["value"]+parseFloat(lines[k]);
        }
        k++;
      }
      k=4;
    }
    else if(countries[lines[1]]=="AN" && lines[3]=="AG.LND.ARBL.HA")
    {
      for(var i=1960;i<2016;i++)
      {
        if(lines[k]!=0.0)
        {
          antartica[i-1960]["year"]=String(i);
          antartica[i-1960]["value"]=antartica[i-1960]["value"]+parseFloat(lines[k]);
        }
        k++;
      }
      k=4;
    }
    else if(countries[lines[1]]=="SA" && lines[3]=="AG.LND.ARBL.HA")
    {
      for(var i=1960;i<2016;i++)
      {
        if(lines[k]!=0.0)
        {
          southAmerica[i-1960]["year"]=String(i);
          southAmerica[i-1960]["value"]=southAmerica[i-1960]["value"]+parseFloat(lines[k]);
        }
        k++;
      }
      k=4;
    }
    else if(countries[lines[1]]=="OC" && lines[3]=="AG.LND.ARBL.HA")
    {
      for(var i=1960;i<2016;i++)
      {
        if(lines[k]!=0.0)
        {
          oceana[i-1960]["year"]=String(i);
          oceana[i-1960]["value"]=oceana[i-1960]["value"]+parseFloat(lines[k]);
        }
        k++;
      }
      k=4;
    }

  });


  rl.on('close', function (line) {
    // fs.writeFile("part1.json",JSON.stringify(obj1,null,2));
    // fs.writeFile("part2.json",JSON.stringify(obj2,null,2));
    // fs.writeFile("part3.json",JSON.stringify(obj3,null,2));
    // fs.writeFile("part4.json",JSON.stringify(obj4,null,2));
    //fs.writeFile("part5.json",JSON.stringify(obj4,null,2));
    clean(asia);
    clean(antartica);
    clean(africa);
    clean(europe);
    clean(northAmerica);
    clean(southAmerica);
    clean(oceana);
    asia = {data:asia, name:"Asia"};
    africa= {data:africa, name:"Africa"};
    northamerica={data:northAmerica, name:"NorthAmerica"};
    southAmerica={data:southAmerica, name:"SouthAmerica"};
    europe={data:europe, name:"Europe"};
    oceana={data:oceana, name:"Oceana"};
    // console.log(final);
    fs.writeFile("asia.json",JSON.stringify(asia,null,2));
    fs.writeFile("africa.json",JSON.stringify(africa,null,2));
    fs.writeFile("northAmerica.json",JSON.stringify(northAmerica,null,2));
    fs.writeFile("southAmerica.json",JSON.stringify(southAmerica,null,2));
    fs.writeFile("europe.json",JSON.stringify(europe,null,2));
    fs.writeFile("oceana.json",JSON.stringify(oceana,null,2));
    // fs.writeFile("antartica.json",JSON.stringify(antartica,null,2));
    console.log('done reading main file.');
  });
}

function processSampleFile(inputFile) {
  readline = require('readline'),
  instream = fs.createReadStream(inputFile),
  outstream = new (require('stream'))(),
  rl = readline.createInterface(instream, outstream);

  rl.on('line', function (line) {
    var lines =line.split(",");
    if(lines[4].trim()!='Country 3')
    {
      countries[lines[4].trim()]=lines[6].trim();
    }
  });

  rl.on('close', function (line) {
    //console.log(JSON.stringify(countries,null,2));
    init(asia);
    init(northAmerica);
    init(africa);
    init(europe);
    init(southAmerica);
    init(oceana);
    init(antartica);
    console.log('done reading secondary file.');
  });
}
processSampleFile('WDI_csv/countries.csv');
processFile('WDI_csv/WDI_Data.csv');
