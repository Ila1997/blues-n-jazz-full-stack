import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;
import controllers.UserController;

import java.io.IOException;
import java.net.InetSocketAddress;

public class App {
    public static void main(String[] args) throws IOException {
        HttpServer server = HttpServer.create(new InetSocketAddress(8000), 0);
        UserController userController = new UserController();

        server.createContext("/login", userController::handleLogin);
        server.createContext("/register", userController::handleRegister);
        server.createContext("/logout", userController::handleLogout);

        server.setExecutor(null);
        server.start();
        System.out.println("Server started on port 8000");
    }
}
