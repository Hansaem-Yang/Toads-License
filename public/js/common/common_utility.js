function createNationsSelection(object, data, selectText) {
    object.empty();
    object.append($('<option>', { 
        value:'', 
        text: selectText
    }));

    $.each(data, function(index, option)
    {
        object.append($('<option>', { 
            value:option.code, 
            text:option.ename
        }));
    });
}

function createNationsCodeSelection(object, data, selectText) {
    object.empty();
    object.append($('<option>', { 
        value:'', 
        text:selectText
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

function createSelection(object, data, selectText) {
    object.empty();
    object.append($('<option>', { 
        value:'', 
        text:selectText
    }));

    $.each(data, function(index, option)
    {
        object.append($('<option>', { 
            value:option.code, 
            text:option.name
        }));
    });
}

function createVariablesSelection(object, data, selectText) {
    object.empty();
    object.append($('<option>', { 
        value:'', 
        text:selectText
    }));
    
    Object.keys(data).forEach(key => {
        object.append($('<option>', { 
            value:key, 
            text:data[key]
        }));
    });
}

function clearSelection(object, selectText) {
    object.empty();
    object.append($('<option>', { 
        value:'', 
        text:selectText
    }));
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

function ConvertMinute(second) {
    return Math.ceil(second / 60);
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

function hiddenChildren() {
    $('.expanded').addClass('hidden');
    $('.expanded').removeClass('expanded');
}

function expandedChildren(element) {
    hiddenChildren();

    $(element).removeClass("hidden");
    $(element).addClass("expanded");
}

function viewHiddenChildren() {
    $('.view_expanded').addClass('hidden');
    $('.view_expanded').removeClass('view_expanded');
}

function viewExpandedChildren(element) {
    viewHiddenChildren();

    $(element).removeClass("hidden");
    $(element).addClass("view_expanded");
}

function getLast12Months() {
    const months = [];
    const today = new Date();
  
    for (let i = 0; i < 12; i++) {
        const date = new Date(today.getFullYear(), today.getMonth() - i, 1); // i개월 전의 날짜 계산
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 월을 2자리로 포맷팅
        months.push(`${year}-${month}`);
    }
  
    return months.reverse(); // 배열을 최근 날짜부터 오래된 순서로 정렬
}

function getLast15Days() {
    const days = [];
    const today = new Date();
  
    for (let i = 0; i < 15; i++) {
        const date = new Date();
        date.setDate(today.getDate() - i); // i일 전의 날짜 계산
        
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 월을 2자리로 포맷
        const day = date.getDate().toString().padStart(2, '0'); // 일을 2자리로 포맷

        days.push(`${month}-${day}`);
    }

    return days.reverse(); // 배열을 최근 날짜부터 오래된 순서로 정렬
}

function getRGBA(index, count, a) {
    let rgbCount = count / 3;
    rgbCount += count % 3 > 0 ? 1 : 0;

    let rgbValue = 255 / rgbCount;
    let rest = index % 3;
    let rgba = '';
    switch (rest) {
        case 1:
            rgba = `rgba(${0 + index * rgbValue}, ${100}, ${100}, ${a})`
            break;
        case 2:
            rgba = `rgba(${100}, ${0 + index * rgbValue}, ${100}, ${a})`
            break;
        case 3:
            rgba = `rgba(${100}, ${100}, ${0 + index * rgbValue}, ${a})`
            break;
    }

    return rgba;
}

function scrollTable() {
    let target = document.querySelector('.scrollable-tbody');
    if (target.scrollHeight > target.clientHeight) {
        $('.status-table').css('width', 'calc(100% - 17px)');
    }
}