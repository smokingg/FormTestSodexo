package sodexo.test.register.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import sodexo.test.register.user.models.Registro;

public interface RegistroRepository extends JpaRepository<Registro, Long> {
}
