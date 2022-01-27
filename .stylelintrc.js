module.exports = {
  root: true,
  extends: '@bfehub/stylelint-config-basic',
  rules: {
    'no-empty-source': null,
    'named-grid-areas-no-invalid': null,
    'unicode-bom': 'never',
    'no-descending-specificity': null,
    'selector-class-pattern': null,
    'font-family-no-missing-generic-family-keyword': null,
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'at-rule-no-unknown': null,
  },
}
