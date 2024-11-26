package controllers;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import models.User;
import services.UserService;

import java.io.IOException;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.Map;

public class UserController {
    private final UserService userService = new UserService();

    public void handleLogin(HttpExchange exchange) throws IOException {
        if ("POST".equals(exchange.getRequestMethod())) {
            String requestBody = new String(exchange.getRequestBody().readAllBytes());
            User user = parseUserFromJson(requestBody);
            boolean isAuthenticated = userService.authenticate(user);

            String response = toJson(Map.of("success", isAuthenticated));
            exchange.getResponseHeaders().add("Content-Type", "application/json");
            exchange.sendResponseHeaders(isAuthenticated ? 200 : 401, response.length());
            OutputStream os = exchange.getResponseBody();
            os.write(response.getBytes());
            os.close();
        } else {
            exchange.sendResponseHeaders(405, -1); // 405 Method Not Allowed
        }
    }

    public void handleRegister(HttpExchange exchange) throws IOException {
        if ("POST".equals(exchange.getRequestMethod())) {
            String requestBody = new String(exchange.getRequestBody().readAllBytes());
            User user = parseUserFromJson(requestBody);
            boolean isRegistered = userService.register(user);

            String response = toJson(Map.of("success", isRegistered));
            exchange.getResponseHeaders().add("Content-Type", "application/json");
            exchange.sendResponseHeaders(isRegistered ? 200 : 400, response.length());
            OutputStream os = exchange.getResponseBody();
            os.write(response.getBytes());
            os.close();
        } else {
            exchange.sendResponseHeaders(405, -1); // 405 Method Not Allowed
        }
    }

    public void handleLogout(HttpExchange exchange) throws IOException {
        if ("POST".equals(exchange.getRequestMethod())) {
            String response = toJson(Map.of("success", true));
            exchange.getResponseHeaders().add("Content-Type", "application/json");
            exchange.sendResponseHeaders(200, response.length());
            OutputStream os = exchange.getResponseBody();
            os.write(response.getBytes());
            os.close();
        } else {
            exchange.sendResponseHeaders(405, -1); // 405 Method Not Allowed
        }
    }

    private User parseUserFromJson(String json) {
        String[] parts = json.replace("{", "").replace("}", "").replace("\"", "").split(",");
        Map<String, String> userMap = new HashMap<>();
        for (String part : parts) {
            String[] keyValue = part.split(":");
            userMap.put(keyValue[0].trim(), keyValue[1].trim());
        }
        return new User(userMap.get("username"), userMap.get("password"));
    }

    private String toJson(Map<String, Object> map) {
        StringBuilder json = new StringBuilder("{");
        for (Map.Entry<String, Object> entry : map.entrySet()) {
            json.append("\"").append(entry.getKey()).append("\":\"").append(entry.getValue().toString()).append("\",");
        }
        if (json.length() > 1) json.deleteCharAt(json.length() - 1); // Rimuove l'ultima virgola
        json.append("}");
        return json.toString();
    }
}
