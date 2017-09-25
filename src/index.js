
module.exports = function multiply(first, second) {


	var c=[],
			x=[],
			z=[];
	var a=first.split('');
	var b=second.split('');


// string to number for first and second array
	for (var i=0;i<a.length;i++) {
		a[i]=+a[i];
	}	
	for (var i=0;i<b.length;i++) {
		b[i]=+b[i];
	}

// reserv length for result array and define 0 to this array
	var c=[];
	c.length=a.length*b.length;
	for (var i=0;i<c.length;i++){
		c[i]=0;
	}

// column multiple
	for (var i=0; i<=b.length-1;i++) {
		for (var j=0;j<=a.length-1;j++) {
			c[a.length*b.length-1-(i+j)]=c[a.length*b.length-1-(i+j)]+a[a.length-1-j]*b[b.length-1-i];
		}
	}
// transfer decimal
	for (var i=c.length-1;i>=0;i--) {
		if (c[i]>9) {
			c[i-1]=c[i-1]+ Math.floor(c[i]/10);
			c[i]=c[i]-(Math.floor(c[i]/10)*10);
		}
	}
// del first none-use zero
	for(var i=0;c[i]==0;i++) {
		c.splice(i,1);
		i--;
	}
// reult from array to one string
	var rez='';
	for(var i=0; i<c.length;i++) {
	rez=rez+c[i];
	}
	return rez;
}
