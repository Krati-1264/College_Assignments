import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * A simple servlet that handles GET and POST requests.
 */
@WebServlet("/welcome")
public class WelcomeServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        // Retrieve query parameters
        String name = request.getParameter("name");
        if (name == null || name.isEmpty()) {
            name = "Guest";
        }

        // Retrieve client details
        String clientIP = request.getRemoteAddr();
        String userAgent = request.getHeader("User-Agent");

        // HTML Response
        out.println("<html><head><title>Welcome</title></head><body>");
        out.println("<h2>Welcome, " + name + "!</h2>");
        out.println("<p>Your IP Address: " + clientIP + "</p>");
        out.println("<p>Your User-Agent: " + userAgent + "</p>");
        out.println("</body></html>");
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        doGet(request, response); // Forward POST requests to doGet
    }
}