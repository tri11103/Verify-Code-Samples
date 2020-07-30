import sys
import os
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
python_buffer = [] 

def lint():   
    global json   
    file_count = 0
    try:
        try:
            f = open(args[1], "r")
            f.close()
            pylint_args = "\"" + args[1] + "\""
            file_count = 1
        except Exception as e:
            pylint_args = ""
            for f in os.listdir(args[1]):
                pylint_args += "\"" + args[1] + "\\" + f + "\" "
                file_count += 1
        
        json = subprocess.check_output('python -m pylint -j %d %s --rcfile=../src/pylint.config --output-format=json'%(file_count, pylint_args), stderr=subprocess.STDOUT, shell=True).decode()
    except subprocess.CalledProcessError as e:
        json = e.output.decode()

def data_export():
    global json, python_buffer, args
    data_file = open("../tmp/data.js", "w")
    data_file.write("const json = " + json + ";\n")
    data_file.close()

    data_file = open("../tmp/data.js", "a+")
    data_file.write("var python = [];\n")
    try:
        # Single File
        python_file = open(args[1], "r")
        python_buffer.append(python_file.read())
        data_file.write("python.push(`" + python_buffer[0] + "`);\n")
        data_file.close()
    except PermissionError as e:
        # Directory 
        file_count = 0
        python_str_list = "var python = []\n;"
        for f in os.listdir(args[1]):
            python_file = open(args[1] + "\\" + f, "r")
            python_buffer.append(python_file.read())
       
        for py_file in python_buffer:
            data_file.write("python.push(`" + py_file + "`);\n")
        
        data_file.close()

def open_browser():
    chrome_path = r'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe'
    firefox_path = r'C:\Program Files\Mozilla Firefox\firefox.exe'

    try:
        webbrowser.register('chrome', None, webbrowser.BackgroundBrowser(chrome_path))
        webbrowser.get('chrome').open('file://' + str(pathlib.Path(__file__).parent.absolute()) + "/index.html")
    except:
        print("Error: Chrome not found. Trying Firefox.")
        webbrowser.register('firefox', None, webbrowser.BackgroundBrowser(firefox_path))
        webbrowser.get('firefox').open('file://' + str(pathlib.Path(__file__).parent.absolute()) + "/index.html")

def rewrite_file():
    global python_buffer, args
    try:
        # Single File
        python_file = open(args[1], "w")
        python_file.write(python_buffer[0])
        python_file.close()
    except Exception as e:
        # Directory
        file_count = 0
        for f in os.listdir(args[1]): 
            python_file = open(args[1] + "\\" + f, "w")
            python_file.write(python_buffer[file_count]) 
            python_file.close()
            file_count += 1

lint()
data_export()
open_browser()

class Server(socketserver.BaseRequestHandler):
    def handle(self):
        global python_buffer, args
        
        for i in range(len(python_buffer)):
            python_buffer[i] = autopep8.fix_code(python_buffer[i])
        
        rewrite_file()
        lint()
        data_export()     
        open_browser()
        self.request.send("""
        <html>
        <body>
        <script>close();</script>
        </body>
        </html>
        """.encode())

with socketserver.TCPServer(("", 5656), Server) as httpd:
    httpd.serve_forever()
