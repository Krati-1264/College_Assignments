HttpSession session = ((HttpServletRequest) request).getSession(false);
if (session == null || session.getAttribute("user") == null) {
    response.sendRedirect("login.jsp");
} else {
    chain.doFilter(request, response);
}
