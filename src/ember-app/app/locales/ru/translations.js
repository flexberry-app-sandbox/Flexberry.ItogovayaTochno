import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISItogovaya_tochnoЕдиницыИзмерLForm from './forms/i-i-s-itogovaya-tochno-единицы-измер-l';
import IISItogovaya_tochnoЗаказПостLForm from './forms/i-i-s-itogovaya-tochno-заказ-пост-l';
import IISItogovaya_tochnoКонтрагентыLForm from './forms/i-i-s-itogovaya-tochno-контрагенты-l';
import IISItogovaya_tochnoМенеджерLForm from './forms/i-i-s-itogovaya-tochno-менеджер-l';
import IISItogovaya_tochnoНоменклатураLForm from './forms/i-i-s-itogovaya-tochno-номенклатура-l';
import IISItogovaya_tochnoОрганизацииLForm from './forms/i-i-s-itogovaya-tochno-организации-l';
import IISItogovaya_tochnoОтчетОЗакLForm from './forms/i-i-s-itogovaya-tochno-отчет-о-зак-l';
import IISItogovaya_tochnoПланЗакупокLForm from './forms/i-i-s-itogovaya-tochno-план-закупок-l';
import IISItogovaya_tochnoСкладыLForm from './forms/i-i-s-itogovaya-tochno-склады-l';
import IISItogovaya_tochnoЕдиницыИзмерEForm from './forms/i-i-s-itogovaya-tochno-единицы-измер-e';
import IISItogovaya_tochnoЗаказПостEForm from './forms/i-i-s-itogovaya-tochno-заказ-пост-e';
import IISItogovaya_tochnoКонтрагентыEForm from './forms/i-i-s-itogovaya-tochno-контрагенты-e';
import IISItogovaya_tochnoМенеджерEForm from './forms/i-i-s-itogovaya-tochno-менеджер-e';
import IISItogovaya_tochnoНоменклатураEForm from './forms/i-i-s-itogovaya-tochno-номенклатура-e';
import IISItogovaya_tochnoОрганизацииEForm from './forms/i-i-s-itogovaya-tochno-организации-e';
import IISItogovaya_tochnoОтчетОЗакEForm from './forms/i-i-s-itogovaya-tochno-отчет-о-зак-e';
import IISItogovaya_tochnoПланЗакупокEForm from './forms/i-i-s-itogovaya-tochno-план-закупок-e';
import IISItogovaya_tochnoСкладыEForm from './forms/i-i-s-itogovaya-tochno-склады-e';
import IISItogovaya_tochnoЕдиницыИзмерModel from './models/i-i-s-itogovaya-tochno-единицы-измер';
import IISItogovaya_tochnoЗаказПостModel from './models/i-i-s-itogovaya-tochno-заказ-пост';
import IISItogovaya_tochnoКонтрагентыModel from './models/i-i-s-itogovaya-tochno-контрагенты';
import IISItogovaya_tochnoМенеджерModel from './models/i-i-s-itogovaya-tochno-менеджер';
import IISItogovaya_tochnoНоменклатураModel from './models/i-i-s-itogovaya-tochno-номенклатура';
import IISItogovaya_tochnoОрганизацииModel from './models/i-i-s-itogovaya-tochno-организации';
import IISItogovaya_tochnoОтчетОЗакModel from './models/i-i-s-itogovaya-tochno-отчет-о-зак';
import IISItogovaya_tochnoПланЗакупокModel from './models/i-i-s-itogovaya-tochno-план-закупок';
import IISItogovaya_tochnoПланModel from './models/i-i-s-itogovaya-tochno-план';
import IISItogovaya_tochnoСкладыModel from './models/i-i-s-itogovaya-tochno-склады';
import IISItogovaya_tochnoТЧЗаказModel from './models/i-i-s-itogovaya-tochno-т-ч-заказ';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-itogovaya-tochno-единицы-измер': IISItogovaya_tochnoЕдиницыИзмерModel,
    'i-i-s-itogovaya-tochno-заказ-пост': IISItogovaya_tochnoЗаказПостModel,
    'i-i-s-itogovaya-tochno-контрагенты': IISItogovaya_tochnoКонтрагентыModel,
    'i-i-s-itogovaya-tochno-менеджер': IISItogovaya_tochnoМенеджерModel,
    'i-i-s-itogovaya-tochno-номенклатура': IISItogovaya_tochnoНоменклатураModel,
    'i-i-s-itogovaya-tochno-организации': IISItogovaya_tochnoОрганизацииModel,
    'i-i-s-itogovaya-tochno-отчет-о-зак': IISItogovaya_tochnoОтчетОЗакModel,
    'i-i-s-itogovaya-tochno-план-закупок': IISItogovaya_tochnoПланЗакупокModel,
    'i-i-s-itogovaya-tochno-план': IISItogovaya_tochnoПланModel,
    'i-i-s-itogovaya-tochno-склады': IISItogovaya_tochnoСкладыModel,
    'i-i-s-itogovaya-tochno-т-ч-заказ': IISItogovaya_tochnoТЧЗаказModel
  },

  'application-name': 'Avtomatizaciya_zakupok_gotovaya',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Avtomatizaciya_zakupok_gotovaya',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Avtomatizaciya_zakupok_gotovaya',
          title: 'Avtomatizaciya_zakupok_gotovaya'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'автоматизация-закупок': {
          caption: 'Автоматизация закупок',
          title: 'Автоматизация закупок',
          справочник: {
            caption: 'Справочник',
            title: 'Справочник',
            'i-i-s-itogovaya-tochno-номенклатура-l': {
              caption: 'Номенклатура',
              title: ''
            },
            'i-i-s-itogovaya-tochno-организации-l': {
              caption: 'Организации',
              title: ''
            },
            'i-i-s-itogovaya-tochno-контрагенты-l': {
              caption: 'Контрагенты',
              title: ''
            },
            'i-i-s-itogovaya-tochno-склады-l': {
              caption: 'Склады',
              title: ''
            },
            'i-i-s-itogovaya-tochno-единицы-измер-l': {
              caption: 'Единицы измерения',
              title: ''
            },
            'i-i-s-itogovaya-tochno-менеджер-l': {
              caption: 'Менеджер',
              title: ''
            }
          },
          документы: {
            caption: 'Документы',
            title: 'Документы',
            'i-i-s-itogovaya-tochno-заказ-пост-l': {
              caption: 'Заказ поставщику',
              title: ''
            },
            'i-i-s-itogovaya-tochno-план-закупок-l': {
              caption: 'План закупок',
              title: ''
            }
          },
          отчеты: {
            caption: 'Отчеты',
            title: 'Отчеты',
            'i-i-s-itogovaya-tochno-отчет-о-зак-l': {
              caption: 'Отчет о закупках',
              title: ''
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-itogovaya-tochno-единицы-измер-l': IISItogovaya_tochnoЕдиницыИзмерLForm,
    'i-i-s-itogovaya-tochno-заказ-пост-l': IISItogovaya_tochnoЗаказПостLForm,
    'i-i-s-itogovaya-tochno-контрагенты-l': IISItogovaya_tochnoКонтрагентыLForm,
    'i-i-s-itogovaya-tochno-менеджер-l': IISItogovaya_tochnoМенеджерLForm,
    'i-i-s-itogovaya-tochno-номенклатура-l': IISItogovaya_tochnoНоменклатураLForm,
    'i-i-s-itogovaya-tochno-организации-l': IISItogovaya_tochnoОрганизацииLForm,
    'i-i-s-itogovaya-tochno-отчет-о-зак-l': IISItogovaya_tochnoОтчетОЗакLForm,
    'i-i-s-itogovaya-tochno-план-закупок-l': IISItogovaya_tochnoПланЗакупокLForm,
    'i-i-s-itogovaya-tochno-склады-l': IISItogovaya_tochnoСкладыLForm,
    'i-i-s-itogovaya-tochno-единицы-измер-e': IISItogovaya_tochnoЕдиницыИзмерEForm,
    'i-i-s-itogovaya-tochno-заказ-пост-e': IISItogovaya_tochnoЗаказПостEForm,
    'i-i-s-itogovaya-tochno-контрагенты-e': IISItogovaya_tochnoКонтрагентыEForm,
    'i-i-s-itogovaya-tochno-менеджер-e': IISItogovaya_tochnoМенеджерEForm,
    'i-i-s-itogovaya-tochno-номенклатура-e': IISItogovaya_tochnoНоменклатураEForm,
    'i-i-s-itogovaya-tochno-организации-e': IISItogovaya_tochnoОрганизацииEForm,
    'i-i-s-itogovaya-tochno-отчет-о-зак-e': IISItogovaya_tochnoОтчетОЗакEForm,
    'i-i-s-itogovaya-tochno-план-закупок-e': IISItogovaya_tochnoПланЗакупокEForm,
    'i-i-s-itogovaya-tochno-склады-e': IISItogovaya_tochnoСкладыEForm
  },

});

export default translations;
