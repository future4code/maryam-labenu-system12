"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var getAlunos_1 = __importDefault(require("./endpoints/getAlunos"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/alunos", getAlunos_1.default);
app.get("/", function (req, res) {
    res.send("Olá!");
});
var server = app.listen(process.env.PORT || 3003, function () {
    if (server) {
        var address = server.address();
        console.log("Server is running in http://localhost: ".concat(address.port));
    }
    else {
        console.error("Failure upon starting server.");
    }
});
