package com.rickmortyapi.backend.controllers;

import com.rickmortyapi.backend.services.CharacterService;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/characters")
@CrossOrigin(origins = "*")
public class CharacterController {

    private final CharacterService service;

    public CharacterController(CharacterService service) {
        this.service = service;
    }

    @GetMapping
    public Object getAllCharacters(@RequestParam(required = false) Integer page) {
        return service.getAllCharacters(page);
    }

    @GetMapping("/{id}")
    public Object getCharacterById(@PathVariable int id) {
        return service.getCharacterById(id);
    }

    @GetMapping("/search/{name}")
    public Object getCharacterByName(@PathVariable String name, @RequestParam(defaultValue = "1") int page) {
        return service.getCharacterByName(name, page);
    }
}
