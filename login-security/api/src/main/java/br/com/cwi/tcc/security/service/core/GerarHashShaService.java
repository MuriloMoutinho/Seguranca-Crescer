package br.com.cwi.tcc.security.service.core;

import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

@Service
public class GerarHashShaService {

    public String gerar(String texto) {
        MessageDigest md = null;
        try {
            md = MessageDigest.getInstance( "MD5" );
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }

        md.update( texto.getBytes() );
        BigInteger hash = new BigInteger( 1, md.digest() );

        return hash.toString( 16 );
        }
    }

