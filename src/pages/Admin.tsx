
import { useState, useRef, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Lock, Save, Eye, EyeOff } from "lucide-react";

const AdminPage = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [content, setContent] = useState<Record<string, string>>({
    title: "Portfolio Website",
    subtitle: "Professional Web Developer",
    about: "I am a passionate web developer with extensive experience...",
    skills: "React, Tailwind CSS, TypeScript, Node.js...",
    projects: "Portfolio, E-commerce, Dashboard...",
    contact: "Get in touch for your next project!",
  });
  const [editingField, setEditingField] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleLogin = () => {
    if (password === "11332244") {
      setAuthenticated(true);
      toast.success("Successfully logged in!");
    } else {
      toast.error("Invalid password!");
    }
  };

  const handleEdit = (field: string) => {
    setEditingField(field);
  };

  const handleSave = (field: string) => {
    setEditingField(null);
    toast.success(`${field} content updated successfully!`);
  };

  useEffect(() => {
    if (editingField && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [editingField]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              Admin Access
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                  className="pr-10"
                />
                <button 
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  onClick={togglePasswordVisibility}
                  type="button"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleLogin} className="w-full">
              Login
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Admin Panel</h1>
          <Button onClick={() => setAuthenticated(false)} variant="outline">Logout</Button>
        </div>
        
        {Object.entries(content).map(([field, value]) => (
          <Card key={field} className="overflow-hidden">
            <CardHeader>
              <CardTitle className="capitalize">{field}</CardTitle>
            </CardHeader>
            <CardContent>
              {editingField === field ? (
                <Textarea 
                  ref={textareaRef}
                  value={content[field]}
                  onChange={(e) => setContent({...content, [field]: e.target.value})}
                  className="min-h-[120px]"
                />
              ) : (
                <div className="bg-gray-50 p-4 rounded-md whitespace-pre-wrap">
                  {content[field]}
                </div>
              )}
            </CardContent>
            <CardFooter>
              {editingField === field ? (
                <Button onClick={() => handleSave(field)} className="ml-auto">
                  <Save className="h-4 w-4 mr-2" /> Save Changes
                </Button>
              ) : (
                <Button onClick={() => handleEdit(field)} variant="outline" className="ml-auto">
                  Edit Content
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
