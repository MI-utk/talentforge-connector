import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const JobCreationDemo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [aiSuggestion, setAiSuggestion] = useState('');

  const handleGenerateDescription = () => {
    // Simulate AI generating a description
    setAiSuggestion(
      "Looking for a talented software developer with 3+ years of experience in React and TypeScript. Must have strong problem-solving skills and experience with modern web technologies."
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg space-y-4 min-h-[400px]">
      <h4 className="text-lg font-semibold mb-4">Try Our AI Job Description Generator</h4>
      <Input
        placeholder="Enter job title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mb-4"
      />
      <Textarea
        placeholder="Job description will appear here..."
        value={description || aiSuggestion}
        onChange={(e) => setDescription(e.target.value)}
        className="h-32 mb-4"
      />
      <Button 
        onClick={handleGenerateDescription}
        className="w-full"
      >
        Generate AI Description
      </Button>
    </div>
  );
};