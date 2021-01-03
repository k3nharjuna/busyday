// 3
//   $
//  $ $
// $   $
//  $ $
//   $

function diamond(input){
    let array = [];
    for(let i = 0; i < input; i++){
        let temp = '';
        if(i === 0){
            for(let j = 0; j < input; j++){
                if(j === input - 1){
                    temp += '$';
                } else{
                    temp += ' ';
                }
            }
        } else{
            let space = i * 2 - 1;
            let condition = false;
            for(let j = input - i - 1; j >= 0; j--){
                if(j === 0){
                    temp += '$';
                    condition = true;
                } else{
                    temp += ' ';
                }
                if(condition === true){
                    for(let k = 0; k <= space; k++){
                        if(k === space){
                            temp += '$';
                        } else{
                            temp += ' ';
                        }
                    }
                }
            }
        }
        console.log(temp);
        array.push(temp);  
    }
    //cetak bawah
    let help = array.length - 2
        for(let k = help; k >= 0 ; k--){
            console.log(array[k]);
        }
}

diamond(15);

