var isObject: (val: any) => boolean = val => val && typeof val === "object";

function deepFreeze(obj: any) {
    if (isObject(obj) && !Object.isFrozen(obj)) {
        Object.keys(obj).forEach(name => deepFreeze(obj[name]));
        Object.freeze(obj);
    }
    return obj;
}

export default deepFreeze;
