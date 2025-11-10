{
  description = "Ready-made templates for easily creating flake-driven environments";

  inputs.nixpkgs.url = "https://flakehub.com/f/NixOS/nixpkgs/0.1";

  outputs = {self, ...} @ inputs: let
    supportedSystems = [
      "x86_64-linux"
      "aarch64-linux"
      "x86_64-darwin"
      "aarch64-darwin"
    ];
    forEachSupportedSystem = f:
      inputs.nixpkgs.lib.genAttrs supportedSystems (
        system:
          f {
            inherit system;
            pkgs = import inputs.nixpkgs {inherit system;};
          }
      );
  in
    {
      packages = forEachSupportedSystem (
        {pkgs, ...}: rec {
          default = devenv;
          devenv = pkgs.writeShellApplication {
            name = "development-environment";
            bashOptions = [
              "errexit"
              "pipefail"
            ];
            text = "echo 'Creating development environment...'";
          };
        }
      );
    }
    // {
      templates = rec {
        default = {
          path = ./nix/typescript;
        };
      };
    };
}
