import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СостОтгрузкиEnum from '../enums/i-i-s-itogovaya-tochno-сост-отгрузки';

export default FlexberryEnum.extend({
  enum: СостОтгрузкиEnum,
  sourceType: 'IIS.Itogovaya_tochno.СостОтгрузки'
});
