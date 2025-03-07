function coinValue(nickel, dime, quarter, loonie, toonie){
    let value = nickel*0.05 + dime*0.1 + quarter*0.25 + loonie*1 + toonie*2;
    return value;
}

export {coinValue}