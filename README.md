# NextJS Starter

## Technology Stack

- [Yarn](https://yarnpkg.com)
- [NextJS](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [tailwindcss](https://tailwindcss.com)
- [Husky](https://github.com/typicode/husky)
- [Lint-staged](https://github.com/okonet/lint-staged)

## Notes

If the husky hooks does not work, delete files found under `.husky` folder and run these commands:

```sh
yarn husky add .husky/pre-commit
yarn husky add .husky/commit-msg
```

Fill the created files as follow:

**pre-commit**

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

yarn lint-staged
```

**commit-msg**

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

undefined
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

#!/bin/sh
if ! head -1 "$1" | grep -qE "^(feat|fix|chore|docs|test|style|refactor|perf|build|ci|revert)(\(.+?\))?: .{1,}$"; then
    echo "Aborting commit. Your commit message is invalid." >&2
    exit 1
fi
if ! head -1 "$1" | grep -qE "^.{1,88}$"; then
    echo "Aborting commit. Your commit message is too long." >&2
    exit 1
fi
```
