package Itogovaya_tochno.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Itogovaya_tochno.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Менеджер
 */
@Entity(name = "IISItogovaya_tochnoМенеджер")
@Table(schema = "public", name = "Менеджер")
public class Menedzher {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ФИО")
    private String фио;


    public Menedzher() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getФИО() {
      return фио;
    }

    public void setФИО(String фио) {
      this.фио = фио;
    }


}