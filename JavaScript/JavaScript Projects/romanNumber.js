function convertToRoman(num) {
    let arr = splitNum(num);
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 0:
                arr[i] = '';
                break;
            case 1:
                arr[i] = 'I';
                break;
            case 2:
                arr[i] = 'II';
                break;
            case 3:
                arr[i] = 'III';
                break;
            case 4:
                arr[i] = 'IV';
                break;
            case 5:
                arr[i] = 'V';
                break;
            case 6:
                arr[i] = 'VI';
                break;
            case 7:
                arr[i] = 'VII';
                break;                
            case 8:
                arr[i] = 'VIII';
                break;
            case 9:
                arr[i] = 'IX';
                break;
            case 10:
                arr[i] = 'X';
                break;
            case 20:
                arr[i] = 'XX';
                break;
            case 30:
                arr[i] = 'XXX';
                break;
            case 40:
                arr[i] = 'XL';
                break;
            case 50:
                arr[i] = 'L';
                break;
            case 60:
                arr[i] = 'LX';
                break;
            case 70:
                arr[i] = 'LXX';
                break;
            case 80:
                arr[i] = 'LXXX';
                break;                
            case 90:
                arr[i] = 'XC';
                break;
            case 100:
                arr[i] = 'C';
                break;
            case 200:
                arr[i] = 'CC';
                break;
            case 300:
                arr[i] = 'CCC';
                break;
            case 400:
                arr[i] = 'CD';
                break;
            case 500:
                arr[i] = 'D';
                break;
            case 600:
                arr[i] = 'DC';
                break;
            case 700:
                arr[i] = 'DCC';
                break;
            case 800:
                arr[i] = 'DCCC';
                break;
            case 900:
                arr[i] = 'CM';
                break;
            case 1000:
                arr[i] = 'M';
                break;
            case 2000:
                arr[i] = 'MM'
                break;
            case 3000:
                arr[i] = 'MMM'
                break;
            case 4000:
                arr[i] = 'MMMM';
                break;
            case 5000:
                arr[i] = 'MMMMM';
                break;
            case 6000:
                arr[i] = 'MMMMMM';
                break;
            case 7000:
                arr[i] = 'MMMMMMM';
                break;
            case 8000:
                arr[i] = 'MMMMMMMM'
                break;
            case 9000:
                arr[i] = 'MMMMMMMMM'
                break;
        }
    }
    return arr.join('');
}

console.log(convertToRoman(3956));

function length(number) {
    return number.toString().length;
}

function splitNum(num) {
    let arr = Array();
    if (length(num) === 4) {
        let firstnum = num % 10;
        let nextNum = num - firstnum;
        let secondnum = nextNum % 100;
        let nextNum2 = nextNum - secondnum;
        let thirdnum = nextNum2 % 1000;
        let nextNum3 = nextNum2 - thirdnum;
        arr.push(nextNum3, thirdnum, secondnum, firstnum);
    }
    return arr
}
console.log(splitNum(3923))

