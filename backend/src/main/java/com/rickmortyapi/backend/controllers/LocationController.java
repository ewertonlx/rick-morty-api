package com.rickmortyapi.backend.controllers;

import com.rickmortyapi.backend.dto.ApiResponseDTO;
import com.rickmortyapi.backend.dto.LocationDTO;
import com.rickmortyapi.backend.services.LocationService;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/locations")
@CrossOrigin(origins = "*")
public class LocationController {

    private final LocationService service;

    public LocationController(LocationService service) {
        this.service = service;
    }

    @GetMapping
    public ApiResponseDTO<LocationDTO> getAllLocations(@RequestParam(required = false) Integer page) {
        return service.getAllLocations(page);
    }

    @GetMapping("/{id}")
    public LocationDTO getLocationById(@PathVariable int id) {
        return service.getLocationById(id);
    }

    @GetMapping("/search/{name}")
    public ApiResponseDTO<LocationDTO> getLocationByName(@PathVariable String name, @RequestParam(defaultValue = "1") int page) {
        return service.getLocationByName(name, page);
    }
}
