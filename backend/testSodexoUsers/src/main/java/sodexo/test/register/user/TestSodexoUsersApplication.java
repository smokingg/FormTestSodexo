package sodexo.test.register.user;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class TestSodexoUsersApplication {

	public static void main(String[] args) {
		SpringApplication.run(TestSodexoUsersApplication.class, args);
	}

}
