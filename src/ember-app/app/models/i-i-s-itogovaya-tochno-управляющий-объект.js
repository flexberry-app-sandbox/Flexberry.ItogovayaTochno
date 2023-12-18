import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as УправляющийОбъектMixin
} from '../mixins/regenerated/models/i-i-s-itogovaya-tochno-управляющий-объект';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(УправляющийОбъектMixin, Validations, {
});

export default Model;
