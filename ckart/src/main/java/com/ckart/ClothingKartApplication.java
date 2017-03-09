package com.ckart;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.web.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan
@EnableAutoConfiguration
public class ClothingKartApplication extends SpringBootServletInitializer {
	
	/**
	 * Configuration 
	 * @return source
	 */
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(ClothingKartApplication.class);
	}
	public static void main(String[] args) {
		SpringApplication.run(ClothingKartApplication.class, args);
	}
}
