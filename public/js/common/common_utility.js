var CreateNationsSelection = function(object, data, language) {
    object.append($('<option>', { 
        value:'', 
        text:'선택하세요.'
    }));

    $.each(data, function(index, option)
    {
        if (language == 'KR') {
            object.append($('<option>', { 
                value:option.code, 
                text:option.kname
            }));
        } else {
            object.append($('<option>', { 
                value:option.code, 
                text:option.ename
            }));
        }
    });
};

var CreateCompanysSelection = function(object, data) {
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
};

var CreateVariablesSelection = function(object, data) {
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

var GetTelephone = function(nationCode, telephone) {
    var resultValue = '';
    if (nationCode === '') {
        resultValue = telephone;
    }
    else {
        telephone = telephone[0] === '0' ? telephone.substring(1) : telephone;
        resultValue = '+' + nationCode + '-' + telephone;
    }
    
    return resultValue;
};

var getFormattedDate = function(date) {
    var year = date.getFullYear();
    var month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
    var day = String(date.getDate()).padStart(2, '0');
    
    // YYYY-MM-DD 형식으로 날짜 만들기
    return `${year}-${month}-${day}`;
};

var AddMonth = function(date, month) {
    date.setMonth(date.getMonth() + month);
    date.setDate(date.getDate() - 1);

    return getFormattedDate(date);
};

var AddYear = function(date, year) {
    date.setFullYear(date.getFullYear() + year);
    date.setDate(date.getDate() - 1);

    return getFormattedDate(date);
};