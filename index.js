const strings = ['Fizz','Buzz','Bang','Bong','Fezz'];

for (let count = 1; count <201; count++){
    let outputs=[];
    let index=[];
    let i=0;

    if (count%3==0){
        index[i]=0;
        i++;
    }
    if (count%13==0){
        index[i]=4;
        i++;
    }
    if (count%5==0){
        index[i]=1;
        i++;
    }
    if (count%7==0){
        index[i]=2;
        i++;
    }
    if (count%11==0){
        if (count%13==0){
            index=[4,3];
            i=2;
        } else {
            index=[3];
            i=1;
        }
    }
    if (count%17==0){
        index=index.reverse();
    }
    if (count%3>0 & count%5>0 & count%7>0 & count%11>0 & count%13>0){
        console.log(count);
    } else {
        for (let ii=1;ii<index.length+1;ii++){
            outputs+=strings[index[ii-1]];
        }
        console.log(outputs)
    }
}