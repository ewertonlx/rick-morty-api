package com.rickmortyapi.backend.services;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.ResponseEntity;

@Service
public class CharacterService {

    private final RestTemplate restTemplate = new RestTemplate();
    private final String BASE_URL = "https://rickandmortyapi.com/api/character";

    public Object getAllCharacters(Integer page) {
        String url = BASE_URL;
        if (page != null && page > 0) {
            url += "?page=" + page;
        }

        ResponseEntity<Object> response = restTemplate.getForEntity(url, Object.class);
        return response.getBody();
    }

    public Object getCharacterById(int id) {
        String url = BASE_URL + "/" + id;
        ResponseEntity<Object> response = restTemplate.getForEntity(url, Object.class);
        return response.getBody();
    }

    public Object getCharacterByName(String name, int page) {
        String url = BASE_URL + "?name=" + name;
        if (page > 0) {
            url += "&page=" + page;
        }
        ResponseEntity<Object> response = restTemplate.getForEntity(url, Object.class);
        return response.getBody();
    }
}
