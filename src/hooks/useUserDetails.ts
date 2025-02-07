import { getUserByClerkId } from "@/lib/actions/user.actions";
import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";

interface UserDetails {
  userId: string;
  clerkId: string;
  bmi: string;
  name: string;
  username: string;
  profileImage: string;
  email: string;
  isLoading: boolean;
  error: Error | null;
}

export function useUserDetails(): UserDetails {
  const { userId: clerkId } = useAuth();
  const [userDetails, setUserDetails] = useState<UserDetails>({
    userId: "",
    bmi: "",
    clerkId: "",
    name: "",
    username: "",
    profileImage: "",
    email: "",
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (!clerkId) return;

      try {
        const user = await getUserByClerkId(clerkId);
        setUserDetails({
          userId: user._id,
          bmi: user.bmi,
          clerkId: user.clerkId,
          name: user.name,
          username: user.username,
          profileImage: user.profileImage,
          email: user.email,
          isLoading: false,
          error: null,
        });
      } catch (error) {
        setUserDetails((prev) => ({
          ...prev,
          isLoading: false,
          error: error as Error,
        }));
      }
    };

    fetchUserDetails();
  }, [clerkId]);

  return userDetails;
}
