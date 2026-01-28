from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import json

app = Flask(__name__)
CORS(app) # Enable CORS for all routes

# Database Configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///hackathon.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Database Model
class Registration(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    team_name = db.Column(db.String(100), nullable=False)
    college = db.Column(db.String(200), nullable=False)
    leader_name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    phone = db.Column(db.String(20), nullable=False)
    members = db.Column(db.Text, nullable=True) # Storing JSON string
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            'id': self.id,
            'team_name': self.team_name,
            'college': self.college,
            'leader_name': self.leader_name,
            'email': self.email,
            'phone': self.phone,
            'members': json.loads(self.members) if self.members else {},
            'created_at': self.created_at.isoformat()
        }

# Initialise Database
with app.app_context():
    db.create_all()

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    
    # Basic Validation
    required_fields = ['team_name', 'college', 'leader_name', 'email', 'phone']
    for field in required_fields:
        if not data.get(field):
            return jsonify({'message': f'{field} is required'}), 400

    try:
        # Prepare members JSON
        members_data = {
            'member2': data.get('member2', ''),
            'member3': data.get('member3', ''),
            'member4': data.get('member4', '')
        }
        
        new_registration = Registration(
            team_name=data['team_name'],
            college=data['college'],
            leader_name=data['leader_name'],
            email=data['email'],
            phone=data['phone'],
            members=json.dumps(members_data)
        )
        
        db.session.add(new_registration)
        db.session.commit()
        
        return jsonify({'message': 'Registration successful!', 'id': new_registration.id}), 201
        
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'message': 'Internal Server Error'}), 500

@app.route('/registrations', methods=['GET'])
def get_registrations():
    registrations = Registration.query.all()
    return jsonify([reg.to_dict() for reg in registrations])

if __name__ == '__main__':
    app.run(debug=True, port=5000)
