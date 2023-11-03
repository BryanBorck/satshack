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
exports.getBetsFromThemeId = exports.startBet = exports.createBet = void 0;
const bitcoin = require("bitcoinjs-lib");
const secp256k1 = require("@bitcoinerlab/secp256k1");
const descriptors = require("@bitcoinerlab/descriptors");
const bip39_1 = require("bip39");
const database_1 = require("../database");
const { pkhBIP32, wpkhBIP32 } = descriptors.scriptExpressions;
const { Output, BIP32 } = descriptors.DescriptorsFactory(secp256k1);
const network = bitcoin.networks.testnet;
function createBet(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const betId = req.body.bet_id;
            const publicKeyAccepter = req.body.public_key_accepter;
            const MNEMONIC = process.env.MNEMONIC;
            const query = yield database_1.default.query(`
            SELECT * FROM bets WHERE id = $1;
        `, [betId]);
            const bets = query.rows;
            if (bets.lenght == 0) {
                return res.sendStatus(404);
            }
            const bet = bets[0];
            const publicKeyStarter = bet.public_key_starter;
            if (!publicKeyStarter || !publicKeyAccepter) {
                return res.sendStatus(400);
            }
            const masterNode = BIP32.fromSeed((0, bip39_1.mnemonicToSeedSync)(MNEMONIC), network);
            const segwitOutput = new Output({
                descriptor: wpkhBIP32({
                    masterNode, network, account: 0, keyPath: '/0/0'
                }),
                network
            });
            const path = `m/84/0/0/0/0`;
            const pubKey = masterNode.derivePath(path).publicKey;
            console.log("pubKey", pubKey.toString("hex"));
            const p2ms = bitcoin.payments.p2ms({
                m: 1, pubkeys: [
                    Buffer.from(publicKeyStarter, "hex"),
                    Buffer.from(publicKeyAccepter, "hex"),
                    pubKey
                ], network
            });
            const witnessScript = p2ms.output.toString('hex');
            console.log("witnessScript", witnessScript);
            const p2wsh = bitcoin.payments.p2wsh({ redeem: p2ms, network });
            const address = p2wsh.address;
            return res.status(200).send({
                address,
                witness: witnessScript
            });
        }
        catch (err) {
            console.log(err);
            return res.sendStatus(500);
        }
    });
}
exports.createBet = createBet;
function startBet(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const publicKey = req.body.public_key;
            const betTheme = req.body.theme_id;
            const value = parseInt(req.body.value);
            const odd = parseFloat(req.body.odd);
            const option = req.body.option;
            const query = yield database_1.default.query(`
            INSERT INTO bets(
                public_key_starter, public_key_accepter, option, value, odd, theme, status
            ) VALUES(
                $1, $2, $3, $4, $5, $6, $7
            ) RETURNING *;
        `, [publicKey, null, option, value, odd, betTheme, "pending"]);
            return res.sendStatus(201);
        }
        catch (err) {
            console.log(err);
            return res.sendStatus(500);
        }
    });
}
exports.startBet = startBet;
function getBetsFromThemeId(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const themeId = req.params.themeId;
            const query = yield database_1.default.query(`
            SELECT * FROM bets WHERE theme = $1;
        `, [themeId]);
            const bets = query.rows;
            return res.status(200).send(bets);
        }
        catch (err) {
            console.log(err);
            return res.sendStatus(500);
        }
    });
}
exports.getBetsFromThemeId = getBetsFromThemeId;
//# sourceMappingURL=bet.js.map