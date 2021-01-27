
const judgeThree = function(num: number) :string {
    if (isMultipleThree(num) || isContainThree(num)) {
        return getJapaneseThree(num);
    } else {
        return String(num);
    }
}

const isMultipleThree =  (num: number): boolean => num % 3 == 0 ? true: false;

const isContainThree = (num: number): boolean => String(num).includes("3") ? true: false;

// const isContainThree = function (num: number): boolean {
//     return String(num).includes("3") ? true: false;
// }

const getJapaneseThree = function(num: number) :string {
    let strNum = String(num);
    let convertNum : string = "";
    let keta = strNum.length;

    for (let i = 0; i < strNum.length; i ++){
        let splitNum = strNum[i];
        convertNum += convertJapaneseNum(splitNum, keta);
        keta--;
    }
    return convertNum;
}

const convertJapaneseNum = function(num: string, keta: number) : string {

    switch (num) {
        case "1": 
            keta == 2 ? num = "": num = "いち";
            break;
        case "2": 
            num = "に";
            break;
        case "3": 
            num = "さん";
            break;
        case "4": 
            num = "よん";
            break;
        case "5": 
            num = "ご";
            break;
        case "6": 
            num = "ろく";
            break;
        case "7": 
            num = "なな";
            break;
        case "8": 
            num = "はち";
            break;
        case "9": 
            num = "きゅう";
            break;
    }

    if (keta == 2) {
        num += "じゅう";
    }
    if (keta == 1) {
        num += "!!!";
    }
    
    return num;

}