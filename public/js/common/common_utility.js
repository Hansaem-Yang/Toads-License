function CreateNationsSelection(object, data, language) {
    object.append($('<option>', { 
        value:'', 
        text:'선택하세요.'
    }));

    $.each(data, function(index, option)
    {
        object.append($('<option>', { 
            value:option.code, 
            text:option.ename
        }));
    });
}

function CreateNationsCodeSelection(object, data, language) {
    object.append($('<option>', { 
        value:'', 
        text:'선택하세요.'
    }));

    $.each(data, function(index, option)
    {
        if (option.country === '' || option.country === null)
            return;

        object.append($('<option>', { 
            value: option.country, 
            text: `${option.ename} (+${option.country})`
        }));
    });
}

function CreateCompanysSelection(object, data) {
    object.append($('<option>', { 
        value:'', 
        text:'선택하세요.'
    }));

    $.each(data, function(index, option)
    {
        object.append($('<option>', { 
            value:option.code, 
            text:option.name
        }));
    });
}

function CreateVariablesSelection(object, data) {
    object.append($('<option>', { 
        value:'', 
        text:'선택하세요.'
    }));
    
    Object.keys(data).forEach(key => {
        object.append($('<option>', { 
            value:key, 
            text:data[key]
        }));
    });
}

function GetTelephone(nationCode, telephone) {
    var resultValue = '';
    if (nationCode === '') {
        resultValue = telephone;
    }
    else {
        telephone = telephone[0] === '0' ? telephone.substring(1) : telephone;
        resultValue = '+' + nationCode + '-' + telephone;
    }
    
    return resultValue;
}

function GetFormattedDate(date) {
    var year = date.getFullYear();
    var month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
    var day = String(date.getDate()).padStart(2, '0');
    
    // YYYY-MM-DD 형식으로 날짜 만들기
    return `${year}-${month}-${day}`;
}

function AddMonth(date, month) {
    date.setMonth(date.getMonth() + month);
    date.setDate(date.getDate() - 1);

    return GetFormattedDate(date);
}

function AddYear(date, year) {
    date.setFullYear(date.getFullYear() + year);
    date.setDate(date.getDate() - 1);

    return GetFormattedDate(date);
}

function PadString(str, targetLength) {
    return str.padEnd(targetLength, ' ');
}

function FormatCurrency(number) {
    number = number + '';

    let currency = number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return currency;
}

function ParseCurrency(currencyStr) {
    // 쉼표와 통화 기호를 제거하고 숫자로 변환
    let number = parseInt(currencyStr.replace(/[^0-9.-]+/g, ""));
    return number;
}