const letters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const characters = letters + letters.toUpperCase() + numbers;

const len = 8;
let roomId = ''; 

module.exports = () => {
    for (let i = 0; i < len; i++) {
        roomId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return roomId;
};