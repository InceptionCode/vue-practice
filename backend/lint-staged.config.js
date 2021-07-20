// eslint-disable-next-line no-undef
module.exports = {
  '*.js': ['yarn lint:eslint', 'yarn lint:prettier', 'yarn test:unit:file'],
  '*.ts': ['yarn lint:eslint', 'yarn lint:prettier', 'yarn test:unit:file'],
  'package.json': ['yarn lint:prettier'],
}
