const Common = require("./common");

class Member extends Common {
    constructor() {
        super();
        this.companyId = -1;
        this.memberId = -1;
        this.memberName = null;
        this.email = null;
        this.password = null;
        this.memberType = null;
        this.phone = null;
        this.roleCode = null;
        this.useStatus = null;
    }

    getCompanyId(){
        return companyId;
    }
    getMemberId(){
        return memberId;
    }
    getMemberName(){
        return memberName;
    }
    getEmail(){
        return email;
    }
    getPassword(){
        return password;
    }
    getMemberType(){
        return memberType;
    }
    getRoleCode(){
        return roleCode;
    }
    getPhone(){
        return phone;
    }
    getUseStatus(){
        return useStatus;
    }

    setCompanyId(companyId){
        this.companyId = companyId;
    }
    setMemberId(memberId){
        this.memberId = memberId;
    }
    setMemberName(memberName){
        this.memberName = memberName;
    }
    setEmail(email){
        this.email = email;
    }
    setPassword(password){
        this.password = password;
    }
    setMemberType(memberType){
        this.memberType = memberType;
    }
    setRoleCode(roleCode){
        this.roleCode = roleCode;
    }
    setPhone(phone){
        this.phone = phone;
    }
    setUseStatus(useStatus){
        this.useStatus = useStatus;
    }
}

module.exports = Member;
