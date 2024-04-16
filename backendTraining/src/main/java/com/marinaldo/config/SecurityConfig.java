package com.marinaldo.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.marinaldo.filter.JwtAuthFilter;
import com.marinaldo.service.UserInfoUserDetailsService;


@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {

	@Autowired
	private JwtAuthFilter authFilter;
	
	@Bean
	public UserDetailsService userDetailsService() {
		
//		UserDetails admin1 = User.withUsername("Aaron")
//				.password(encoder.encode("Aaron2023!"))
//				.roles("ADMIN", "USER")
//				.build();
//		
//		UserDetails user2 = User.withUsername("John")
//				.password(encoder.encode("John2023!"))
//				.roles("USER", "ADMIN")
//				.build();
//		
//		return new InMemoryUserDetailsManager(admin1, user2);
		
		return new UserInfoUserDetailsService();
	}
	
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
       return http.csrf().disable()
               .authorizeHttpRequests()
               .requestMatchers("/api/v1/user/authenticate", "/api/v1/user/register", "/api/v1/academy/**", "/api/v1/trainee/**", "/api/v1/trainer/**", "/api/v1/exam/**", "/api/v1/orders/**", "/api/v1/course/**").permitAll()
               .and()
               .authorizeHttpRequests().requestMatchers("/api/v1/none").authenticated()
               .and()
               .sessionManagement()
               .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
               .and()
               .authenticationProvider(authenticationProvider())
               .addFilterBefore(authFilter, UsernamePasswordAuthenticationFilter.class)
               .build();
    }
    
   
    
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Bean
	public AuthenticationProvider authenticationProvider() {
		DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
		authenticationProvider.setUserDetailsService(userDetailsService());
		authenticationProvider.setPasswordEncoder(passwordEncoder());
		return authenticationProvider;
	}
	
	@Bean
	public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
		
		return config.getAuthenticationManager();
		
	}
	
	
	
}
