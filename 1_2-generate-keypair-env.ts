import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/node-helpers";

const keypair = getKeypairFromEnvironment("SECRET_KEY");
 
console.log(
  `✅ Finished!  ${JSON.stringify(keypair, null, 2)}`,
);

