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
exports.AppErrorHandeller = void 0;
const AppErrorHandeller = (error, req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (error.status === 404) {
        return res.status(404).json({
            status: false,
            errors: { message: error.message }
        });
    }
    if (error.status === 400) {
        return res.status(400).json({
            status: false,
            errors: { message: "Bad request." }
        });
    }
    if (error.status === 401) {
        return res.status(401).json({
            status: false,
            errors: { message: "You have no permission." }
        });
    }
    return res.status(500).json({
        status: false,
        errors: { message: "Something going wrong." }
    });
});
exports.AppErrorHandeller = AppErrorHandeller;
