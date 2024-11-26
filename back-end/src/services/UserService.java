package services;

import models.User;

import java.util.HashMap;
import java.util.Map;

public class UserService {
    private final Map<String, String> userDatabase = new HashMap<>();

    public boolean authenticate(User user) {
        String username = user.getUsername();
        String password = user.getPassword();
        return userDatabase.containsKey(username) && userDatabase.get(username).equals(password);
    }

    public boolean register(User user) {
        String username = user.getUsername();
        if (userDatabase.containsKey(username)) {
            return false; // L'utente esiste già
        }
        userDatabase.put(username, user.getPassword());
        return true;
    }
}
