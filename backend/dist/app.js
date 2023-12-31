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
const express = require("express");
const cors = require("cors");
const bet_1 = require("./controllers/bet");
const theme_1 = require("./controllers/theme");
const app = express();
app.use(cors());
app.use(express.json());
app.post("/bet/:id/confirm", (req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, bet_1.confirmPayment)(req, res); }));
app.post("/bet/:id/finish", (req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, bet_1.finishBet)(req, res); }));
app.post("/bet/start", (req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, bet_1.startBet)(req, res); }));
app.post("/bet/accept", (req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, bet_1.createBet)(req, res); }));
app.get("/bets/:themeId", (req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, bet_1.getBetsFromThemeId)(req, res); }));
app.get("/bets/user/:publicKey", (req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, bet_1.getUsersBets)(req, res); }));
app.get("/themes", (req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, theme_1.getThemes)(req, res); }));
app.post("/theme", (req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, theme_1.createTheme)(req, res); }));
exports.default = app;
//# sourceMappingURL=app.js.map