import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export type Student = {
  id: string;
  name: string;
  room: string;
  feeDue: number;
};

export default function StudentCard({
  student,
  onEdit,
  onDelete,
}: {
  student: Student;
  onEdit: (s: Student) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <Card className="flex flex-col justify-between h-full">
      <CardHeader>
        <CardTitle className="text-lg">{student.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Room: <span className="font-medium">{student.room}</span></p>
          <p className="text-sm text-muted-foreground">Fee Due: <span className="font-medium">₹{student.feeDue}</span></p>
        </div>
      </CardContent>

      <div className="flex gap-2 p-4 pt-0">
        <Button onClick={() => onEdit(student)} className="flex-1">Edit</Button>
        <Button onClick={() => onDelete(student.id)} className="flex-1">Delete</Button>
      </div>
    </Card>
  );
}
