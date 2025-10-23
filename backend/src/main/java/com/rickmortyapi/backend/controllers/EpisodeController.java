package com.rickmortyapi.backend.controllers;

import com.rickmortyapi.backend.services.EpisodeService;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/episodes")
@CrossOrigin(origins = "*")
public class EpisodeController {

    private final EpisodeService service;

    public EpisodeController(EpisodeService service) {
        this.service = service;
    }

    @GetMapping
    public Object getAllEpisodes(@RequestParam(required = false) Integer page) {
        return service.getAllEpisodes(page);
    }

    @GetMapping("/{id}")
    public Object getEpisodeById(@PathVariable int id) {
        return service.getEpisodeById(id);
    }

    @GetMapping("/search/{name}")
    public Object getEpisodeByName(@PathVariable String name, @RequestParam(defaultValue = "1") int page) {
        return service.getEpisodeByName(name, page);
    }
}
