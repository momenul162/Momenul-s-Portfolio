import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Globe,
  Headphones,
  Calendar,
  CalendarClock,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, useLocation } from "react-router-dom";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  company: z.string().optional(),
  phone: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const appointmentFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(6, { message: "Phone number is required" }),
  service: z.string().optional(),
  date: z.date({ required_error: "Please select a date" }),
  time: z.string({ required_error: "Please select a time" }),
});

type AppointmentFormValues = z.infer<typeof appointmentFormSchema>;

const ContactSection = () => {
  const location = useLocation();
  const selectedService = location.state?.service;

  const [selectedTab, setSelectedTab] = useState(selectedService ? "appointment" : "message");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      company: "",
      phone: "",
    },
  });

  const appointmentForm = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: selectedService || "",
    },
  });

  // Update the form when selectedService changes
  useEffect(() => {
    if (selectedService) {
      setSelectedTab("appointment");
      appointmentForm.setValue("service", selectedService);
    }
  }, [selectedService, appointmentForm]);

  const onSubmit = (data: FormValues) => {
    console.log(data);
    toast.success("Message sent successfully! I'll get back to you soon.");
    form.reset();
  };

  const onAppointmentSubmit = (data: AppointmentFormValues) => {
    console.log("Appointment requested:", data);
    toast.success(
      `Appointment requested for ${format(data.date, "PPP")} at ${data.time}. I'll confirm shortly.`
    );
    appointmentForm.reset();
  };

  const availableTimes = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 AM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: "momenul.dev@gmail.com",
      link: "mailto:momenul.dev@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      value: "+88 01869284237",
      link: "tel:+8801869284237",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      value: "Rajshahi, Bangladesh",
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Working Hours",
      value: "Flexible",
    },
  ];

  const services = [
    "Web Application Development",
    "Frontend Development",
    "Backend Development",
    "Responsive Design",
    "API Integration",
    "Performance Optimization",
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <Badge variant="outline" className="mb-3">
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's <span className="gradient-text">Discuss Your Project</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind or want to discuss your web development needs? I'm always open to
            new opportunities and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-on-scroll">
          <div className="lg:col-span-4">
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <Card key={index} className="border border-border/50">
                  <CardContent className="flex items-center p-6">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">{item.icon}</div>
                    <div>
                      <h3 className="font-medium text-lg">{item.title}</h3>
                      <a
                        href={item?.link}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border border-border/50 mb-6">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Globe className="h-6 w-6 text-primary mr-3" />
                  <h3 className="font-medium text-lg">Development Services</h3>
                </div>
                <ul className="space-y-2">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-muted-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Headphones className="h-6 w-6 text-primary mr-3" />
                  <h3 className="font-medium text-lg">Need urgent help?</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  For urgent inquiries or quick consultations, feel free to schedule a call.
                </p>
                <Link to={"tel:+8801869284237"}>
                  <Button variant="outline" className="w-full">
                    <Phone className="mr-2 h-4 w-4" />
                    Schedule a Call
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-8">
            <Card className="border border-border/50">
              <CardContent className="p-6">
                <Tabs
                  defaultValue="message"
                  value={selectedTab}
                  onValueChange={setSelectedTab}
                  className="w-full"
                >
                  <TabsList className="grid grid-cols-2 mb-6">
                    <TabsTrigger value="message" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Send Message
                    </TabsTrigger>
                    <TabsTrigger value="appointment" className="flex items-center gap-2">
                      <CalendarClock className="h-4 w-4" />
                      Book Appointment
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="message">
                    <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name*</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address*</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your email" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Company Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your company (optional)" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your phone (optional)" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Subject*</FormLabel>
                              <FormControl>
                                <Input placeholder="What is this regarding?" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Message*</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Describe your project, requirements, or questions..."
                                  className="min-h-[150px] resize-none"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="pt-2">
                          <Button type="submit" size="lg" className="w-full sm:w-auto">
                            <Mail className="mr-2 h-4 w-4" />
                            Send Message
                          </Button>
                          <p className="text-sm text-muted-foreground mt-4">
                            * Required fields. I'll respond to your message within 24-48 hours.
                          </p>
                        </div>
                      </form>
                    </Form>
                  </TabsContent>

                  <TabsContent value="appointment" id="appointment">
                    <h3 className="text-2xl font-semibold mb-6">Book an Appointment</h3>
                    <Form {...appointmentForm}>
                      <form
                        onSubmit={appointmentForm.handleSubmit(onAppointmentSubmit)}
                        className="space-y-6"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <FormField
                            control={appointmentForm.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name*</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={appointmentForm.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address*</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your email" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={appointmentForm.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number*</FormLabel>
                              <FormControl>
                                <Input placeholder="Your phone number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={appointmentForm.control}
                          name="service"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Service*</FormLabel>
                              <FormControl>
                                <select
                                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base md:text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                  {...field}
                                >
                                  <option value="">Select a service</option>
                                  <option value="Web Development">Web Development</option>
                                  <option value="UI/UX Design">UI/UX Design</option>
                                  <option value="Backend Development">Backend Development</option>
                                  <option value="Consultation">Consultation</option>
                                </select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid items-center grid-cols-1 sm:grid-cols-2 gap-6">
                          <FormField
                            control={appointmentForm.control}
                            name="date"
                            render={({ field }) => (
                              <FormItem className="flex flex-col">
                                <FormLabel>Date*</FormLabel>
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <FormControl>
                                      <Button
                                        variant={"outline"}
                                        className={cn(
                                          "pl-3 text-left font-normal",
                                          !field.value && "text-muted-foreground"
                                        )}
                                      >
                                        {field.value ? (
                                          format(field.value, "PPP")
                                        ) : (
                                          <span>Select a date</span>
                                        )}
                                        <Calendar className="ml-auto h-4 w-4 opacity-50" />
                                      </Button>
                                    </FormControl>
                                  </PopoverTrigger>
                                  <PopoverContent className="w-auto p-0" align="start">
                                    <CalendarComponent
                                      mode="single"
                                      selected={field.value}
                                      onSelect={field.onChange}
                                      disabled={(date) =>
                                        date < new Date(new Date().setHours(0, 0, 0, 0)) ||
                                        date.getDay() === 0 ||
                                        date.getDay() === 6
                                      }
                                      initialFocus
                                      className="p-3 pointer-events-auto"
                                    />
                                  </PopoverContent>
                                </Popover>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={appointmentForm.control}
                            name="time"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Time*</FormLabel>
                                <FormControl>
                                  <select
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base md:text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    {...field}
                                    defaultValue=""
                                  >
                                    <option value="" disabled>
                                      Select a time
                                    </option>
                                    {availableTimes.map((time) => (
                                      <option key={time} value={time}>
                                        {time}
                                      </option>
                                    ))}
                                  </select>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="pt-2">
                          <Button type="submit" size="lg" className="w-full sm:w-auto">
                            <CalendarClock className="mr-2 h-4 w-4" />
                            Request Appointment
                          </Button>
                          <p className="text-sm text-muted-foreground mt-4">
                            * Required fields. Appointments available Monday-Friday, 9AM-5PM.
                          </p>
                        </div>
                      </form>
                    </Form>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
