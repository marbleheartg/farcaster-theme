import { $ } from "bun"
import chalk from "chalk"
import { watch } from "fs"

const dirToWatch = new URL("../src", import.meta.url)

console.log(chalk.cyan("👀 Watching for changes in src/..."))

watch(dirToWatch, { recursive: true }, async (_, filename) => {
  console.log(chalk.bold.yellow.dim(`Changes detected in ${filename}`))

  try {
    await $`bun run config/build.ts`
    console.log(chalk.bold.green("✔️ Build successful\n"))
  } catch (err) {
    console.error(chalk.red("❌ Build failed:"), err)
  }
})
