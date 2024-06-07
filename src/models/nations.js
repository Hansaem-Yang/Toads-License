class Nations {
    constructor() {
        this.nationIso2 = null;
        this.nationIso3 = null;
        this.nationEname = null;
        this.nationKname = null;
        this.nationCode = null;
    }

    getNationIso2(){
        return nationIso2;
    }
    getNationIso3(){
        return nationIso3;
    }
    getNationEname(){
        return nationEname;
    }
    getNationKname(){
        return nationKname;
    }
    getNationCode(){
        return nationCode;
    }

    setNationIso2(nationIso2){
        this.nationIso2 = nationIso2;
    }
    setNationIso3(nationIso3){
        this.nationIso3 = nationIso3;
    }
    setNationEname(nationEname){
        this.nationEname = nationEname;
    }
    setNationKname(nationKname){
        this.nationKname = nationKname;
    }
    setNationCode(nationCode){
        this.nationCode = nationCode;
    }
}

module.exports = Nations;
