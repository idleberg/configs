# @idleberg/configs

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
