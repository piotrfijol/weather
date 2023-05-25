export const truncate = (text: string, length: number) => {
    return text.length > length ? text.slice(0, length) + "..." : text;
}

export const degToDirection = (deg: number) => {
    const directions = ["North", "North-East", "East", "South-East", "South", "South-West", "West", "North-West"];
    let shiftedDegrees = ((deg + (360/16)) % 360); 
    const result = shiftedDegrees / (360/8);

    return directions[Math.floor(result)];
}