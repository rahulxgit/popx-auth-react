import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";


import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { Label } from "../../components/ui/Label";

const registerSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  phone: z.string().min(10, { message: "Valid phone number is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  company: z.string().optional(),
  agency: z.enum(["yes", "no"]),
});

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
      company: "",
      agency: "yes",
    },
  });

  const onSubmit = async (data) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));

    localStorage.setItem("user", JSON.stringify(data));
    navigate("/login");
  };

  return (
    <motion.div className="min-h-screen flex items-center justify-center bg-background px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-card p-8 rounded-2xl shadow-xl border border-border"
      >
        <motion.div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">Create your PopX account</h2>
        </motion.div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <motion.div className="space-y-1 relative">
            <Label htmlFor="name" className="absolute -top-2 left-3 bg-card px-1 text-xs text-primary z-10 font-semibold">Full Name*</Label>
            <Input
              id="name"
              {...register("name")}
              className="pt-2 h-12 bg-muted/30 focus-visible:ring-primary focus:bg-background transition-colors"
            />
            {errors.name && <p className="text-destructive text-xs mt-1">{errors.name.message}</p>}
          </motion.div>

          <motion.div className="space-y-1 relative">
            <Label htmlFor="phone" className="absolute -top-2 left-3 bg-card px-1 text-xs text-primary z-10 font-semibold">Phone number*</Label>
            <Input
              id="phone"
              {...register("phone")}
              className="pt-2 h-12 bg-muted/30 focus-visible:ring-primary focus:bg-background transition-colors"
            />
            {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone.message}</p>}
          </motion.div>

          <motion.div className="space-y-1 relative">
            <Label htmlFor="email" className="absolute -top-2 left-3 bg-card px-1 text-xs text-primary z-10 font-semibold">Email address*</Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              className="pt-2 h-12 bg-muted/30 focus-visible:ring-primary focus:bg-background transition-colors"
            />
            {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
          </motion.div>

          <motion.div className="space-y-1 relative">
            <Label htmlFor="password" className="absolute -top-2 left-3 bg-card px-1 text-xs text-primary z-10 font-semibold">Password*</Label>
            <Input
              id="password"
              type="password"
              {...register("password")}
              className="pt-2 h-12 bg-muted/30 focus-visible:ring-primary focus:bg-background transition-colors"
            />
            {errors.password && <p className="text-destructive text-xs mt-1">{errors.password.message}</p>}
          </motion.div>

          <motion.div className="space-y-1 relative">
            <Label htmlFor="company" className="absolute -top-2 left-3 bg-card px-1 text-xs text-primary z-10 font-semibold">Company name</Label>
            <Input
              id="company"
              {...register("company")}
              className="pt-2 h-12 bg-muted/30 focus-visible:ring-primary focus:bg-background transition-colors"
            />
          </motion.div>

          <motion.div className="space-y-3 pt-2">
            <Label className="text-sm font-medium">Are you an Agency?*</Label>
            <motion.div className="flex items-center space-x-6">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  value="yes"
                  {...register("agency")}
                  className="w-4 h-4 text-primary focus:ring-primary border-border"
                />
                <span className="text-sm">Yes</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  value="no"
                  {...register("agency")}
                  className="w-4 h-4 text-primary focus:ring-primary border-border"
                />
                <span className="text-sm">No</span>
              </label>
            </motion.div>
            {errors.agency && <p className="text-destructive text-xs">{errors.agency.message}</p>}
          </motion.div>

          <Button
            type="submit"
            className="w-full h-12 text-md mt-8 bg-primary hover:bg-primary/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating..." : "Create Account"}
          </Button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Register;
