package si.um.feri.vao;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import si.um.feri.VrstaPaketa;
import si.um.feri.dto.PaketDto;
import java.time.LocalDateTime;

@Entity
public class Paket {

    public Paket() {}

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String naziv;
    private VrstaPaketa vrsta;
    private String opis;
    private int cena;
    //private LocalDateTime sklenjen = LocalDateTime.now();

    public Paket(PaketDto dto) {
        this.naziv = dto.naziv();
        this.vrsta = dto.vrsta();
        this.opis = dto.opis();
        this.cena = dto.cena();
        //this.sklenjen = dto.sklenjen();
    }

    public void updateFrom(Paket updatedPaket) {
        if (updatedPaket.naziv != null) {
            this.naziv = updatedPaket.naziv;
        }
        if (updatedPaket.vrsta != null) {
            this.vrsta = updatedPaket.vrsta;
        }
        if (updatedPaket.opis != null) {
            this.opis = updatedPaket.opis;
        }
        if (updatedPaket.cena != 0) {
            this.cena = updatedPaket.cena;
        }
    }

    public PaketDto toDto() {
        return new PaketDto(id, naziv, vrsta, opis, cena);
    }
}

