import { Serializer as ИнтерфейсПользователяSerializer } from
  '../mixins/regenerated/serializers/i-i-s-itogovaya-tochno-интерфейс-пользователя';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ИнтерфейсПользователяSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
