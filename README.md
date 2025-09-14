# @idleberg/configs

[![License](https://img.shields.io/github/license/idleberg/configs?color=blue&style=for-the-badge)](https://github.com/idleberg/configs/blob/main/LICENSE)
[![Version: npm](https://img.shields.io/npm/v/@idleberg/configs?style=for-the-badge)](https://www.npmjs.org/package/@idleberg/configs)

A collection of configuration files for my own projects.

## Configurations

### Biome

```jsonc
{
	"extends": ["@idleberg/configs/biome"]
}
```

### Lefthook

```toml
[[remotes]]
git_url = "https://github.com/idleberg/configs"
ref = "main"
configs = [ "lefthook/biome.toml", "lefthook/commitlint.toml" ]
```
