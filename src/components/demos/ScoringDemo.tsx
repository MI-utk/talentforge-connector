import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";

export const ScoringDemo = () => {
  const [score, setScore] = useState(0);
  const [analyzing, setAnalyzing] = useState(false);

  const handleAnalyze = () => {
    setAnalyzing(true);
    // Simulate AI analysis
    let progress = 0;
    const interval = setInterval(() => {
      progress += 20;
      setScore(progress);
      if (progress >= 85) {
        clearInterval(interval);
        setAnalyzing(false);
      }
    }, 500);
  };

  return (
    <Card className="min-h-[400px]">
      <CardContent className="p-6 space-y-6">
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">AI Scoring System</h4>
          <p className="text-sm text-gray-500">See how our AI evaluates responses</p>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-gray-100 rounded-lg min-h-[100px]">
            <p className="text-gray-600">Sample candidate response:</p>
            <p className="mt-2">
              "I have extensive experience with React and TypeScript, having built several production applications. I'm passionate about clean code and performance optimization."
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Score</span>
              <span>{score}%</span>
            </div>
            <Progress value={score} className="w-full" />
          </div>

          <Button 
            onClick={handleAnalyze} 
            disabled={analyzing}
            className="w-full"
          >
            {analyzing ? "Analyzing..." : "Analyze Response"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};