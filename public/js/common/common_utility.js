function createNationsSelection(object, data, language) {
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

function createNationsCodeSelection(object, data, language) {
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

function createCompanysSelection(object, data) {
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

function createVariablesSelection(object, data) {
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

function getTelephone(nationCode, telephone) {
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

function getFormattedDate(date) {
    var year = date.getFullYear();
    var month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
    var day = String(date.getDate()).padStart(2, '0');
    
    // YYYY-MM-DD 형식으로 날짜 만들기
    return `${year}-${month}-${day}`;
}

function addMonth(date, month) {
    date.setMonth(date.getMonth() + month);
    date.setDate(date.getDate() - 1);

    return getFormattedDate(date);
}

function addYear(date, year) {
    date.setFullYear(date.getFullYear() + year);
    date.setDate(date.getDate() - 1);

    return getFormattedDate(date);
}

function adString(str, targetLength) {
    return str.padEnd(targetLength, ' ');
}

function formatCurrency(number) {
    number = number + '';

    let currency = number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return currency;
}

function parseCurrency(currencyStr) {
    // 쉼표와 통화 기호를 제거하고 숫자로 변환
    let number = parseInt(currencyStr.replace(/[^0-9.-]+/g, ""));
    return number;
}

function isNumeric(input) {
    return /^[0-9]*$/.test(input);
}

function isCurrency(input) {
    // 숫자와 소수점, 쉼표로 이루어진 형식
    return /^\d{1,3}(,\d{3})*(\.\d+)?$/.test(input);
}