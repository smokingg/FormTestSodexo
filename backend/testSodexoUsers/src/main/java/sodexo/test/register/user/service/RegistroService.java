package sodexo.test.register.user.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import sodexo.test.register.user.client.ComunasFeignClient;
import sodexo.test.register.user.client.configuration.ComunaResponse;

import sodexo.test.register.user.models.Registro;
import sodexo.test.register.user.repository.RegistroRepository;

@Service
public class RegistroService {
    private final RegistroRepository registroRepository;
    private final ComunasFeignClient comunasFeignClient;

    public RegistroService(RegistroRepository registroRepository, ComunasFeignClient comunasFeignClient) {
        this.registroRepository = registroRepository;
        this.comunasFeignClient = comunasFeignClient;
    }

    public List<ComunaResponse> getAllComunas() {
        return comunasFeignClient.getComunas();
    }

    public Registro saveRegistro(Registro registro) {
        return registroRepository.save(registro);
    }
    
    public List<Registro> listarRegistros() {
        return registroRepository.findAll();
    }
    
    public Registro updateRegistro(Long id, Registro registroActualizado) {
        Optional<Registro> registroExistenteOptional = registroRepository.findById(id);

        if (registroExistenteOptional.isPresent()) {
            Registro registroExistente = registroExistenteOptional.get();
            registroExistente.setNombre(registroActualizado.getNombre());
            registroExistente.setApellido(registroActualizado.getApellido());
            registroExistente.setTelefono(registroActualizado.getTelefono());
            registroExistente.setComuna(registroActualizado.getComuna());

            return registroRepository.save(registroExistente);
        } else {
            return null; 
        }
    }
    
    public boolean deleteRegistro(Long id) {
        Optional<Registro> registroExistenteOptional = registroRepository.findById(id);

        if (registroExistenteOptional.isPresent()) {
            registroRepository.delete(registroExistenteOptional.get());
            return true;
        } else {
            return false; 
        }
    }
}