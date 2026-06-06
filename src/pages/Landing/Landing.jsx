import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components/ui/Button";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <motion.div className="min-h-screen flex flex-col items-center justify-end bg-background px-4 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md space-y-6"
      >
        <motion.div className="space-y-4">
          <h1 className="text-3xl font-bold text-foreground">
            Welcome to PopX
          </h1>
          <p className="text-muted-foreground text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </motion.div>

        <motion.div className="flex flex-col gap-4 mt-8">
          <Button
            onClick={() => navigate("/register")}
            className="w-full h-12 text-md font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Create Account
          </Button>
          <Button
            onClick={() => navigate("/login")}
            variant="secondary"
            className="w-full h-12 text-md font-semibold bg-primary/20 text-primary hover:bg-primary/30"
          >
            Already Registered? Login
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Landing;
