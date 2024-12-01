import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;
import controllers.UserController;

import java.io.IOException;
import java.net.InetSocketAddress;

public class App {
    public static void main(String[] args) throws IOException {
        // Recupera la porta da variabile d'ambiente o usa una porta di default (8000) se non impostata
        String portEnv = System.getenv("PORT");
        int port = (portEnv != null && !portEnv.isEmpty()) ? Integer.parseInt(portEnv) : 8000;

        // Crea il server HTTP sulla porta specificata
        HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);
        UserController userController = new UserController();

        // Registra i context per gli endpoint
        server.createContext("/login", userController::handleLogin);
        server.createContext("/register", userController::handleRegister);
        server.createContext("/logout", userController::handleLogout);

        // Avvia il server
        server.setExecutor(null);
        server.start();
        System.out.println("Server started on port " + port);
    }
}
