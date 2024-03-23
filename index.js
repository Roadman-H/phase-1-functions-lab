// Code your solution in this file
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
}

function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
}

function distanceTravelledInFeet(startBlock, endBlock) {
    const blocksTravelled = Math.abs(endBlock - startBlock);
    const feetPerBlock = 264;
    return blocksTravelled * feetPerBlock;
}

function calculatesFarePrice(start_block, destination_block){
    const distance = distanceTravelledInFeet(start_block, destination_block);
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        const fare = (distance - 400) * 0.02;
        return fare;
    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}
