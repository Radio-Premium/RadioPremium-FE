module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "test",
        "chore",
        "rename",
        "remove",
      ],
    ],
    "subject-case": [0],
    "header-max-length": [2, "always", 72],
  },
};
