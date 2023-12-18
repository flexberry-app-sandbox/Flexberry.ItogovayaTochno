import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.автоматизация-закупок.caption'),
          title: i18n.t('forms.application.sitemap.автоматизация-закупок.title'),
          children: [{
            link: null,
            caption: i18n.t('forms.application.sitemap.автоматизация-закупок.справочник.caption'),
            title: i18n.t('forms.application.sitemap.автоматизация-закупок.справочник.title'),
            children: [{
              link: 'i-i-s-itogovaya-tochno-номенклатура-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.справочник.i-i-s-itogovaya-tochno-номенклатура-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.справочник.i-i-s-itogovaya-tochno-номенклатура-l.title'),
              icon: 'building',
              children: null
            }, {
              link: 'i-i-s-itogovaya-tochno-организации-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.справочник.i-i-s-itogovaya-tochno-организации-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.справочник.i-i-s-itogovaya-tochno-организации-l.title'),
              icon: 'file',
              children: null
            }, {
              link: 'i-i-s-itogovaya-tochno-контрагенты-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.справочник.i-i-s-itogovaya-tochno-контрагенты-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.справочник.i-i-s-itogovaya-tochno-контрагенты-l.title'),
              icon: 'list',
              children: null
            }, {
              link: 'i-i-s-itogovaya-tochno-склады-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.справочник.i-i-s-itogovaya-tochno-склады-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.справочник.i-i-s-itogovaya-tochno-склады-l.title'),
              icon: 'list',
              children: null
            }, {
              link: 'i-i-s-itogovaya-tochno-единицы-измер-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.справочник.i-i-s-itogovaya-tochno-единицы-измер-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.справочник.i-i-s-itogovaya-tochno-единицы-измер-l.title'),
              icon: 'calendar',
              children: null
            }, {
              link: 'i-i-s-itogovaya-tochno-менеджер-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.справочник.i-i-s-itogovaya-tochno-менеджер-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.справочник.i-i-s-itogovaya-tochno-менеджер-l.title'),
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.автоматизация-закупок.документы.caption'),
            title: i18n.t('forms.application.sitemap.автоматизация-закупок.документы.title'),
            children: [{
              link: 'i-i-s-itogovaya-tochno-заказ-пост-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.документы.i-i-s-itogovaya-tochno-заказ-пост-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.документы.i-i-s-itogovaya-tochno-заказ-пост-l.title'),
              icon: 'building',
              children: null
            }, {
              link: 'i-i-s-itogovaya-tochno-план-закупок-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.документы.i-i-s-itogovaya-tochno-план-закупок-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.документы.i-i-s-itogovaya-tochno-план-закупок-l.title'),
              icon: 'tasks',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.автоматизация-закупок.отчеты.caption'),
            title: i18n.t('forms.application.sitemap.автоматизация-закупок.отчеты.title'),
            children: [{
              link: 'i-i-s-itogovaya-tochno-отчет-о-зак-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.отчеты.i-i-s-itogovaya-tochno-отчет-о-зак-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.отчеты.i-i-s-itogovaya-tochno-отчет-о-зак-l.title'),
              icon: 'folder open',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})