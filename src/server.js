"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
require("express-async-errors");
const routes_1 = __importDefault(require("./routes/routes"));
const handler_1 = __importDefault(require("./errors/handler"));
const app = express_1.default();
// Constants
const PORT = process.env.PORT || 8080;
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(routes_1.default);
app.use(express_1.default.static(__dirname + "/public"));
app.use('/uploads', express_1.default.static(path_1.default.join(__dirname, '..', 'uploads')));
app.use(handler_1.default);
app.listen(PORT);
console.log(`Server Is On`);
