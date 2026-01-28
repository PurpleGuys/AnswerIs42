import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  company: z.string().optional(),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log(values);
    setIsSubmitting(false);
    setIsSuccess(true);
    toast.success("Message envoyé. Nous revenons vers vous rapidement.");
    form.reset();
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h1 className="text-4xl md:text-5xl font-medium text-white mb-6">Contact</h1>
            <p className="text-lg text-white/60 font-light">
              Décrivez votre contexte. Réponse sous 24–48h ouvrées.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
            {/* Left Column: Info */}
            <div className="space-y-12">
              <div>
                <h3 className="text-sm font-medium text-white/40 uppercase tracking-widest mb-4">Email</h3>
                <a href="mailto:contact@answeris42.com" className="text-xl md:text-2xl text-white hover:text-primary transition-colors">
                  contact@answeris42.com
                </a>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-white/40 uppercase tracking-widest mb-4">Disponibilité</h3>
                <p className="text-xl md:text-2xl text-white/90">France / Remote</p>
              </div>
              
              <div className="pt-8 border-t border-white/10">
                <p className="text-white/60">Premier échange sans engagement.</p>
              </div>
            </div>

            {/* Right Column: Form */}
            <div>
              {isSuccess ? (
                <div className="bg-primary/10 border border-primary/20 p-8 rounded-sm">
                  <h3 className="text-xl text-white mb-2">Message bien reçu</h3>
                  <p className="text-white/60">Nous revenons vers vous très rapidement.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80">Nom</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Votre nom" 
                              {...field} 
                              className="bg-transparent border-white/10 focus:border-primary/50 text-white placeholder:text-white/20 h-12 rounded-sm" 
                            />
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
                          <FormLabel className="text-white/80">Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="votre@email.com" 
                              {...field} 
                              className="bg-transparent border-white/10 focus:border-primary/50 text-white placeholder:text-white/20 h-12 rounded-sm" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80">Société <span className="text-white/30">(optionnel)</span></FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Votre société" 
                              {...field} 
                              className="bg-transparent border-white/10 focus:border-primary/50 text-white placeholder:text-white/20 h-12 rounded-sm" 
                            />
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
                          <FormLabel className="text-white/80">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Votre message..." 
                              {...field} 
                              className="bg-transparent border-white/10 focus:border-primary/50 text-white placeholder:text-white/20 min-h-[150px] resize-none rounded-sm" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-white h-12 rounded-sm font-medium transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Envoi...</>
                      ) : (
                        "Envoyer"
                      )}
                    </button>
                  </form>
                </Form>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
