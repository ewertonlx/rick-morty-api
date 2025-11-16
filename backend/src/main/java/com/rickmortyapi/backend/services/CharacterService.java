package com.rickmortyapi.backend.services;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.rickmortyapi.backend.dto.ApiResponseDTO;
import com.rickmortyapi.backend.dto.CharacterDTO;

import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;

@Service
public class CharacterService {

    private final RestTemplate restTemplate = new RestTemplate();
    private final String BASE_URL = "https://rickandmortyapi.com/api/character";

    public ApiResponseDTO<CharacterDTO> getAllCharacters(Integer page) {
        String url = BASE_URL;

        if (page != null && page > 0) url += "?page=" + page;
        return restTemplate.exchange(
            url,
            HttpMethod.GET,
            null,
            new ParameterizedTypeReference<ApiResponseDTO<CharacterDTO>>() {}
        ).getBody();
    }

    public CharacterDTO getCharacterById(int id) {
        String url = BASE_URL + "/" + id;
        return restTemplate.getForObject(url, CharacterDTO.class);
    }

    public ApiResponseDTO<CharacterDTO> getCharacterByName(String name, int page) {
        String url = BASE_URL + "?name=" + name;

        if (page > 0) url += "&page=" + page;
        return restTemplate.exchange(
            url,
            HttpMethod.GET,
            null, 
            new ParameterizedTypeReference<ApiResponseDTO<CharacterDTO>>() {}
        ).getBody();
    }
}