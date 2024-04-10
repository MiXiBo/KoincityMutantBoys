import { Base58 } from "@koinos/sdk-as";

export namespace Constants {
  export const NAME: string = "Koincity Mutant Boys"
  export const SYMBOL: string = "KCMB";
  export const MINT_PRICE: u64 = 0;
  export const MINT_FEE: bool = false;
  export const MAX_SUPPLY: u64 = 47;
  export const URI: string = "https://bafybeih5dgfchv2tzq3x4tjty6bkfq7i2d2owoz3knwvvidcji6sbgjogu.ipfs.nftstorage.link/";
  export const OWNER: Uint8Array = Base58.decode("1B7qbYg5TuHULf2Q5LjHLUEMRR8ofCFUS2");

  // token mint
  export const TOKEN_PAY: Uint8Array = Base58.decode("");
  export const ADDRESS_PAY: Uint8Array = Base58.decode("");
}
