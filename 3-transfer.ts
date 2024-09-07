import { 
    Connection, 
    PublicKey,
    Transaction,
    SystemProgram,
    sendAndConfirmTransaction,
    clusterApiUrl
 } from "@solana/web3.js";
 import "dotenv/config"
 import { getKeypairFromEnvironment } from "@solana-developers/node-helpers";

 const suppliedToPubkey = process.env.AnotherPublicKey

 const senderKeypair = getKeypairFromEnvironment("SECRET_KEY")
 const reciverKeyPair = getKeypairFromEnvironment("SECRET_KEY_2")

 const toPubkey = new PublicKey(suppliedToPubkey)

 const connection = new Connection(clusterApiUrl('devnet'))

 const transaction = new Transaction()

 const LAPORTS_TO_SEND = 100

 // check balance 
 const balance = await connection.getBalance(senderKeypair.publicKey)
 console.log("Balance : ", balance)

 // sol transfer instruction
 const sendSolInstruction = SystemProgram.transfer({
    fromPubkey : senderKeypair.publicKey,
    toPubkey,
    lamports : LAPORTS_TO_SEND
 })

 const sendSolInstruction_2 = SystemProgram.transfer({
    fromPubkey : reciverKeyPair.publicKey,
    toPubkey : senderKeypair.publicKey,
    lamports : LAPORTS_TO_SEND
 })

 transaction.add(sendSolInstruction)
 transaction.add(sendSolInstruction_2)

 const signature = await sendAndConfirmTransaction(
    connection,  // connection
    transaction,  // transaction
    [senderKeypair, reciverKeyPair] // array of accounts, first will pay for the tx
 )

 console.log(
    `Sent ${LAPORTS_TO_SEND} to the address ${toPubkey} from the address ${senderKeypair.publicKey}`
 )

 console.log(`Transaction signature is ${signature}!`);



