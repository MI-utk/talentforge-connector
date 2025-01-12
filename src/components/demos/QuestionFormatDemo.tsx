import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const QuestionFormatDemo = () => {
  const [recording, setRecording] = useState(false);

  return (
    <Card className="min-h-[400px]">
      <CardContent className="p-6">
        <Tabs defaultValue="mcq">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="mcq">MCQ</TabsTrigger>
            <TabsTrigger value="audio">Audio</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          
          <TabsContent value="mcq" className="space-y-4">
            <h4 className="font-semibold">Multiple Choice Question</h4>
            <p>Select the correct answer:</p>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">A) Option 1</Button>
              <Button variant="outline" className="w-full justify-start">B) Option 2</Button>
              <Button variant="outline" className="w-full justify-start">C) Option 3</Button>
            </div>
          </TabsContent>

          <TabsContent value="audio" className="space-y-4">
            <h4 className="font-semibold">Audio Response</h4>
            <p>Record your answer:</p>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => setRecording(!recording)}
            >
              {recording ? "Stop Recording" : "Start Recording"}
            </Button>
          </TabsContent>

          <TabsContent value="video" className="space-y-4">
            <h4 className="font-semibold">Video Response</h4>
            <p>Record your video answer:</p>
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <Button variant="outline">Start Video Recording</Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};