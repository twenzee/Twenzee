import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class TWENZEEHomepageServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html; charset=UTF-8");

        // Get PrintWriter to write HTML output
        PrintWriter out = response.getWriter();

        // HTML Content for the page
        out.println("<!DOCTYPE html>");
        out.println("<html lang=\"en\">");
        out.println("<head>");
        out.println("<meta charset=\"UTF-8\" />");
        out.println("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />");
        out.println("<meta name=\"description\" content=\"TWENZEE - A clothing brand offering oversized tees with a modern twist. Shop now!\" />");
        out.println("<title>TWENZEE - Clothing Brand</title>");
        out.println("<link rel=\"stylesheet\" href=\"styles.css\" />");
        out.println("<script src=\"script.js\" defer></script>");
        out.println("</head>");
        out.println("<body>");

        // Navbar
        out.println("<header class=\"navbar\">");
        out.println("<div class=\"logo\">TWENZEE</div>");
        out.println("<nav>");
        out.println("<ul class=\"nav-links\">");
        out.println("<li><a href=\"#\">Home</a></li>");
        out.println("<li><a href=\"#shop\">Shop</a></li>");
        out.println("<li><a href=\"#about\">About</a></li>");
        out.println("<li><a href=\"#contact\">Contact</a></li>");
        out.println("<li><a href=\"#blog\">Blog</a></li>");
        out.println("</ul>");
        out.println("</nav>");
        out.println("<div class=\"icons\">");
        out.println("<select id=\"langSelect\" aria-label=\"Language Selection\">");
        out.println("<option value=\"en\">EN</option>");
        out.println("<option value=\"ur\">UR</option>");
        out.println("<option value=\"hi\">HI</option>");
        out.println("<option value=\"cn\">中文</option>");
        out.println("</select>");
        out.println("<a href=\"#\" aria-label=\"Search\"><img src=\"search-icon.svg\" alt=\"Search\" /></a>");
        out.println("<a href=\"#\" aria-label=\"Cart\"><img src=\"cart-icon.svg\" alt=\"Cart\" /></a>");
        out.println("</div>");
        out.println("</header>");

        // Hero Section
        out.println("<section class=\"hero\">");
        out.println("<h1>Style That Speaks</h1>");
        out.println("<p>Oversized Tees & Modern Vibes</p>");
        out.println("<a class=\"cta-btn\" href=\"#shop\">Shop Now</a>");
        out.println("</section>");

        // Shop Section
        out.println("<section id=\"shop\" class=\"product-section\">");
        out.println("<h2>Oversized T-Shirts</h2>");
        out.println("<div class=\"product-toolbar\">");
        out.println("<button id=\"filterSortBtn\" aria-label=\"Filter and Sort Products\">Filter and Sort</button>");
        out.println("</div>");
        out.println("<div class=\"product-grid\">");
        out.println("<div class=\"product-card\">");
        out.println("<span class=\"discount\">Save 15%</span>");
        out.println("<img src=\"product1.jpg\" alt=\"Champion Tee\" class=\"product-img\" />");
        out.println("<h3>Champion Tee</h3>");
        out.println("<p>$25.00</p>");
        out.println("<span class=\"rating\">4.5★</span>");
        out.println("</div>");
        out.println("</div>");
        out.println("</section>");

        // About Section
        out.println("<section id=\"about\" class=\"about-section\">");
        out.println("<h2>About TWENZEE</h2>");
        out.println("<p>We blend fashion and culture with high-quality oversized fits. At TWENZEE, we create pieces that not only reflect style but also make a statement.</p>");
        out.println("</section>");

        // Contact Section
        out.println("<section id=\"contact\" class=\"contact-section\">");
        out.println("<h2>Contact Us</h2>");
        out.println("<form action=\"#\">");
        out.println("<input type=\"text\" placeholder=\"Your Name\" required aria-label=\"Enter your name\" />");
        out.println("<input type=\"email\" placeholder=\"Your Email\" required aria-label=\"Enter your email\" />");
        out.println("<textarea placeholder=\"Message\" required aria-label=\"Enter your message\"></textarea>");
        out.println("<button type=\"submit\">Send</button>");
        out.println("</form>");
        out.println("<div class=\"contact-info\">");
        out.println("<p>Email: <a href=\"mailto:twenzeee@gmail.com\">twenzeee@gmail.com</a> / <a href=\"mailto:ghufranmughal258@gmail.com\">ghufranmughal258@gmail.com</a></p>");
        out.println("<p>Phone: <a href=\"tel:+923257043179\">0325 7043179</a> / <a href=\"tel:+923132498922\">0313 2498922</a></p>");
        out.println("</div>");
        out.println("</section>");

        // Footer Section
        out.println("<footer>");
        out.println("<p>&copy; 2025 TWENZEE. All rights reserved.</p>");
        out.println("<div class=\"socials\">");
        out.println("<a href=\"#\" aria-label=\"Instagram\">Instagram</a> |");
        out.println("<a href=\"#\" aria-label=\"Facebook\">Facebook</a> |");
        out.println("<a href=\"#\" aria-label=\"Twitter\">Twitter</a>");
        out.println("</div>");
        out.println("</footer>");

        // Close HTML tags
        out.println("</body>");
        out.println("</html>");
    }
}