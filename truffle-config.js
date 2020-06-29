require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize frame street name rifle payment unknown inner arctic bubble general'; 
let testAccounts = [
"0xc0ada4e180dc3abc404dc49eadb281f9037bcb08fc3926ef6732d4f73b054651",
"0xd3585dd65d4e7fc1a08ea2d95089c529f49e130fb818b48e5a146e1f21d4c9d7",
"0x3576954c76fa38a384e28d28a03d524fd4158c99730aeba6961301a1ad7a8c45",
"0x3b6189d10b6979a24ced3fc81031ca20587b9eeb11d24043e5a421491ee200e3",
"0xebe177073171b87ef9972b7b116de27cb3a0c8de0e98b620a0752d6f8b41d749",
"0x434ec311e82fef31f4b642bd0c9b391f5e00fe62260078ea8e010b8b02d0bbb7",
"0x2112d9dedaf459d2afd8b49d5a0b53638dc445c7b5eb46afe57a91b1c43df0c3",
"0x5033e02aa3dccfc4dc4f616343ee2ca3672e4c2e208c7073d3d42a96b84e2b4b",
"0xdf3750ead2502cc3f7ee80c991ffe916ad20b28a80796acd70c2b287e5a7a7b2",
"0x6f24f120c8191f3ee3925e9fe66e80012dd09f013f6653fc3fa8540e6abcf927"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
