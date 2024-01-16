import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TabsDemo() {
  const options = ["Apple", "Banana", "Blueberry", "Grapes", "Pineapple"];
  return (
    <Tabs defaultValue="account" className="w-[800px] h-auto">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">submit quiz</TabsTrigger>
        <TabsTrigger value="password">add quiz</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card className="p-4 ">
          <div className=" rounded-[5px]   bg-gradient-to-r p-[1px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
            <div className="  bg-white text-black rounded">
              <CardHeader>
                <CardTitle>Quiz no: 1</CardTitle>
                <CardDescription>
                  Make changes to your quiz here. Click save when you're done.
                </CardDescription>
              </CardHeader>
            </div>
          </div>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Add quiz for a module</CardTitle>
            <CardDescription>
            Fill in the details below to create a new quiz..
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Question *</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">quiz description</Label>
              <Input id="new" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">options 1 *</Label>
              <Input id="new" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">options 2 *</Label>
              <Input id="new" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">options 3 *</Label>
              <Input id="new" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">options 4 *</Label>
              <Input id="new" type="password" />
            </div>
            <div className="space-y-1">
    <Label htmlFor="correctOption">Correct answer *</Label>
    <Select>
      <SelectTrigger className="">
        <SelectValue placeholder="Select a answer" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>answer</SelectLabel>
          {options.map((option, index) => (
          <SelectItem  key={index} value={option.toLowerCase()}>
            {option}
          </SelectItem>
        ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

const Quiz = () => {
  return (
    <div className="flex justify-center mt-12">
      <TabsDemo></TabsDemo>
    </div>
  );
};

export default Quiz;
