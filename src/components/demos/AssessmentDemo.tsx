import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export const AssessmentDemo = () => {
  const [selected, setSelected] = useState("");

  return (
    <Card className="min-h-[400px]">
      <CardContent className="p-6 space-y-6">
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Sample Technical Assessment</h4>
          <p className="text-sm text-gray-500">Try our interactive assessment format</p>
        </div>

        <div className="space-y-4">
          <p className="font-medium">What is the output of this code?</p>
          <pre className="bg-gray-100 p-4 rounded-md">
            {`console.log(typeof null);`}
          </pre>

          <RadioGroup value={selected} onValueChange={setSelected}>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="string" id="string" />
                <Label htmlFor="string">"string"</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="object" id="object" />
                <Label htmlFor="object">"object"</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="null" id="null" />
                <Label htmlFor="null">"null"</Label>
              </div>
            </div>
          </RadioGroup>

          <Button 
            onClick={() => alert(selected === "object" ? "Correct!" : "Try again!")}
            className="w-full mt-4"
          >
            Check Answer
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};