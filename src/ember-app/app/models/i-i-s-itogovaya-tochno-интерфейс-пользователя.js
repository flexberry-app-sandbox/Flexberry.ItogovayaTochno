import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as ИнтерфейсПользователяMixin
} from '../mixins/regenerated/models/i-i-s-itogovaya-tochno-интерфейс-пользователя';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ИнтерфейсПользователяMixin, Validations, {
});

export default Model;
