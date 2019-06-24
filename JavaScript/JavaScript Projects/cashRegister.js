const REGISTER_STATUS = { closed: "CLOSED", insufficientfunds: "INSUFFICIENT_FUNDS", open: "OPEN" };

function getChange(price, cash, cid) {
    let register = {status: "", change: cid};
    const changeNeeded = parseFloat(cash - price).toFixed(2);
    const changeAvailable = totalInDrawer(cid);
    register.status = registerStatus(changeNeeded, changeAvailable);

    if (register.status === REGISTER_STATUS.insufficientfunds) {
        register.change = [];

        return register;
    } 

    register.change = customerChange(changeNeeded, cid);

    if (changeNeeded > registerStatus(register.change)) {
        register.status = REGISTER_STATUS.insufficientfunds;
        register.change = [];
    }
    
    if (register.status === REGISTER_STATUS.closed) {
        register.change = [...cid];
    }

    return register;
}

function customerChange(changeNeeded, cashInDrawer) {
    let change = [];
    const currencyDictionary = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.10,
        "QUARTER": 0.25,
        "ONE": 1.00,
        "FIVE": 5.00,
        "TEN": 10.00,
        "TWENTY": 20.00,
        "ONE HUNDRED": 100.00
    };

    for (let i = cashInDrawer.length - 1; i >= 0; i--) {
        const currencyName = cashInDrawer[i][0];
        const currencyTotal = cashInDrawer[i][1];
        const currencyValue = currencyDictionary[currencyName];
        let currencyAmount = (currencyTotal / currencyValue).toFixed(2);
        let cashToReturn = 0;

        while (changeNeeded >= currencyValue && currencyAmount > 0) {
            changeNeeded -= currencyValue;
            changeNeeded = changeNeeded.toFixed(2);
            currencyAmount--;
            cashToReturn++;
        }

        if (cashToReturn > 0) {
            change.push([currencyName, cashToReturn * currencyValue]);
        }
    }

    return change;
}

function registerStatus(changeNeeded, changeAvailable) {
    if (Number(changeNeeded) > Number(changeAvailable)) {
        return REGISTER_STATUS.insufficientfunds;
    } 
    if (Number(changeNeeded) < Number(changeAvailable)) {
        return REGISTER_STATUS.open;
    } 
    return REGISTER_STATUS.closed;
}

function totalInDrawer(cashInDrawer){
    let total = cashInDrawer.reduce((a, b) => a + b[1], 0);
    return total.toFixed(2);
}

console.log(getChange(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));