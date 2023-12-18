import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаНачала: DS.attr('date', { defaultValue() { return new Date(); } }),
  датаОкончания: DS.attr('date'),
  номер: DS.attr('number'),
  состОтгрузки: DS.attr('i-i-s-itogovaya-tochno-сост-отгрузки'),
  состояниеОплаты: DS.attr('i-i-s-itogovaya-tochno-сост-оплаты'),
  суммаВклНДС: DS.attr('boolean'),
  суммаДокумента: DS.attr('number'),
  контрагенты: DS.belongsTo('i-i-s-itogovaya-tochno-контрагенты', { inverse: null, async: false }),
  менеджер: DS.belongsTo('i-i-s-itogovaya-tochno-менеджер', { inverse: null, async: false }),
  организации: DS.belongsTo('i-i-s-itogovaya-tochno-организации', { inverse: null, async: false }),
  склады: DS.belongsTo('i-i-s-itogovaya-tochno-склады', { inverse: null, async: false }),
  тЧЗаказ: DS.hasMany('i-i-s-itogovaya-tochno-т-ч-заказ', { inverse: 'отчетОЗак', async: false })
});

export let ValidationRules = {
  датаНачала: {
    descriptionKey: 'models.i-i-s-itogovaya-tochno-отчет-о-зак.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаОкончания: {
    descriptionKey: 'models.i-i-s-itogovaya-tochno-отчет-о-зак.validations.датаОкончания.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-itogovaya-tochno-отчет-о-зак.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  состОтгрузки: {
    descriptionKey: 'models.i-i-s-itogovaya-tochno-отчет-о-зак.validations.состОтгрузки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  состояниеОплаты: {
    descriptionKey: 'models.i-i-s-itogovaya-tochno-отчет-о-зак.validations.состояниеОплаты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  суммаВклНДС: {
    descriptionKey: 'models.i-i-s-itogovaya-tochno-отчет-о-зак.validations.суммаВклНДС.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  суммаДокумента: {
    descriptionKey: 'models.i-i-s-itogovaya-tochno-отчет-о-зак.validations.суммаДокумента.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  контрагенты: {
    descriptionKey: 'models.i-i-s-itogovaya-tochno-отчет-о-зак.validations.контрагенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  менеджер: {
    descriptionKey: 'models.i-i-s-itogovaya-tochno-отчет-о-зак.validations.менеджер.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организации: {
    descriptionKey: 'models.i-i-s-itogovaya-tochno-отчет-о-зак.validations.организации.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  склады: {
    descriptionKey: 'models.i-i-s-itogovaya-tochno-отчет-о-зак.validations.склады.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧЗаказ: {
    descriptionKey: 'models.i-i-s-itogovaya-tochno-отчет-о-зак.validations.тЧЗаказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтчетОЗакE', 'i-i-s-itogovaya-tochno-отчет-о-зак', {
    номер: attr('Номер', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    датаОкончания: attr('Дата окончания', { index: 2 }),
    менеджер: belongsTo('i-i-s-itogovaya-tochno-менеджер', 'Ответственный', {
      фИО: attr('Ответственный', { index: 4 })
    }, { index: 3 }),
    организации: belongsTo('i-i-s-itogovaya-tochno-организации', 'Организации', {
      организация: attr('Организация', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'организация' }),
    склады: belongsTo('i-i-s-itogovaya-tochno-склады', 'Склады', {
      склад: attr('Склад', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'склад' }),
    контрагенты: belongsTo('i-i-s-itogovaya-tochno-контрагенты', 'Контрагенты', {
      контрагент: attr('Контрагент', { index: 10, hidden: true })
    }, { index: 9, displayMemberPath: 'контрагент' }),
    состояниеОплаты: attr('Состояние оплаты', { index: 11 }),
    состОтгрузки: attr('Сост отгрузки', { index: 12 }),
    суммаВклНДС: attr('Сумма вкл НДС', { index: 13 }),
    суммаДокумента: attr('Сумма документа', { index: 14 }),
    тЧЗаказ: hasMany('i-i-s-itogovaya-tochno-т-ч-заказ', 'Заказ', {
      номенклатура: belongsTo('i-i-s-itogovaya-tochno-номенклатура', 'Номенклатура', {
        номенклатура: attr('Номенклатура', { index: 1, hidden: true }),
        единицыИзмер: belongsTo('i-i-s-itogovaya-tochno-единицы-измер', '', {
          единицаИзмер: attr('Единица измерения', { index: 2 })
        }, { index: -1, hidden: true })
      }, { index: 0, displayMemberPath: 'номенклатура' }),
      количество: attr('Количество', { index: 3 }),
      цена: attr('Цена', { index: 4 }),
      суммаНДС: attr('Сумма НДС', { index: 5 }),
      сумма: attr('Сумма', { index: 6 }),
      этоУслуга: attr('Это услуга', { index: 7 })
    })
  });

  modelClass.defineProjection('ОтчетОЗакL', 'i-i-s-itogovaya-tochno-отчет-о-зак', {
    датаОкончания: attr('Дата окончания', { index: 0 }),
    состояниеОплаты: attr('Состояние оплаты', { index: 1 }),
    состОтгрузки: attr('Сост отгрузки', { index: 2 }),
    суммаВклНДС: attr('Сумма вкл НДС', { index: 3 }),
    номер: attr('Номер', { index: 4 }),
    суммаДокумента: attr('Сумма документа', { index: 5 }),
    датаНачала: attr('Дата начала', { index: 6 }),
    склады: belongsTo('i-i-s-itogovaya-tochno-склады', 'Склад', {
      склад: attr('Склад', { index: 7 })
    }, { index: -1, hidden: true }),
    организации: belongsTo('i-i-s-itogovaya-tochno-организации', 'Организация', {
      организация: attr('Организация', { index: 8 })
    }, { index: -1, hidden: true }),
    контрагенты: belongsTo('i-i-s-itogovaya-tochno-контрагенты', 'Контрагент', {
      контрагент: attr('Контрагент', { index: 9 })
    }, { index: -1, hidden: true }),
    менеджер: belongsTo('i-i-s-itogovaya-tochno-менеджер', 'Ответственный', {

    }, { index: 10 })
  });
};
