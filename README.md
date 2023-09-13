# bun-node-tty-error-reproduce

```sh
~/Desktop/test/bun-node-tty-error-reproduce  $ bun build --compile src/index.ts --outfile=dist
[0.03ms] ".env"
  [17ms]  bundle  4 modules
  [91ms] compile  dist
~/Desktop/test/bun-node-tty-error-reproduce  $ ./dist


error: FileNotFound reading "node:tty"

~/Desktop/test/bun-node-tty-error-reproduce  $
```

To install dependencies:

```bash
bun install
```

To run:

```bash
bun build --compile src/index.ts --outfile=dist
./dist
```

This project was created using `bun init` in bun v1.0.0. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
