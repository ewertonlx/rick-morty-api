package com.rickmortyapi.backend.dto;

public record InfoDTO(
        Integer count,
        Integer pages,
        String next,
        String prev
) {}
