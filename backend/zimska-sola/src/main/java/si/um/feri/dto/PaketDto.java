package si.um.feri.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import si.um.feri.VrstaPaketa;

@JsonInclude(value = JsonInclude.Include.NON_NULL)
public record PaketDto(
        Long id,
        String naziv,
        VrstaPaketa vrsta,
        String opis,
        int cena
        ) { }