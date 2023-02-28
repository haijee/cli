#!/usr/bin/env node // 这个必须添加，指定 node 运行环境
"use strict";
var packageJson = require("../../package.json");
var Command = require('commander').Command;
var program = new Command();
console.log('haijee');
program
    .command("create <app-name>")
    .description("创建一个新项目")
    .option("-f,--force", "当前目录已经存在该文件将会被覆盖")
    .action(function () { });
program.version("@haijee/cli ".concat(packageJson.version)).usage("<command> [option]");
program.parse(process.argv);
