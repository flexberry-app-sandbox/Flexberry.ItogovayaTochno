import {
  defineNamespace,
  Model as ИнтерфейсПользователяMixin
} from '../mixins/regenerated/models/i-i-s-itogovaya-tochno-интерфейс-пользователя';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ИнтерфейсПользователяMixin, {
});

defineNamespace(Model);

export default Model;
