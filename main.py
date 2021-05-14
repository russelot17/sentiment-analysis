import sentiment_analyzer as sa

from flask import Flask, jsonify
from flask_restful import Resource, Api
from flask_cors import CORS

app = Flask(__name__)
api = Api(app)
CORS(app)

@app.route('/')
def hello(): 
    return jsonify({"data":"Test"})

class Sentiment(Resource):
    def get(self, textInput):
        text = sa.preprocessInput([textInput])
        text = sa.analyzeInput(text)
        return jsonify(text)
    
api.add_resource(Sentiment, "/sentiment/<string:textInput>")


if __name__ == '__main__':
    app.run()