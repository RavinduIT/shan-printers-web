
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { PenLine, Plus, Trash2, LogOut, BarChart, Activity, Network, PieChart } from "lucide-react";
import { PrintItem } from "@/types/PrintItem";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import {
  AreaChart,
  Area,
  BarChart as RechartsBarChart,
  Bar,
  LineChart,
  Line,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

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
  const [activeTab, setActiveTab] = useState("items");

  // Generate random analytics data for demonstration
  const generateAnalyticsData = () => {
    // User traffic data (last 7 days)
    const trafficData = Array(7).fill(0).map((_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (6 - i));
      return {
        name: date.toLocaleDateString('en-US', { weekday: 'short' }),
        visits: Math.floor(Math.random() * 120) + 30,
        uniqueVisitors: Math.floor(Math.random() * 80) + 20,
      };
    });

    // Page views by service
    const serviceViewsData = services.map(service => ({
      name: service.title,
      views: Math.floor(Math.random() * 200) + 50,
    }));

    // Hourly traffic pattern
    const hourlyData = Array(24).fill(0).map((_, i) => ({
      hour: `${i}:00`,
      traffic: Math.floor(Math.random() * 30) + (i >= 8 && i <= 20 ? 20 : 5),
    }));

    // Device distribution
    const deviceData = [
      { name: 'Mobile', value: 65 },
      { name: 'Desktop', value: 30 },
      { name: 'Tablet', value: 5 },
    ];

    return { trafficData, serviceViewsData, hourlyData, deviceData };
  };

  const analyticsData = generateAnalyticsData();
  const COLORS = ['#9b87f5', '#7E69AB', '#6E59A5', '#D6BCFA'];

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

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("adminAuth");
    toast.success("Logged out successfully");
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
        <div className="flex justify-between items-center mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-serif font-bold">Admin Dashboard</h1>
          <Button variant="outline" onClick={handleLogout} className="flex items-center gap-2">
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="items" className="text-lg">
              <PenLine className="mr-2 h-4 w-4" />
              Manage Items
            </TabsTrigger>
            <TabsTrigger value="analytics" className="text-lg">
              <Activity className="mr-2 h-4 w-4" />
              Analytics
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="items" className="animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <Card>
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
                <Card>
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
          </TabsContent>
          
          <TabsContent value="analytics" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* User Visits Chart */}
              <Card className="col-span-1 md:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart className="h-5 w-5" />
                    User Traffic (Last 7 Days)
                  </CardTitle>
                  <CardDescription>Daily visits and unique visitors</CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="h-80">
                    <ChartContainer config={{
                      visits: { theme: { light: "#9b87f5", dark: "#9b87f5" } },
                      uniqueVisitors: { theme: { light: "#7E69AB", dark: "#7E69AB" } }
                    }}>
                      <AreaChart data={analyticsData.trafficData}>
                        <defs>
                          <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#9b87f5" stopOpacity={0}/>
                          </linearGradient>
                          <linearGradient id="colorUniqueVisitors" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#7E69AB" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#7E69AB" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Legend />
                        <Area 
                          type="monotone" 
                          dataKey="visits" 
                          name="Total Visits"
                          stroke="#9b87f5" 
                          fillOpacity={1} 
                          fill="url(#colorVisits)" 
                        />
                        <Area 
                          type="monotone" 
                          dataKey="uniqueVisitors" 
                          name="Unique Visitors"
                          stroke="#7E69AB" 
                          fillOpacity={1} 
                          fill="url(#colorUniqueVisitors)" 
                        />
                      </AreaChart>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>
              
              {/* Service Views Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Network className="h-5 w-5" />
                    Page Views by Service
                  </CardTitle>
                  <CardDescription>Distribution of page views across services</CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="h-80">
                    <ChartContainer config={{
                      views: { theme: { light: "#6E59A5", dark: "#6E59A5" } }
                    }}>
                      <RechartsBarChart data={analyticsData.serviceViewsData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Legend />
                        <Bar dataKey="views" name="Page Views" fill="#6E59A5" />
                      </RechartsBarChart>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>
              
              {/* Device Distribution Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PieChart className="h-5 w-5" />
                    Device Distribution
                  </CardTitle>
                  <CardDescription>User device breakdown</CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="h-80">
                    <ChartContainer config={{
                      value: { theme: { light: "#9b87f5", dark: "#9b87f5" } }
                    }}>
                      <RechartsPieChart>
                        <Pie
                          data={analyticsData.deviceData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {analyticsData.deviceData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Legend />
                      </RechartsPieChart>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Admin;
