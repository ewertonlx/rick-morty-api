package com.rickmortyapi.backend.dto;

import java.util.List;

public record ApiResponseDTO<T>(
        InfoDTO info,
        List<T> results
) {}
