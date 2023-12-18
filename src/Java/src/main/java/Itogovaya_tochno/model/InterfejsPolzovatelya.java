package Itogovaya_tochno.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Itogovaya_tochno.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: ИнтерфейсПользователя
 */
@Entity(name = "IISItogovaya_tochnoИнтерфейсПользователя")
@Table(schema = "public", name = "ИнтерфейсПользователя")
public class InterfejsPolzovatelya {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;


    public InterfejsPolzovatelya() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }


}