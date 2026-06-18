import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";


import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { Label } from "../../components/ui/Label";
import useAuth from "../../hooks/useAuth";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});

const Login = () => {
  const navigate = useNavigate();
  const [authError, setAuthError] = useState("");
  const loginUser = useAuth((state) => state.login);
  const loginGuest = useAuth((state) => state.loginGuest);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    setAuthError("");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      setAuthError("Account not found. Please register first.");
      return;
    }

    if (data.email !== savedUser.email || data.password !== savedUser.password) {
      setAuthError("Invalid email or password.");
      return;
    }

    loginUser(savedUser);
    navigate("/account");
  };

  const handleGuest = async () => {
    // Optionally you can add limited guest metadata here
    loginGuest({ name: "Guest User" });
    navigate("/account");
  };

  return (
    <motion.div className="min-h-screen flex items-center justify-center bg-background px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-card p-8 rounded-2xl shadow-xl border border-border"
      >
        <motion.div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">Signin to your PopX account</h2>
          <p className="text-muted-foreground text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </motion.div>

        {authError && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-4 p-3 bg-destructive/10 text-destructive text-sm rounded-md"
          >
            {authError}
          </motion.div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <motion.div className="space-y-2 relative">
            <Label htmlFor="email" className="absolute -top-2 left-3 bg-card px-1 text-xs text-primary z-10 font-semibold">Email Address</Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              className="pt-2 h-12 bg-muted/30 focus-visible:ring-primary focus:bg-background transition-colors"
            />
            {errors.email && (
              <p className="text-destructive text-xs mt-1">{errors.email.message}</p>
            )}
          </motion.div>

          <motion.div className="space-y-2 relative">
            <Label htmlFor="password" className="absolute -top-2 left-3 bg-card px-1 text-xs text-primary z-10 font-semibold">Password</Label>
            <Input
              id="password"
              type="password"
              {...register("password")}
              className="pt-2 h-12 bg-muted/30 focus-visible:ring-primary focus:bg-background transition-colors"
            />
            {errors.password && (
              <p className="text-destructive text-xs mt-1">{errors.password.message}</p>
            )}
          </motion.div>

          <Button
            type="submit"
            className="w-full h-12 text-md mt-6 bg-primary hover:bg-primary/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </Button>

          {/* Guest mode button */}
          <Button
            type="button"
            className="w-full h-12 text-md mt-2 bg-secondary text-foreground hover:bg-secondary/90 border border-border"
            onClick={handleGuest}
            disabled={isSubmitting}
          >
            Continue as Guest
          </Button>

          <p className="text-center text-sm text-muted-foreground mt-2">You can continue as a guest without signing in with Google. Guest accounts are temporary and have limited access.</p>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Login;
