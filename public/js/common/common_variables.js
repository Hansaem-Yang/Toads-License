const companyDiv = {
    A:'조선사', 
    B:'설계회사', 
    1:'선사', 
    2:'선박관리화사', 
    M:'기가재기업', 
    P:'파트너사', 
    T:'토즈본사', 
    Z:'기타' 
};

const userType = {
    T:'Trial',
    R:'Release'
}

const device = {
    P:'PC',
    M:'Mobile'
}

const montearyUnit = {
    KRW:'원화',
    USD:'미화',
    CNY:'위안화',
    JPY:'엔화',
    EUR:'유로'
}

const licenseType = {
    OL:'Official license',
    SL:'Service license'
}

const applicationName = {
    TM:'Toads Marine',
    TS:'Toads S-Link'
}

const machinDiv = {
    M:'기장분야',
    D:'선실분야',
    E:'전장분야',
    T:'통신분야',
    Z:'기타'
}

function GetCompanyDiv(code)
{
    return companyDiv[code];
}