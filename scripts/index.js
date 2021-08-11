// scripts/index.js
async function main () {
    // Our code will go here
    
    // Retrieve accounts from the local node
    // Set up an ethers contract, representing our deployed Box instance
    const address = '0x5FbDB2315678afecb367f032d93F642f64180aa3'; // THIS ADDRESS IS TAKEN WHEN WE DEPLOYED THE CONTRACT FIRST
    const Box = await ethers.getContractFactory('Box');
    const box = await Box.attach(address);

    // Send a transaction to store() a new value in the Box
    await box.store(42)
    
    // Call the retrieve() function of the deployed Box contract
    const value = await box.retrieve();
    console.log('Box value is', value.toString());
}
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });