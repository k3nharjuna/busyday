
function convertWeight(summation, unitWeight) {
    //your code here
    let kamus = ['ton','kwintal','-','kg','hg','dag','g','dg','cg','mg'];
    let result = 0;

    let soal = summation.split('+');
    for(let i = 0; i < soal.length; i++){
        let piece = soal[i].split(' '); // ['1','ton','']
        if(piece[1] === 'ons'){
            piece[1] = 'hg';
        }
        //cek posisi
        let step = 0;
        let posx = 0;
        let posy = 0;
        for(let j = 0; j < kamus.length; j++){
            if(piece[1] === kamus[j]){ //x soal
                posx = j;
            }
            if(unitWeight === kamus[j]){ //y tujuan
                posy = j;
            }
        }
        //console.log(posx,posy)
        step = posx - posy;
        //console.log(step);
        if(step > 0){
            let temp = Number(piece[0]);
            for(let k = 0; k < Math.abs(step); k++){
                temp /= 10;
            }
            result += temp;
        } else if(step < 0){
            let temp = Number(piece[0]);
            for(let k = 0; k < Math.abs(step); k++){
                temp *= 10;
            }
            result += temp;
        } else{
            result += Number(piece[0]);
        }
        //console.log(result);
    }
    return (result + ' ' + unitWeight);
}
  
  console.log(convertWeight('1 ton +10 ons+2 kwintal', 'kg')) //1201 kg
  
  console.log(convertWeight('1 ton +10 ons+2 kwintal', 'g')) //1201000 g
  
  console.log(convertWeight('2 ton +500 kwintal+3 kg+350 ons', 'kg'))  //52038 kg
  