/**
 * Immutable value objects used in the book
 * Author: Luis Atencio
 */
function coordinate(lat: number, long: number) {
    let _lat: number = lat;
    let _long: number = long;
    return {
        latitude: function() {
            return _lat;
        },
        longitude: function() {
            return _long;
        },
        translate: function(dx: number, dy: number) {
            return coordinate(_lat + dx, _long + dy);
        },
        toString: function() {
            return `(${_lat},${_long})`;
        }
    };
}

function zipCode(code: string, location: string = "") {
    let _code: string = code;
    let _location: string = location;
    return {
        code: function() {
            return code;
        },
        location: function() {
            return location;
        },
        fromString: function(str: string) {
            let parts = str.split("-");
            return zipCode(parts[0], parts[1]);
        },
        toString: function() {
            return _code + "-" + _location;
        }
    };
}

export default { coordinate, zipCode };
