import { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

export default function App() {
  const [marks, setMarks] = useState(Array(5).fill(""));
  const [submittedMarks, setSubmittedMarks] = useState([]);

  const handleChange = (index, value) => {
    const newMarks = [...marks];
    newMarks[index] = value;
    setMarks(newMarks);
  };

  const handleSubmit = () => {
    setSubmittedMarks(marks);
  };

  return (
    <div className="p-10">
      <Card className="max-w-md mx-auto">
        <CardContent>
          <h2 className="text-xl font-bold mb-4">Enter Marks for 5 Subjects</h2>
          {marks.map((mark, index) => (
            <div key={index} className="mb-2">
              <label className="block text-sm font-medium">Subject {index + 1}:</label>
              <Input
                type="number"
                value={mark}
                onChange={(e) => handleChange(index, e.target.value)}
                className="mt-1 w-full"
              />
            </div>
          ))}
          <Button onClick={handleSubmit} className="mt-4 w-full">
            Submit Marks
          </Button>
          {submittedMarks.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold">Marks Table</h3>
              <table className="w-full border mt-2">
                <thead>
                  <tr className="border-b">
                    <th className="p-2">Subject</th>
                    <th className="p-2">Marks</th>
                  </tr>
                </thead>
                <tbody>
                  {submittedMarks.map((mark, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-2 text-center">Subject {index + 1}</td>
                      <td className="p-2 text-center">{mark}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
