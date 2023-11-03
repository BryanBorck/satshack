import {Request, Response} from "express";
import * as bitcoin from "bitcoinjs-lib";
import * as secp256k1 from '@bitcoinerlab/secp256k1';
import * as descriptors from '@bitcoinerlab/descriptors';
import { mnemonicToSeedSync } from 'bip39';
import connection from "../database";
const { pkhBIP32, wpkhBIP32 } = descriptors.scriptExpressions;
const { Output, BIP32 } = descriptors.DescriptorsFactory(secp256k1);

const network = bitcoin.networks.testnet;

export async function createBet(req: Request, res: Response) {
    try{
        
        const betId = req.body.bet_id;
        console.log("betId", betId);
        const publicKeyAccepter = req.body.public_key_accepter;
        const MNEMONIC = process.env.MNEMONIC;
        
        const query = await connection.query(`
            SELECT * FROM bets WHERE id = $1;
        `,[betId]);

        const bets = query.rows;
        if(bets.lenght == 0){
            return res.sendStatus(404);
        }

        console.log("bets", bets)

        const bet = bets[0];
        const publicKeyStarter = bet.public_key_starter;

        

        if(!publicKeyStarter || !publicKeyAccepter){
            return res.sendStatus(400);
        }

        const masterNode = BIP32.fromSeed(mnemonicToSeedSync(MNEMONIC), network);
        const segwitOutput = new Output({
            descriptor: wpkhBIP32({
                masterNode, network, account: 0, keyPath: '/0/0'
            }), 
            network
        });
        const path = `m/84/0/0/0/0`
        const pubKey = masterNode.derivePath(path).publicKey;
        console.log("pubKey", pubKey.toString("hex"));


        const p2ms = bitcoin.payments.p2ms({
            m:1, pubkeys: [
                Buffer.from(publicKeyStarter, "hex"),
                Buffer.from(publicKeyAccepter, "hex"),
                pubKey
            ], network});
        
        const witnessScript = p2ms.output.toString('hex');
        console.log("witnessScript", witnessScript);

        const p2wsh = bitcoin.payments.p2wsh({redeem: p2ms, network})

        const address = p2wsh.address;

        return res.status(200).send({
            address, 
            witness: witnessScript
        });



    } catch(err){
        console.log(err);
        return res.sendStatus(500);
    }
}

export async function startBet(req: Request, res: Response){
    try{
        const publicKey = req.body.public_key;
        const betTheme = req.body.theme_id;
        const value = parseInt(req.body.value);
        const odd = parseFloat(req.body.odd);
        const option  = req.body.option;

        const query = await connection.query(`
            INSERT INTO bets(
                public_key_starter, public_key_accepter, option, value, odd, theme, status
            ) VALUES(
                $1, $2, $3, $4, $5, $6, $7
            ) RETURNING *;
        `,[publicKey, null, option, value, odd, betTheme, "pending"]);

        return res.sendStatus(201);


    } catch(err){
        console.log(err);
        return res.sendStatus(500);
    }
}


export async function getBetsFromThemeId(req: Request, res: Response){
    try{
        const themeId = req.params.themeId;
        const query = await connection.query(`
            SELECT * FROM bets WHERE theme = $1 AND status = 'pending';
        `,[themeId]);
        const bets = query.rows;
        return res.status(200).send(bets);

    } catch(err){
        console.log(err);
        return res.sendStatus(500);
    }
}

export async function confirmPayment(req: Request, res: Response) {
    try{
        const betId = req.params.id;
        const accepter = req.body.public_key_accepter;
        await connection.query(`
            UPDATE bets SET status='confirmed', public_key_accepter=$1 WHERE id=$2;
        `,[accepter, parseInt(betId)]);
        console.log("betId", betId)
        
        return res.sendStatus(200);

    } catch(err){
        console.log(err);
        return res.sendStatus(500);
    }
}