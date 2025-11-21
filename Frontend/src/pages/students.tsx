import { useState } from "react";
import StudentCard, { Student } from "@/components/studentscard";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

//Admin SIde for Adding Students 

export default function Students() {
  const [students, setStudents] = useState<Student[]>([
    { id: uuidv4(), name: "Aman Kumar", room: "101", feeDue: 0 },
    { id: uuidv4(), name: "Riya Sharma", room: "102", feeDue: 200 },
  ]);

  const [editing, setEditing] = useState<Student | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  // form state
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [feeDue, setFeeDue] = useState<number | "">("");

  function resetForm() {
    setName("");
    setRoom("");
    setFeeDue("");
    setEditing(null);
  }

  function handleAddClick() {
    resetForm();
    setIsAdding(true);
  }

  function handleSaveNew() {
    if (!name.trim()) {
      alert("Please enter student name.");
      return;
    }
    const newStudent: Student = {
      id: uuidv4(),
      name: name.trim(),
      room: room.trim() || "-",
      feeDue: Number(feeDue) || 0,
    };
    setStudents((s) => [newStudent, ...s]);
    setIsAdding(false);
    resetForm();
  }

  function handleEdit(student: Student) {
    setEditing(student);
    setName(student.name);
    setRoom(student.room);
    setFeeDue(student.feeDue);
  }

  function handleSaveEdit() {
    if (!editing) return;
    setStudents((list) =>
      list.map((s) =>
        s.id === editing.id
          ? { ...s, name: name.trim() || s.name, room: room.trim() || s.room, feeDue: Number(feeDue) || 0 }
          : s
      )
    );
    resetForm();
  }

  function handleDelete(id: string) {
    if (!confirm("Delete this student?")) return;
    setStudents((s) => s.filter((st) => st.id !== id));
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Students</h1>
        <div className="flex gap-2">
          <Button onClick={handleAddClick}>Add Student</Button>
        </div>
      </div>

      {/* Add / Edit panel */}
      {(isAdding || editing) && (
        <div className="p-4 bg-white rounded shadow-sm">
          <h2 className="text-lg font-medium">{editing ? "Edit Student" : "Add New Student"}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
            <input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 border rounded"
            />
            <input
              placeholder="Room"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              className="p-2 border rounded"
            />
            <input
              placeholder="Fee Due (₹)"
              value={feeDue === "" ? "" : String(feeDue)}
              onChange={(e) => setFeeDue(e.target.value === "" ? "" : Number(e.target.value))}
              className="p-2 border rounded"
              type="number"
            />
          </div>

          <div className="flex gap-2 mt-3">
            {editing ? (
              <>
                <Button onClick={handleSaveEdit}>Save Changes</Button>
                <Button onClick={() => { resetForm(); }}>Cancel</Button>
              </>
            ) : (
              <>
                <Button onClick={handleSaveNew}>Save</Button>
                <Button onClick={() => { setIsAdding(false); resetForm(); }}>Cancel</Button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Students grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </motion.div>
  );
}
