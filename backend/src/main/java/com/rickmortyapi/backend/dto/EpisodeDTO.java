package com.rickmortyapi.backend.dto;

import java.util.List;

public record EpisodeDTO(
        Integer id,
        String name,
        String air_date,
        String episode,
        List<String> characters,
        String url,
        String created
) {}
