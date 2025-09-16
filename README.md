# @idleberg/configs

[![License](https://img.shields.io/github/license/idleberg/configs?color=blue&style=for-the-badge)](https://github.com/idleberg/configs/blob/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@idleberg/configs?style=for-the-badge)](https://www.npmjs.org/package/@idleberg/configs)
[![CI](https://img.shields.io/github/actions/workflow/status/idleberg/configs/ci.yml?logo=nodedotjs&logoColor=white&style=for-the-badge)](https://github.com/idleberg/configs/actions/workflows/ci.yml)

A collection of configuration files for my own projects.

## Configurations

### biome

```jsonc
{
	"extends": ["@idleberg/configs/biome"]
}
```

Requires `public-hoist-pattern[]=*@biomejs/biome*` in your `.npmrc` file.

### lefthook

```toml
[[remotes]]
git_url = "https://github.com/idleberg/configs"
ref = "main"
configs = [ "lefthook/biome.toml", "lefthook/commitlint.toml" ]
```

Requires `public-hoist-pattern[]=*lefthook*` in your `.npmrc` file.

### nix

To add the Nix flake to an existing project, run the following command:

```sh
nix flake init --template "github:idleberg/configs"
```

To launch the development shell, run `nix develop`.

### tsc

```json
{
	"extends": "@idleberg/configs/tsc"
}
```
