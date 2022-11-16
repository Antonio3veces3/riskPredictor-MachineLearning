const {Schema, model}= require('mongoose');
const {Types}= Schema;
const StudentSchema = new Schema({
    name: {
        type: Types.String,
        required: true
    },
    noCuenta: {
        type: Types.String,
        required: true
    },
    age: {
        type: Types.Number,
        required: true
    },
    sex: {
        type: Types.String,
        required: true
    },
    generation: {
        type: Types.String,
        required: true
    },
    answers: {
        Family: {
            q1: {type: Types.Number,required: true},
            q2: {type: Types.Number,required: true},
            q3: {type: Types.Number,required: true},
            q4: {type: Types.Number,required: true},
            q5: {type: Types.Number,required: true},
            q6: {type: Types.Number,required: true},
            q7: {type: Types.Number,required: true},
            q8: {type: Types.Number,required: true},
            q9: {type: Types.Number,required: true},
            q10: {type: Types.Number,required: true},
        },
        Scholar: {
            q1: {type: Types.Number,required: true},
            q2: {type: Types.Number,required: true},
            q3: {type: Types.Number,required: true},
            q4: {type: Types.Number,required: true},
            q5: {type: Types.Number,required: true},
            q6: {type: Types.Number,required: true},
            q7: {type: Types.Number,required: true},
            q8: {type: Types.Number,required: true},
            q9: {type: Types.Number,required: true},
            q10: {type: Types.Number,required: true},
        },
        SocioEco: {
            q1: {type: Types.Number,required: true},
            q2: {type: Types.Number,required: true},
            q3: {type: Types.Number,required: true},
            q4: {type: Types.Number,required: true},
            q5: {type: Types.Number,required: true},
            q6: {type: Types.Number,required: true},
            q7: {type: Types.Number,required: true},
            q8: {type: Types.Number,required: true},
            q9: {type: Types.Number,required: true},
            q10: {type: Types.Number,required: true},
        },
        Personal: {
            q1: {type: Types.Number,required: true},
            q2: {type: Types.Number,required: true},
            q3: {type: Types.Number,required: true},
            q4: {type: Types.Number,required: true},
            q5: {type: Types.Number,required: true},
            q6: {type: Types.Number,required: true},
            q7: {type: Types.Number,required: true},
            q8: {type: Types.Number,required: true},
            q9: {type: Types.Number,required: true},
            q10: {type: Types.Number,required: true},
        }
    },
    risk: {
        type: Types.Number,
    }
});



const StudentModel = model("Student", StudentSchema);
module.exports = {StudentModel};