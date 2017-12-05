var count;
var index;
var i;
var ii;
var re3;
var re5;
var re7;
var re11;
var re13;
var re17;
var strings = ['Fizz','Buzz','Bang','Bong','Fezz'];
var outputs;
for (count = 1; count <201; count++){
    re3=count%3;
    re5=count%5;
    re7=count%7;
    re11=count%11;
    re13=count%13;
    re17=count%17;
    outputs=[];
    index=[];
    i=0;

    if (re3==0){
        index[i]=0;
        i++;
    }
    if (re13==0){
        index[i]=4;
        i++;
    }
    if (re5==0){
        index[i]=1;
        i++;
    }
    if (re7==0){
        index[i]=2;
        i++;
    }
    if (re11==0){
        if (re13==0){
            index=[4,3];
            i=2;
        } else {
            index=[3];
            i=1;
        }
    }
    if (re17==0){
        index=index.reverse();
    }
    if (re3>0 & re5>0 & re7>0 & re11>0 & re13>0){
        console.log(count);
    } else {
        for (ii=1;ii<index.length+1;ii++){
            outputs+=strings[index[ii-1]];
        }
        console.log(outputs)
    }
}