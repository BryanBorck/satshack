import {Request, Response} from 'express';
import * as secp256k1 from '@bitcoinerlab/secp256k1';
import * as descriptors from '@bitcoinerlab/descriptors';
import { mnemonicToSeedSync } from 'bip39';
import { Psbt, networks } from 'bitcoinjs-lib';
import { constrainedMemory } from 'process';
const { pkhBIP32, wpkhBIP32 } = descriptors.scriptExpressions;
const { Output, BIP32 } = descriptors.DescriptorsFactory(secp256k1);
const network = networks.testnet;
const EXPLORER = 'https://blockstream.info/testnet';
const FEE = 500;

export async function createBet(req: Request, res: Response) {
    try{

        const MNEMONIC = process.env.MNEMONIC;
        if(!MNEMONIC){
            return res.sendStatus(500);
        }

        console.log("network", network);

        const masterNode = BIP32.fromSeed(mnemonicToSeedSync(MNEMONIC), network);
        const segwitOutput = new Output({
            descriptor: wpkhBIP32({
                masterNode, network, account: 0, keyPath: '/0/0'
            }), 
            network
        });

        const segwitAddress = segwitOutput.getAddress();

        console.log("segwitAddress", segwitAddress);

        const path = `m/84/0/0/0/0`

        const pubKey = masterNode.derivePath(path).publicKey;


        return res.sendStatus(200);


    } catch(err){
        console.log(err);
        return res.sendStatus(500);
    }
}