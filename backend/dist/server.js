"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./setup");
const app_1 = require("./app");
const PORT = process.env.PORT || 4000;
app_1.default.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
//# sourceMappingURL=server.js.map