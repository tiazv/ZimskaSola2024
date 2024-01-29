package si.um.feri.dao;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import io.quarkus.panache.common.Sort;
import jakarta.enterprise.context.ApplicationScoped;
import si.um.feri.vao.Paket;

import java.lang.reflect.Field;
import java.util.List;

@ApplicationScoped
public class PaketRepository implements PanacheRepository<Paket> {
/*
    public List<Paket> getAllPaketi() {
        return findAll(Sort.by("id")).list();
    }

    public Paket getPaketById(Long id) {
        return findById(id);
    }

    public void addPaket(Paket paket) {
        persist(paket);
    }

    public void updateFrom(Paket updatedPaket) {
        Class<?> clazz = this.getClass();
        Field[] fields = clazz.getDeclaredFields();

        for (Field field : fields) {
            field.setAccessible(true);
            try {
                Object updatedValue = field.get(updatedPaket);
                if (updatedValue != null) {
                    field.set(this, updatedValue);
                }
            } catch (IllegalAccessException e) {
                // Handle exception if needed
                e.printStackTrace();
            }
        }
    }

    public void deletePaket(Long id) {
        deleteById(id);
    }
 */
}
