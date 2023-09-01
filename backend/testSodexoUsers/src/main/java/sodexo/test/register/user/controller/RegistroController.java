package sodexo.test.register.user.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import sodexo.test.register.user.client.configuration.ComunaResponse;
import sodexo.test.register.user.exception.ErrorResponse;
import sodexo.test.register.user.models.Registro;
import sodexo.test.register.user.service.RegistroService;

@RestController
@RequestMapping("/registros")
@CrossOrigin(origins = "http://localhost:4200")
public class RegistroController {
    private final RegistroService registroService;

    @Autowired
    public RegistroController(RegistroService registroService) {
        this.registroService = registroService;
    }

    @GetMapping("/comunas")
    public List<ComunaResponse> getComunas() {
        return registroService.getAllComunas();
    }

    
    
    @PostMapping
    public ResponseEntity<?> saveRegistro(@RequestBody Registro registro) {
        List<ComunaResponse> comunasDisponibles = registroService.getAllComunas();
        String comunaRegistrada = registro.getComuna();

        boolean comunaExiste = comunasDisponibles.stream()
                .anyMatch(comuna -> comuna.getComuna().getName().equalsIgnoreCase(comunaRegistrada));

        if (!comunaExiste) {
            ErrorResponse errorResponse = new ErrorResponse();
            errorResponse.setMessage("La comuna especificada no existe.");
            errorResponse.setStatus(HttpStatus.NOT_FOUND.value());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
        }

        Registro registroGuardado = registroService.saveRegistro(registro);
        return ResponseEntity.status(HttpStatus.CREATED).body(registroGuardado);
    }
    
    @GetMapping("/listregistros")
    public List<Registro> listarRegistros() {
        return registroService.listarRegistros();
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<?> updateRegistro(@PathVariable Long id, @RequestBody Registro registro) {
        Registro registroActualizado = registroService.updateRegistro(id, registro);
        if (registroActualizado != null) {
        	 Map<String, String> response = new HashMap<>();
             response.put("mensaje", "Usuario con ID " + id + " modificado exitosamente.");
            return ResponseEntity.ok(registroActualizado);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, String>> deleteRegistro(@PathVariable Long id) {
        boolean eliminado = registroService.deleteRegistro(id);
        if (eliminado) {
            Map<String, String> response = new HashMap<>();
            response.put("mensaje", "Usuario con ID " + id + " eliminado exitosamente.");
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
   
}