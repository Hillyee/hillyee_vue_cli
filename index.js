#!/usr/bin/env node
const program = require("commander")

const helpOptions = require("./lib/core/help")
const createCommands = require('./lib/core/create')

// 定义显示模块的版本号
program.version(require("./package.json").version)

// 帮助可选信息
helpOptions()

// 创建其他指令
createCommands()

// 解析终端指令（一般写在后面）
program.parse(process.argv)
