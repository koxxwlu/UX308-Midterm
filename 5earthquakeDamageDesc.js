function damageDesc(scale) {
    var value = "nil";

    if (scale < 5) {
        value = "Little or no damage";
    } else if (scale < 5.5) {
        value = "Some damage";
    } else if (scale < 6.5) {
        value = "Serious damage: walls may crack or fall";
    } else if (scale < 7.5) {
        value = "Disaster: buildings may collapse";
    } else if (scale >= 7.5) {
        value = "Catastrophe: most buildings destroyed";
    }

    return value;
}

export {damageDesc}