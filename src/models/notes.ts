import { Schema, Model, model, connection } from 'mongoose';

type NoteType = {
    title: string,
    completed: boolean
}

const schema = new Schema<NoteType>({
    title: {
        type: String,
        required: true,
    },
    completed: Boolean
});

// model

const modelName: string = "Notes";

const notesModel = connection && connection.models[modelName]
    ? (connection.models[modelName] as Model<NoteType>)
    : model<NoteType>(modelName, schema);

export default notesModel;
