const Common = require("./common");

class ShipCCTV extends Common {
    constructor() {
        super();
        this.contractNo = null;
        this.shipSeq = null;
        this.shipName = null;
        this.cctvNo = null;
        this.location = null;
        this.cctvUrl = null;
        this.uploadCycle = null;
    }

    getContractNo() {
        return contractNo;
    }
    getShipSeq() {
        return shipSeq;
    }
    getShipName() {
        return shipName;
    }
    getCctvNo() {
        return cctvNo;
    }
    getLocation() {
        return location;
    }
    getCctvUrl() {
        return cctvUrl;
    }
    getUploadCycle() {
        return uploadCycle;
    }

    setContractNo(contractNo) {
        this.contractNo = contractNo;
    }
    setShipSeq(shipSeq) {
        this.shipSeq = shipSeq;
    }
    setShipName(shipName) {
        this.shipName = shipName;
    }
    setCctvNo(cctvNo) {
        this.cctvNo = cctvNo;
    }
    setLocation(location) {
        this.location = location;
    }
    setCctvUrl(cctvUrl) {
        this.cctvUrl = cctvUrl;
    }
    setUploadCycle(uploadCycle) {
        this.uploadCycle = uploadCycle;
    }
}

module.exports = ShipCCTV;
