import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-itogovaya-tochno-единицы-измер-l');
  this.route('i-i-s-itogovaya-tochno-единицы-измер-e',
  { path: 'i-i-s-itogovaya-tochno-единицы-измер-e/:id' });
  this.route('i-i-s-itogovaya-tochno-единицы-измер-e.new',
  { path: 'i-i-s-itogovaya-tochno-единицы-измер-e/new' });
  this.route('i-i-s-itogovaya-tochno-заказ-пост-l');
  this.route('i-i-s-itogovaya-tochno-заказ-пост-e',
  { path: 'i-i-s-itogovaya-tochno-заказ-пост-e/:id' });
  this.route('i-i-s-itogovaya-tochno-заказ-пост-e.new',
  { path: 'i-i-s-itogovaya-tochno-заказ-пост-e/new' });
  this.route('i-i-s-itogovaya-tochno-контрагенты-l');
  this.route('i-i-s-itogovaya-tochno-контрагенты-e',
  { path: 'i-i-s-itogovaya-tochno-контрагенты-e/:id' });
  this.route('i-i-s-itogovaya-tochno-контрагенты-e.new',
  { path: 'i-i-s-itogovaya-tochno-контрагенты-e/new' });
  this.route('i-i-s-itogovaya-tochno-менеджер-l');
  this.route('i-i-s-itogovaya-tochno-менеджер-e',
  { path: 'i-i-s-itogovaya-tochno-менеджер-e/:id' });
  this.route('i-i-s-itogovaya-tochno-менеджер-e.new',
  { path: 'i-i-s-itogovaya-tochno-менеджер-e/new' });
  this.route('i-i-s-itogovaya-tochno-номенклатура-l');
  this.route('i-i-s-itogovaya-tochno-номенклатура-e',
  { path: 'i-i-s-itogovaya-tochno-номенклатура-e/:id' });
  this.route('i-i-s-itogovaya-tochno-номенклатура-e.new',
  { path: 'i-i-s-itogovaya-tochno-номенклатура-e/new' });
  this.route('i-i-s-itogovaya-tochno-организации-l');
  this.route('i-i-s-itogovaya-tochno-организации-e',
  { path: 'i-i-s-itogovaya-tochno-организации-e/:id' });
  this.route('i-i-s-itogovaya-tochno-организации-e.new',
  { path: 'i-i-s-itogovaya-tochno-организации-e/new' });
  this.route('i-i-s-itogovaya-tochno-отчет-о-зак-l');
  this.route('i-i-s-itogovaya-tochno-отчет-о-зак-e',
  { path: 'i-i-s-itogovaya-tochno-отчет-о-зак-e/:id' });
  this.route('i-i-s-itogovaya-tochno-отчет-о-зак-e.new',
  { path: 'i-i-s-itogovaya-tochno-отчет-о-зак-e/new' });
  this.route('i-i-s-itogovaya-tochno-план-закупок-l');
  this.route('i-i-s-itogovaya-tochno-план-закупок-e',
  { path: 'i-i-s-itogovaya-tochno-план-закупок-e/:id' });
  this.route('i-i-s-itogovaya-tochno-план-закупок-e.new',
  { path: 'i-i-s-itogovaya-tochno-план-закупок-e/new' });
  this.route('i-i-s-itogovaya-tochno-склады-l');
  this.route('i-i-s-itogovaya-tochno-склады-e',
  { path: 'i-i-s-itogovaya-tochno-склады-e/:id' });
  this.route('i-i-s-itogovaya-tochno-склады-e.new',
  { path: 'i-i-s-itogovaya-tochno-склады-e/new' });
});

export default Router;
