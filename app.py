from flask import Flask,render_template,jsonify,request
app=Flask(__name__)
users_db={}
@app.route('/') #homepage server room
def home():
    return render_template("index.html")
    #return "<h1>Mounika</h1>"
@app.route("/about")
def about():
    return render_template("about.html")  

@app.route("/contact")
def contant():
    return render_template("contact.html")

@app.route("/courses")
def courses():
    return render_template("courses.html") 

@app.route("/register",methods=["POST","GET"])
def register():
    if request.method=="POST":
        name=request.form["name"]
        email=request.form["email"]
        password=request.form["password"]
        dob=request.form["dob"]
        gender=request.form["gender"]
        courses=request.form["coures"]
    return render_template("register.html")
    
@app.route('/login',methods=["POST","GET"])
def login():
    if request.method=="POST":
        return render_template("login.html")
    return render_template("login.html")
@app.route('/api/register',methods=["POST"])
def api_reister():
    data=request.get_json()
    email=data.get("email")
    if email in users_db:
        return jsonify({"status":"error","message":"User already exists with this email!"}),400
    usera_db[email]=data
    return jsonify({"status":"success","message":"Registration successful!"})
@app.route('/api/login',methods=["POST"])
def api_login():
    data=request.get_json()
    email=data.get("email")
    password=data.get("password") 

    uer=users_db.get(email)
    if user and user.get("password")==password:
        return jsonify({"status":"success","message":"Login Successful! Welcome back."})
    else:
        return jsonify({"status":"error","message":"Invalid email or password!"}),401       

@app.route("/trainers")
def trainers():
    return render_template("trainers.html")    


if __name__=='__main__':
    app.run(debug=True)    