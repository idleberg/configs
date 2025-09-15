{
  outputs = {
    self,
    nixpkgs,
    ...
  } @ inputs: {
    templates = {
      default = {
        path = ./nix/nodejs;
      };
    };
  };
}
