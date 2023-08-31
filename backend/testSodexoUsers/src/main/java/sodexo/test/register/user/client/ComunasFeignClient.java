package sodexo.test.register.user.client;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

import sodexo.test.register.user.client.configuration.ComunaResponse;

@FeignClient(name = "ComunasClient", url = "https://private-anon-53deb82188-gonzalobulnes.apiary-mock.com")
public interface ComunasFeignClient {
    @GetMapping("/comunas")
    List<ComunaResponse> getComunas();
}
