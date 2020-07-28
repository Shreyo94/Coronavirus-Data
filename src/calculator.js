function calculate() {
    var x0 = parseInt(document.getElementById("x0").value);
    var xn = parseInt(document.getElementById("xn").value);
    var y = document.getElementById("ycsv").value;
    var f = parseFunc(y).split(",");
    var o = document.getElementById("ocsv");
    o.value = "x," +  f.join(",") + "\n";
    for(var x=x0; x<xn+1; x++) {
	var result = [];
	f.forEach(function(fi) {
	    result.push(eval(fi));
	});
	o.value += x + "," + result.join(",") + "\n";
    }
}

function parseFunc(s) {
    s = s.replace(/\^/g,"**");
    s = s.replace(/([0-9])([a-z])/g,"$1*$2");
    s = s.replace(/([A-Za-z0-9])\(/g,"$1*\(");
    s = s.replace(/([^.a-z][a-z]{2,})\*\(/g,"$1(");
    s = s.replace(/([^.a-z])([a-z]{2,})\(/g,"$1Math.$2(");
    s = s.replace(/PI/g,"Math.PI");
    s = s.replace(/Math[.]Math/g,"Math");
    s = s.replace(/(Math[.][a-z]+)\*/g,"$1");
    return s;
}


function saveCSV() {
    var content = [];
    content.push(document.getElementById("ocsv").value);
    var bl = new Blob(content, {type: "text/csv,charset=utf-8"});
    var a = document.createElement("a");
    a.href = URL.createObjectURL(bl);
    a.download = "file.csv";
    a.hidden = true;
    document.body.appendChild(a);
    a.innerHTML = "saving as blob";
    a.click();
}
