import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-itogovaya-tochno-т-ч-заказ', 'Unit | Model | i-i-s-itogovaya-tochno-т-ч-заказ', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-itogovaya-tochno-единицы-измер',
    'model:i-i-s-itogovaya-tochno-заказ-пост',
    'model:i-i-s-itogovaya-tochno-контрагенты',
    'model:i-i-s-itogovaya-tochno-менеджер',
    'model:i-i-s-itogovaya-tochno-номенклатура',
    'model:i-i-s-itogovaya-tochno-организации',
    'model:i-i-s-itogovaya-tochno-отчет-о-зак',
    'model:i-i-s-itogovaya-tochno-план-закупок',
    'model:i-i-s-itogovaya-tochno-план',
    'model:i-i-s-itogovaya-tochno-склады',
    'model:i-i-s-itogovaya-tochno-т-ч-заказ',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
