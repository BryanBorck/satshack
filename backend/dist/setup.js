"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const path = process.env.NODE_ENV === "test" ? ".env.test" : ".env";
dotenv.config({ path });
//# sourceMappingURL=setup.js.map