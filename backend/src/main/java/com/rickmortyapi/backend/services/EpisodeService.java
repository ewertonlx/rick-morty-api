package com.rickmortyapi.backend.services;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.ResponseEntity;

@Service
public class EpisodeService {

    private final RestTemplate restTemplate = new RestTemplate();
    private final String BASE_URL = "https://rickandmortyapi.com/api/episode";

    public Object getAllEpisodes(Integer page) {
        String url = BASE_URL;
        if (page != null && page > 0) {
            url += "?page=" + page;
        }

        ResponseEntity<Object> response = restTemplate.getForEntity(url, Object.class);
        return response.getBody();
    }

    public Object getEpisodeById(int id) {
        String url = BASE_URL + "/" + id;
        ResponseEntity<Object> response = restTemplate.getForEntity(url, Object.class);
        return response.getBody();
    }

    public Object getEpisodeByName(String name, int page) {
        String url = BASE_URL + "?name=" + name;
        if (page > 0) {
            url += "&page=" + page;
        }
        ResponseEntity<Object> response = restTemplate.getForEntity(url, Object.class);
        return response.getBody();
    }
}
