import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-itogovaya-tochno-склады', 'Unit | Serializer | i-i-s-itogovaya-tochno-склады', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-itogovaya-tochno-склады',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-itogovaya-tochno-сост-оплаты',
    'transform:i-i-s-itogovaya-tochno-сост-отгрузки',

    'model:i-i-s-itogovaya-tochno-единицы-измер',
    'model:i-i-s-itogovaya-tochno-заказ-пост',
    'model:i-i-s-itogovaya-tochno-интерфейс-пользователя',
    'model:i-i-s-itogovaya-tochno-контрагенты',
    'model:i-i-s-itogovaya-tochno-менеджер',
    'model:i-i-s-itogovaya-tochno-номенклатура',
    'model:i-i-s-itogovaya-tochno-организации',
    'model:i-i-s-itogovaya-tochno-отчет-о-зак',
    'model:i-i-s-itogovaya-tochno-план-закупок',
    'model:i-i-s-itogovaya-tochno-план',
    'model:i-i-s-itogovaya-tochno-склады',
    'model:i-i-s-itogovaya-tochno-т-ч-заказ',
    'model:i-i-s-itogovaya-tochno-управляющий-объект',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
