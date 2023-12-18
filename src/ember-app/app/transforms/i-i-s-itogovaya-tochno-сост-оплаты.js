import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СостОплатыEnum from '../enums/i-i-s-itogovaya-tochno-сост-оплаты';

export default FlexberryEnum.extend({
  enum: СостОплатыEnum,
  sourceType: 'IIS.Itogovaya_tochno.СостОплаты'
});
