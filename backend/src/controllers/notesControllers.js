const Note = require('../models/Note');
const getAllnotes = async(req ,res)=>{
    try {
        const notes = await Note.find().sort({createdAt:-1});
        res.status(200).json(notes)
    } catch (error) {
        console.log("Error in getAllNotes controller",error)
        res.status(500).json({message:"internal server error"})
    }
};


const getNoteByid = async(req,res)=>{
    const id = req.params.id
    try {
        const note = await Note.findById(id);
        if(!note) res.status(404).json({message:"Note not found"})
        res.status(200).json(note)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:"Failed to get note"})
    }
}
const createNote = async(req ,res)=>{
    try {
        const {title, content} = req.body;
        const newNote = new Note({title, content});
        await newNote.save();
        res.status(201).json({message:"Note created successsfully"});
    } catch (error) {
        console.log("Error in createNote controller",error);
        res.status(500).json({message:"Internal server error"})
    }

};


const updateNote = async (req , res)=>{
    try {
        const  {title, content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id,{title,content},{returnDocument:'after'});
        if(!updatedNote){
             return res.status(404).json({message:"No note found"})
        }
        res.status(200).json({
            message:"Note updated successfully",
            updatedNote
        })
    } catch (error) {
        console.log("Error in updateNote controller",error);
        res.status(500).json({message:"Internal server error"})
    }

}

const deleteNote = async(req ,res)=>{
    try {
        await Note.findByIdAndDelete(req.params.id);
        res.status(200).json({message:"Note deleted sucessfully"});
    } catch (error) {
        console.log("Error in deleteNote controller",error);
        res.status(500).json({message:"Internal server error"})
}
}


module.exports = {getAllnotes, createNote, updateNote, deleteNote,getNoteByid}