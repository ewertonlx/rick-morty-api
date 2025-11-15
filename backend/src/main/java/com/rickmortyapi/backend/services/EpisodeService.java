package com.rickmortyapi.backend.services;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.rickmortyapi.backend.dto.ApiResponseDTO;
import com.rickmortyapi.backend.dto.EpisodeDTO;

import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;

@Service
public class EpisodeService {

    private final RestTemplate restTemplate = new RestTemplate();
    private final String BASE_URL = "https://rickandmortyapi.com/api/episode";

    public ApiResponseDTO<EpisodeDTO> getAllEpisodes(Integer page) {
        String url = BASE_URL;
        if (page != null && page > 0) {
            url += "?page=" + page;
        }

        return restTemplate.exchange(
                url,
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<ApiResponseDTO<EpisodeDTO>>() {}
        ).getBody();
    }

    public EpisodeDTO getEpisodeById(int id) {
        String url = BASE_URL + "/" + id;
        return restTemplate.getForObject(url, EpisodeDTO.class);
    }

    public ApiResponseDTO<EpisodeDTO> getEpisodeByName(String name, int page) {
        String url = BASE_URL + "?name=" + name;
        if (page > 0) {
            url += "&page=" + page;
        }
        return restTemplate.exchange(
                url,
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<ApiResponseDTO<EpisodeDTO>>() {}
        ).getBody();
    }
}
