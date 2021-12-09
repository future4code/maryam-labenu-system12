"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Turma = exports.Docente = exports.Estudante = exports.User = exports.Especialidade = void 0;
var Especialidade;
(function (Especialidade) {
    Especialidade["JS"] = "Javascript";
    Especialidade["CSS"] = "CSS";
    Especialidade["REACT"] = "React";
    Especialidade["TYPESCRIPT"] = "Typescript";
    Especialidade["POO"] = "Programa\u00E7\u00E3o Orientada a Objetos";
})(Especialidade = exports.Especialidade || (exports.Especialidade = {}));
var User = /** @class */ (function () {
    function User(id, nome, email, data_nasc, turma_id) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.data_nasc = data_nasc;
        this.turma_id = turma_id;
    }
    return User;
}());
exports.User = User;
var Estudante = /** @class */ (function (_super) {
    __extends(Estudante, _super);
    function Estudante(id, nome, email, data_nasc, turma_id, hobbies) {
        var _this = _super.call(this, id, nome, email, data_nasc, turma_id) || this;
        _this.hobbies = hobbies;
        return _this;
    }
    return Estudante;
}(User));
exports.Estudante = Estudante;
var Docente = /** @class */ (function (_super) {
    __extends(Docente, _super);
    function Docente(id, nome, email, data_nasc, turma_id, especialidades) {
        var _this = _super.call(this, id, nome, email, data_nasc, turma_id) || this;
        _this.especialidades = especialidades;
        return _this;
    }
    return Docente;
}(User));
exports.Docente = Docente;
var Turma = /** @class */ (function () {
    function Turma(id, nome, docentes, estudantes, modulo) {
        this.id = id;
        this.nome = nome;
        this.docentes = docentes;
        this.estudantes = estudantes;
        this.modulo = modulo;
    }
    return Turma;
}());
exports.Turma = Turma;
