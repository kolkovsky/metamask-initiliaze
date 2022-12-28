export async function initMetamask() {
  if (window.ethereum) {
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts"});
    console.log(accounts[0]);
    return accounts[0];
  } else {
    alert("Please install metamask!");
  }
}