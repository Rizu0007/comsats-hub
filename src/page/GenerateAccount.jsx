import { ethers } from 'ethers';

export default function GenerateAccount() {

    
    const handleGenerateAccount = () => {
    const wallet = ethers.Wallet.createRandom();
    const seedPhrase = wallet.mnemonic.phrase;
    const privateKey = wallet.privateKey;
    const address = wallet.address;

    console.log('Seed Phrase:', seedPhrase);
    console.log('Private Key:', privateKey);
    console.log('Address:', address);
  };

  return (
    <div>
      <button onClick={handleGenerateAccount} className='bg-black'>Generate Account</button>
    </div>
  );
}

