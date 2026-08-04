from flask import Flask,render_template
app=Flask(__name__)
@app.route('/') #homepage server room
def home():
    return render_template("index.html")
    #return "<h1>Mounika</h1>"
@app.route("/about")
def about():
    return render_template("about.html")  

@app.route("/contact")
def contant():
    return render_template("contant.html")

@app.route("/courses")
def courses():
    return render_template("courses.html") 
@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/register")
def register():
    return render_template("register.html")

@app.route("/trainers")
def trainers():
    return render_template("trainers.html")    
if __name__=='__main__':
    app.run(debug=True)    