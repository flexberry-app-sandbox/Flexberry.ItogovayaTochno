package Itogovaya_tochno.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Itogovaya_tochno.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Организации
 */
@Entity(name = "IISItogovaya_tochnoОрганизации")
@Table(schema = "public", name = "Организации")
public class Organizacii {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Организация")
    private String организация;


    public Organizacii() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getОрганизация() {
      return организация;
    }

    public void setОрганизация(String организация) {
      this.организация = организация;
    }


}