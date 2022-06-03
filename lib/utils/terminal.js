/* 
  执行终端命令相关的代码
*/

const { spawn } = require("child_process")

// npm install
const commandSpawn = (...args) => {
  return new Promise((resolve, reject) => {
    // childProcess进程中会有很多执行命令的过程中的打印信息
    const childProcess = spawn(...args)
    // 输出信息
    childProcess.stdout.pipe(process.stdout)
    childProcess.stderr.pipe(process.stderr)
    childProcess.on("close", () => {
      resolve()
    })
  })
}

module.exports = {
  commandSpawn
}