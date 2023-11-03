"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBet = void 0;
const secp256k1 = require("@bitcoinerlab/secp256k1");
const descriptors = require("@bitcoinerlab/descriptors");
const bip39_1 = require("bip39");
const bitcoinjs_lib_1 = require("bitcoinjs-lib");
const { pkhBIP32, wpkhBIP32 } = descriptors.scriptExpressions;
const { Output, BIP32 } = descriptors.DescriptorsFactory(secp256k1);
const network = bitcoinjs_lib_1.networks.testnet;
const EXPLORER = 'https://blockstream.info/testnet';
const FEE = 500;
function createBet(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const MNEMONIC = process.env.MNEMONIC;
            if (!MNEMONIC) {
                return res.sendStatus(500);
            }
            console.log("network", network);
            const masterNode = BIP32.fromSeed((0, bip39_1.mnemonicToSeedSync)(MNEMONIC), network);
            const segwitOutput = new Output({
                descriptor: wpkhBIP32({
                    masterNode, network, account: 0, keyPath: '/0/0'
                }),
                network
            });
            const segwitAddress = segwitOutput.getAddress();
            console.log("segwitAddress", segwitAddress);
            const path = `m/84/0/0/0/0`;
            const pubKey = masterNode.derivePath(path).publicKey;
            return res.sendStatus(200);
        }
        catch (err) {
            console.log(err);
            return res.sendStatus(500);
        }
    });
}
exports.createBet = createBet;
//# sourceMappingURL=bet.js.map