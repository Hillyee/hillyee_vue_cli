const { promisify } = require("util")
const path = require("path")
const download = promisify(require("download-git-repo"))
const open = require('open')

const { vueRepo } = require("../config/repo-config")
const { commandSpawn } = require("../utils/terminal")
const { compile, writeToFile, createDirSync } = require("../utils/utils")

const createProjectAction = async (project) => {
  console.log("yee helps you create your project~")
  // 1.clone项目
  await download(vueRepo, project, { clone: true }, function (err) {
    console.log(err ? err : 'Success')
  })

  // 2.执行npm install
  const command = process.platform === "win32" ? "npm.cmd" : "npm"
  await commandSpawn(command, ["install"], { cwd: `./${project}` })

  // 3.执行npm run serve
  await commandSpawn(command, ["run", "serve"], { cwd: `./${project}`})

  // 4.打开浏览器
  open("http://localhost:8080/")

}

// 添加组件的actions
const addComponentAction = async (name, dest) => {
  // 1.编译ejs模板 拿到result
  const result = await compile("vue-component.ejs", { name, lowerName: name.toLowerCase()})
 
  // 2.写入文件的操作 dest: /src/component
  const targetPath = path.resolve(dest, `${name}.vue`)

  if (createDirSync(dest)) {
    writeToFile(targetPath, result).then(res => {
      console.log(`${name} Component created successfully!`);
    })
  }
}

// 添加页面和路由的actions
const addPageAndRouteAction = async (name, dest) => {
  // 1.编译ejs模板
  const data = { name, lowerName: name.toLowerCase()}
  const pageResult = await compile('vue-component.ejs', data)
  const routeResult = await compile('vue-router.ejs', data)

  // 2.写入文件
  const pageDest = dest.split('-')[0]
  const routerDest = dest.split('-')[1]

  const pageTargetDest = path.resolve(pageDest, name.toLowerCase())
  const routerTargetDest = path.resolve(routerDest, name.toLowerCase())

  if (createDirSync(pageTargetDest)) {
    const targetPath = path.resolve(pageTargetDest, `${name}.vue`)
    writeToFile(targetPath, pageResult).then(() => {
      console.log(`${name} Page created successfully!`);
    })
  }
  if (createDirSync(routerTargetDest)) {
    const targePath = path.resolve(routerTargetDest, `${name}.ts`)
    writeToFile(targePath, routeResult).then(() => {
      console.log(`${name} Router created successfully!`);
    })
  }
}

// 添加store
const addStoreAction = async (name, dest) => {
  // 编译ejs模板
  const typeName = name.slice(0, 1).toUpperCase() + name.slice(1)
  const data = { name, typeName}
  const storeResult = await compile('vue-store.ejs', data);
  const typesResult = await compile('vue-types.ejs', data);

  // 创建文件
  const targetDest = path.resolve(dest, name.toLowerCase())
  if (createDirSync(targetDest)) {
    const targetPagePath = path.resolve(targetDest, `${name}.ts`)
    const targetRoutePath = path.resolve(targetDest, 'types.ts')
    writeToFile(targetPagePath, storeResult).then(() => {
      console.log(`${name} Store created successfully!`);
    })
    writeToFile(targetRoutePath, typesResult)
  }
}

module.exports = {
  createProjectAction,
  addComponentAction,
  addPageAndRouteAction,
  addStoreAction
}
