require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'gloom problem brown turtle chaos rare remind puppy just cloth equal general'; 
let testAccounts = [
"0xf568b008f4261f8c6de49822b6c26b4379ca7a334b74407ec7096c5ab479e84a",
"0x7bf8476952b19d9ab11d6e5c99003190b1f0bf3a154cb35821226b8603440f0e",
"0x3b06ce936fc106b1e48967ee6adffa88e296307456c1d07a6d021cf3f7de0dfe",
"0x6417a5fb5d097547ffd99c889dc8a6ca76db0063e8360ad8184f72d2a7c80b11",
"0xa1599771dcc58c6ed50f3d0d936e017c4f1a59fe41c375ed6e25319884a41c6b",
"0x1242411cbb8f488d61c8e30310a6aa195cb524c67dd99c8c79d827bdbeaa0105",
"0x3f2fc1030e1dca95240f3caa6c539b20d45d18b32960b3ee934e3e5522fe9e2b",
"0x2e56f32ffe5c86091bdbde12d397a7dc19a2680cb4bc7aaec0cce16388889235",
"0xa68e706d24bdef94c32b3dcb025d064a0db23fcb4496e303dbb1a831ae41bd43",
"0x0a6b81858d40e2b036adfb5dcb97b40203b0c3b569853103ff25d526e2c9b183"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

