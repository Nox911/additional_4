module.exports = function multiply(first, second) {
  // нужно почистить от излишков кода и комменты
  var c=[];
var a=first.split('');
var b=second.split('');
var x=[];
var z=[];
for (var i=0;i<a.length;i++) {
	x[i]=parseInt(a[i]);}
for (var i=0;i<b.length;i++) {
	z[i]=parseInt(b[i]);
}

var c=[];
c.length=x.length*z.length;
for (var i=0;i<c.length;i++){
	c[i]=0;
}


for (var i=0; i<=z.length-1;i++) {
	for (var j=0;j<=x.length-1;j++) {
		c[x.length*z.length-1-(i+j)]=c[x.length*z.length-1-(i+j)]+x[x.length-1-j]*z[z.length-1-i];
	}
}

for (var i=c.length-1;i>=0;i--) {
	if (c[i]>9) {
		c[i-1]=c[i-1]+ Math.floor(c[i]/10);
		c[i]=c[i]-(Math.floor(c[i]/10)*10);
	}
}
for(var i=0;c[i]==0;i++) {
		c.splice(i,1);
		i--;
}
var rez='';
for(var i=0; i<c.length;i++) {
rez=rez+c[i];
}



return rez;

}
