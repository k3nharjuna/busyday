let moneyStocks = {
    100000: 1,
    50000: 2,
    20000: 4,
    10000: 5,
    5000: 5,
    1000: 10,
    500: 5
}

function getMoneyChange(money){
    let arrMoneyStocks = [];
    let count = 0;
    for(let key in moneyStocks){
      count++;
      let arrMoneyInside = [];
      arrMoneyInside.push(key, moneyStocks[key]);
      arrMoneyStocks.push(arrMoneyInside);
    }
    arrMoneyStocks.reverse();
/*------------------------------------------------------------------- */

    let output = {};
    let sisaMoney = money;
    for(let i = 0; i < arrMoneyStocks.length; i++){
        let pecahan = Number(arrMoneyStocks[i][0]);
        let ada = false;
        let xAda = 0;
        while(sisaMoney - pecahan >= 0 && arrMoneyStocks[i][1] > 0){
          ada = true;
          xAda++;
          sisaMoney -= pecahan;
          arrMoneyStocks[i][1]--;
        }
  
        if(ada === true){
          output[arrMoneyStocks[i][0]] = xAda;
        }
    }
    //console.log(sisaMoney, ' a')
    if(sisaMoney === 0){
        //console.log(output);
        console.log(money + ':');
        for(let key in output){
            console.log(key + ' ' + output[key] + ' lembar');
        }

        //console.log(arrMoneyStocks);
        for(let i = 0; i < arrMoneyStocks.length; i++){
            for(let key in moneyStocks){
                if(key === arrMoneyStocks[i][0]){
                    moneyStocks[key] = arrMoneyStocks[i][1];
                    //console.log(arrMoneyStocks[i][0], arrMoneyStocks[i][1], moneyStocks[key] );
                }
            }
        }
        console.log('Sisa Stock kembalian :');
        console.log(moneyStocks);
        
    } else{
        console.log(money + ': Maaf uang kembalian tidak cukup');
    }
}

getMoneyChange(190000);
getMoneyChange(190000);
getMoneyChange(30000);
