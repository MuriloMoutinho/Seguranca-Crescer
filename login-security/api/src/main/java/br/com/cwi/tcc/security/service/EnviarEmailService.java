package br.com.cwi.tcc.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EnviarEmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void enviar(String emailEnviado, String assunto, String texto) {
        SimpleMailMessage email = new SimpleMailMessage();
        email.setSubject(assunto);
        email.setText(texto);
        email.setTo(emailEnviado);
        email.setFrom("ifframephoto@gmail.com");

        mailSender.send(email);
    }
}
