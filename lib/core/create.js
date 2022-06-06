const program = require("commander")

const {
  createProjectAction,
  addComponentAction,
  addPageAndRouteAction,
  addStoreAction
} = require("./actions")

// 定义一个创建指令的函数
const createCommands = () => {
  program
    .command("create <project> [others...]")
    .description("clone a repository into a folder")
    .action(createProjectAction)

  program
    .command("addcpn <name>")
    .description(
      "add vue component, 例如: yee addcpn HelloWorld [-d src/components]"
    )
    .action((name) => {
      // console.log(program.opts().dest);
      addComponentAction(name, program.opts().dest || "src/components")
    })

  program
    .command("addpage <page>")
    .description(
      "add vue page and router, 例如: yee addpage Home [-d src/pages-src/router]"
    )
    .action((page) => {
      addPageAndRouteAction(page, program.opts().dest || "src/pages-src/router")
    })

  program
    .command("addstore <store>")
    .description(
      "add vue page and router config, 例如: yee addpage Home [-d src/store]"
    )
    .action((store) => {
      addStoreAction(store, program.opts().dest || "src/store")
    })
}

module.exports = createCommands
