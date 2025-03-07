function heightToVolume(height){
    let value = height * height * height;
    return `${value}m (sqr)`;
}

export {heightToVolume}