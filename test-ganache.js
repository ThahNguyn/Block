const Web3 = require("web3");
const web3 = new Web3("http://127.0.0.1:7545");

web3.eth.getAccounts()
  .then(accounts => {
    console.log("Kết nối thành công! Danh sách tài khoản:", accounts);
  })
  .catch(error => {
    console.error("Lỗi kết nối với Ganache:", error);
  });
