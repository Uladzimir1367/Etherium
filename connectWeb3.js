const Web3 = require('web3');

// Создаем новый экземпляр Web3 с использованием HttpProvider
const web3 = new Web3(new Web3.providers.HttpProvider('https://sepolia.infura.io/v3/b42ce354d8624c49b38f44e4f81674c3'));

web3.eth.net.isListening()
    .then(() => console.log('Successfully connected to Infura'))
    .catch(e => console.error('Error:', e));


var createAccounts = function () {
   var aliceKeys = web3.eth.accounts.create();
   console.log(aliceKeys);
   var bobKeys = web3.eth.accounts.create();
   console.log(bobKeys);
};

createAccounts();