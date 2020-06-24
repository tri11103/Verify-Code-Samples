import sys
import pathlib
import webbrowser
import subprocess
import shlex
import http.server
import socketserver
import autopep8
from pylint.lint import Run


args = sys.argv
json = ""
python_buffer = ""


def lint():   
    global json    
    try:
        json = subprocess.check_output('python -m pylint "%s" --rcfile=../src/pylint.config --output-format=json'%args[1], stderr=subprocess.STDOUT, shell=True).decode()
    except subprocess.CalledProcessError as e:
        json = e.output.decode()

def data_export():
    global json, python_buffer, args
    data_file = open("../tmp/data.js", "w")
    data_file.write("const json = " + json)
    data_file.close()

    data_file = open("../tmp/data.js", "a+")
    python_file = open(args[1], "r")
    python_buffer = python_file.read()
    data_file.write("const python = `" + python_buffer + "`")
    data_file.close()

lint()
data_export()

chrome_path = r'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe'
firefox_path = r'C:\Program Files\Mozilla Firefox\firefox.exe'
try:
    webbrowser.register('chrome', None, webbrowser.BackgroundBrowser(chrome_path))
    webbrowser.get('chrome').open('file://' + str(pathlib.Path(__file__).parent.absolute()) + "/index.html")
except:
    print("Error: Chrome not found. Trying Firefox.")
    webbrowser.register('firefox', None, webbrowser.BackgroundBrowser(firefox_path))
    webbrowser.get('firefox').open('file://' + str(pathlib.Path(__file__).parent.absolute()) + "/index.html")

class Server(socketserver.BaseRequestHandler):
    def handle(self):
        global python_buffer, args
        python_buffer = autopep8.fix_code(python_buffer)
        python_file = open(args[1], "w")
        python_file.write(python_buffer)
        python_file.close()
        lint()
        data_export()     
        self.request.sendall("Success!".encode())

with socketserver.TCPServer(("", 5656), Server) as httpd:
    httpd.serve_forever()
