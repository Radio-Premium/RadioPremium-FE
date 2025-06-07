import useInterestChannels from "@/hooks/useInterestChannels";
import useUserId from "@/hooks/useUserId";
import useUserProfile from "@/hooks/useUserProfile";

const useUserData = () => {
  const userId = useUserId();

  useInterestChannels(userId);
  useUserProfile(userId);
};

export default useUserData;
