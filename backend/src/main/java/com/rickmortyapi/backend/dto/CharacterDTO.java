package com.rickmortyapi.backend.dto;

import java.util.List;

public record CharacterDTO(
        Integer id,
        String name,
        String status,
        String species,
        String type,
        String gender,
        LocationRefDTO origin,
        LocationRefDTO location,
        String image,
        List<String> episode,
        String url,
        String created
) {}