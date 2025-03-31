# cgi_script.py
import cgi

print("Content-type: text/html\n")
form = cgi.FieldStorage()
name = form.getvalue("name", "Guest")
print(f"<h1>Hello User!, {name}!</h1>")
