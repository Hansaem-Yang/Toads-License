const companyDivs = {
    A:'조선사', 
    B:'설계회사', 
    1:'선사', 
    2:'선박관리화사', 
    M:'기가재기업', 
    P:'파트너사', 
    T:'토즈본사', 
    Z:'기타' 
};

const userTypes = {
    T:'Trial',
    R:'Release'
}

const devices = {
    P:'PC',
    M:'Mobile'
}

const monetaryUnits = {
    KRW:'원화',
    USD:'미화',
    CNY:'위안화',
    JPY:'엔화',
    EUR:'유로'
}

const contractServices = {
    M1:'Toads Marine',
    S1:'Toads S-Link Basic'
}

const contractDivs = {
    L:'License 계약',
    D:'ODM 계약',
    //A:'Agency 계약',
    S:'Subcription 계약'
}

const contractPeriods = {
    M1:'1개월', 
    M3:'3개월', 
    M6:'6개월', 
    Y1:'1년', 
    Y2:'2년', 
    Y3:'3년', 
}

const licenseTypes = {
    OL:'Official license',
    SL:'Service license'
}

const licenseDivs = {
    P:'Permanent License',
    A:'Annual License',
    M:'Monthly License'
}

const odmContractDivs = {
    O:'본계약',
    R:'갱신계약'
}

const payUnits = {
    S:'선박척당 요금 적용',
    T:'사용시간(시간) 요금 적용',
    M:'사용시간(분) 요금 적용',
    A:'일괄적용'
}   

const appNames = {
    TM:'Toads Marine',
    TS:'Toads S-Link'
}

const machinDivs = {
    M:'기장분야',
    D:'선실분야',
    E:'전장분야',
    T:'통신분야',
    Z:'기타'
}

const useStatus = {
    Y:'사용',
    N:'미사용'
}

const terminationTypes = {
    T1: '고객변심',
    T9: '기타'
}

const contractStatus = {
    0: '계약',
    1: '해지 신청',
    2: '신청 처리중',
    9: '해지 완료',
    C: '해지 취소'
}

const terminationStatus = {
    1: '해지 신청',
    2: '신청 처리중',
    9: '해지 완료',
    C: '해지 취소'
}

const managerAuths = {
    C1:'ODM 등록 권한',
    R1:'ODM 조회 권한',
    S1:'Super 권한'
}

const useYn = {
    Y:'Yes',
    N:'No'
}

const flatDivs = {
    F:'정액제',
    P:'종량제'
}

const odmDivs = {
    D:'ODM',
    N:'Normal Service'
}

const activeYn = {
    Y:'활성화',
    N:'비활성화'
}

const billBases = {
    T:'시간별 과금(분당)',
    D:'일별 과금',
    M:'월별 과금',
    Y:'연간 과금'
}

const contractCancelReason = {
    C1: "사용자 변심",
    C9: "기타"
}

const contractCancelStatus = {
    1: "해지신청",
    2: "해지접수",
    A: "해지승인",
    C: "해지취소"
}