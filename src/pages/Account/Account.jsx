import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Camera, LogOut } from "lucide-react";


import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import useAuth from "../../hooks/useAuth";

const Account = () => {
  const navigate = useNavigate();
  const { user, logout, updateUser } = useAuth();

  const [profileImage, setProfileImage] = useState(
    user?.avatar || "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
  );

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
      updateUser({ avatar: imageUrl });
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <motion.div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b px-4 py-4 flex justify-between items-center shadow-sm">
        <h1 className="text-xl font-semibold">Account Settings</h1>
        <Button variant="ghost" size="icon" onClick={handleLogout} className="text-destructive hover:bg-destructive/10 hover:text-destructive">
          <LogOut className="h-5 w-5" />
        </Button>
      </header>

      {/* Profile Section */}
      <motion.div className="p-4 max-w-md mx-auto mt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-6 border-dashed border-2 bg-transparent shadow-none border-border">
            <motion.div className="flex items-center gap-6">
              {/* Avatar Wrapper */}
              <motion.div className="relative">
                <motion.div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary bg-muted">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Online Indicator */}
                <motion.div className="absolute top-1 right-1 w-3 h-3 bg-green-500 border-2 border-card rounded-full"></motion.div>

                {/* Camera Icon Button */}
                <label className="absolute bottom-0 right-0 bg-primary text-primary-foreground p-1.5 rounded-full cursor-pointer hover:bg-primary/90 transition shadow-md">
                  <Camera size={14} />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </motion.div>

              {/* User Info */}
              <motion.div>
                <h2 className="text-lg font-bold text-foreground">{user?.name || "Marry Doe"}</h2>
                <p className="text-muted-foreground text-sm">{user?.email || "Marry@Gmail.Com"}</p>
              </motion.div>
            </motion.div>
          </Card>

          <motion.div className="mt-8">
            <p className="text-muted-foreground leading-relaxed">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Account;
