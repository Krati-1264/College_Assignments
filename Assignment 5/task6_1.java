public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) 
        throws IOException, ServletException {
    System.out.println("Request from IP: " + request.getRemoteAddr());
    chain.doFilter(request, response);
}
