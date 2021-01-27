var judgeThree = function (num) {
    if (isMultipleThree(num) || isContainThree(num)) {
        return getJapaneseThree(num);
    }
    else {
        return String(num);
    }
};
var isContainThree = function (num) {
    var strNum = String(num);
    if (strNum.includes("3")) {
        return true;
    }
    return false;
};
var isMultipleThree = function (num) {
    return num % 3 == 0 ? true : false;
};
var getJapaneseThree = function (num) {
    var strNum = String(num);
    var convertNum = "";
    var keta = strNum.length;
    for (var i = 0; i < strNum.length; i++) {
        var splitNum = strNum[i];
        convertNum += convertJapaneseNum(splitNum, keta);
        keta--;
    }
    return convertNum;
};
var convertJapaneseNum = function (num, keta) {
    switch (num) {
        case "1":
            keta == 2 ? num = "" : num = "いち";
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
};
