export default {
  singleQuote: true,
  trailingComma: "all",
  tabWidth: 2,
  semi: false,
  arrowParens: "always",
  importOrder: [
    "^@.*/(.*)$",
    "<THIRD_PARTY_MODULES>",
    "^(App|components|pages|store|utils|stories|models|store|constants|assets|_i18n)",
    "^[./].*(?<![.]css)$",
    "^[./].*(?<=[.]css)$",
  ],
  importOrderParserPlugins: [
    "typescript",
    "jsx",
    "classProperties",
    "decorators-legacy",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [require("prettier-plugin-tailwindcss")], // for some reason we have to explicitly add this
};