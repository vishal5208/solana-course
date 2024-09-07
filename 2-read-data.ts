import { Connection, PublicKey, clusterApiUrl, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { getKeypairFromEnvironment } from "@solana-developers/node-helpers";
import "dotenv/config";


console.log(`Devnet api : ${clusterApiUrl('devnet')}`)

const connection = new Connection(clusterApiUrl('devnet'))
console.log(`✅ Connected!`);

const address = new PublicKey("CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN")

const balance = await connection.getBalance(address)

console.log(`Balance of the account at ${address} is ${balance} lamports (${balance/LAMPORTS_PER_SOL} SOL)`)



// lab
const keypair = getKeypairFromEnvironment("SECRET_KEY")
const myAddress = new PublicKey(keypair.publicKey)
const balanceOfMyAccount = await connection.getBalance(myAddress)
console.log(`Balance of my account at ${myAddress} is ${balanceOfMyAccount} lamports (${balanceOfMyAccount/LAMPORTS_PER_SOL} SOL)`)




