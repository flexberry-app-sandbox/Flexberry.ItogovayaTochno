import { Serializer as УправляющийОбъектSerializer } from
  '../mixins/regenerated/serializers/i-i-s-itogovaya-tochno-управляющий-объект';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(УправляющийОбъектSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
