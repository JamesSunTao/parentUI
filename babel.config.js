module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": [
          "> 1%",
          "not ie <= 1",
          "Chrome >= 39",
          "iOS >= 8",
          "android >= 5.0"
        ],
        "corejs": 3,
        "modules": false,
        "useBuiltIns": "usage"
      }
    ]
  ],
  "plugins": [
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-transform-runtime",
    "@babel/plugin-transform-modules-commonjs",
    "@babel/plugin-transform-object-assign",
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }]
  ]
}
