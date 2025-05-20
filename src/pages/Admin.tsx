
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { PenLine, Plus, Trash2 } from "lucide-react";
import { PrintItem } from "@/types/PrintItem";

const Admin = () => {
  const [items, setItems] = useState<PrintItem[]>([]);
  const [services, setServices] = useState<any[]>([]);
  const [formData, setFormData] = useState<Partial<PrintItem>>({
    id: "",
    name: "",
    description: "",
    price: 0,
    serviceId: "",
    image: ""
  });
  const [isEditing, setIsEditing] = useState(false);
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Load services from localStorage
    const storedServices = JSON.parse(localStorage.getItem("printServices") || "[]");
    setServices(storedServices);
    
    // Load items from localStorage
    const storedItems = JSON.parse(localStorage.getItem("printItems") || "[]");
    setItems(storedItems);
    
    // Check if previously authenticated in this session
    const auth = sessionStorage.getItem("adminAuth") === "true";
    setIsAuthenticated(auth);
  }, []);

  const handleLogin = () => {
    // Simple password authentication (in a real app, this would be more secure)
    if (password === "admin123") {
      setIsAuthenticated(true);
      sessionStorage.setItem("adminAuth", "true");
      toast.success("Login successful");
    } else {
      toast.error("Incorrect password");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: name === "price" ? parseFloat(value) || 0 : value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, serviceId: value });
  };

  const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 5);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.price || !formData.serviceId) {
      toast.error("Please fill in all required fields");
      return;
    }

    let updatedItems;
    
    if (isEditing) {
      // Update existing item
      updatedItems = items.map(item => 
        item.id === formData.id ? { ...formData, id: formData.id! } as PrintItem : item
      );
      toast.success("Item updated successfully");
    } else {
      // Add new item
      const newItem = {
        ...formData,
        id: generateId(),
        createdAt: new Date().toISOString()
      } as PrintItem;
      
      updatedItems = [...items, newItem];
      toast.success("Item added successfully");
    }
    
    setItems(updatedItems);
    localStorage.setItem("printItems", JSON.stringify(updatedItems));
    
    // Reset form
    setFormData({
      id: "",
      name: "",
      description: "",
      price: 0,
      serviceId: "",
      image: ""
    });
    setIsEditing(false);
  };

  const handleEdit = (item: PrintItem) => {
    setFormData(item);
    setIsEditing(true);
  };

  const handleDelete = (id: string) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem("printItems", JSON.stringify(updatedItems));
    toast.success("Item deleted successfully");
  };

  if (!isAuthenticated) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 pt-24 pb-16 flex justify-center items-center">
          <Card className="w-full max-w-md animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Admin Login</CardTitle>
              <CardDescription>Enter your password to access the admin panel</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">Default password: admin123</p>
                </div>
                <Button className="w-full" onClick={handleLogin}>Login</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8 animate-fade-in">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>{isEditing ? "Edit Item" : "Add New Item"}</CardTitle>
                <CardDescription>
                  {isEditing ? "Update the item details" : "Fill in the details to add a new item"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Item Name</label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Item name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="description" className="text-sm font-medium">Description</label>
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="Item description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={3}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="price" className="text-sm font-medium">Price (Rs)</label>
                    <Input
                      id="price"
                      name="price"
                      type="number"
                      placeholder="Price"
                      value={formData.price || ""}
                      onChange={handleInputChange}
                      required
                      min={0}
                      step={0.01}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium">Service Category</label>
                    <Select
                      value={formData.serviceId}
                      onValueChange={handleSelectChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.id} value={service.id}>
                            {service.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="image" className="text-sm font-medium">Image URL</label>
                    <Input
                      id="image"
                      name="image"
                      placeholder="Image URL"
                      value={formData.image}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button type="submit" className="flex-1">
                      {isEditing ? (
                        <>
                          <PenLine className="mr-2 h-4 w-4" />
                          Update Item
                        </>
                      ) : (
                        <>
                          <Plus className="mr-2 h-4 w-4" />
                          Add Item
                        </>
                      )}
                    </Button>
                    {isEditing && (
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => {
                          setFormData({
                            id: "",
                            name: "",
                            description: "",
                            price: 0,
                            serviceId: "",
                            image: ""
                          });
                          setIsEditing(false);
                        }}
                      >
                        Cancel
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>Manage Items</CardTitle>
                <CardDescription>
                  {items.length} items in inventory
                </CardDescription>
              </CardHeader>
              <CardContent>
                {items.length > 0 ? (
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Item</TableHead>
                          <TableHead>Service</TableHead>
                          <TableHead>Price</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {items.map((item) => {
                          const service = services.find(s => s.id === item.serviceId);
                          return (
                            <TableRow key={item.id}>
                              <TableCell className="font-medium">{item.name}</TableCell>
                              <TableCell>{service?.title || "Unknown"}</TableCell>
                              <TableCell>Rs. {item.price.toFixed(2)}</TableCell>
                              <TableCell className="text-right">
                                <div className="flex justify-end gap-2">
                                  <Button 
                                    variant="outline" 
                                    size="sm" 
                                    onClick={() => handleEdit(item)}
                                  >
                                    <PenLine className="h-4 w-4" />
                                  </Button>
                                  <Button 
                                    variant="destructive" 
                                    size="sm"
                                    onClick={() => handleDelete(item.id)}
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </div>
                ) : (
                  <div className="text-center py-8 border rounded-md">
                    <p className="text-muted-foreground">No items yet. Add your first item!</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
