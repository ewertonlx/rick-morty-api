package com.rickmortyapi.backend.dto;

import java.util.List;

public record LocationDTO(
        Integer id,
        String name,
        String type,
        String dimension,
        List<String> residents,
        String url,
        String created
) {}
