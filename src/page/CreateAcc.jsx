import React from 'react'
import { ethers } from 'ethers';


export default function AccountCreate() {


    const createAccount=()=>{
        const wallet = ethers.Wallet.createRandom()
        const seedPhrase = wallet.mnemonic?.phrase
        const privateKey = wallet.privateKey
        const address = wallet.address

        console.log(seedPhrase)

    }
  return (
    <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={createAccount } >
          CReate account     
        </button>
    </div>
  )
}












// import React from 'react'
// import { GenerateAccount } from '../components/AccountCreate'

// export default function CreateAcc() {
//   async function createAccount() {
//     // Call the generateAccount function with no arguments
//     const result = await GenerateAccount();
//     console.log({result})

//     // Update the account state with the newly created account
//   }
    


//   return (
//     <div>
//       <button onClick={createAccount} className='bg-black'>hhhhhh</button>
//     </div>
//   )
// }
